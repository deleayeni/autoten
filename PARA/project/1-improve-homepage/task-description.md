# Task — Improve the Homepage

## Goal

Ship a redesigned AutoTen homepage that reads as a premium Lagos dealership, not a generic dealership template. The new homepage must be built with the project's real tech stack (Tailwind v4 + shadcn/ui + `next/font`) and be visibly, measurably better than the current one.

## Scope

**In scope:**

- [src/app/page.tsx](../../../src/app/page.tsx) and every component it renders: [HeroVideo](../../../src/components/HeroVideo.tsx), [BrandLogos](../../../src/components/BrandLogos.tsx), [TopBar](../../../src/components/TopBar.tsx), [MapEmbed](../../../src/components/MapEmbed.tsx), and the inline "Why Choose Us" block.
- Any new components introduced to support the final design.
- Design tokens in [globals.css](../../../src/app/globals.css) — allowed to extend (new colors/fonts), not allowed to silently redefine existing brand tokens.
- Structural bugs already flagged in [PARA/area/AutoTen-Frontend/styling.md](../../area/AutoTen-Frontend/styling.md) that live inside homepage components.

**Out of scope (for this project):**

- Other routes: `/vehicles`, `/rentals`, `/about`, `/contact` — they inherit whatever tokens/components we lock in, but their redesign is a future project.
- Fetching featured vehicles live from Supabase on the homepage — flagged as a future enhancement, not required for ship.
- Dark-mode toggle — the infrastructure exists (`@custom-variant dark`) but wiring it up is out of scope.
- [Footer](../../../src/components/Footer.tsx) redesign — touched only if the new homepage makes it obviously broken.

## Success Criteria

1. One single homepage design is merged to `main` and auto-deployed via Vercel.
2. The final code uses **Tailwind v4 utilities + shadcn/ui `<Button>` + `next/font/google`** — no bespoke scoped CSS files, no BEM-style class trees.
3. A mood board and design decisions are documented in this project folder so the next agent (and future-Dele) can stay consistent.
4. Every structural bug listed in [styling.md](../../area/AutoTen-Frontend/styling.md) that lives in homepage components is fixed before merge:
   - `bg-primary` in [TopBar](../../../src/components/TopBar.tsx) renders actual brand red, not shadcn grayscale
   - `.btn btn-dark` usage in [page.tsx](../../../src/app/page.tsx) either defined in globals or migrated to `<Button variant="dark">`
   - `gap-30` bug in [BrandLogos](../../../src/components/BrandLogos.tsx) uses a real Tailwind gap value
   - Typography is consistent (one source of truth — either `.h1`/`.h2` component classes or raw utilities, not both)
5. The homepage passes a Lighthouse run on mobile with Performance ≥ 85 and Accessibility ≥ 95.
6. Dele looks at the final page on phone + laptop and agrees it's better than what's on autoten.vercel.app today.

## Why

The current homepage reads as a generic template — weak hero copy ("Driven by Trust / Find your next car with us"), text-only pillar cards with no icons, [TopBar](../../../src/components/TopBar.tsx) misplaced in the middle of the page, [HeroCarousel](../../../src/components/HeroCarousel.tsx) built but never used, no featured vehicles, no trust markers. For a dealership selling Toyota / Lexus / Mercedes / Land Rover / Honda to Lagos buyers, the homepage is the single most important trust-signal surface — and right now it doesn't earn that trust on first impression.

This project also has a secondary goal: Dele is relearning frontend. Going through a proper UI/UX process (not just "iterate in the browser") is part of the point. The lecture at [resources/UI-UX-Design-Process/_1-the-traditional-design-process.md](../../resources/UI-UX-Design-Process/_1-the-traditional-design-process.md) is the backbone of this project's method.

## Related

- **Current homepage code:** [src/app/page.tsx](../../../src/app/page.tsx)
- **Design exploration preview routes** (completed Phase 1):
  - [src/app/design/option-a/](../../../src/app/design/option-a/) — dark cinematic
  - [src/app/design/option-b/](../../../src/app/design/option-b/) — editorial luxury
  - [src/app/design/option-c/](../../../src/app/design/option-c/) — sharp modern retail
- **Known styling gaps:** [PARA/area/AutoTen-Frontend/styling.md](../../area/AutoTen-Frontend/styling.md)
- **Design process lecture:** [PARA/resources/UI-UX-Design-Process/_1-the-traditional-design-process.md](../../resources/UI-UX-Design-Process/_1-the-traditional-design-process.md)
- **Live site:** <https://autoten.vercel.app>
