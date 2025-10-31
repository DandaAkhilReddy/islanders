#!/usr/bin/env python3
"""
Cricket Statistics Analyzer - Senior Data Scientist Edition
Analyzes cricket stats with whitelist filtering, Top-5 leaderboards, and player spotlights.
"""

import os
import sys
import warnings
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Tuple, Optional
import logging

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image, ExifTags
from rapidfuzz import fuzz, process
import re

# Optional OCR support
try:
    import pytesseract
    TESSERACT_AVAILABLE = True
except ImportError:
    TESSERACT_AVAILABLE = False
    warnings.warn("pytesseract not available. Photo OCR will be skipped.")

# =============================================================================
# RUNTIME VARIABLES (EDIT BEFORE RUNNING)
# =============================================================================

STATS_CSV_PATH = "stats.csv"  # Path to your cricket stats CSV
IMAGES_DIR = ""  # Path to photos directory or leave empty
OUTPUT_DIR = "./outputs"

# Canonical roster (whitelist only)
PLAYERS_WHITELIST = [
    "Dr. Vishnu Reddy",
    "Akhil Reddy Danda",
    "Nithesh Y",
    "Rajshekhar Reddy",
    "Faizan Mohammad",
    "Dinesh Reddy Kandari",
    "Shashvat Patel",
    "Karthik 01",
    "Harshith Sai",
    "Pushkar P",
]

SPOTLIGHT_PLAYERS = ["Dr. Vishnu Reddy", "Akhil Reddy Danda"]

# Thresholds
MIN_INNINGS_FOR_BAT_AVG = 3
MIN_BALLS_FOR_SR = 50
MIN_OVERS_FOR_ECON = 10
MIN_WICKETS_FOR_BOWL_AVG = 5
FUZZY_MATCH_THRESHOLD = 90
SEED = 7

# =============================================================================
# SETUP
# =============================================================================

np.random.seed(SEED)
warnings.filterwarnings('ignore')

