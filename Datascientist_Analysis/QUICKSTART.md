# Quick Start Guide

## Get Running in 3 Minutes

### Step 1: Install Dependencies (30 seconds)

```bash
pip install -r requirements.txt
```

### Step 2: Test with Sample Data (30 seconds)

```bash
# The script comes with a sample_stats.csv for testing
python cricket_stats_analyzer.py
```

This will process the sample data and create outputs in the `./outputs` directory.

### Step 3: Use Your Own Data (2 minutes)

1. **Prepare your CSV** - Use `sample_stats.csv` as a template
   - Must have a `player` column (or `name`, `Player`, `Name`)
   - Other columns are optional (matches, innings, runs, balls, etc.)

2. **Edit the script configuration**:

```python
# Open cricket_stats_analyzer.py and edit these lines (around line 30):

STATS_CSV_PATH = "your_stats.csv"  # Change to your CSV file
IMAGES_DIR = ""                     # Add photo directory path (optional)

# Update the whitelist with your actual players:
PLAYERS_WHITELIST = [
    "Player One",
    "Player Two",
    "Player Three",
    # ... add all your players
]

# Update spotlight players (must be in whitelist):
SPOTLIGHT_PLAYERS = ["Player One", "Player Two"]
```

3. **Run the script**:

```bash
python cricket_stats_analyzer.py
```

4. **Check results** in `./outputs/`:
   - Open `Executive_Summary.html` in your browser
   - View PNG charts for visualizations
   - Check CSV files for detailed rankings
   - Read `logs.txt` for any warnings or issues

## Common First-Time Issues

### "Module not found"
```bash
pip install -r requirements.txt
```

### "CSV file not found"
- Make sure `STATS_CSV_PATH` points to your actual CSV file
- Use absolute path if needed: `STATS_CSV_PATH = "/full/path/to/stats.csv"`

### "No players match whitelist"
- Check player names in your CSV
- Make sure they're listed in `PLAYERS_WHITELIST`
- Names are case-insensitive but spelling matters
- The script uses fuzzy matching, so small typos are OK

### Empty Top-5 lists
- You might not have enough data meeting thresholds
- Lower the thresholds in the script:
  ```python
  MIN_INNINGS_FOR_BAT_AVG = 1  # Lower from 3
  MIN_BALLS_FOR_SR = 20        # Lower from 50
  MIN_OVERS_FOR_ECON = 5       # Lower from 10
  MIN_WICKETS_FOR_BOWL_AVG = 2 # Lower from 5
  ```

## Example: Running with Photos

```python
# 1. Put cricket photos in a folder
# 2. Edit script:
IMAGES_DIR = "./cricket_photos"

# 3. Install tesseract (one-time):
# Ubuntu: sudo apt-get install tesseract-ocr
# Mac: brew install tesseract
# Windows: Download from https://github.com/UB-Mannheim/tesseract/wiki

# 4. Run script
```

The script will analyze photos and add a "Most Photographed Players" section.

## Output Files Explained

| File | Description |
|------|-------------|
| `Executive_Summary.html` | **Start here** - Open in browser for overview |
| `Executive_Summary.md` | Text version of summary |
| `top5_*.csv` | Rankings for each metric (runs, wickets, etc.) |
| `top5_*.png` | Bar charts for each ranking |
| `spotlight_*.png` | Detailed cards for spotlight players |
| `player_stats_full.csv` | Complete data for all players |
| `logs.txt` | Detailed execution log (check if issues) |

## Tips for Success

1. **Start with sample data** - Run the script with `sample_stats.csv` first
2. **One player at a time** - Add players to whitelist gradually
3. **Check logs** - `logs.txt` explains what happened
4. **Match names carefully** - Player names in CSV should match whitelist
5. **Lower thresholds** - If Top-5 lists are empty, reduce minimum requirements

## Need Help?

1. Check `logs.txt` - it explains everything the script did
2. Verify your CSV has a `player` column
3. Make sure players in CSV are in `PLAYERS_WHITELIST`
4. Try the sample data first to ensure script works

## Next Steps

Once you have it working:
- Customize the whitelist for your team
- Adjust thresholds for your data size
- Add more spotlight players
- Include photos for richer analysis
- Update data regularly and re-run

---

**You're ready to go! Run the script and check `./outputs/Executive_Summary.html`**
