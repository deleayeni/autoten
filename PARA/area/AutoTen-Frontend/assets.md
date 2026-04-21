# Public Assets Inventory

Everything in [public/](../../../public/). These are served as-is at the site root.

## Logos

| File | Use |
|---|---|
| `/logo.png` | AutoTen logo — shown in [NavBar](../../../src/components/NavBar.tsx) (120×120) |
| `/brownviewlogo.jpg` | Brownview logo (low-res, appears unused) |
| `/brownviewlogohd.png` | Brownview HD logo — shown on [/rentals](../../../src/app/rentals/page.tsx) header |

## Brand images — `public/brands/`

Used as backgrounds in [HeroCarousel](../../../src/components/HeroCarousel.tsx):

| File | Brand |
|---|---|
| `toyota.webp` | Toyota slide |
| `lexus.webp` (+ `.avif`) | Lexus slide |
| `landrover.webp` (+ `.jpg`) | Land Rover slide |
| `mercedes.webp` (+ `.jpg`) | Mercedes-Benz slide |
| `honda.webp` (+ `.avif`) | Honda slide |
| `car-passing-through-highway-tunnel.mp4` | Homepage hero video |

## Brand logo icons — `public/icons/`

SVGs used in [BrandLogos](../../../src/components/BrandLogos.tsx) and [Footer](../../../src/components/Footer.tsx):

**Car brands (BrandLogos):**
- `toyota.svg`
- `lexus.svg`, `lexus-2.svg` (latter is used)
- `land-rover.svg`
- `mercedes-benz.svg`
- `honda.svg`

**Social icons (Footer):**
- `whatsapp.svg`
- `instagram.svg`
- `facebook.svg`
- `twitter.svg`

**Other:**
- `brownviewlogo.jpg` (duplicate of `/brownviewlogo.jpg` — redundant)

## Cars — `public/cars/`

| File | Use |
|---|---|
| `landcruiser-2020-main.webp` | ⚠️ **Not referenced anywhere in code.** Probably intended for a car listing. |

## Office photos — `public/office/`

8 files: `office1.webp` through `office8.webp`.

⚠️ **None are used anywhere in the codebase.** These are gold for an About page refresh.

## Next.js / Vercel default assets

- `next.svg`, `vercel.svg`, `globe.svg`, `window.svg`, `file.svg` — scaffold leftovers, safe to delete unless repurposed.

## Missing (referenced but doesn't exist)

| Reference | Where |
|---|---|
| `/placeholder-car.jpg` | [VehicleCard](../../../src/components/VehicleCard.tsx) fallback when `image_url` is null |

## Gaps / TODOs

- **Delete duplicates**: `/brownviewlogo.jpg` vs `/icons/brownviewlogo.jpg`, `landrover.webp` + `.jpg`, `mercedes.webp` + `.jpg`, etc. Keep `.webp`, drop the rest unless there's a fallback reason.
- **Delete Next.js scaffold icons** (`next.svg`, `vercel.svg`, etc.) unless used.
- **Add `/placeholder-car.jpg`** or change VehicleCard's fallback to an existing image.
- **Use the office photos** on [/about](./pages/about.md) — they're wasted storage right now.
- **Car images** — only 1 exists. The Supabase `cars` table's `image_url` column probably stores external URLs; confirm whether any should live in `public/cars/` or all in Supabase Storage.
