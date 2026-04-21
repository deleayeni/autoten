# KPIs — What to Measure

From the PDF's proposed KPIs for the Remote Head of Digital role.

## Lead generation (dealership)

| Metric | How to measure | Current state |
|---|---|---|
| Qualified leads per month | GA4 + form submissions → Supabase `leads` table | ❌ No tracking, no `leads` table |
| WhatsApp clicks from VDPs | Custom GA4 event on click | ❌ VDPs don't exist, no tracking |
| Call clicks | GA4 event on `tel:` link | ❌ No tracking |
| Lead → sale conversion rate | CRM status updates | ❌ No CRM |
| Cost per lead | Ad spend ÷ leads | ❌ No ads, no attribution |

## Bookings (rentals / Brownview)

| Metric | How to measure | Current state |
|---|---|---|
| Bookings per month | Supabase `bookings` table | ❌ Table doesn't exist, no online booking |
| Fleet utilization % | (days rented ÷ days available) per car | ❌ No booking data |
| Revenue per car | Rolling 30-day revenue per fleet row | ❌ No revenue tracking |
| Average booking value | Total revenue ÷ bookings | ❌ |

## Technical health

| Metric | How to measure | Current state |
|---|---|---|
| Site speed (LCP, CLS, INP) | Vercel Analytics / PageSpeed Insights | 🟡 Vercel has built-in Web Vitals; not yet reviewed |
| Uptime | Vercel dashboard | ✅ Vercel monitors this for free |
| Build success rate | GitHub Actions history | ✅ CI exists at [.github/workflows/ci.yml](../../../.github/workflows/ci.yml) |
| Error rate | Sentry / Vercel Logs | ❌ No error tracker installed |

## Operational SLAs (per PDF)

| SLA | Target |
|---|---|
| P1 bug response | < 24h |
| Feature change requests | Via defined change-request path |
| WhatsApp lead response | Fast (humans, not automated) — track with timestamps |

## What to set up first

The PDF's proposed starter stack:

1. **Google Analytics 4** — pageviews + custom events (WhatsApp click, call click, form submit)
2. **Meta Pixel** — for future Facebook/Instagram ad retargeting
3. **Server-side events** — for reliable attribution even when ad blockers strip client-side pixels
4. **Monthly report** — Looker Studio or Metabase dashboard pulling from GA4 + Supabase

## The most important KPI right now

**None of these metrics matter until:**
- There's a way to submit a lead (contact form, not placeholder text)
- There are VDPs to click WhatsApp from
- There's an admin UI so inventory updates don't require dashboard access

Tracking empty funnels produces zero insight. Fix the funnel first, track second.

## Monthly KPI report template (placeholder)

Not written yet. When it exists, it should live here as `monthly-report-template.md`.
