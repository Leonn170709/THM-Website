---
name: The Highway Men
description: The dominant Nether highway clan on 6b6t — infrastructure at scale.
colors:
  lava-orange: "#fb923c"
  nether-red: "#ef4444"
  volcanic-brown: "#7c2d12"
  discord-blurple: "#5865f2"
  void-black: "#060a10"
  frost-white: "#e2eaf5"
  glass-surface: "#ffffff12"
  glass-border: "#ffffff2e"
  glass-highlight: "#ffffff40"
  muted-frost: "#e2eaf580"
typography:
  display:
    fontFamily: "'Bebas Neue', Impact, sans-serif"
    fontSize: "clamp(3.5rem, 10vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.05em"
  headline:
    fontFamily: "'Bebas Neue', Impact, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  title:
    fontFamily: "'Syne', sans-serif"
    fontSize: "1.1rem"
    fontWeight: 800
    lineHeight: 1.4
  body:
    fontFamily: "'Syne', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "'Space Mono', 'Courier New', monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    letterSpacing: "0.15em"
rounded:
  pill: "50px"
  card: "24px"
  card-sm: "14px"
  chip: "8px"
  benefit: "12px"
spacing:
  xs: "0.6rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.lava-orange}"
    textColor: "{colors.void-black}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.lava-orange}"
    textColor: "{colors.void-black}"
  button-ghost:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.frost-white}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
  button-ghost-hover:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.lava-orange}"
  button-discord:
    backgroundColor: "{colors.discord-blurple}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
  card-glass:
    backgroundColor: "{colors.glass-surface}"
    rounded: "{rounded.card}"
    padding: "2.5rem"
  member-tag-leader:
    backgroundColor: "rgba(251,146,60,0.12)"
    textColor: "{colors.lava-orange}"
    rounded: "{rounded.chip}"
    padding: "0.4rem 1rem"
  member-tag-member:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.frost-white}"
    rounded: "{rounded.chip}"
    padding: "0.4rem 1rem"
  meta-chip:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.muted-frost}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.9rem"
---

# Design System: The Highway Men

## 1. Overview

**Creative North Star: "The Nether Grid"**

The Nether is a void. Hostile by default, navigable by force of labor and organization. The Highway Men's visual system lives here: a dark, pressurized environment where every surface floats above the void behind it, every accent is heat against cold, and order is something you impose by showing up every day and moving blocks. There is nothing decorative about this system. What reads as aesthetic is a direct translation of what THM does — precision infrastructure in an environment that wants to kill you.

The glass surfaces are the Nether grid: semi-transparent layers suspended over the atmospheric background, catching light from the orange and red orbs that breathe underneath. The typography is blunt and structural — Bebas Neue was designed for weight and impact, Space Mono signals precision and technical record-keeping, and Syne bridges them with contemporary forward motion. Hierarchy is created through scale and contrast, not through decoration.

This system explicitly rejects: generic gaming-clan aesthetics (cheesy HUD overlays, fantasy fonts, Roblox-energy, stock Minecraft theming), and corporate SaaS landing-page patterns (warm-neutral body backgrounds, hero-metric stat cards, "Join the waitlist" energy, decorative glassmorphism deployed without purpose). The glass here is not a trend application — it is the visual language of infrastructure that has depth and layers beneath it.

