# External Integrations

Every third-party service AutoTen talks to (or plans to). Use this as the shopping list when pricing each new feature.

## Currently integrated

### Supabase (database + auth + storage)

- **Status:** ⚠️ Paused (project `autoten-website-db`, last active 24 Jun 2024). Data intact but must be restored to a new project. See [AutoTen-Data/_0.md](../AutoTen-Data/_0.md).
- **Purpose:** Primary Postgres database. Eventually: auth, file storage.
- **Package:** `@supabase/supabase-js`, `@supabase/ssr`
- **Env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Clients:** [server.ts](../../../src/lib/supabase/server.ts) (SSR), [client.ts](../../../src/lib/supabase/client.ts) (browser)
- **Docs:** [AutoTen-Data](../AutoTen-Data/_0.md) for full detail

### Google Fonts (Nunito Sans, Heebo)

- **Status:** ✅ Working
- **Purpose:** Brand typography
- **Integration:** `next/font/google` in [layout.tsx](../../../src/app/layout.tsx) — fonts are inlined at build time, zero runtime dependency

### Google Maps (embed)

- **Status:** ✅ Working
- **Purpose:** Office location display
- **Integration:** Raw iframe in [MapEmbed.tsx](../../../src/components/MapEmbed.tsx) — no API key needed because it's a public embed, not a JS API call
- **Tradeoff:** Free but styleable only via the embed's theme; no custom markers

### Vercel

- **Status:** ✅ Working
- **Purpose:** Hosting, CI/CD, CDN, edge network
- **Integration:** Auto-deploy from `main` branch
- **Free tier covers:** this project comfortably

## Planned (from the 90-day roadmap)

### Paystack or Flutterwave (payments)

- **Purpose:** Rental deposits and full payments for Brownview bookings
- **Pattern:** API route for webhook (`/api/paystack-webhook`) + server action to initialize a transaction
- **Env vars needed:** `PAYSTACK_SECRET_KEY`, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
- **Critical:** Webhook signature verification (HMAC)
- **Nigerian context:** Paystack is the default for NGN; Flutterwave also widely used. Both support card + bank transfer + USSD.

### WhatsApp Business API

- **Purpose:** Quote delivery, booking confirmations, pickup/return reminders, failed-payment follow-ups
- **Provider options:** Meta's direct API, or resellers like Twilio, Vonage, MessageBird
- **Pattern:** Server actions to send; API routes to receive inbound webhooks
- **Note:** Approval + template registration is a real process (days to weeks). Start early.

### Termii (SMS, Nigerian specialty)

- **Purpose:** Backup channel for reminders when WhatsApp isn't reachable
- **Env vars:** `TERMII_API_KEY`
- **Pattern:** Server action only (outbound)

### Email — Resend or SendGrid

- **Purpose:** Transactional email (receipts, agreements, password resets if Auth is added)
- **Resend vs SendGrid:** Resend has a cleaner React-email integration and simpler API; SendGrid is more established. Either works.
- **Env vars:** `RESEND_API_KEY` or `SENDGRID_API_KEY`
- **Pattern:** Server action, or API route if triggered by webhooks

### Google Analytics 4 (GA4)

- **Purpose:** Pageviews + custom events (WhatsApp click, call click, form submit, VDP view)
- **Integration:** Client-side script tag in [layout.tsx](../../../src/app/layout.tsx), optionally mirrored with server-side events for ad-blocker resilience
- **Env var:** `NEXT_PUBLIC_GA4_ID`

### Meta Pixel

- **Purpose:** Facebook/Instagram ad retargeting and conversion tracking
- **Integration:** Similar to GA4 — client-side pixel + optional server-side Conversions API
- **Env var:** `NEXT_PUBLIC_META_PIXEL_ID`

### Error tracking (Sentry)

- **Purpose:** Catch production errors; stack traces, user session replay, release tracking
- **Not in the original roadmap** but strongly recommended before going live with payments
- **Env vars:** `SENTRY_DSN` (server), `NEXT_PUBLIC_SENTRY_DSN` (client)

## Deferred / maybe

- **Looker Studio / Metabase** — KPI dashboards. Either works with Supabase as a source.
- **Cloudinary / uploadthing** — image optimization beyond Next.js's built-in `<Image>`. Probably unnecessary given Supabase Storage + Vercel CDN.
- **Algolia / Typesense** — car search. Only needed once inventory exceeds ~200 vehicles where Postgres full-text search feels slow.

## Integration priority order

Based on the roadmap and dependencies:

1. **Restore Supabase** (unblocks everything)
2. **GA4 + Meta Pixel** (cheap, unlocks measurement)
3. **Email (Resend)** (for lead notifications)
4. **WhatsApp API** (biggest NG-market leverage — but slow to onboard)
5. **Paystack** (needed for Phase 2 booking engine)
6. **Termii** (nice-to-have once WhatsApp is live)
7. **Sentry** (before Phase 2 payments ship)
