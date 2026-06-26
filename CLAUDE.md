# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
node server.js        # Start the server (port 3002)
npm install           # Install dependencies (express, basic-auth)
```

No build step, no bundler, no test suite.

## Architecture

Static site served by a minimal Express server (`server.js`). Everything under `public/` is served as-is.

```
public/
  index.html              # Main clan landing page (single HTML file, all CSS/JS inline)
  players/<Name>/index.html  # Per-member profile pages
  images/                 # .webp assets (banner, logo, map, kitbot icon)
  dashboard.html          # Unused
```

The server only does one thing: `express.static('public')`. It retries on `EADDRINUSE` up to 5 times with exponential backoff.

`/map-meta.json` is fetched client-side to display the highway map's last-updated timestamp. This file is not in the repo — it must be placed/generated separately.

## Frontend conventions

No framework. Pure HTML + CSS + vanilla JS, all inline in each HTML file.

**Design tokens** (CSS custom properties on `:root`):
- `--accent`: `#fb923c` (Lava Orange) — primary highlight color
- `--accent2`: `#ef4444` (Nether Red)
- `--accent3`: `#7c2d12` (Volcanic Brown)
- `--discord`: `#5865F2`
- `--dark`: `#060a10` (background)
- `--glass-bg / --glass-border / --glass-highlight` — glassmorphism layer

**Fonts** (Google Fonts): `Bebas Neue` (headings/titles), `Space Mono` (labels/mono), `Syne` (body).

**Glass effect**: `.glass` class uses `backdrop-filter: blur(18px)` with a `@supports` fallback for browsers that don't support it.

**Scroll reveal**: `.reveal` elements animate in via `IntersectionObserver` → adds `.visible` class.

**Member profile pages** follow the same visual style as `index.html` (same tokens, same background orbs, same fonts). When adding a new player, create `public/players/<Name>/index.html` modeled on the existing `Leon_170709` profile.