# Setup logging
os.makedirs(OUTPUT_DIR, exist_ok=True)
log_file = os.path.join(OUTPUT_DIR, 'logs.txt')
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(log_file, mode='w'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

def safe_divide(numerator, denominator, default=np.nan):
    """Safely divide two values, returning default if denominator is 0 or NaN."""
    if pd.isna(numerator) or pd.isna(denominator) or denominator == 0:
        return default
    return numerator / denominator


def normalize_name(name):
    """Normalize player name: strip, title case, collapse spaces."""
    if pd.isna(name):
        return ""
    name = str(name).strip()
    name = re.sub(r'\s+', ' ', name)
    name = name.title()
    return name


def apply_typo_fixes(name):
    """Apply common typo corrections."""
    typo_map = {
        "Vishnu": "Vishnu",
        "Akhil": "Akhil",
        # Add more mappings as needed
    }
    for wrong, correct in typo_map.items():
        name = name.replace(wrong, correct)
    return name


# =============================================================================
# CORE FUNCTIONS
# =============================================================================

def load_data(csv_path: str) -> pd.DataFrame:
    """Load and perform initial standardization of CSV data."""
    logger.info(f"Loading data from: {csv_path}")
    
    if not os.path.exists(csv_path):
        logger.error(f"CSV file not found: {csv_path}")
        raise FileNotFoundError(f"CSV file not found: {csv_path}")
    
    df = pd.read_csv(csv_path)
    logger.info(f"Loaded {len(df)} rows, {len(df.columns)} columns")
    logger.info(f"Columns found: {list(df.columns)}")
    
    # Check for player column
    player_col = None
    for col in ['player', 'Player', 'name', 'Name']:
        if col in df.columns:
            player_col = col
            break
    
    if player_col is None:
        logger.error("No player name column found!")
        raise ValueError("CSV must contain a player name column")
    
    if player_col != 'player':
        df.rename(columns={player_col: 'player'}, inplace=True)
    
    return df


def normalize_names(df: pd.DataFrame) -> pd.DataFrame:
    """Normalize and fix player names."""
    logger.info("Normalizing player names...")
    
    df['player'] = df['player'].apply(normalize_name)
    df['player'] = df['player'].apply(apply_typo_fixes)
    
    logger.info(f"Unique players after normalization: {df['player'].nunique()}")
    return df


def apply_whitelist_fuzzy(df: pd.DataFrame, whitelist: List[str], threshold: int = 90) -> pd.DataFrame:
    """Fuzzy match player names to whitelist and filter."""
    logger.info(f"Applying fuzzy matching with threshold {threshold}...")
    
    canonical_map = {}
    unmatched = []
    
    for player in df['player'].unique():
        if not player:
            continue
        
        # Try exact match first
        if player in whitelist:
            canonical_map[player] = player
            continue
        
        # Fuzzy match
        match = process.extractOne(player, whitelist, scorer=fuzz.ratio)
        if match and match[1] >= threshold:
            canonical_map[player] = match[0]
            if match[1] < 100:
                logger.info(f"Fuzzy matched '{player}' -> '{match[0]}' (score: {match[1]})")
        else:
            unmatched.append(player)
    
    if unmatched:
        logger.warning(f"Unmatched players (filtered out): {unmatched}")
    
    df['canonical_player'] = df['player'].map(canonical_map)
    
    # Filter to whitelist only
    original_len = len(df)
    df = df[df['canonical_player'].notna()].copy()
    filtered_count = original_len - len(df)
    
    logger.info(f"Filtered {filtered_count} rows not in whitelist")
    logger.info(f"Remaining rows: {len(df)}")
    logger.info(f"Players in dataset: {sorted(df['canonical_player'].unique())}")
    
    return df


def engineer_metrics(df: pd.DataFrame) -> pd.DataFrame:
    """Compute derived metrics with safe type coercion."""
    logger.info("Engineering metrics...")
    
    # Define expected numeric columns
    numeric_cols = [
        'matches', 'innings', 'runs', 'balls', 'fours', 'sixes', 
        'highest', 'not_outs', 'wickets', 'overs', 'maidens', 
        'runs_conceded', 'dots', 'catches', 'stumpings', 'run_outs'
    ]
    
    # Coerce to numeric, log missing columns
    for col in numeric_cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors='coerce')
        else:
            logger.warning(f"Column '{col}' not found in data")
            df[col] = 0
    
    # Batting metrics
    df['dismissals'] = (df['innings'] - df['not_outs']).clip(lower=0)
    df['avg'] = df.apply(lambda x: safe_divide(x['runs'], x['dismissals']), axis=1)
    df['sr'] = df.apply(lambda x: safe_divide(x['runs'] * 100, x['balls']), axis=1)
    df['boundaries'] = df['fours'] + df['sixes']
    
    # Bowling metrics
    if 'balls_bowled' not in df.columns:
        df['balls_bowled'] = df['overs'] * 6
        logger.info("Estimated balls_bowled from overs")
    
    df['economy'] = df.apply(lambda x: safe_divide(x['runs_conceded'], x['overs']), axis=1)
    df['avg_bowl'] = df.apply(lambda x: safe_divide(x['runs_conceded'], x['wickets']), axis=1)
    df['strike_rate_bowl'] = df.apply(lambda x: safe_divide(x['balls_bowled'], x['wickets']), axis=1)
    
    # Fielding metrics
    df['dismissals_field'] = df['catches'] + df['stumpings'] + df['run_outs']
    
    logger.info("Metrics computed successfully")
    return df


