# Home — `/`

**File:** [src/app/page.tsx](../../../../src/app/page.tsx)
**Type:** Server component (no `"use client"`)
**Metadata:** Inherits from root [layout.tsx](../../../../src/app/layout.tsx) (`"Auto Ten — Driven by Trust"`)

## Page structure (top to bottom)

1. **Hero video** — full-screen looping mp4 with "Driven by Trust" headline + "View Vehicles" CTA
   - Component: [HeroVideo](../../../../src/components/HeroVideo.tsx)
   - Video file: `/brands/car-passing-through-highway-tunnel.mp4`

2. **Why Choose Us** — gray section with 3 cards (Premium Cars / Transparent Pricing / After-Sales Support)
   - Inline in [page.tsx](../../../../src/app/page.tsx)
   - CTA: "Read More" → `/about`

3. **Brand Logos** — Toyota, Lexus, Land Rover, Mercedes, Honda
   - Component: [BrandLogos](../../../../src/components/BrandLogos.tsx)
   - Nested **inside** the Why Choose Us section (not a sibling)

4. **TopBar** — phone + WhatsApp strip
   - Component: [TopBar](../../../../src/components/TopBar.tsx)
   - ⚠️ Rendered at bottom of page, not top. Unusual — most sites show TopBar above the header.

5. **Map Embed** — Google Maps iframe of the Ikeja office
   - Component: [MapEmbed](../../../../src/components/MapEmbed.tsx)

## Components used

- [HeroVideo](../../../../src/components/HeroVideo.tsx)
- [BrandLogos](../../../../src/components/BrandLogos.tsx)
- [TopBar](../../../../src/components/TopBar.tsx)
- [MapEmbed](../../../../src/components/MapEmbed.tsx)
- Plus root layout: NavBar + Footer

## Data

None. The homepage is fully static — no Supabase calls.

## Gaps / TODOs

- TopBar placement is weird (below content, not above). Consider moving to top.
- "Read More" button takes users to a page ([about](./about.md)) that is currently a stub.
- The hero CTA ("View Vehicles") is the main funnel entry — worth tracking clicks later (GA4 event, per the PDF plan).
- No testimonials, no featured cars, no "recent arrivals" — could pull 3 latest cars from Supabase.
