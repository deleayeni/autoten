# Row Level Security (RLS) Policies

## Current state (inferred, not verified)

The site works — you can see cars on [/vehicles](../../../src/app/vehicles/page.tsx) when visiting the public site without being logged in. That's only possible if one of these is true:

1. **RLS is enabled on `cars` + a SELECT policy allows `anon` to read** (the correct setup)
2. **RLS is not enabled on `cars`** — all rows are accessible to everyone with the anon key (works, but dangerous if you later add private columns)

**⚠️ You must verify which in the Supabase dashboard.**

How to check:
1. Supabase → Table editor → `public.cars` → Policies tab
2. Look for the RLS toggle (should say "RLS enabled")
3. Look for at least one policy, e.g.:
   - Name: `Allow read-only for everyone`
   - Target roles: `anon`
   - Command: `SELECT`
   - USING: `true` (or `published = true AND status = 'available'` for extra safety)

## The correct/recommended setup

From the original PDF plan:

```sql
-- Enable RLS
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow read-only for everyone"
  ON public.cars
  FOR SELECT
  TO anon
  USING (true);
```

### Stronger variant (recommended for defense-in-depth)

Instead of `USING (true)`, restrict at the DB level too:

```sql
CREATE POLICY "Anon can read published available cars"
  ON public.cars
  FOR SELECT
  TO anon
  USING (published = true AND status = 'available');
```

This means even if someone drops the `.eq("published", true)` filter in code, the DB still won't return drafts. Belt-and-suspenders.

## Why RLS matters here

Your `anon` key is **shipped to every browser** that visits the site (it's embedded in every request through `NEXT_PUBLIC_SUPABASE_ANON_KEY`). Anyone can take that key and make arbitrary queries against your Supabase API.

**RLS is the actual security boundary.** Without it, the anon key = full read access to every row of every table. With it, only rows the policy allows are visible.

## Write access

The public site never writes to `cars`. Writes (publishing new inventory, editing price) should happen via:

- **The Supabase dashboard** (manual, current state)
- **A future admin UI** using the `service_role` key in a server action (never exposed to the browser)
- **Authenticated users** with a policy like `TO authenticated USING (auth.uid() = owner_id)` (if multi-user)

None of these are set up yet.

## Related reading

- [Resources/Supabase-and-Data/_7-row-level-security.md](../../resources/Supabase-and-Data/_0.md) — planned deep-dive lecture
- [Resources/Web-Security/_4-rls-as-security-primitive.md](../../resources/Web-Security/_0.md) — planned security-framing of the same topic

## Action items

- [ ] Verify RLS is enabled on `cars` in the Supabase dashboard
- [ ] Screenshot / write down the exact current policy text into this file
- [ ] If only `USING (true)` is set, consider tightening to `published = true AND status = 'available'`
- [ ] Document policies for any other tables (currently: none)
