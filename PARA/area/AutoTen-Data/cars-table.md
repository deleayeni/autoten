# `cars` table

The only table the app currently reads from. Stores dealership inventory.

## Schema (inferred from code)

Reconstructed from [src/data/cars.ts](../../../src/data/cars.ts) (query), [src/types/car.ts](../../../src/types/car.ts) (TS type), and the CLAUDE.md field list.

| Column | Type | Nullable | Purpose |
|---|---|---|---|
| `id` | text / uuid | no | Primary key |
| `brand` | text | no | e.g. "Toyota", "Lexus", "Mercedes-Benz" |
| `model` | text | no | e.g. "Land Cruiser", "G-Class" |
| `year` | int | yes | Model year |
| `price` | numeric | yes | NGN price; formatted with `₦` in [VehicleCard](../../../src/components/VehicleCard.tsx) |
| `condition` | text | yes | "New", "Foreign Used", "Nigerian Used" (values unverified) |
| `status` | text | yes | **Filter**: only `"available"` is shown on the site |
| `mileage` | int | yes | Kilometers. Displayed as `{toLocaleString()} km`. |
| `transmission` | text | yes | "Automatic" / "Manual" |
| `fuel` | text | yes | "Petrol" / "Diesel" / "Hybrid" / "Electric" (unverified) |
| `body` | text | yes | "SUV", "Sedan", "Pickup" (unverified) |
| `doors` | int | yes | e.g. 4 |
| `seats` | text | yes | **Note:** text, not int — allows values like `"4 (VIP)"` per the PDF |
| `color` | text | yes | |
| `location` | text | yes | Displayed on card next to mileage |
| `image_url` | text | yes | Public URL (Supabase Storage or external). Fallback: `/placeholder-car.jpg` (missing!) |
| `published` | boolean | — | **Filter**: only `true` rows appear on the site |
| `created_at` | timestamp | — | Used for `ORDER BY created_at DESC` in [cars.ts](../../../src/data/cars.ts) |

## Known filter logic

The public site only shows rows where:

```sql
published = true
AND status = 'available'
ORDER BY created_at DESC
```

Everything else stays hidden. This means `published` acts as a draft flag, and `status` can be used for "sold" / "reserved" / "hold" without deleting the row.

## Unknowns

- **Actual DDL** — no migration file in the repo. Would be useful to dump `pg_dump --schema-only` and commit it.
- **Enum constraints** — are `status` and `condition` check-constrained, or free text? Unknown.
- **Indexes** — `(published, status, created_at)` would be the obvious composite index for the main query; unverified.
- **Image storage strategy** — `image_url` could be Supabase Storage public URLs or external (e.g. Cloudinary, CDN). Unknown without inspecting real rows. See [storage.md](./storage.md).

## Potential schema additions (later)

Per the roadmap:
- `slug` — URL-safe identifier for VDPs (e.g. `/vehicles/toyota-land-cruiser-2020`)
- `images` (jsonb array) — multiple images per car instead of a single `image_url`
- `features` (jsonb or text[]) — list of features/extras
- `vin` — Vehicle Identification Number
- `description` — long-form marketing copy