def aggregate_player_stats(df: pd.DataFrame) -> pd.DataFrame:
    """Aggregate stats per player."""
    logger.info("Aggregating player statistics...")
    
    agg_dict = {
        'matches': 'sum',
        'innings': 'sum',
        'runs': 'sum',
        'balls': 'sum',
        'fours': 'sum',
        'sixes': 'sum',
        'highest': 'max',
        'not_outs': 'sum',
        'wickets': 'sum',
        'overs': 'sum',
        'maidens': 'sum',
        'runs_conceded': 'sum',
        'dots': 'sum',
        'catches': 'sum',
        'stumpings': 'sum',
        'run_outs': 'sum',
        'boundaries': 'sum',
        'dismissals_field': 'sum',
    }
    
    # Filter to only columns that exist
    agg_dict = {k: v for k, v in agg_dict.items() if k in df.columns}
    
    player_stats = df.groupby('canonical_player').agg(agg_dict).reset_index()
    
    # Recalculate derived metrics on aggregated data
    player_stats['dismissals'] = (player_stats['innings'] - player_stats['not_outs']).clip(lower=0)
    player_stats['avg'] = player_stats.apply(lambda x: safe_divide(x['runs'], x['dismissals']), axis=1)
    player_stats['sr'] = player_stats.apply(lambda x: safe_divide(x['runs'] * 100, x['balls']), axis=1)
    player_stats['economy'] = player_stats.apply(lambda x: safe_divide(x['runs_conceded'], x['overs']), axis=1)
    player_stats['avg_bowl'] = player_stats.apply(lambda x: safe_divide(x['runs_conceded'], x['wickets']), axis=1)
    
    logger.info(f"Aggregated stats for {len(player_stats)} players")
    return player_stats


def build_top5(player_stats: pd.DataFrame) -> Dict[str, pd.DataFrame]:
    """Build Top-5 leaderboards for each metric."""
    logger.info("Building Top-5 leaderboards...")
    
    top5_dict = {}
    
    # Batting leaderboards
    batting_metrics = [
        ('runs', 'Runs', False, None, None),
        ('avg', 'Batting Average', False, MIN_INNINGS_FOR_BAT_AVG, 'innings'),
        ('sr', 'Strike Rate', False, MIN_BALLS_FOR_SR, 'balls'),
        ('boundaries', 'Boundaries', False, None, None),
        ('highest', 'Highest Score', False, None, None),
    ]
    
    for col, name, ascending, min_val, min_col in batting_metrics:
        if col not in player_stats.columns:
            logger.warning(f"Metric '{col}' not available for leaderboard")
            continue
        
        df_filtered = player_stats.copy()
        
        # Apply minimum threshold
        if min_val and min_col:
            df_filtered = df_filtered[df_filtered[min_col] >= min_val]
            if len(df_filtered) == 0:
                logger.warning(f"No players meet threshold for {name} ({min_col} >= {min_val}). Relaxing...")
                df_filtered = player_stats.copy()
        
        # Sort and get top 5
        df_sorted = df_filtered.sort_values(
            by=[col, 'canonical_player'], 
            ascending=[ascending, True],
            na_position='last'
        )
        df_sorted = df_sorted[df_sorted[col].notna()]
        top5 = df_sorted.head(5)[['canonical_player', col]].copy()
        top5['rank'] = range(1, len(top5) + 1)
        top5_dict[f'batting_{col}'] = top5
        
        logger.info(f"Top-5 {name}: {len(top5)} players")
    
    # Bowling leaderboards
    bowling_metrics = [
        ('wickets', 'Wickets', False, None, None),
        ('avg_bowl', 'Bowling Average', True, MIN_WICKETS_FOR_BOWL_AVG, 'wickets'),
        ('economy', 'Economy Rate', True, MIN_OVERS_FOR_ECON, 'overs'),
    ]
    
    for col, name, ascending, min_val, min_col in bowling_metrics:
        if col not in player_stats.columns:
            logger.warning(f"Metric '{col}' not available for leaderboard")
            continue
        
        df_filtered = player_stats.copy()
        
        if min_val and min_col:
            df_filtered = df_filtered[df_filtered[min_col] >= min_val]
            if len(df_filtered) == 0:
                logger.warning(f"No players meet threshold for {name} ({min_col} >= {min_val}). Relaxing...")
                df_filtered = player_stats.copy()
        
        df_sorted = df_filtered.sort_values(
            by=[col, 'canonical_player'],
            ascending=[ascending, True],
            na_position='last'
        )
        df_sorted = df_sorted[df_sorted[col].notna()]
        top5 = df_sorted.head(5)[['canonical_player', col]].copy()
        top5['rank'] = range(1, len(top5) + 1)
        top5_dict[f'bowling_{col}'] = top5
        
        logger.info(f"Top-5 {name}: {len(top5)} players")
    
    # Fielding leaderboard
    if 'dismissals_field' in player_stats.columns:
        df_sorted = player_stats.sort_values(
            by=['dismissals_field', 'canonical_player'],
            ascending=[False, True],
            na_position='last'
        )
        df_sorted = df_sorted[df_sorted['dismissals_field'].notna()]
        top5 = df_sorted.head(5)[['canonical_player', 'dismissals_field']].copy()
        top5['rank'] = range(1, len(top5) + 1)
        top5_dict['fielding_dismissals'] = top5
        logger.info(f"Top-5 Fielding Dismissals: {len(top5)} players")
    
    return top5_dict


