---
target: public/index.html
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-06-26T23-31-04Z
slug: public-index-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Map timestamp shows "—" while fetching; no other feedback states |
| 2 | Match System / Real World | 3 | Strong domain vocabulary; "5W" stat and "7mo To 500 Members" require prior knowledge |
| 3 | User Control and Freedom | 3 | Clean anchor nav, mobile menu closes on link click, no traps |
| 4 | Consistency and Standards | 3 | Mostly consistent; Watchmen + CTA sections use inline styles while others use classes |
| 5 | Error Prevention | 3 | External links have noopener noreferrer, no forms to misfire |
| 6 | Recognition Rather Than Recall | 3 | Nav labeled, legend explains leader/member; "5W" demands prior context |
| 7 | Flexibility and Efficiency | 2 | Expected for a content site; keyboard nav works, no power-user paths exist |
| 8 | Aesthetic and Minimalist Design | 3 | Good restraint; atmospheric orb background edges toward "dark landing page kit" |
| 9 | Error Recovery | 2 | Member tag links can 404; no recovery or fallback UX |
| 10 | Help and Documentation | 2 | No contextual help; target audience largely self-sufficient |
| **Total** | | **26/40** | **Acceptable — significant improvements available** |

## Anti-Patterns Verdict

**LLM Assessment:** The page largely avoids the AI scaffold. No "01/02/03" section numbering, eyebrows are down to three functional uses, stat strip replaced the hero-metric grid, no cream background, no fantasy fonts. The font triple (Bebas Neue + Space Mono + Syne) is considered and recognizable without being generic. The specific content (named members, actual dates, real highway politics, the HSC antagonist arc) grounds the aesthetic in a way stock AI designs cannot replicate.

What remains slightly rote: the three-blurred-circle atmospheric orb background is a very common 2026 dark-landing-page pattern. The glass cards on kitbot, rule, and watchmen are purposefully deployed which is the correct use — but three glass containers in a row still reads somewhat templated.

Overall: would pass an "AI made this?" test from an informed reader. The content specificity is doing real work.

**Deterministic Scan:** detect.mjs --json public/index.html returned [] (exit 0). All absolute ban violations and design system drift corrected in the prior polish pass. Zero issues detected.

## Overall Impression

The bones are right — dark void, lava orange, earned authority voice, meaningful content structure. The site successfully communicates scale without shouting. The two remaining friction points are both accessibility failures that undermine the "serious operation" brand signal: muted body text that barely passes WCAG on plain dark but fails on glass cards, and member link targets that are too small for comfortable mobile tapping. The single biggest opportunity is the about section image: it's the clan logo on a dark background when it should be a highway screenshot — the most compelling proof-of-work on the entire site is tucked into a map section rather than leading the identity section.

## What's Working

**1. The timeline section.** Strongest UX on the page. The gradient vertical line (orange to red to volcanic brown to transparent), the glowing dot, dated entries building narrative arc — Foundation to Expansion to TNT Dupe Discovery to The Rule to 500 Members to HSC conflict. It reads like a real organization history, not a feature list.

**2. The stat strip.** The pivot from glass KPI cards to the divider-separated flex strip was the right call. Bebas Neue numbers at 2.2rem, Space Mono label at 0.6rem with 0.12em tracking, thin glass border dividers — this reads as "data panel" not "SaaS metrics".

**3. The atmospheric background system.** Three layered radials + noise grain + three floating blurred orbs with independent float animations creates genuine environmental depth. The orange/red/volcanic color mapping mirrors the brand's "Nether" identity without being literal.

## Priority Issues

**[P1] Member tag touch targets are too small**
- ~26–28px rendered height vs 44px WCAG 2.5.5 minimum
- Fix: Add min-height: 44px; display: inline-flex; align-items: center; to .member-tag
- Command: /impeccable audit

**[P1] Muted body text fails WCAG AA on glass card backgrounds**
- rgba(226,234,245,0.5) over glass surface computes to ~4.46:1, below 4.5:1 threshold
- Affected: .kitbot-desc, .rule-body, Watchmen alliance paragraphs
- Fix: Change --muted from rgba(226,234,245,0.5) to rgba(226,234,245,0.58)
- Command: /impeccable audit

**[P2] Kitbot image drop-shadow uses stale purple**
- .kitbot-img filter: drop-shadow(0 0 20px rgba(167,139,250,0.3)) — not Discord Blurple
- Fix: Change to rgba(88,101,242,0.3)
- Command: /impeccable polish

**[P2] About section image is the clan logo, not highway imagery**
- Logo says "we made a logo"; a highway screenshot says "we built this"
- Fix: Replace with in-game highway/construction screenshot
- Command: /impeccable delight

**[P2] "5W The Rule" and "7mo To 500 Members" stats are opaque**
- First-time visitors cannot decode these before reading the full page
- Fix: "5" / "BLOCKS WIDE" and "7 MO" / "TO FIRST 500"
- Command: /impeccable clarify

## Persona Red Flags

**Jordan (First-Timer):**
- Hero doesn't explain "highway clan" for non-Minecraft players
- "5W" and "7mo To 500 Members" require prior knowledge
- About image is a logo, not gameplay proof
- Map unreadable on mobile

**Casey (Mobile User):**
- Member tags ~27px — systematic mis-taps
- Highway map unreadable at mobile width, no zoom
- Three hero CTAs wrap to three rows on small phones, Discord CTA falls below fold

**The Skeptic (Rival 6b6t Player):**
- Strong "dominant" claim without qualification reads as self-promotional
- Many roster members link to 404 pages suggesting padded membership
- Watchmen "other than the highway men" clause buries the qualification

## Minor Observations

- div#hero has no ARIA landmark — should be section or role="banner"
- alt="THM Logo Transparent White" describes appearance not meaning
- alt="Kitbot Icon" too brief — should describe the bot
- .hero-logo bannerFade still uses ease not cubic-bezier(0.25, 0, 0, 1)
- .map-wrap:hover img still uses transition: transform 0.5s ease
- .members-grid has redundant .reveal + JS stagger — remove reveal from container
- "Join" Discord nav link is last in mobile menu — should be higher for conversion

## Questions to Consider

- "The about image is the only image on the first screen a visitor sees after the hero — why is it a logo rather than evidence?"
- "If a visitor from outside the Minecraft community lands here, what's their first moment of understanding what THM actually does?"
- "The map is the most powerful element on the page — why is it in the middle rather than the second thing a visitor sees after the hero?"
