# Storage Strategy

How car and brand images are hosted.

## Current state

AutoTen uses **two different image sources**:

### 1. Static assets (in the repo)

Files in `public/` — served by Vercel's CDN directly from the build.

| Location | Used for |
|---|---|
| `public/logo.png` | NavBar logo |
| `public/brownviewlogohd.png` | Brownview logo on /rentals |
| `public/brands/*.webp` | HeroCarousel backgrounds |
| `public/brands/car-passing-through-highway-tunnel.mp4` | HeroVideo background |
| `public/icons/*.svg` | Brand logos (BrandLogos), social icons (Footer) |
| `public/cars/landcruiser-2020-main.webp` | Unused |
| `public/office/*.webp` | Unused (8 files) |

**Advantages:** free, fast, cached globally, no egress cost.
**Disadvantages:** requires a redeploy to update; not editable from an admin UI.

### 2. Dynamic `image_url` column

The `cars` table has an `image_url` column ([src/types/car.ts:17](../../../src/types/car.ts)). [VehicleCard](../../../src/components/VehicleCard.tsx) passes it straight to `<Image src={car.image_url || "/placeholder-car.jpg"} />`.

**Unknowns:**
- Are current `image_url` values pointing to Supabase Storage, external CDNs, or Vercel public assets?
- Is there a Supabase Storage bucket set up at all?
- If yes, is the bucket public?

**You need to check the Supabase dashboard** → Storage tab → buckets.

## What the PDF proposed

From the planning doc:

> You already store `image_url` per row — good. If those are Supabase Storage public URLs, you're set. If you only have paths, you can build a public URL at runtime:
>
> ```ts
> const { data } = supabase.storage.from("car-images").getPublicUrl("toyota/camry-main.webp");
> const publicUrl = data.publicUrl;
> ```

So the intended architecture is: **Supabase Storage bucket named `car-images` (or similar), public read access**, storing one or more images per car, with `image_url` holding either the full public URL or a path.

## next.config.ts consideration

When `<Image src={...} />` receives an external URL, Next.js requires the domain to be listed in `next.config.ts` under `images.remotePatterns` — otherwise it throws. Check that file to see if your Supabase project hostname is whitelisted.

## Recommended strategy going forward

1. **Keep in `public/`**: logos, icons, hero video, brand backgrounds, office photos. These rarely change and benefit from CDN.
2. **Move to Supabase Storage**: per-car images. Should change often (new inventory), should be editable from a future admin UI.
3. **Store multiple images per car** — add an `images jsonb` column (array of URLs) alongside `image_url`, use `image_url` as the "hero/thumbnail" pointer.

## Missing `/placeholder-car.jpg`

[VehicleCard.tsx:33](../../../src/components/VehicleCard.tsx#L33) falls back to `/placeholder-car.jpg` when `image_url` is null. That file **doesn't exist** in `public/`. Any car with a null `image_url` will render a broken image.

**Fix options:**
- Add a real placeholder at `public/placeholder-car.jpg`
- Point at an existing brand image (e.g. `public/brands/toyota.webp`)
- Use a data-URL SVG placeholder inline

## Action items

- [ ] Check Supabase Storage in dashboard — document bucket names, public/private, naming convention
- [ ] Check [next.config.ts](../../../next.config.ts) — is the Supabase hostname in `remotePatterns`?
- [ ] Create `/placeholder-car.jpg` or change the VehicleCard fallback
- [ ] Decide: is `image_url` a full URL or a storage path? Consistent either way.