def spotlight_report(player_stats: pd.DataFrame, top5_dict: Dict, 
                    spotlight_players: List[str], df_raw: pd.DataFrame) -> Dict:
    """Generate spotlight reports for specified players."""
    logger.info(f"Generating spotlight reports for: {spotlight_players}")
    
    spotlights = {}
    
    for player in spotlight_players:
        if player not in player_stats['canonical_player'].values:
            logger.warning(f"Spotlight player '{player}' not found in dataset")
            continue
        
        player_data = player_stats[player_stats['canonical_player'] == player].iloc[0]
        spotlight = {
            'player': player,
            'stats': player_data.to_dict(),
            'ranks': {},
            'margins': {}
        }
        
        # Find ranks in each Top-5
        for metric_name, top5_df in top5_dict.items():
            if player in top5_df['canonical_player'].values:
                rank = top5_df[top5_df['canonical_player'] == player]['rank'].values[0]
                spotlight['ranks'][metric_name] = rank
            else:
                # Find margin to #5
                if len(top5_df) == 5:
                    metric_col = [c for c in top5_df.columns if c not in ['canonical_player', 'rank']][0]
                    fifth_value = top5_df.iloc[4][metric_col]
                    player_value = player_data.get(metric_col.replace('batting_', '').replace('bowling_', '').replace('fielding_', ''))
                    
                    if pd.notna(player_value) and pd.notna(fifth_value):
                        margin = fifth_value - player_value
                        spotlight['margins'][metric_name] = {
                            'value': player_value,
                            'fifth_value': fifth_value,
                            'margin': margin
                        }
        
        # Create sparkline data (runs per match)
        player_matches = df_raw[df_raw['canonical_player'] == player].copy()
        if 'date' in player_matches.columns and len(player_matches) > 0:
            player_matches = player_matches.sort_values('date')
            spotlight['sparkline'] = player_matches['runs'].tolist()
        else:
            spotlight['sparkline'] = []
        
        spotlights[player] = spotlight
        logger.info(f"Spotlight for {player}: {len(spotlight['ranks'])} top-5 appearances")
    
    return spotlights


