# Cricket Statistics Analyzer

**A robust Python application for cricket statistics analysis with whitelist filtering, Top-5 leaderboards, and player spotlights.**

## Features

- ✅ **Whitelist Filtering**: Analyzes only players explicitly listed in the whitelist
- ✅ **Fuzzy Name Matching**: Handles typos and variations in player names
- ✅ **Top-5 Leaderboards**: Generates exactly 5 (or fewer) leaders for each metric
- ✅ **Player Spotlights**: Focused reports for Dr. Vishnu Reddy and Akhil Reddy Danda
- ✅ **Photo Analysis**: OCR-based detection of most-photographed players (optional)
- ✅ **Multiple Output Formats**: CSVs, PNG charts, and HTML/Markdown executive summary
- ✅ **Comprehensive Logging**: Detailed logs of all operations and warnings

## Metrics Analyzed

### Batting
- Total Runs
- Batting Average (min 3 innings)
- Strike Rate (min 50 balls)
- Boundaries (4s + 6s)
- Highest Score

### Bowling
- Wickets
- Bowling Average (min 5 wickets)
- Economy Rate (min 10 overs)

### Fielding
- Total Dismissals (catches + stumpings + run-outs)

## Prerequisites

1. **Python 3.8+**
2. **Tesseract OCR** (optional, for photo analysis):
   - Ubuntu/Debian: `sudo apt-get install tesseract-ocr`
   - macOS: `brew install tesseract`
   - Windows: Download from https://github.com/UB-Mannheim/tesseract/wiki

## Installation

### Step 1: Clone or download the files

```bash
# If you have git
git clone <repository-url>
cd cricket-stats-analyzer

# Or simply create a directory and copy the files
mkdir cricket-stats-analyzer
cd cricket-stats-analyzer
# Copy cricket_stats_analyzer.py and requirements.txt here
```

### Step 2: Create a virtual environment (recommended)

```bash
# Create virtual environment
python -m venv venv

# Activate it
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

### Step 3: Install dependencies

```bash
pip install -r requirements.txt
```

## Configuration

Open `cricket_stats_analyzer.py` and edit the runtime variables at the top:

```python
# Edit these variables before running:
STATS_CSV_PATH = "path/to/your/stats.csv"  # Path to your cricket stats CSV
IMAGES_DIR = "path/to/photos"              # Path to photos (or leave empty)
OUTPUT_DIR = "./outputs"                    # Where to save results

# Add/remove players from the whitelist
PLAYERS_WHITELIST = [
    "Dr. Vishnu Reddy",
    "Akhil Reddy Danda",
    "Nithesh Y",
    # ... add more players
]

# Spotlight players (must be in whitelist)
SPOTLIGHT_PLAYERS = ["Dr. Vishnu Reddy", "Akhil Reddy Danda"]

# Adjust thresholds if needed
MIN_INNINGS_FOR_BAT_AVG = 3
MIN_BALLS_FOR_SR = 50
MIN_OVERS_FOR_ECON = 10
MIN_WICKETS_FOR_BOWL_AVG = 5
FUZZY_MATCH_THRESHOLD = 90  # 0-100, how strict name matching should be
```

## CSV Format

Your `stats.csv` should contain columns like:

```
player,matches,innings,runs,balls,fours,sixes,highest,not_outs,wickets,overs,maidens,runs_conceded,dots,catches,stumpings,run_outs,date,opponent,venue
```

**Required columns**: `player` (or `name`, `Player`, `Name`)

**Optional columns**: All others are optional. The script will work with whatever columns are available.

## Usage

### Basic Usage

```bash
python cricket_stats_analyzer.py
```

### With Photo Analysis

1. Place cricket photos in a directory
2. Set `IMAGES_DIR` to that directory path
3. Run the script

```python
IMAGES_DIR = "./cricket_photos"
```

The script will:
- Extract text from photos using OCR
- Detect player names in filenames and OCR text
- Generate a "most photographed players" list

### What Gets Generated

After running, check the `outputs/` directory for:

#### CSV Files
- `top5_batting_runs.csv` - Top 5 run scorers
- `top5_batting_avg.csv` - Top 5 batting averages
- `top5_batting_sr.csv` - Top 5 strike rates
- `top5_batting_boundaries.csv` - Top 5 boundary hitters
- `top5_batting_highest.csv` - Top 5 highest scores
- `top5_bowling_wickets.csv` - Top 5 wicket takers
- `top5_bowling_avg_bowl.csv` - Top 5 bowling averages
- `top5_bowling_economy.csv` - Top 5 economy rates
- `top5_fielding_dismissals.csv` - Top 5 fielding dismissals
- `player_stats_full.csv` - Complete aggregated stats

#### PNG Charts
- Bar charts for each Top-5 leaderboard
- `spotlight_dr_vishnu_reddy.png` - Spotlight card
- `spotlight_akhil_reddy_danda.png` - Spotlight card
- `photos_contact_sheet.png` (if images analyzed)

#### Summary Reports
- `Executive_Summary.md` - Markdown summary
- `Executive_Summary.html` - HTML summary (open in browser)
- `logs.txt` - Detailed execution logs

## Example Output

Console output will show:

```
============================================================
CRICKET STATISTICS ANALYZER - STARTING
============================================================
Loading data from: stats.csv
Loaded 150 rows, 20 columns
Normalizing player names...
Applying fuzzy matching with threshold 90...
Filtered 25 rows not in whitelist
Remaining rows: 125
Players in dataset: ['Akhil Reddy Danda', 'Dr. Vishnu Reddy', ...]
Engineering metrics...
Building Top-5 leaderboards...
Top-5 Runs: 5 players
Top-5 Batting Average: 5 players
...
============================================================
ANALYSIS COMPLETE - SUMMARY
============================================================
Output directory: ./outputs
Players analyzed: 10
Top-5 leaderboards: 9
Spotlight reports: 2

