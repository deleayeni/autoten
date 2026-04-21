# AutoTen — Project Guide

## What is this?
AutoTen is a car dealership website for a Lagos, Nigeria-based business. It also has a sub-brand "Brownview" for chauffeur-driven car rentals. Live at autoten.vercel.app.

## Tech Stack
- **Framework:** Next.js 15.5 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 (CSS-first config in globals.css, no tailwind.config.js)
- **UI Components:** shadcn/ui (new-york style, Lucide icons)
- **Database:** Supabase (PostgreSQL) — car inventory in `cars` table
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Carousel:** Embla Carousel with autoplay plugin
- **Fonts:** Nunito Sans (headings via `font-display`), Heebo (body via `font-sans`)

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run lint` — ESLint check
- No test framework set up yet

## Project Structure
- `src/app/` — Pages (App Router file-based routing)
- `src/components/` — React components (flat structure, `ui/` subfolder for shadcn)
- `src/data/` — Supabase query functions
- `src/lib/supabase/` — Supabase client setup (server.ts + client.ts)
- `src/types/` — TypeScript type definitions
- `public/` — Static assets (brands/, cars/, icons/, office/)

## Git Workflow
- `develop` — Working branch, make changes here
- `main` — Production branch, auto-deploys to Vercel
- Merge `develop` → `main` when ready to deploy
- CI runs lint + build on push/PR to both branches

## Conventions
- Use `@/` path alias for imports (e.g., `@/components/NavBar`)
- Server components by default; only add `"use client"` when needed
- Supabase queries go in `src/data/` files, not inline in page components
- Brand colors: CTA red (#e10600), black (#0a0a0a) for navbar/footer
- Use Tailwind utility classes; custom component classes (.h1, .h2, .lead) defined in globals.css
- Environment variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

## Key Data
- Cars table fields: id, brand, model, year, price, condition, status, mileage, transmission, fuel, body, doors, seats, color, location, image_url, published
- Only cars with `published = true` and `status = "available"` are shown on the site

## Working with Claude in this repo

This project uses the **PARA method** for organizing tasks and context. See [PARA/para-rules.md](PARA/para-rules.md) — read it before starting any multi-step task.

**Key rule:** multi-step tasks begin with a numbered folder in `PARA/project/` (e.g. `1-contact-info-fix/`) containing a `_0.md` brief. Propose the folder name to the user before creating it.
