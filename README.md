# Islanders Cricket Club - Digital Experience

This repository contains the complete Islanders Cricket Club analytics and storytelling stack. It merges three pillars:

- **`web/`** - Netlify-ready Next.js site showcasing achievements, leadership, analytics workflows, and photo intelligence.  
- **`masterprompt_withphoto analysis/`** - prompt engineering assets, executive summaries, and generated media.  
- **`Datascientist_Analysis/`** - supplemental Python tooling and documentation from prior explorations.

## Quick Start

```bash
cd "web"
npm install
npm run dev
```

Open `http://localhost:3000` to browse the site. Use `npm run build` to generate the static output inside `web/.next/`.

### Tooling Highlights

- **Framework**: Next.js 16 (App Router) + React 19 + Tailwind CSS v4.  
- **Design System**: Islanders blues with gold accents, glass panels, responsive layouts.  
- **Assets**: Executive summary, photo dashboards, season timeline, and architecture diagrams preloaded in `web/public/media/`.  
- **Outreach**: `/contact` provides direct email templates for leadership, partnerships, and analytics requests.  
- **Quality Gates**: ESLint 9 + TypeScript 5 (`npm run lint`).  
- **Routes**: Home, Achievements, Leadership, Analytics, Gallery, Contact (all statically prerendered).

## Analytics Data Sync

The site consumes data from `masterprompt_withphoto analysis/executive_summary.md`. Whenever the analytics engine regenerates that markdown, update the Next.js data layer with:

```bash
node scripts/sync-analytics.js
```

This command writes `web/src/data/generated/executiveSummary.json`. Re-run `npm run dev` or `npm run build` afterwards to see refreshed copy, photo counts, and leadership highlights.

## Netlify Deployment

`netlify.toml` is configured for one-click deploys, and once the repo is connected every push to `main` automatically triggers a fresh build.

```toml
[build]
  base = "web"
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Steps:

1. Log in to Netlify and choose "Add new site -> Import from Git".  
2. Select `DandaAkhilReddy/islanders`.  
3. Confirm the build command (`npm run build`) and publish directory (`.next`).  
4. Deploy. Netlify provides preview builds for pull requests automatically.  
5. (Optional) Create build hooks to trigger deployments after new analytics runs.

### GitHub Actions guardrail

The repository includes `.github/workflows/web-ci.yml`, which runs on every push/PR that touches the site or analytics summary. It executes:

1. `npm ci`
2. `node ../scripts/sync-analytics.js`
3. `npm run lint`
4. `npm run build`

Keep the workflow green so Netlify never receives a broken build.

## GitHub Integration

Target remote: [`https://github.com/DandaAkhilReddy/islanders`](https://github.com/DandaAkhilReddy/islanders)

```bash
cd "C:\Users\akhil\OneDrive - hhamedicine.com\Islanders cricket\Islanderswebsite"
git init
git remote add origin https://github.com/DandaAkhilReddy/islanders.git
git add .
git commit -m "Launch Islanders website foundation"
git push -u origin main
```

Pull before pushing if the remote already has commits: `git pull origin main --rebase`.

## Repository Checklist

- [x] Netlify plugin installed (`@netlify/plugin-nextjs`).  
- [x] Static media copied to `web/public/media/`.  
- [x] Analytics summary ingested via `scripts/sync-analytics.js`.  
- [x] `npm run build` verified locally.  
- [x] Documentation updated.

## Next Steps

1. Extend the analytics pipeline to export player-level stat tables and ingest them into new components.  
2. Convert large PNG assets to WebP/AVIF for faster delivery.  
3. Wire Netlify form notifications to Slack/Email.  
4. Add automated tests or visual regression checks before major releases.

*Unity in Victory - Data in Motion - Islanders Forever*
