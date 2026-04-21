# Implementation Log 1 — Three Design Explorations

**Date:** 2026-04-21
**Agent:** Claude (Opus 4.7)
**Phase:** 1 — Exploration

## What we did

Built three scoped hi-fi preview routes, one per visual direction, each replicating the current homepage's information but styled in a distinctive aesthetic. Each route has its own matching custom navbar. The global site navbar and footer are hidden on these routes via a CSS `:has()` selector — zero changes to the shared [src/app/layout.tsx](../../../../src/app/layout.tsx) or any shared component.

This was intentional exploration — the goal was to get aesthetic signal fast, not production-ready code. The code uses bespoke scoped CSS (not Tailwind utilities) and hand-loaded fonts (not the existing token system). That's a shortcut to be repaid when a winning direction is picked.

## The three options

### Option A · Dark Cinematic Automotive
**Route:** `/design/option-a`
**Mood:** Aston Martin night drive. Black backgrounds, dark-hued video atmosphere, red used sparingly as accent.
**Fonts:** Bodoni Moda (display, serif, loaded via `next/font/google`) + Jost (body, sans).
**Nav behavior:** Transparent over the hero, fades to dark-glass with backdrop blur after scroll.
**Files:**
- [src/app/design/option-a/layout.tsx](../../../../src/app/design/option-a/layout.tsx)
- [src/app/design/option-a/page.tsx](../../../../src/app/design/option-a/page.tsx)
- [src/app/design/option-a/option-a.css](../../../../src/app/design/option-a/option-a.css)
- [src/app/design/option-a/OptionANavBar.tsx](../../../../src/app/design/option-a/OptionANavBar.tsx)

### Option B · Editorial Luxury
**Route:** `/design/option-b`
**Mood:** Robb Report / Hodinkee. Cream paper, magazine masthead, drop caps, Roman numerals, red accents on italicized words.
**Fonts:** Fraunces (display, variable serif with SOFT/WONK/opsz axes, loaded via `next/font/google`) + DM Sans (body).
**Nav behavior:** Sticky masthead-style bar in cream, serif links go italic/red on hover.
**Files:**
- [src/app/design/option-b/layout.tsx](../../../../src/app/design/option-b/layout.tsx)
- [src/app/design/option-b/page.tsx](../../../../src/app/design/option-b/page.tsx)
- [src/app/design/option-b/option-b.css](../../../../src/app/design/option-b/option-b.css)
- [src/app/design/option-b/OptionBNavBar.tsx](../../../../src/app/design/option-b/OptionBNavBar.tsx)

### Option C · Sharp Modern Retail
**Route:** `/design/option-c`
**Mood:** Polestar / Tesla configurator. Crisp white + black + red, split-screen hero, product-card thinking, chip filters.
**Fonts:** Reuses the existing Nunito Sans + Heebo already loaded in [src/app/layout.tsx](../../../../src/app/layout.tsx) — no new fonts.
**Nav behavior:** Fixed white bar at top that morphs into a rounded floating pill with shadow after scroll.
**Files:**
- [src/app/design/option-c/layout.tsx](../../../../src/app/design/option-c/layout.tsx)
- [src/app/design/option-c/page.tsx](../../../../src/app/design/option-c/page.tsx)
- [src/app/design/option-c/option-c.css](../../../../src/app/design/option-c/option-c.css)
- [src/app/design/option-c/OptionCNavBar.tsx](../../../../src/app/design/option-c/OptionCNavBar.tsx)

## Key technical decisions

**Scoped CSS instead of Tailwind.** Each option has its own `option-X.css` file that only applies inside its `.option-X-root` wrapper div. This was a deliberate shortcut to iterate fast on aesthetics without negotiating with Tailwind v4's token system or shadcn variants. **It is a one-way door — the winner must be rewritten in the real stack before merge.**

**Hiding the global nav/footer via `:has()`.** Each option's CSS contains:

```css
body:has(.option-a-root) > header,
body:has(.option-a-root) > footer {
  display: none !important;
}
```

The `:has()` selector matches any `<body>` that contains our option wrapper, then hides its direct `<header>` and `<footer>` children (the global [NavBar](../../../../src/components/NavBar.tsx) and [Footer](../../../../src/components/Footer.tsx)). Supported in all modern browsers (Chrome 105+, Safari 15.4+, Firefox 121+). This avoided touching the shared root layout.

**Same content, different presentation.** Every option renders the same information as the current homepage — the "Driven by Trust" headline, the three pillars (Premium Cars / Transparent Pricing / After-Sales Support), the same five brands, the same map, the same contact details. Only the visual language differs. This made it a fair comparison of aesthetic direction, not a comparison of information architecture.

## What went wrong

**I jumped straight to hi-fi mockups without doing the earlier UI/UX steps.** No discovery, no personas, no competitor scan, no content strategy, no mood board, no wireframes. I went from "the homepage feels flat" directly to three production-grade visual spikes. That's backwards — hi-fi is step 8 of a proper process, not step 1. Dele caught this and pivoted the project. See [2-adopt-the-ui-ux-process.md](2-adopt-the-ui-ux-process.md).

**I used bespoke CSS even after Dele pointed out the stack mismatch.** When called out, I agreed the right move was Tailwind utilities + shadcn `<Button>` + the existing token system — but for Options B and C I kept using scoped CSS because "the user said design freedom for now." That's defensible for exploration, but it means the preview code has zero reuse value. The winning option becomes a mockup, not a starting point.

## What worked

- Scoped CSS + `body:has()` for hiding global chrome was clean — no shared-component changes, no route-group refactor, no client-component conversion of the root layout.
- Loading option-specific fonts in each option's nested `layout.tsx` kept font cost off the rest of the site.
- Having three genuinely different directions (not three variations of the same idea) gave real signal on which aesthetic Dele responds to.

## State of the repo after Phase 1

- `develop` branch, not committed yet
- Preview routes live under [src/app/design/](../../../../src/app/design/)
- Zero changes to any file outside `src/app/design/`
- Dev server running on port 3001
- Main homepage ([src/app/page.tsx](../../../../src/app/page.tsx)) untouched — current users of `autoten.vercel.app` see no change

## Next step

Phase 2 begins. The pivot is documented in [2-adopt-the-ui-ux-process.md](2-adopt-the-ui-ux-process.md).
