# API Routes & Server Actions

## Current state: **none**

- `src/app/api/` — doesn't exist
- `src/actions/` — doesn't exist
- `src/middleware.ts` — doesn't exist

All data fetching currently happens directly inside async server components via the [src/data/](../../../src/data/) layer. No mutations happen from the UI — data is edited manually in the Supabase dashboard.

## When to use each pattern

| Pattern | Use when |
|---|---|
| **Async server component** (current AutoTen pattern) | Read data for initial page render. Cacheable, fast. |
| **Server action** | Form submission, mutation from the client UI. Colocated with components. No separate API surface. |
| **API route** (`app/api/*/route.ts`) | Webhooks (receiving POSTs from Paystack, Flutterwave, etc.), public-facing endpoints, file uploads, things non-React clients need to call. |
| **Middleware** (`src/middleware.ts`) | Request-time checks that run before route handlers — auth gates, redirects, geo-based routing. |

## Patterns for when you add each

### Server action pattern (for future forms)

```ts
// src/actions/leads.ts
"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitLead(formData: FormData) {
  const supabase = await supabaseServer();
  const { error } = await supabase.from("leads").insert({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    source: "contact-form",
  });
  if (error) return { error: error.message };
  revalidatePath("/contact");
  return { success: true };
}
```

Then in the form component:

```tsx
<form action={submitLead}>...</form>
```

No separate API route needed. Next.js handles the serialization.

### API route pattern (for webhooks)

```ts
// src/app/api/paystack-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // 1. Verify the webhook signature
  // 2. Parse the payload
  // 3. Update booking status in Supabase (use service_role)
  // 4. Return 200
  return NextResponse.json({ received: true });
}
```

Critical: webhook handlers must **verify the signature** before trusting any payload. Paystack and Flutterwave both use HMAC signing.

### Middleware pattern (for future admin gating)

```ts
// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check Supabase session cookie; redirect to /login if missing
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
```

## What goes where — quick map

| Feature (from roadmap) | Likely pattern |
|---|---|
| Contact form submission | Server action → `leads` table |
| Admin: add / edit / publish car | Server action w/ service_role |
| Vehicle inquiry from VDP | Server action → `leads` table + WhatsApp deep link |
| Rental booking submission | Server action → `bookings` table |
| Paystack payment init | Server action (creates checkout URL) |
| Paystack payment webhook | **API route** (external call) |
| Admin dashboard auth gate | Middleware |
| WhatsApp Business message send | Server action |
| Scheduled booking reminders | Vercel Cron → API route |

## Security notes

- **Server actions implicitly trust the caller's session.** If an action should only run for admins, re-check auth inside the action — don't assume middleware caught it.
- **API routes are public by default.** Any `/api/*` endpoint can be hit by anyone with the URL. Authenticate explicitly.
- **Never put secrets in `NEXT_PUBLIC_*`.** See [configuration.md](./configuration.md).

## Related

- [AutoTen-Data/missing-tables.md](../AutoTen-Data/missing-tables.md) — schemas for `leads`, `bookings`, etc. (each needs a server action to write to)
- [integrations.md](./integrations.md) — which external services will require which patterns
