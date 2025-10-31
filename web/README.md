# Islanders Cricket Web - Next.js App

This package hosts the Islanders Cricket Club website. It consumes analytics narratives, photo intelligence, and leadership spotlights sourced from the `masterprompt_withphoto analysis/` directory.

## Scripts

```bash
npm install   # install dependencies
npm run dev   # start dev server at http://localhost:3000
npm run lint  # type-safe lint pass (ESLint 9 + TypeScript 5)
npm run build # static production build (prerendered pages)
```

Node 18+ is required. Tailwind CSS v4 is configured via `@tailwindcss/postcss`.

## Project Structure

- `src/app/*.tsx` - App Router pages (home, achievements, leadership, analytics, gallery, contact).  
- `src/data/site.ts` - Centralized content derived from the analytics prompts and summary JSON.  
- `src/data/generated/` - Output from `scripts/sync-analytics.js`.  
- `public/media/` - Executive summary, dashboards, and timeline visual assets.  
- `netlify.toml` (repo root) - Build command and Next.js Netlify plugin config.  
- `next.config.ts` - Enables static image handling and Turbopack root alignment.

### Refresh analytics content

From the repository root:

```bash
node scripts/sync-analytics.js
```

This regenerates `src/data/generated/executiveSummary.json`, keeping the pages aligned with the latest markdown export.

## Deployment

Netlify reads from this subdirectory:

- Base directory: `web`  
- Build command: `npm run build`  
- Publish directory: `.next`  
- Plugin: `@netlify/plugin-nextjs`

For contact form submissions, Netlify must detect the `data-netlify="true"` form on `/contact`.

## GitHub Workflow

```bash
git add .
git commit -m "Describe the change"
git push origin main
```

Use pull requests to preview builds via Netlify deploy previews. The repository root README documents the broader analytics pipeline.
