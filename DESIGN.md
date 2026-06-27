---
name: The Highway Men
description: The dominant Nether highway clan on 6b6t — infrastructure at scale.
colors:
  fire:         "#e25c1c"
  lava:         "#c0391a"
  ember:        "#f5a620"
  coal:         "#3d1a0e"
  coal-text:    "#a8684d"
  discord:      "#5865F2"
  bg-void:      "#070407"
  bg-surface:   "#100a0e"
  bg-elevated:  "#180d15"
  fg-primary:   "#f0e8ec"
  fg-secondary: "rgba(240,232,236,0.60)"
  fg-muted:     "rgba(240,232,236,0.32)"
  glass-fill:   "rgba(255,255,255,0.045)"
  glass-border: "rgba(255,255,255,0.10)"
  glass-rim:    "rgba(255,255,255,0.28)"
  bg-light:     "#f7f1e9"
  fg-light:     "#1c100a"
  fire-light:   "#b84010"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize:   "clamp(3.5rem, 11.5vw, 9rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize:   "clamp(2.6rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.028em"
  title:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize:   "clamp(1.7rem, 3.5vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Syne', sans-serif"
    fontSize:   "1rem"
    fontWeight: 400
    lineHeight: 1.78
  label:
    fontFamily: "'Space Mono', monospace"
    fontSize:   "0.68rem"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  sm:   "8px"
  md:   "14px"
  lg:   "20px"
  xl:   "28px"
  pill: "9999px"
spacing:
  section:         "7rem"
  section-mobile:  "4.5rem"
  container-max:   "1120px"
  container-pad:   "2rem"
components:
  btn-fire:
    backgroundColor: "{colors.fire}"
    textColor:       "#ffffff"
    rounded:         "{rounded.pill}"
    padding:         "0.8rem 1.9rem"
  btn-fire-hover:
    backgroundColor: "{colors.fire}"
    textColor:       "#ffffff"
  btn-discord:
    backgroundColor: "{colors.discord}"
    textColor:       "#ffffff"
    rounded:         "{rounded.pill}"
    padding:         "0.8rem 1.9rem"
  btn-glass:
    backgroundColor: "{colors.glass-fill}"
    textColor:       "{colors.fg-primary}"
    rounded:         "{rounded.pill}"
    padding:         "0.8rem 1.9rem"
  card-glass:
    backgroundColor: "{colors.glass-fill}"
    rounded:         "{rounded.xl}"
    padding:         "2.5rem"
  member-tag-leader:
    backgroundColor: "{colors.fire}"
    textColor:       "{colors.fire}"
    rounded:         "{rounded.sm}"
    padding:         "0.45rem 1.05rem"
  member-tag-member:
    backgroundColor: "{colors.glass-fill}"
    textColor:       "{colors.fg-primary}"
    rounded:         "{rounded.sm}"
    padding:         "0.45rem 1.05rem"
  tag:
    backgroundColor: "{colors.glass-fill}"
    textColor:       "{colors.fg-secondary}"
    rounded:         "{rounded.pill}"
    padding:         "0.28rem 0.8rem"
---

# Design System: The Highway Men (v2)

## Overview

**Creative North Star: "The Nether Grid"**

The Nether is hostile by default, navigable by force of labor and organization. The Highway Men's visual system lives in that tension: a dark, pressurized environment where every surface floats above an atmospheric void, every accent carries heat, and order is something you impose by showing up every day and moving blocks. Nothing is decorative here. What reads as aesthetic is a direct translation of what THM does — precision infrastructure in an environment that wants to kill you.

Glass surfaces are suspended layers over a breathing atmospheric background that catches light from the fire-toned gradients beneath. Typography is editorial and structural: Bricolage Grotesque was chosen for its blunt variable-weight capability and editorial personality (replacing the clichéd Bebas Neue), Space Mono signals precision and record-keeping, and Syne bridges them. Hierarchy is created through scale and contrast, not decoration. The system explicitly rejects generic gaming-clan aesthetics (cheesy HUD overlays, neon green on black, stock fantasy fonts, Roblox-energy) and corporate SaaS landing-page patterns (cream/paper backgrounds, hero-metric stat cards, decorative glassmorphism used by reflex).

**Key Characteristics:**
- Near-black void (`#070407`) base — slightly warm tint, not pure black
- Liquid Glass surfaces: cursor-reactive specular highlight, iridescent rim, `backdrop-filter: blur(24px) saturate(1.5)`
- Three-tier heat palette: Fire Orange (primary CTA), Lava Red (secondary), Ember Gold (highlights)
- Bricolage Grotesque 800 for impact display; Space Mono for precision labels; Syne for readable body
- Dark and Light mode with saved preference; light mode is warm cream (`#f7f1e9`), not default-neutral
- `prefers-reduced-motion` honored on all animations; content never gated on JS class triggers

## Colors

A void-black base with three tiers of heat, glass transparency layers, and one structural blue for Discord.

### Primary
- **Fire Orange** (`#e25c1c`): Primary accent. CTAs, section eyebrows, active states, stat numbers, timeline dates, leader tag borders. Carries heat without aggression at this saturation against void-black.

### Secondary
- **Lava Red** (`#c0391a`): Secondary emphasis. Alliance borders, deep accent states. More urgent than Fire Orange. Never the primary CTA color.
- **Ember Gold** (`#f5a620`): Warm highlight. Theme toggle indicator, secondary glows.

### Tertiary
- **Coal** (`#3d1a0e`): Volcanic deep brown. Tag backgrounds, deep atmospheric tints. Rarely used alone.
- **Coal Text** (`#a8684d`): Terracotta mid-tone derived from Coal. Used as text color for coal-variant tags.
- **Discord Blurple** (`#5865F2`): Single-use structural color reserved exclusively for Discord CTAs. Never decorative.

### Neutral
- **Void Black** (`#070407`): Page background. Slightly warm-tinted, not pure black. Everything floats above this.
- **Surface** (`#100a0e`): Card/elevated surface background.
- **Elevated** (`#180d15`): Highest surface level.
- **Frost** (`#f0e8ec`): Primary text in dark mode. Warm-tinted white; not pure white to avoid harshness.
- **Frost Muted** (`rgba(240,232,236,0.60)`): Secondary text, descriptions.
- **Frost Dim** (`rgba(240,232,236,0.32)`): Tertiary, labels on dark.
- **Glass Fill** (`rgba(255,255,255,0.045)`): Card surface with `backdrop-filter`. Near-invisible; background bleeds through.
- **Glass Border** (`rgba(255,255,255,0.10)`): Standard card borders.
- **Glass Rim** (`rgba(255,255,255,0.28)`): Top-edge specular rim on glass cards.

**The Heat Hierarchy Rule.** Fire Orange is for action. Lava Red is for emphasis. Ember Gold is for atmosphere. They do not swap roles.

**The Discord Quarantine Rule.** Discord Blurple (`#5865F2`) appears only on Discord CTAs. Applying it anywhere else corrupts the heat palette.

**The Alpha Tint Rule.** All semi-transparent variants of brand colors are intentional system values derived from their parent token (e.g. `rgba(226,92,28,X)` from Fire, `rgba(192,57,26,X)` from Lava, `rgba(88,101,242,X)` from Discord). They are not palette drift.

## Typography

**Display / Headings Font:** Bricolage Grotesque (variable, sans-serif fallback) — replaces Bebas Neue in v2 for editorial authority without the gaming-font cliché
**Body Font:** Syne (sans-serif fallback) — geometric, contemporary, readable
**Label/Mono Font:** Space Mono (monospace fallback) — precision, record-keeping

**Character:** Bricolage Grotesque at weight 800 carries confident structural weight without feeling stencil-cheap. Space Mono signals technical precision for metadata. Syne bridges both at body size. This pairing reads as serious operation, not fan club.

### Hierarchy
- **Display** (800 weight, `clamp(3.5rem, 11.5vw, 9rem)`, line-height 0.88, tracking -0.04em): Hero `<h1>` only. One per page. Solid `var(--fg)` — no gradient text.
- **Heading** (800 weight, `clamp(2.6rem, 6vw, 4.5rem)`, line-height 0.96, tracking -0.028em): Section `<h2>` titles. One per section.
- **Title** (700 weight, `clamp(1.7rem, 3.5vw, 2.4rem)`, line-height 1.05, tracking -0.02em): Sub-sections, card headings, feature titles.
- **Body** (Syne 400, 1rem, line-height 1.78): Paragraph copy in `var(--fg-2)`. Cap at ~62ch.
- **Label** (Space Mono 400, 0.62–0.72rem, tracking 0.10–0.45em, all-caps): Section eyebrows, nav links, chip text, timestamps, stat labels. This is the system's metadata signal.

**The Gradient Ban.** Gradient text (`-webkit-background-clip: text`) is not used anywhere in this system. Solid `var(--fg)` on dark backgrounds, solid `var(--fg)` on light. Emphasis through weight and scale only.

**The Mono-Label Contract.** Space Mono is exclusively for labels, chips, dates, and navigation — never for body prose or headings.

## Elevation

This system has no traditional box shadows. Depth is conveyed entirely through the Liquid Glass layer system and the animated atmospheric background beneath it.

Glass surfaces achieve dimension through three simultaneous techniques: `backdrop-filter: blur(24px) saturate(1.5)` (with `@supports` fallback to an opaque surface tint), an extremely low-opacity white fill (`rgba(255,255,255,0.045)`), and a rim gradient simulating overhead light (top border at `rgba(255,255,255,0.28)`, standard edges at `rgba(255,255,255,0.10)`). A cursor-reactive specular highlight (radial gradient at `--gx`/`--gy` CSS custom properties, updated by JS on mousemove) creates the WWDC-2025-inspired Liquid Glass effect. An iridescent tint overlay (warm-to-cool gradient at `rgba(255,140,90,0.07)` → `rgba(100,160,255,0.04)`) completes the glass physics illusion.

The animated background (radial-gradient orbs with `ambientBreathe` animation) provides the colored light source that makes glass legible — glass without the atmospheric layer reads as plain low-contrast gray.

**The Atmospheric Dependency Rule.** Never disable the `.bg-canvas` layer and expect glass cards to look intentional. The glass system requires the fire-toned atmospheric layer beneath it.

**The No-Shadow Rule.** `box-shadow` is not used for card depth in this system. Depth comes from glass and atmosphere, not painted-on shadows.

## Components

### Buttons
Three variants, all pill-shaped (`border-radius: 9999px`). The pill shape contrasts deliberately against rectangular glass cards and grid geometry.

- **Fire (Primary):** Fire Orange fill, white text, `font: 'Space Mono' 0.70rem uppercase`, `letter-spacing: 0.13em`, `padding: 0.8rem 1.9rem`, `min-height: 46px`. Hover: `translateY(-2px)` + expanded glow `box-shadow: 0 6px 32px rgba(226,92,28,0.55)`.
- **Discord:** Discord Blurple fill, white text, same shape/type as Fire. Hover: expanded Discord glow. Discord CTAs only.
- **Glass (Ghost):** Glass surface fill, line-bright border, Frost text. Hover: border and text shift to Fire Orange. No fill change.
- All: `transition: 200ms ease-out`, `min-height: 46px`, `-webkit-tap-highlight-color: transparent`.

### Cards / Glass Containers
The glass card is the primary container. Never nested.

- **Corner radius:** `28px` (`--r-xl`). Sub-elements within use `8–14px`.
- **Background:** stacked `background` shorthand — (1) cursor-reactive radial specular, (2) iridescent tint linear gradient, (3) `rgba(255,255,255,0.045)` base fill. `backdrop-filter: blur(24px) saturate(1.5)`.
- **Border:** `1px solid rgba(255,255,255,0.10)`, top edge `rgba(255,255,255,0.28)`.
- **Hover sweep (`.glass-hover`):** pseudo-element shimmer sweeps left-to-right on `:hover`. Applied to interactive cards only, not static containers.
- **Internal padding:** `2.5rem`. Feature cards use same scale.
- **Light mode:** high-opacity white fill (`rgba(255,255,255,0.55)`) with near-white rim. Drop shadow: `0 2px 16px rgba(0,0,0,0.06)`.

### Member Tags
Small rectangular chips (`border-radius: 8px`) for the roster.

- **Leader:** `rgba(226,92,28,0.09)` background, `rgba(226,92,28,0.35)` border, Fire Orange text. Space Mono 0.68rem.
- **Member:** Glass fill, line-bright border, Frost text.
- **Hover:** `translateY(-2px)`, border and text shift to Fire Orange, glow: `0 4px 16px rgba(226,92,28,0.20)`.
- Non-linked span tags (the `& more…` entry) have no hover state.

### Tags / Chips
Pill-shaped (`border-radius: 9999px`) metadata labels for card interiors.

- **Default:** `rgba(255,255,255,0.07)` background, line-bright border, Frost-2 text. Space Mono 0.60rem.
- **Fire variant:** Fire-tinted border/text. **Discord variant:** Discord-tinted. **Lava variant:** Lava-tinted. **Coal variant:** Coal-tinted text (`#a8684d`).

### Navigation
Fixed, `64px` height, full-width glass bar.

- **Default:** transparent background. On scroll (>40px): `color-mix(in srgb, var(--bg) 82%, transparent)` + `backdrop-filter: blur(32px) saturate(1.6)` + `border-bottom: 1px solid var(--line)`.
- **Logo:** Bricolage Grotesque 800, 1.15rem. Icon with `drop-shadow(0 0 8px rgba(226,92,28,0.50))`.
- **Links:** Space Mono 0.68rem uppercase. Default: Frost-2. Hover: Frost + `rgba(255,255,255,0.07)` background pill. Active section: Fire Orange.
- **Theme toggle:** Glass pill (`46×26px`). Knob slides right for light mode, glows ember-gold.
- **Mobile ≤768px:** Hamburger reveals slide-down panel. Discord button visible in dropdown.

### Timeline
Vertical infrastructure history. Conveys sequence, not just a list.

- **Spine:** `1px` gradient line (`--fire` → `--lava` → `--fire` → transparent), positioned `left: 0`.
- **Dots:** `13px` circle, Fire border, Void bg at rest → fills Fire + glow on IntersectionObserver `.in` class.
- **Date:** Space Mono 0.63rem uppercase, Fire Orange.
- **Title:** Bricolage Grotesque 700, 1.15rem.
- **Body:** Syne 400, 0.96rem, Frost-2.

## Do's and Don'ts

### Do:
- **Do** use Bricolage Grotesque 700–800 for all headings and display text. This replaced Bebas Neue in v2.
- **Do** use Space Mono for all label, chip, nav link, eyebrow, and timestamp text. It is the system's metadata signal — not for prose.
- **Do** start every page with `.bg-canvas` (the atmospheric gradient layer). Glass cards require it to be visible.
- **Do** apply `backdrop-filter` with `@supports` guard. The fallback (opaque surface tint) must be declared first.
- **Do** use the cursor-reactive specular via `--gx`/`--gy` on all `.glass` elements. This is what distinguishes this glass from generic glassmorphism.
- **Do** respect `prefers-reduced-motion`. Every animation must have a fallback. Content must be visible without JS class triggers.
- **Do** size all interactive tap targets to minimum `44×44px` (`min-height: 46px` on buttons).
- **Do** include Dark and Light mode. The theme toggle must store preference in `localStorage`.

### Don't:
- **Don't** use gradient text (`-webkit-background-clip: text` with a gradient). Solid `var(--fg)` only. This is an AI visual tell and was explicitly removed from v2.
- **Don't** use `box-shadow` for card depth. Depth comes from glass and the atmospheric layer.
- **Don't** use Bebas Neue. It was replaced by Bricolage Grotesque.
- **Don't** add a fourth accent color. The Fire / Lava / Ember triad is complete; additions corrupt the heat system.
- **Don't** use cream, sand, paper, or parchment as a body background in light mode. The light mode bg is `#f7f1e9` — warm cream — which is intentional brand warmth, not the default AI neutral-background move.
- **Don't** apply glassmorphism decoratively. Every `.glass` element must have purposeful content or structural role.
- **Don't** use generic gaming-clan aesthetics: no HUD overlays, no neon green on black, no pixel-art, no literal Minecraft block textures.
- **Don't** use SaaS landing-page patterns: no hero-metric stat-card grids (the stat bar in the hero is a unified strip, not individual cards), no "join the waitlist" copy, no decorative glassmorphism by reflex.
- **Don't** nest glass cards. One level only.
- **Don't** use `--ease-spring` (removed from v2). Physical toggles may use a minimal overshoot inline; all other transitions use `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`.