def analyze_photos(images_dir: str, whitelist: List[str]) -> Optional[pd.DataFrame]:
    """Analyze photos for player appearances using OCR and filename matching."""
    if not images_dir or not os.path.exists(images_dir):
        logger.info("No images directory provided or directory doesn't exist. Skipping photo analysis.")
        return None
    
    if not TESSERACT_AVAILABLE:
        logger.warning("pytesseract not available. Skipping OCR analysis.")
    
    logger.info(f"Analyzing photos in: {images_dir}")
    
    image_data = []
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp'}
    
    for root, _, files in os.walk(images_dir):
        for filename in files:
            if Path(filename).suffix.lower() not in image_extensions:
                continue
            
            filepath = os.path.join(root, filename)
            
            try:
                # Get timestamp
                img = Image.open(filepath)
                timestamp = None
                
                # Try EXIF data
                if hasattr(img, '_getexif') and img._getexif():
                    exif = {ExifTags.TAGS[k]: v for k, v in img._getexif().items() if k in ExifTags.TAGS}
                    timestamp = exif.get('DateTime')
                
                # Fallback to file mtime
                if not timestamp:
                    timestamp = datetime.fromtimestamp(os.path.getmtime(filepath))
                
                # OCR text
                ocr_text = ""
                if TESSERACT_AVAILABLE:
                    try:
                        ocr_text = pytesseract.image_to_string(img)
                    except Exception as e:
                        logger.debug(f"OCR failed for {filename}: {e}")
                
                image_data.append({
                    'filename': filename,
                    'filepath': filepath,
                    'timestamp': timestamp,
                    'ocr_text': ocr_text
                })
                
            except Exception as e:
                logger.warning(f"Error processing {filename}: {e}")
    
    if not image_data:
        logger.info("No images found or processed")
        return None
    
    df_images = pd.DataFrame(image_data)
    
    # Detect player names
    def detect_players(row):
        detected = []
        filename_lower = row['filename'].lower()
        ocr_lower = row['ocr_text'].lower()
        
        for player in whitelist:
            player_lower = player.lower()
            tokens = player_lower.split()
            
            # Check filename
            if any(token in filename_lower for token in tokens if len(token) > 2):
                detected.append(player)
                continue
            
            # Check OCR with fuzzy matching
            if row['ocr_text']:
                match = process.extractOne(player, [row['ocr_text']], scorer=fuzz.partial_ratio)
                if match and match[1] >= 70:
                    detected.append(player)
        
        return detected
    
    df_images['detected_players'] = df_images.apply(detect_players, axis=1)
    
    # Count appearances
    player_photo_counts = {}
    for players in df_images['detected_players']:
        for player in players:
            player_photo_counts[player] = player_photo_counts.get(player, 0) + 1
    
    logger.info(f"Analyzed {len(df_images)} images")
    logger.info(f"Player appearances: {player_photo_counts}")
    
    df_images['photo_count'] = df_images['detected_players'].apply(len)
    
    return df_images


def render_charts(top5_dict: Dict, spotlights: Dict, output_dir: str):
    """Render bar charts for Top-5 leaderboards and spotlight cards."""
    logger.info("Rendering charts...")
    
    plt.style.use('default')
    
    # Top-5 charts
    for metric_name, top5_df in top5_dict.items():
        if len(top5_df) == 0:
            continue
        
        metric_col = [c for c in top5_df.columns if c not in ['canonical_player', 'rank']][0]
        
        fig, ax = plt.subplots(figsize=(10, 6))
        
        bars = ax.barh(top5_df['canonical_player'], top5_df[metric_col], color='steelblue')
        
        # Add value labels
        for i, (player, value) in enumerate(zip(top5_df['canonical_player'], top5_df[metric_col])):
            ax.text(value, i, f' {value:,.2f}', va='center', fontsize=10)
        
        ax.set_xlabel(metric_col.replace('_', ' ').title(), fontsize=12)
        ax.set_title(f'Top-5: {metric_name.replace("_", " ").title()}', fontsize=14, fontweight='bold')
        ax.invert_yaxis()
        
        plt.tight_layout()
        output_path = os.path.join(output_dir, f'top5_{metric_name}.png')
        plt.savefig(output_path, dpi=150, bbox_inches='tight')
        plt.close()
        
        logger.info(f"Saved chart: {output_path}")
    
    # Spotlight cards
    for player, data in spotlights.items():
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))
        
        # Stats table
        ax1.axis('tight')
        ax1.axis('off')
        
        stats = data['stats']
        table_data = [
            ['Matches', f"{stats.get('matches', 0):.0f}"],
            ['Runs', f"{stats.get('runs', 0):,.0f}"],
            ['Average', f"{stats.get('avg', 0):.2f}"],
            ['Strike Rate', f"{stats.get('sr', 0):.2f}"],
            ['Wickets', f"{stats.get('wickets', 0):.0f}"],
            ['Economy', f"{stats.get('economy', 0):.2f}"],
            ['Catches', f"{stats.get('catches', 0):.0f}"],
        ]
        
        table = ax1.table(cellText=table_data, cellLoc='left', loc='center',
                         colWidths=[0.5, 0.3])
        table.auto_set_font_size(False)
        table.set_fontsize(11)
        table.scale(1, 2)
        
        ax1.set_title(f'{player} - Statistics', fontsize=14, fontweight='bold', pad=20)
        
        # Ranks and sparkline
        ax2.axis('off')
        
        rank_text = f"{player}\n\n"
        rank_text += "Top-5 Appearances:\n"
        for metric, rank in sorted(data['ranks'].items()):
            rank_text += f"  #{rank} in {metric.replace('_', ' ').title()}\n"
        
        if data['margins']:
            rank_text += "\nMargins to #5:\n"
            for metric, margin_data in data['margins'].items():
                rank_text += f"  {metric.replace('_', ' ').title()}: {abs(margin_data['margin']):.2f} {'behind' if margin_data['margin'] > 0 else 'ahead'}\n"
        
        ax2.text(0.1, 0.9, rank_text, fontsize=10, verticalalignment='top', 
                family='monospace')
        
        # Sparkline
        if data['sparkline'] and len(data['sparkline']) > 1:
            ax_spark = fig.add_axes([0.6, 0.1, 0.35, 0.2])
            ax_spark.plot(data['sparkline'], color='steelblue', linewidth=2)
            ax_spark.fill_between(range(len(data['sparkline'])), data['sparkline'], alpha=0.3)
            ax_spark.set_title('Runs per Match', fontsize=9)
            ax_spark.set_xticks([])
            ax_spark.spines['top'].set_visible(False)
            ax_spark.spines['right'].set_visible(False)
        
        plt.tight_layout()
        safe_name = player.lower().replace(' ', '_').replace('.', '')
        output_path = os.path.join(output_dir, f'spotlight_{safe_name}.png')
        plt.savefig(output_path, dpi=150, bbox_inches='tight')
        plt.close()
        
        logger.info(f"Saved spotlight: {output_path}")