**Key Characteristics:**
- Void-black (#060a10) base — deep-space charcoal, not pure black
- Glass surfaces as dimensional layers over the animated atmospheric background
- Three-tier heat palette: Lava Orange (primary, CTA), Nether Red (secondary, emphasis), Volcanic Brown (tertiary, deep heat)
- Bebas Neue for impact display, Space Mono for precision labels, Syne for readable body
- Atmospheric motion: background orbs breathe, sections reveal on scroll, elements float
- Pill-shaped buttons (50px radius) against the dark create floating, decisive CTAs

## 2. Colors: The Nether Heat Palette

A void-black base with three tiers of heat, glass transparency layers, and one structural blue for Discord integration.

### Primary
- **Lava Orange** (`#fb923c`): The primary accent. Used on primary CTAs, section eyebrows, timeline dates, stat numbers, active member leader tags, and any element that demands immediate attention. At this saturation against void-black, it carries heat without aggression — it is earned, not decorative.

### Secondary
- **Nether Red** (`#ef4444`): Secondary emphasis. Used on gradient text (hero title gradient endpoint), alliance accent borders, button gradient ends, and danger-adjacent states. It reads warmer and more urgent than Lava Orange. Never the primary CTA color.

### Tertiary
- **Volcanic Brown** (`#7c2d12`): The deep heat base. Used as the terminal point of gradients, the darkest accent in the three-tier palette, and structural heat elements that need to recede. Rarely used alone.
- **Discord Blurple** (`#5865f2`): A single-use structural color reserved exclusively for Discord CTAs. Never applied to anything unrelated to Discord. Its presence signals exactly one action: join the community.

### Neutral
- **Void Black** (`#060a10`): The page background. Not true black — there is a faint navy tint that keeps it from feeling flat. Everything else floats above this.
- **Frost White** (`#e2eaf5`): Primary text. Cool-tinted white; not pure white, which would be too harsh against void-black.
- **Muted Frost** (`rgba(226,234,245,0.5)`): Secondary text, descriptions, dates, helper copy. 50% opacity of Frost White over the dark base.
- **Glass Surface** (`rgba(255,255,255,0.07)`): The fill of glass cards and containers. Near-invisible; the background bleeds through.
- **Glass Border** (`rgba(255,255,255,0.18)`): Standard card borders.
- **Glass Highlight** (`rgba(255,255,255,0.25)`): The top and left edge of glass cards, creating the dimensional light-source effect.

### Named Rules
**The Heat Hierarchy Rule.** Lava Orange is for action. Nether Red is for emphasis. Volcanic Brown is for atmosphere. They never swap roles. Using Nether Red on a CTA dilutes the system; using Lava Orange on a timeline event background inflates it.

**The Discord Quarantine Rule.** Discord Blurple (#5865f2) appears only on Discord CTAs. It is structural, not decorative. Applying it anywhere else corrupts the heat palette.

## 3. Typography: Blunt Precision

**Display Font:** Bebas Neue (with Impact, sans-serif fallback)
**Body Font:** Syne (with system sans-serif fallback)
**Label / Mono Font:** Space Mono (with Courier New, monospace fallback)

**Character:** Bebas Neue carries blunt, unapologetic weight — a stencil-adjacent condensed display face that reads like a stencil on a shipping container. Space Mono signals technical precision and record-keeping. Syne bridges them: a geometric contemporary sans that reads well at body size and carries weight at display sizes when needed. This is not a pairing built for warmth; it is built for authority.

### Hierarchy
- **Display** (400 weight, `clamp(3.5rem, 10vw, 8rem)`, line-height 0.9, tracking 0.05em): Hero title only. One instance per page. The scale is deliberately exaggerated — it dominates everything below it. Apply gradient text (`linear-gradient(135deg, #fff 30%, #fb923c 70%, #ef4444)`) for the hero instance only.
- **Headline** (400 weight, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1, tracking 0.04em): Section titles in Bebas Neue. All-caps by typeface design. One per section. Never used on sub-components.
- **Title** (Syne, 800 weight, 1.1rem, line-height 1.4): Sub-section titles, timeline entries, card headings. Syne at maximum weight creates a clear tier between headline and body without reaching for another display face.
- **Body** (Syne, 400 weight, 0.9–1rem, line-height 1.7–1.8): Paragraph copy. Muted Frost color by default. Cap line length at ~65ch in prose columns.
- **Label** (Space Mono, 400 weight, 0.6–0.75rem, tracking 0.15–0.4em, all-caps): Section eyebrows, stat labels, chip text, nav links, date stamps. Uppercase tracking is a label-only technique — never apply to headings or body.

### Named Rules
**The Mono-Label Contract.** Space Mono is exclusively for labels, chips, dates, and navigation. Never for body prose or headings. Its uppercase-tracked treatment is a system signal: "this is metadata, not content."

**The Gradient Ceiling.** Gradient text (`-webkit-background-clip: text`) is permitted on one element only: the hero `<h1>` display title. Nowhere else. The rule is not "use gradient text sparingly" — the rule is one instance, always the display title, end of list.

## 4. Elevation

This system has no traditional box shadows. Depth is conveyed entirely through the glass layer system and the animated atmospheric background beneath it.

Glass surfaces achieve dimension through three simultaneous techniques: `backdrop-filter: blur(18px)` (requiring `@supports` fallback), an extremely low-opacity white fill (`rgba(255,255,255,0.07)`), and a dual-tone border that simulates a light source from the top-left (`border-top` and `border-left` use `rgba(255,255,255,0.25)` while bottom and right use `rgba(255,255,255,0.18)`). The animated background orbs (blurred radial-gradient `div`s behind the entire layout) provide the colored light source that makes the glass readable — the system is designed so glass only works because of the atmospheric layer beneath it.

There is one context-sensitive motion effect: on hover, the `.glass-hover` class reveals a light shimmer sweep using a pseudo-element with `skewX(-15deg)` that slides from left to right. This is not a box shadow; it is a surface catch.

### Named Rules
**The Atmospheric Dependency Rule.** Glass cards depend entirely on the animated background orbs for their visual effect. Never remove or disable the background layer and expect glass to look intentional — without the warm light source behind it, the glass surface is just low-contrast gray.

**The Shadow Prohibition.** `box-shadow` is not used in this system. No drop shadows, no card lift shadows. If depth is needed, it comes from the glass treatment and the background — not from painted-on shadows.

## 5. Components

### Buttons
Three variants, all pill-shaped (50px border-radius). The pill shape creates a strong contrast against the grid-shaped glass cards and square-ish background geometry.

- **Primary:** Lava Orange (`#fb923c`) fill, Void Black text, `font-family: Space Mono`, `font-size: 0.75rem`, `letter-spacing: 0.15em`, `text-transform: uppercase`, `padding: 0.75rem 2rem`, `min-height: 44px`. Hover: `translateY(-2px)` + expanded glow `box-shadow: 0 0 50px rgba(251,146,60,0.6)`.
- **Discord:** Discord Blurple fill, white text, same shape and type treatment as Primary. Hover: `box-shadow: 0 0 50px rgba(88,101,242,0.5)`.
- **Ghost:** Glass surface fill, glass border, Frost White text. Hover: border shifts to Lava Orange, text shifts to Lava Orange. No fill change.
- **All buttons:** `transition: all 0.3s`, `min-height: 44px` for accessibility, `-webkit-tap-highlight-color: transparent` for mobile.

### Cards / Containers
The glass card is the primary container. It is never nested — no card inside a card.

- **Corner style:** 24px radius (`--card`). Sub-elements within a card use 12–14px radius.
- **Background:** `rgba(255,255,255,0.07)` with `backdrop-filter: blur(18px)`. `@supports` fallback: `rgba(255,255,255,0.12)` (opaque).
- **Border:** `1px solid rgba(255,255,255,0.18)` standard; `border-top-color` and `border-left-color` elevated to `rgba(255,255,255,0.25)` for the light-source effect.
- **Internal padding:** 2.5rem (`--xl` equivalent). Tighter variants (stat cards): 1rem `0.75rem`.
- **Hover effect:** `.glass-hover` pseudo-element shimmer sweep on `:hover`.

### Member Tags / Chips
Small rectangular chips (8px radius) used for the roster display. Two semantically distinct variants:

- **Leader:** `background: rgba(251,146,60,0.12)`, `border: 1px solid rgba(251,146,60,0.35)`, Lava Orange text. Signals authority within the roster.
- **Member:** Standard glass fill, glass border, Frost White text.
- **Hover (both):** `translateY(-2px)`, border shifts to Nether Red, text shifts to Nether Red.
- **Type:** Space Mono, 0.72rem, tracking 0.05em.

### Meta Chips
Pill-shaped (50px) status labels used inside cards to surface metadata (maintainer, stack, status).

- **Default:** `background: rgba(255,255,255,0.06)`, glass border, Muted Frost text, Space Mono 0.65rem.
- **Accent variant:** border and text shift to Lava Orange.
- **Secondary variant:** border and text shift to Nether Red.

### Navigation
Fixed, 68px height, full-width. Glass treatment with 24px blur (heavier than card blur to anchor it above content).

- **Background:** `rgba(6,10,16,0.4)` with `backdrop-filter: blur(24px)`. On scroll past 50px: shifts to `rgba(6,10,16,0.92)` via JS.
- **Bottom border:** `1px solid rgba(255,255,255,0.18)`.
- **Logo:** Bebas Neue 1.6rem with THM icon. Drop shadow on icon: `drop-shadow(0 0 8px rgba(74,240,196,0.5))`.
- **Nav links:** Space Mono, 0.75rem, tracking 0.15em, uppercase. Default: Muted Frost. Hover: Lava Orange.
- **Mobile:** Hamburger button revealed at ≤768px. Nav links slide down from below the fixed bar (`transform: translateY(-110%)` → `translateY(0)`).
- **Discord CTA in nav:** Discord Blurple pill button, 0.7rem, consistent with global button treatment but compact (no min-height enforcement at nav scale).

### Timeline
A vertical history display using a CSS-only structure.

- **Line:** `2px` gradient line, `position: absolute left: 20px`, gradient from Lava Orange → Nether Red → Volcanic Brown → transparent.
- **Dots:** 18px circle, Lava Orange fill, `box-shadow: 0 0 15px rgba(74,240,196,0.6)` (teal glow — the one exception to the heat palette, carried from legacy code).
- **Date:** Space Mono label, Lava Orange.
- **Title:** Syne 800, 1.1rem.
- **Body:** Syne 400, 0.88rem, Muted Frost.

## 6. Do's and Don'ts

### Do:
- **Do** use Bebas Neue for all `<h1>` and `<h2>` display headings, and Space Mono for all label/chip/nav text. These three fonts are the only permitted typefaces.
- **Do** start every page with the animated background layer (`.bg-layer` + three `.orb` elements). The glass system is visually inert without it.
- **Do** apply the dual-border highlight technique to all glass cards: `border-top-color` and `border-left-color` at 0.25 opacity, standard edges at 0.18.
- **Do** size tap targets to minimum 44×44px on interactive elements (`min-height: 44px`, `min-width: 44px` for icon buttons).
- **Do** include `@media (prefers-reduced-motion: reduce)` on every animation. Content must be fully visible without any JS-triggered class changes.
- **Do** use `@supports (backdrop-filter: blur(1px))` guards before applying the blur treatment. The fallback (`rgba(255,255,255,0.12)`) must be declared first.
- **Do** reserve Discord Blurple exclusively for Discord CTAs. It is a single-use structural color.
- **Do** use `clamp()` for all display and headline font sizes to ensure they scale gracefully across viewport widths.

### Don't:
- **Don't** use gradient text (`-webkit-background-clip: text`) anywhere except the hero `<h1>`. One instance in the system, total.
- **Don't** use `box-shadow` for card depth. This system achieves depth through glass, not shadow.
- **Don't** use warm-neutral or cream/paper/parchment backgrounds. The body background is always Void Black (`#060a10`). "Warmth" is carried by the accent palette, not the background.
- **Don't** apply glassmorphism to non-container elements (text, icons, decorative dividers). Glass is a container treatment only.
- **Don't** use gaming-cliché styling: no HUD overlays, no neon green, no fantasy display fonts, no pixel-art aesthetic, no literal Minecraft block textures.
- **Don't** apply SaaS landing-page patterns: no hero-metric stat card grids, no "Join the waitlist" copy, no warm-tinted paper backgrounds, no nested glass cards.
- **Don't** deploy the uppercase all-caps + tracking technique outside of Space Mono label contexts. Applying it to body copy or headings breaks the mono-label semantic contract.
- **Don't** add a fourth accent color without retiring one. The Lava Orange / Nether Red / Volcanic Brown triad is complete. New colors corrupt the heat system.
- **Don't** use border-left stripes as colored accents on cards. The Watchmen alliance card uses a left border by exception (it signals alliance, not THM membership) — this is not a general pattern.
- **Don't** gate any content visibility on a JavaScript-triggered class. Every section must render fully visible in the HTML; transitions enhance, they don't reveal.
