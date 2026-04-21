# Vehicles — `/vehicles`

**File:** [src/app/vehicles/page.tsx](../../../../src/app/vehicles/page.tsx)
**Type:** **Async server component** — fetches from Supabase at request time
**Metadata:** `"Vehicles • Auto Ten"`

## Page structure (top to bottom)

1. **Spacer** `pt-[var(--header-h)]` — pushes content below fixed NavBar
2. **Hero carousel** — full-width rotating brand slides with autoplay
   - Component: [HeroCarousel](../../../../src/components/HeroCarousel.tsx)
   - Slides link to `/vehicles?brand=<Brand>` (query param filter — **not yet implemented** on this page)
3. **Heading + subheading** — "Vehicles" / "Browse our latest inventory."
4. **Car grid** — responsive 1/2/3 columns of [VehicleCard](../../../../src/components/VehicleCard.tsx)
   - Empty state: "No vehicles available right now."

## Data flow

```
VehiclesPage()  [server]
  → getPublishedAvailableCars()   [src/data/cars.ts]
    → supabaseServer()            [src/lib/supabase/server.ts]
      → Supabase cars table
        WHERE published = true AND status = 'available'
        ORDER BY created_at DESC
```

Returned rows are typed as [`Car`](../../../../src/types/car.ts).

## Components used

- [HeroCarousel](../../../../src/components/HeroCarousel.tsx) (client)
- [VehicleCard](../../../../src/components/VehicleCard.tsx) (server)

## Gaps / TODOs

- **No filtering.** The HeroCarousel CTAs link to `?brand=Toyota` etc., but this page doesn't read `searchParams` to filter.
- **No vehicle detail pages (VDPs).** Clicking a VehicleCard does nothing — the card isn't a link.
- **No pagination.** Fine for now (small inventory), but will matter as cars grow.
- **No sort/filter UI** — brand, price range, year, body type all missing.
- Missing `placeholder-car.jpg` in `public/` — VehicleCard falls back to it when `image_url` is null.
