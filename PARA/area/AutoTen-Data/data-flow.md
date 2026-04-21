# Data Flow

End-to-end trace of how a row in Postgres becomes pixels on the user's screen.

## The only flow that currently exists

```
┌──────────────────────────────────────────────────────────────────┐
│  Browser requests /vehicles                                      │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  Vercel edge receives request → routes to Next.js server         │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  src/app/vehicles/page.tsx (async server component)              │
│    const cars: Car[] = await getPublishedAvailableCars();        │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  src/data/cars.ts :: getPublishedAvailableCars()                 │
│    - Calls supabaseServer() to get a client bound to cookies     │
│    - Builds query:                                                │
│        supabase.from("cars")                                      │
│          .select("id, brand, model, ...")                         │
│          .eq("published", true)                                   │
│          .eq("status", "available")                               │
│          .order("created_at", { ascending: false })               │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  src/lib/supabase/server.ts :: supabaseServer()                  │
│    - createServerClient from @supabase/ssr                       │
│    - Uses NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY│
│    - Reads cookies from next/headers for session (anon for now)  │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  HTTPS request to Supabase PostgREST API                         │
│    GET /rest/v1/cars?select=...&published=eq.true&status=...     │
│    Headers: apikey + Authorization (anon JWT)                    │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  Supabase Postgres                                                │
│    - PostgREST applies RLS policies (SELECT-for-anon on cars)    │
│    - Returns matching rows as JSON                                │
└──────────────────────┬───────────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────────┐
│  Back in Next.js server:                                          │
│    - data is cast as Car[] (from src/types/car.ts)                │
│    - page component renders VehicleCard for each                  │
│    - Next.js streams HTML to the browser                          │
└──────────────────────────────────────────────────────────────────┘
```

## Key properties of this flow

- **All data fetching is server-side.** No Supabase call happens in the browser. This keeps the API fast, hides request timing, and avoids loading spinners.
- **The anon key still ships to the browser** via `NEXT_PUBLIC_SUPABASE_ANON_KEY` — but only Next.js uses it, not client components (yet).
- **Cookies adapter exists but isn't doing much** — there's no auth yet, so the cookie handler in [server.ts](../../../src/lib/supabase/server.ts) is scaffolding for later.
- **The type contract is manual.** [src/types/car.ts](../../../src/types/car.ts) is hand-written to match the DB columns. If the DB changes, the type must be updated manually. (Better long-term: `supabase gen types typescript` to auto-generate.)

## Caching behavior

Currently: every request to `/vehicles` hits Supabase fresh. Next.js 15 defaults to dynamic rendering for async server components that use `next/headers` (which [server.ts](../../../src/lib/supabase/server.ts) does via `cookies()`).

**Not yet configured:**
- `export const revalidate = 60` for ISR (revalidate every N seconds)
- `unstable_cache` for request deduplication
- `fetch`-based caching with tags

For a dealership with inventory that changes daily, a 60-second revalidate would cut Supabase reads by ~99% with acceptable freshness.

## Flows that don't exist yet

- **Write flow** — publishing a car. Needs admin UI + server action using `service_role` key.
- **Authenticated flow** — admin login via Supabase Auth. `persistSession: true` is already set in [server.ts](../../../src/lib/supabase/server.ts), so the scaffolding is ready.
- **Lead capture flow** — contact form → `leads` table. Needs the table + a server action.
- **Booking flow** — rental request → `bookings` table + payment webhook. Big future build.
- **Storage flow** — uploading car images. Needs bucket + upload UI. See [storage.md](./storage.md).
