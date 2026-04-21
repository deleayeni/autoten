# Components Catalog

Every file in [src/components/](../../../src/components/). Use this to answer: "do I already have a component for X?"

## Layout components (on every page)

| File | Type | Purpose |
|---|---|---|
| [NavBar.tsx](../../../src/components/NavBar.tsx) | Client | Fixed top nav. Switches solid/transparent based on hero visibility via `IntersectionObserver`. Contains brand logo + 5 links + "View Cars" button. |
| [Footer.tsx](../../../src/components/Footer.tsx) | Server | Black 4-column footer: company info, quick links, opening hours, socials. Has dead links to `/privacy` and `/terms`. |

## Hero / display components

| File | Type | Purpose | Used on |
|---|---|---|---|
| [HeroVideo.tsx](../../../src/components/HeroVideo.tsx) | Server | Full-screen looping video hero with "Driven by Trust" + CTA. Wrapped in `<section id="hero">` so NavBar can observe it. | `/` |
| [HeroCarousel.tsx](../../../src/components/HeroCarousel.tsx) | Client | Embla autoplay carousel of 5 brand slides. Links to `/vehicles?brand=X` (filter not implemented). | `/vehicles` |
| [BrandLogos.tsx](../../../src/components/BrandLogos.tsx) | Client (unnecessarily) | Grid of 5 brand SVG logos. ⚠️ Has `"use client"` but uses no hooks. | `/` |

## Content components

| File | Type | Purpose | Used on |
|---|---|---|---|
| [VehicleCard.tsx](../../../src/components/VehicleCard.tsx) | Server | Card showing a single Car: image, brand/model, year/condition/transmission, price (₦ formatted), mileage + location. Not clickable yet (no VDP). | `/vehicles` |
| [TopBar.tsx](../../../src/components/TopBar.tsx) | Server | Thin strip with phone number + WhatsApp button. Uses `bg-primary` (shadcn grayscale) — ⚠️ should likely be `bg-[var(--color-primary)]` (brand red). | `/` (bottom) |
| [MapEmbed.tsx](../../../src/components/MapEmbed.tsx) | Server | Google Maps iframe of the Ikeja office. Hardcoded URL. | `/`, `/contact` |

## Orphans / dead code

| File | Status |
|---|---|
| [HamburgerMenu.tsx](../../../src/components/HamburgerMenu.tsx) | ⚠️ **Not imported anywhere.** Appears to be a stub for a mobile menu. NavBar currently does not render a hamburger — desktop nav shows at all breakpoints. |

## shadcn/ui primitives

| File | Type | Purpose |
|---|---|---|
| [ui/button.tsx](../../../src/components/ui/button.tsx) | — | shadcn `Button` with `cva` variants. Standard shadcn + **two custom variants added**: `dark` and `light`. Supports `asChild` via Radix Slot. |

## What's missing (obvious candidates)

- **VDP / VehicleDetail** — vehicle detail page + component
- **ContactForm** — real form with backend (currently only the rentals page has a mailto form)
- **WhatsAppButton** — reusable floating/inline CTA (currently inlined per-page)
- **Section** — repeated `<section className="mx-auto max-w-6xl px-4 py-12">` wrapper could be a component
- **PageHeader** — repeated `<h1 className="text-3xl font-bold">` pattern on most pages
- **BookingForm** — for the Brownview rental flow (PDF roadmap)
- **Mobile nav** — HamburgerMenu needs wiring into NavBar
