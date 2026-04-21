# 90-Day Roadmap

From the original planning PDF. Tracks the progression from "a website exists" to "a digital engine that generates leads and bookings."

## Phase 1 — Days 1–30: Foundation (in progress)

**Goal:** production-ready site with inventory, lead capture, and tracking.

| Deliverable | Status |
|---|---|
| Next.js site deployed on Vercel with fast VDPs + WhatsApp/call CTAs | 🟡 Partial — site deployed, VDPs don't exist yet, WhatsApp CTAs on rentals page only |
| Supabase inventory + admin list/edit, images to Storage, public read policy | 🟡 Partial — inventory reads work, no admin UI, RLS state unverified |
| Lead capture (forms + WhatsApp deep links) saved to Supabase; email/WA notification | 🔴 Not done — rentals has a `mailto:` form (not Supabase), no lead capture on other pages |
| Analytics: GA4 + Meta Pixel events + Looker Studio/Metabase view | 🔴 Not done |
| Monthly KPI report template + 90-day roadmap doc | 🟡 This doc is the roadmap. KPI reporting doesn't exist yet. |

## Phase 2 — Days 31–60: Rentals & Admin

**Goal:** online booking engine for Brownview, payments, and fleet ops.

| Deliverable | Status |
|---|---|
| Booking engine for rentals (availability calendar, daily/weekly rates, add-ons, deposit logic, pickup/dropoff) | 🔴 Not done |
| Deposit payments via Paystack or Flutterwave (server routes + webhook verification) | 🔴 Not done |
| Auto-generated rental agreement PDF sent after checkout | 🔴 Not done |
| Driver's license / ID upload to Supabase Storage | 🔴 Not done |
| Basic fleet dashboard (utilization %, revenue per car, upcoming maintenance) | 🔴 Not done |

## Phase 3 — Days 61–90: Growth & Automation

**Goal:** multi-channel reach, remarketing, WhatsApp automation.

| Deliverable | Status |
|---|---|
| Multi-channel listing exports (Facebook Marketplace, Instagram, Jiji/Autochek/Cars45 CSVs) | 🔴 Not done |
| Remarketing audiences (GA4 + Meta Pixel retargeting) | 🔴 Not done |
| WhatsApp Business API flows (quote, booking confirmation, pickup/return reminders) | 🔴 Not done |
| Review collection + Google Business Profile optimization | 🔴 Not done |
| Performance tuning + SEO for "car rental Lagos" + "buy used [brand] Lagos" | 🔴 Not done |

## Pulling back: highest-leverage gaps right now

1. **Vehicle Detail Pages (VDPs)** — currently clicking a [VehicleCard](../../../src/components/VehicleCard.tsx) does nothing. This is the single biggest conversion miss on the dealership side.
2. **Working contact funnel** — [/contact](../../../src/app/contact/page.tsx) has placeholder info and no form. Fix this before anything fancy.
3. **Admin inventory intake** — currently adding cars requires manual Supabase dashboard editing. Mobile-friendly admin form would save real staff time.
4. **Lead capture + basic analytics** — you can't improve what you don't measure.

## Pulling back: what to defer

- Booking engine, payments, e-sign — Phase 2 is a big build. Don't start it until Phase 1 is solid.
- Multi-channel listings — manual for now is fine.
- Dark mode, animations, "nice to haves" — not in the 90-day plan.

## Re-baselining

This roadmap is from the original PDF, written before the site existed. As of **2026-04-18** (first scan), most of Phase 1 is only partially done after months of no activity. Honest restart: pick one Phase 1 gap, ship it end-to-end, then the next.
