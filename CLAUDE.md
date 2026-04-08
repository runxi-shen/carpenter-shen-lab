# Carpenter-Shen Lab Website

Academic lab website for the **Carpenter-Shen Lab** at **Purdue University**.

## Tech Stack

- **Astro** (v5) — static site generator, content-first architecture
- **Tailwind CSS** (v3) — utility-first styling
- **MDX** — Markdown with components for content pages
- Content is managed via **Astro Content Collections** with Zod schemas in `src/content.config.ts`

## Project Structure

```
src/
├── assets/images/       ← All images (imported via Astro's asset pipeline)
│   ├── team/            ← Headshot photos
│   └── icons/           ← Research area icons (CellProfiler, Cell Painting)
├── assets/styles/
│   └── global.css       ← Design system: 3 theme palettes, typography, utilities
├── components/
│   ├── layout/          ← Header, Footer, ThemeSwitcher
│   └── home/            ← Hero, ResearchHighlights, TeamPreview, LatestNews, SoftwareShowcase
├── content/             ← Markdown content (team, papers, blog, research, software, positions)
├── layouts/             ← BaseLayout, PageLayout
└── pages/               ← Route pages
```

## Key Conventions

### Images
- All images live in `src/assets/images/` and are imported in component frontmatter (`import img from '...'`), NOT referenced as string paths from `public/`.
- `public/` is only for files the browser fetches directly by URL (favicon, robots.txt, CNAME).
- This ensures correct path resolution regardless of `base` URL config.

### Themes
- Three switchable color themes: **Light** (default), **Dark**, **Hybrid** (dark hero, light content).
- Controlled via `data-theme` attribute on `<html>`, persisted to localStorage.
- All colors use CSS custom properties (e.g., `var(--bg-primary)`, `var(--accent-gold)`).
- Theme definitions are in `src/assets/styles/global.css`.

### Color Palette (Purdue-inspired)
- **Light theme**: white backgrounds, aged gold (#8E6F3E) accents, dark text
- **Dark theme**: deep space black (#0A0A0F), Purdue gold (#CFB991), cyan (#00D4FF) tech accent
- **Hybrid**: dark hero section → light content, combines both palettes

### Typography
- Headings: Inter (sans-serif)
- Body text: Source Serif 4 (serif), globally `text-align: justify`
- Labels/metadata: JetBrains Mono (monospace)
- Section subtitles under headers should be `text-center` (override the global justify)

### Hosting
- Currently configured for GitHub Pages at `runxi-shen.github.io/carpenter-shen-lab`
- To switch to a Purdue domain: change `site` and `base` in `astro.config.mjs`
- GitHub Actions deploy workflow in `.github/workflows/deploy.yml`

## Content

### People
- **Anne E. Carpenter** — Principal Investigator, Professor
- **Runxi Shen** — Co-Principal Investigator, Research Assistant Professor
- **Shantanu Singh** — Senior Consultant (not shown on homepage yet, maybe shown as a team member later), still need to consult Shantanu/Anne for their preferences

### Writing Style
- No em dashes in body text. Use commas or restructure sentences instead.
- Body paragraphs are justified (both-side aligned).
- Section headers use the `.section-label` class (monospace, gold, flanked by decorative lines).

## Development

```bash
npm run dev      # Local dev server at localhost:4321/carpenter-shen-lab
npm run build    # Static build to dist/
npm run preview  # Preview production build
```

## Reference
- The `_archive/` folder (gitignored) contains content snapshots from the original Carpenter-Singh Lab website at the Broad Institute for migration reference.
- Reference site: https://carpenter-singh-lab.broadinstitute.org/