Dr. Vishnu Reddy:
  - Top-5 appearances: 3
    #1 in batting_runs
    #2 in batting_avg
    #4 in bowling_wickets
============================================================
```

## Troubleshooting

### Issue: "pytesseract not available"
**Solution**: Either install Tesseract OCR (see Prerequisites) or leave `IMAGES_DIR` empty to skip photo analysis.

### Issue: "CSV file not found"
**Solution**: Check that `STATS_CSV_PATH` points to the correct file location.

### Issue: "No player name column found"
**Solution**: Ensure your CSV has a column named `player`, `Player`, `name`, or `Name`.

### Issue: "No players meet threshold"
**Solution**: The script will automatically relax thresholds if too strict. Check `logs.txt` for details.

### Issue: All players filtered out
**Solution**: 
- Check that player names in CSV match the whitelist (case-insensitive)
- Lower `FUZZY_MATCH_THRESHOLD` (e.g., to 80)
- Check `logs.txt` for fuzzy matching results

## Customization

### Adding More Players

Edit the whitelist:

```python
PLAYERS_WHITELIST = [
    "Dr. Vishnu Reddy",
    "Akhil Reddy Danda",
    "Your New Player",  # Add here
    # ... more players
]
```

### Changing Thresholds

Adjust minimum requirements for leaderboards:

```python
MIN_INNINGS_FOR_BAT_AVG = 2      # Lower for more inclusive average
MIN_BALLS_FOR_SR = 30            # Lower for more inclusive SR
MIN_OVERS_FOR_ECON = 5           # Lower for more inclusive economy
MIN_WICKETS_FOR_BOWL_AVG = 3     # Lower for more inclusive bowling avg
```

### Adding More Spotlights

```python
SPOTLIGHT_PLAYERS = [
    "Dr. Vishnu Reddy",
    "Akhil Reddy Danda",
    "Another Player Name",  # Add more
]
```

### Changing Output Location

```python
OUTPUT_DIR = "/custom/path/to/outputs"
```

## Technical Details

- **Fuzzy Matching**: Uses RapidFuzz library with configurable threshold
- **Safe Division**: All metrics protected against division by zero
- **Deterministic Sorting**: Ties broken by alphabetical name order
- **Graceful Degradation**: Missing columns logged but don't crash the script
- **Type Safety**: All numeric conversions protected with error handling

## Dependencies

- `pandas` - Data manipulation
- `numpy` - Numerical operations
- `matplotlib` - Chart generation
- `Pillow` - Image processing
- `rapidfuzz` - Fuzzy string matching
- `pytesseract` - OCR (optional)
- `python-dateutil` - Date parsing

## License

This project is provided as-is for cricket statistics analysis.

## Support

For issues or questions:
1. Check `logs.txt` in the output directory
2. Verify your CSV format matches expectations
3. Ensure all required dependencies are installed
4. Check that Python version is 3.8+

## Tips for Best Results

1. **Clean Your Data**: Remove duplicate rows before running
2. **Consistent Names**: Try to keep player names consistent in your CSV
3. **Complete Whitelist**: Include all players you want analyzed
4. **Photo Filenames**: Name photos with player names for better detection
5. **Regular Updates**: Re-run after each match with updated CSV

---

**Built by a Senior Data Scientist for robust, production-grade cricket analytics.**