def build_summary(top5_dict: Dict, spotlights: Dict, output_dir: str, 
                 df_images: Optional[pd.DataFrame] = None):
    """Build executive summary in Markdown and HTML."""
    logger.info("Building executive summary...")
    
    md_lines = ["# Cricket Statistics - Executive Summary\n"]
    md_lines.append(f"*Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n")
    
    # Key highlights
    md_lines.append("## Key Highlights\n")
    
    # Top scorer
    if 'batting_runs' in top5_dict and len(top5_dict['batting_runs']) > 0:
        top_scorer = top5_dict['batting_runs'].iloc[0]
        md_lines.append(f"- **Top Run Scorer**: {top_scorer['canonical_player']} ({top_scorer['runs']:,.0f} runs)")
    
    # Top wicket taker
    if 'bowling_wickets' in top5_dict and len(top5_dict['bowling_wickets']) > 0:
        top_bowler = top5_dict['bowling_wickets'].iloc[0]
        md_lines.append(f"- **Top Wicket Taker**: {top_bowler['canonical_player']} ({top_bowler['wickets']:.0f} wickets)")
    
    # Best average
    if 'batting_avg' in top5_dict and len(top5_dict['batting_avg']) > 0:
        best_avg = top5_dict['batting_avg'].iloc[0]
        md_lines.append(f"- **Best Batting Average**: {best_avg['canonical_player']} ({best_avg['avg']:.2f})")
    
    md_lines.append("\n")
    
    # Spotlight players
    md_lines.append("## Spotlight Players\n")
    for player, data in spotlights.items():
        md_lines.append(f"### {player}\n")
        stats = data['stats']
        md_lines.append(f"- Matches: {stats.get('matches', 0):.0f}")
        md_lines.append(f"- Runs: {stats.get('runs', 0):,.0f} (Avg: {stats.get('avg', 0):.2f})")
        md_lines.append(f"- Wickets: {stats.get('wickets', 0):.0f}")
        md_lines.append(f"- Top-5 Appearances: {len(data['ranks'])}")
        md_lines.append("\n")
    
    # Photo analysis
    if df_images is not None:
        md_lines.append("## Photo Analysis\n")
        md_lines.append(f"- Total images analyzed: {len(df_images)}")
        
        # Most photographed
        player_counts = {}
        for players in df_images['detected_players']:
            for player in players:
                player_counts[player] = player_counts.get(player, 0) + 1
        
        if player_counts:
            top_photo = sorted(player_counts.items(), key=lambda x: x[1], reverse=True)[:5]
            md_lines.append("\nMost Photographed Players:")
            for player, count in top_photo:
                md_lines.append(f"- {player}: {count} appearances")
        md_lines.append("\n")
    
    # Save Markdown
    md_content = "\n".join(md_lines)
    md_path = os.path.join(output_dir, 'Executive_Summary.md')
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(md_content)
    logger.info(f"Saved: {md_path}")
    
    # Convert to HTML
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Cricket Statistics - Executive Summary</title>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 40px; max-width: 900px; }}
            h1 {{ color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }}
            h2 {{ color: #34495e; margin-top: 30px; }}
            h3 {{ color: #7f8c8d; }}
            ul {{ line-height: 1.8; }}
            .timestamp {{ color: #95a5a6; font-style: italic; }}
        </style>
    </head>
    <body>
        {"".join(f"<{line[0]}>{line[1:]}</{line[0]}>" if line.startswith('#') else f"<p>{line}</p>" for line in md_lines)}
    </body>
    </html>
    """
    
    html_path = os.path.join(output_dir, 'Executive_Summary.html')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    logger.info(f"Saved: {html_path}")


def save_outputs(top5_dict: Dict, player_stats: pd.DataFrame, output_dir: str):
    """Save Top-5 CSVs."""
    logger.info("Saving CSV outputs...")
    
    for metric_name, top5_df in top5_dict.items():
        csv_path = os.path.join(output_dir, f'top5_{metric_name}.csv')
        top5_df.to_csv(csv_path, index=False)
        logger.info(f"Saved: {csv_path}")
    
    # Save full player stats
    full_stats_path = os.path.join(output_dir, 'player_stats_full.csv')
    player_stats.to_csv(full_stats_path, index=False)
    logger.info(f"Saved: {full_stats_path}")


def main():
    """Main execution function."""
    logger.info("=" * 60)
    logger.info("CRICKET STATISTICS ANALYZER - STARTING")
    logger.info("=" * 60)
    
    try:
        # Load and process data
        df = load_data(STATS_CSV_PATH)
        df = normalize_names(df)
        df = apply_whitelist_fuzzy(df, PLAYERS_WHITELIST, FUZZY_MATCH_THRESHOLD)
        df = engineer_metrics(df)
        
        # Aggregate player stats
        player_stats = aggregate_player_stats(df)
        
        # Build Top-5 leaderboards
        top5_dict = build_top5(player_stats)
        
        # Generate spotlights
        spotlights = spotlight_report(player_stats, top5_dict, SPOTLIGHT_PLAYERS, df)
        
        # Analyze photos (if available)
        df_images = analyze_photos(IMAGES_DIR, PLAYERS_WHITELIST)
        
        # Save outputs
        save_outputs(top5_dict, player_stats, OUTPUT_DIR)
        render_charts(top5_dict, spotlights, OUTPUT_DIR)
        build_summary(top5_dict, spotlights, OUTPUT_DIR, df_images)
        
        # Final summary
        logger.info("\n" + "=" * 60)
        logger.info("ANALYSIS COMPLETE - SUMMARY")
        logger.info("=" * 60)
        logger.info(f"Output directory: {OUTPUT_DIR}")
        logger.info(f"Players analyzed: {len(player_stats)}")
        logger.info(f"Top-5 leaderboards: {len(top5_dict)}")
        logger.info(f"Spotlight reports: {len(spotlights)}")
        
        # Print spotlight rankings
        for player, data in spotlights.items():
            logger.info(f"\n{player}:")
            logger.info(f"  - Top-5 appearances: {len(data['ranks'])}")
            for metric, rank in sorted(data['ranks'].items())[:3]:
                logger.info(f"    #{rank} in {metric}")
        
        logger.info("\n" + "=" * 60)
        
    except Exception as e:
        logger.error(f"Fatal error: {e}", exc_info=True)
        raise


if __name__ == "__main__":
    main()
