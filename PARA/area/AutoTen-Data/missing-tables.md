# Missing Tables

Tables the 90-day roadmap calls for but don't exist yet. Maps each to the feature that needs it.

## `leads`

**Unlocks:** contact form submissions, CRM pipeline, lead source attribution.
**Used by:** [/contact](../AutoTen-Frontend/pages/contact.md) form (doesn't exist yet), any "interested in this car" button on future VDPs.

### Proposed schema

```sql
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  source text NOT NULL,           -- 'contact-form', 'vdp-whatsapp', 'vdp-call', 'rentals-form'
  car_id uuid REFERENCES cars(id),  -- nullable; null for general inquiries
  name text NOT NULL,
  phone text,
  email text,
  message text,
  status text DEFAULT 'new',      -- 'new', 'contacted', 'qualified', 'won', 'lost'
  notes text,
  assigned_to uuid                 -- staff user ID, nullable
);
```

### RLS

- `anon`: `INSERT` allowed (anyone can submit a lead), `SELECT` denied (no reading leads from the public site)
- `authenticated`: `SELECT` + `UPDATE` for staff roles

## `bookings`

**Unlocks:** the Brownview online booking engine.
**Used by:** `/rentals` booking flow (doesn't exist yet).

### Proposed schema

```sql
CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  vehicle_id uuid REFERENCES fleet(id),
  customer_name text NOT NULL,
  customer_email text,
  customer_phone text,
  start_date date NOT NULL,
  end_date date NOT NULL,
  pickup_location text,
  dropoff_location text,
  total_price numeric,
  deposit_amount numeric,
  payment_status text,             -- 'pending', 'deposit-paid', 'paid', 'refunded'
  payment_reference text,          -- Paystack/Flutterwave transaction ID
  status text DEFAULT 'pending',   -- 'pending', 'confirmed', 'in-progress', 'completed', 'cancelled'
  notes text
);
```

## `fleet`

**Unlocks:** rental inventory management (separate from sale inventory in `cars`).
**Used by:** booking engine, fleet utilization dashboard.

### Proposed schema

```sql
CREATE TABLE public.fleet (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand text NOT NULL,
  model text NOT NULL,
  year int,
  category text,                   -- 'sedan', 'suv', 'luxury-suv', 'van'
  daily_rate numeric,
  weekly_rate numeric,
  available boolean DEFAULT true,
  maintenance_due date,
  image_url text,
  notes text
);
```

## `add_ons`

**Unlocks:** booking extras (driver, child seat, fuel-arranged).
**Used by:** booking engine pricing.

### Proposed schema

```sql
CREATE TABLE public.add_ons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric,
  price_type text                  -- 'per-day', 'per-trip', 'flat'
);

CREATE TABLE public.booking_add_ons (
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE,
  add_on_id uuid REFERENCES add_ons(id),
  PRIMARY KEY (booking_id, add_on_id)
);
```

## `users` / profiles

**Unlocks:** admin authentication, staff CRM access, audit trail ("who changed this car's price").
**Used by:** future admin UI.

Supabase Auth provides `auth.users` out of the box. You'd add a `public.profiles` table keyed by `auth.uid()` to store role info (admin, sales, viewer).

## Priority order

If you implement these in phases:

1. **`leads`** — smallest, unlocks contact form (Phase 1)
2. **`profiles`** — needed before any admin UI
3. **`fleet` + `add_ons`** — needed for booking engine (Phase 2)
4. **`bookings` + `booking_add_ons`** — the big one (Phase 2)

## Keep it simple

Resist the urge to add everything at once. Each table = more RLS policies, more places to bug-check, more dashboard screens to build. Ship `leads` alone first and see what you learn.
