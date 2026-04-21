# Brand Identity

## Tagline

> **Driven by Trust**

Displayed on the homepage hero ([HeroVideo.tsx:30](../../../src/components/HeroVideo.tsx#L30)) and as the Footer strapline.

Used in metadata: `"Auto Ten — Driven by Trust"` ([layout.tsx:10](../../../src/app/layout.tsx#L10)).

## Brand summary

> "Premium cars, transparent pricing, dependable after-sales support."
> — metadata description, [layout.tsx](../../../src/app/layout.tsx)

Family-run dealership in Lagos. Positioning is premium + trust, not budget + volume.

## Brand colors

| Color | Hex | Use |
|---|---|---|
| **CTA Red** | `#e10600` | Primary buttons, hero CTAs |
| **Hover Red** | `#c10500` | Button hover state |
| **Premium Black** | `#0a0a0a` | Navbar (solid), footer background |
| **Surface White** | `#ffffff` | Cards, panels |
| **Muted Gray** | `#64748b` | Secondary text |

Defined as design tokens in [globals.css](../../../src/app/globals.css) — see [styling.md](../AutoTen-Frontend/styling.md) for the token-to-Tailwind mapping.

## Typography

- **Nunito Sans** (600/700/800) — headings, display text
- **Heebo** (400/500/600) — body, UI, buttons

Both via Google Fonts through `next/font`.

## Logo

- **Primary:** `/logo.png` — used in [NavBar](../../../src/components/NavBar.tsx) (120×120)
- **Favicon:** `src/app/favicon.ico`

## Sub-brand: Brownview

**Legal:** RC 1374621 (registered company number).
**Positioning:** Chauffeur-driven rentals for internationals visiting Lagos. Same office/team as AutoTen.
**Logo:** `/brownviewlogohd.png` (also a low-res `/brownviewlogo.jpg` — prefer the HD version).
**Current page:** [/rentals](../../../src/app/rentals/page.tsx) — uses its own logo in the header, but otherwise borrows AutoTen's styling. No distinct color scheme yet.

## Voice (implied — not explicitly documented before)

From the existing copy, AutoTen's voice reads as:
- **Calm and confident** — not hype-driven ("Driven by Trust", not "THE BEST DEALS EVER")
- **Family business warmth** — "family-run dealership focused on quality vehicles and long-term trust"
- **Transparent** — "Clear, upfront pricing with no hidden costs"
- **Practical** — focuses on ownership support ("dependable after-sales support"), not aspirational lifestyle

Brownview's voice adds a **concierge** layer: "clean vehicles, punctual drivers who know the city."

## Gaps

- **No written brand voice doc** — the above is reverse-engineered from copy. Worth explicitly writing once.
- **No tone-of-voice examples** for WhatsApp replies, email templates, social posts.
- **Brownview branding is visually thin** — only the logo differentiates it.
