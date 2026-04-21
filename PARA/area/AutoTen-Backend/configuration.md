# Configuration

## [next.config.ts](../../../next.config.ts)

The whole file, annotated:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow <Image> to load from one Supabase project's public storage bucket.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mswknjxlvcfhkbrulymt.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  // Referrer policy applied globally. Helps when you later use signed URLs.
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
```

### Why `remotePatterns` matters

Next.js's `<Image>` component refuses to load external images unless the hostname is explicitly allowed. Without this, every car image from Supabase Storage would fail with an unhelpful error. The narrow allow-list (`/storage/v1/object/public/**`) is deliberate — only public bucket paths are allowed, not signed URLs or private paths.

### ⚠️ The hostname is tied to the paused project

The hostname `mswknjxlvcfhkbrulymt.supabase.co` matches the **old paused Supabase project**. When you restore to a new project, the hostname changes (it's the new project's ref). This file must be updated or every car image breaks.

Action: when restoring, update this to the new Supabase project hostname.

### Why the Referrer-Policy header

`strict-origin-when-cross-origin` sends the full referrer for same-origin requests but only the origin (no path) for cross-origin. Prevents leaking URL paths to third parties. Future signed Supabase Storage URLs benefit from this.

## Environment variables

### Currently used

| Variable | Scope | Where | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Public (browser + server) | [server.ts](../../../src/lib/supabase/server.ts), [client.ts](../../../src/lib/supabase/client.ts) | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public (browser + server) | same as above | Supabase anon/publishable key |

### Where they live

- **Local development:** `.env.local` at repo root (git-ignored). There's also a `.env.local.backup` — probably a snapshot, also git-ignored.
- **Production:** Vercel dashboard → project settings → Environment Variables

### The `NEXT_PUBLIC_` rule

Next.js only inlines variables prefixed `NEXT_PUBLIC_` into client-side bundles. Everything else stays server-only. **This is a literal security boundary**: anything prefixed is shipped to every browser. Anything not prefixed is safe on the server.

Currently both Supabase vars are public — which is correct for these specific keys, because RLS is the actual security layer (see [AutoTen-Data/rls-policies.md](../AutoTen-Data/rls-policies.md)).

### Variables you'll need soon (per the roadmap)

| Variable | Scope | When needed |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only | Admin writes, bypassing RLS |
| `PAYSTACK_SECRET_KEY` | Server-only | Booking engine payments |
| `PAYSTACK_PUBLIC_KEY` | Public | Client-side Paystack widget |
| `RESEND_API_KEY` / `SENDGRID_API_KEY` | Server-only | Transactional email |
| `TERMII_API_KEY` | Server-only | SMS reminders |
| `WHATSAPP_API_TOKEN` | Server-only | WhatsApp Business API |
| `NEXT_PUBLIC_GA4_ID` | Public | Google Analytics |
| `NEXT_PUBLIC_META_PIXEL_ID` | Public | Meta ad retargeting |

## [tsconfig.json](../../../tsconfig.json)

Standard Next.js TypeScript config. Strict mode enabled. Path alias `@/*` → `./src/*` (used everywhere as `@/components/...`, `@/data/...`, etc.).

## [eslint.config.mjs](../../../eslint.config.mjs)

Flat config (ESLint 9 style). Extends Next.js's default rules. Runs in CI via the lint step in [.github/workflows/ci.yml](../../../.github/workflows/ci.yml).

## [postcss.config.mjs](../../../postcss.config.mjs)

Tailwind v4 integration. Minimal config — v4 handles most work via its CSS-first setup.

## [components.json](../../../components.json)

shadcn/ui config. Style: `new-york`. Icon library: `lucide`. CSS variables: enabled. Base color: `neutral`.

## Build scripts

From [package.json](../../../package.json):

| Command | Does |
|---|---|
| `npm run dev` | Dev server with **Turbopack** |
| `npm run build` | Production build with **Turbopack** |
| `npm run start` | Run the production server |
| `npm run lint` | ESLint check |

Turbopack (vs Webpack) is Next.js's newer, Rust-based bundler. Faster but still occasionally rough around edges. If you hit weird build issues, drop `--turbopack` to fall back to Webpack for diagnosis.

## Gaps

- **No error tracker** (Sentry, LogRocket) — production errors die silently.
- **No analytics** (GA4, Vercel Web Analytics) — though Vercel's built-in Web Vitals is free and works automatically.
- **No request logging** — nothing tracks server component render times or Supabase query latency.
