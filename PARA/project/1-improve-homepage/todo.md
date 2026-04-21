# Todo — Improve the Homepage

Tight punch list. Tick items off as they ship. Check [task-description.md](task-description.md) for scope and success criteria before touching anything.

## Phase 1 — Exploration

Output was three scoped hi-fi previews, one per visual direction, each with its own matching navbar. Intentionally done in bespoke CSS (not the real Tailwind stack) to get aesthetic signal fast. See [implementation-log/1-three-design-explorations.md](implementation-log/1-three-design-explorations.md).

- [x] Spike hi-fi preview — Option A · Dark Cinematic (`/design/option-a`)
- [x] Spike hi-fi preview — Option B · Editorial Luxury (`/design/option-b`)
- [x] Spike hi-fi preview — Option C · Sharp Modern Retail (`/design/option-c`)
- [x] Custom nav per option, hide global nav/footer on `/design/*` routes via `body:has()`
- [x] Dele reviews all three in the browser

## Phase 2 — Work the UI/UX process properly

Pivot recorded in [implementation-log/2-adopt-the-ui-ux-process.md](implementation-log/2-adopt-the-ui-ux-process.md). The canonical reference for the steps below is [resources/UI-UX-Design-Process/_1-the-traditional-design-process.md](../../resources/UI-UX-Design-Process/_1-the-traditional-design-process.md).

- [ ] Read the design-process lecture end to end
- [ ] **Discovery** — note what the current site is doing well/badly, what Nigerian car-buyer behavior looks like online (WhatsApp-first? Mobile-first? Trust signals that matter locally?)
- [ ] **Personas** — write 1–3 representative AutoTen buyers (e.g. "Tunde, 45, Ikeja exec replacing an SUV")
- [ ] **Competitor scan** — 3–5 Nigerian + international dealership sites worth learning from, with screenshots and notes on what they do right
- [ ] **Information architecture** — define the homepage section list and order (hero → featured vehicles → brands → trust → visit → close?)
- [ ] **Content inventory** — list every piece of copy, photo, CTA, and data point the homepage will need; flag what we have vs what's missing
- [ ] **Mood board** — commit to visual direction: palette, type, imagery mood, tone of voice (file: `moodboard.md`)
- [ ] (Optional) **Lo-fi wireframes** — ASCII or sketch-level, just box-and-line structure
- [ ] **Pick one direction** — may be A, B, C, a remix, or something brand-new that the mood board points to
- [ ] **Lock design tokens** — colors, type scale, spacing scale, radii, shadow tokens — added to [globals.css](../../../src/app/globals.css) alongside the existing ones (file: `design-decisions.md`)

## Phase 3 — Ship

- [ ] Refactor the winning design into real Tailwind v4 utilities + shadcn/ui `<Button>` + `next/font/google`
- [ ] Delete the three preview routes under `src/app/design/` once the real homepage ships
- [ ] Fix structural bugs from [styling.md](../../area/AutoTen-Frontend/styling.md):
  - [ ] [TopBar](../../../src/components/TopBar.tsx) `bg-primary` bug — currently renders grayscale instead of brand red
  - [ ] `.btn btn-dark` in [page.tsx](../../../src/app/page.tsx) — define in globals or migrate to `<Button variant="dark">`
  - [ ] `gap-30` in [BrandLogos](../../../src/components/BrandLogos.tsx) — not a valid Tailwind class
  - [ ] Typography inconsistency — one source of truth (either `.h1`/`.h2` classes or raw utilities, not both)
- [ ] QA pass — mobile (375px), tablet (768px), desktop (1024/1440px), keyboard navigation, `prefers-reduced-motion`, Lighthouse on mobile
- [ ] Merge `develop` → `main` and verify Vercel deploy
- [ ] Dele final approval on production URL

## Phase 4 — Wrap up

- [ ] Retrospective entry in `implementation-log/` — what worked, what didn't, what I'd do differently
- [ ] Update [PARA/area/AutoTen-Frontend/styling.md](../../area/AutoTen-Frontend/styling.md) with any new tokens or patterns this project introduced
- [ ] Move this folder to [PARA/archive/](../../archive/)
