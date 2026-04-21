# Server / Client Boundaries

Where Next.js runs code on the server vs. ships it to the browser. This is the single most important mental model for an App Router app.

## Files that run ONLY on the server

| File | Why server-only |
|---|---|
| [src/app/layout.tsx](../../../src/app/layout.tsx) | Async / uses server-only APIs (`next/font`) |
| [src/app/page.tsx](../../../src/app/page.tsx) | Server component by default; no `"use client"` directive |
| [src/app/vehicles/page.tsx](../../../src/app/vehicles/page.tsx) | `async` server component — calls Supabase |
| [src/app/about/page.tsx](../../../src/app/about/page.tsx) | Server component |
| [src/app/contact/page.tsx](../../../src/app/contact/page.tsx) | Server component |
| [src/app/rentals/page.tsx](../../../src/app/rentals/page.tsx) | Server component |
| [src/lib/supabase/server.ts](../../../src/lib/supabase/server.ts) | Uses `cookies()` from `next/headers` (server-only) |
| [src/data/cars.ts](../../../src/data/cars.ts) | Calls `supabaseServer()` |
| [src/components/HeroVideo.tsx](../../../src/components/HeroVideo.tsx) | Server component |
| [src/components/VehicleCard.tsx](../../../src/components/VehicleCard.tsx) | Server component |
| [src/components/Footer.tsx](../../../src/components/Footer.tsx) | Server component |
| [src/components/TopBar.tsx](../../../src/components/TopBar.tsx) | Server component |
| [src/components/MapEmbed.tsx](../../../src/components/MapEmbed.tsx) | Server component (just renders an iframe) |

## Files that run on BOTH (rendered server-side, hydrated client-side)

Marked with `"use client"`:

| File | Why client-needed |
|---|---|
| [src/components/NavBar.tsx](../../../src/components/NavBar.tsx) | `useState`, `useEffect`, `IntersectionObserver`, `usePathname` |
| [src/components/HeroCarousel.tsx](../../../src/components/HeroCarousel.tsx) | `useEmblaCarousel` hook, Autoplay plugin |
| [src/components/BrandLogos.tsx](../../../src/components/BrandLogos.tsx) | ⚠️ Has `"use client"` but uses no hooks — directive is unnecessary |
| [src/components/HamburgerMenu.tsx](../../../src/components/HamburgerMenu.tsx) | `useState` (but file is unused — dead code) |
| [src/lib/supabase/client.ts](../../../src/lib/supabase/client.ts) | Explicit `"use client"` at top (currently unused) |
| [src/components/ui/button.tsx](../../../src/components/ui/button.tsx) | No explicit `"use client"`, but consumed by client components |

## The rule

- **Default:** everything is a server component. Faster, smaller bundle, can fetch data directly.
- **Only add `"use client"` when** the component needs: `useState`, `useEffect`, event handlers (`onClick`), browser APIs, hooks from React, or third-party libraries that assume the browser.
- **Server components can import client components**, but not vice versa (a client component can't import a server component directly).
- **Props passed from server → client** must be serializable (no functions, no class instances).

## What's at the boundary

[NavBar.tsx](../../../src/components/NavBar.tsx) is the textbook example: it reads from `usePathname()` (client hook) and manipulates the DOM via `IntersectionObserver` (client-only). It *must* be `"use client"`. But it's imported into the root [layout.tsx](../../../src/app/layout.tsx) (server component). Next.js handles the hydration seamlessly.

## Backend-only concerns

Things that **must** run on the server and never ship to the browser:

1. **The Supabase service_role key** — god-mode admin key. Never expose.
2. **Any third-party API secret** — Paystack secret key, Resend API key, WhatsApp tokens (future).
3. **Database queries that bypass RLS** — currently none, but future admin flows will need this.
4. **Webhooks** — Paystack/Flutterwave payment confirmations (future).

These go in:

- API routes (`src/app/api/*/route.ts`)
- Server actions (`"use server"` functions)
- Never in a file with `"use client"`

## Related

- [AutoTen-Data/data-flow.md](../AutoTen-Data/data-flow.md) — end-to-end trace of a server-side Supabase query
- [AutoTen-Frontend/components.md](../AutoTen-Frontend/components.md) — server/client type per component
- Planned lecture: [Resources/Nextjs/_3-server-vs-client-components.md](../../resources/Nextjs/_0.md)
