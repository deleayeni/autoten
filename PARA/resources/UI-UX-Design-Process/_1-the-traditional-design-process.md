# Lecture 1 — The Traditional UI/UX Design Process

> Why a website that works rarely happens by iterating in the browser alone, and what the full process looks like when a real agency or product team ships one.

## Why this lecture exists

You just watched three hi-fi homepage designs get built for AutoTen in one sitting (see [project/1-improve-homepage/implementation-log/1-three-design-explorations.md](../../project/1-improve-homepage/implementation-log/1-three-design-explorations.md)). The designs are real, the code compiles, and you can click through them at `/design/option-a|b|c`. So why does this lecture exist?

Because a professional UI/UX process has **twelve steps**, and building three Figma-grade hi-fi mockups is step 8. Skipping steps 1–7 is how you end up with a beautiful homepage that answers no one's actual question.

The goal of this lecture: give you the full map so you can **choose** which steps to do heavily, which to do lightly, and which to skip — instead of skipping them by accident.

## The twelve-step map

```
   BRIEF        │  RESEARCH     │  IA          │  CONTENT
   ────         │  ────         │  ────        │  ────
   1. Brief     │  2. Discovery │  4. IA       │  5. Content
                │  3. Personas  │              │     Strategy
                │
                         ▼  understand the problem
                         
   DIRECTION    │  STRUCTURE    │  VISUALS     │  HANDOFF
   ────         │  ────         │  ────        │  ────
   6. Moodboard │  7. Wireframes│  8. Hi-fi    │  9. Tokens &
                │               │     Mockups  │     Decisions
                │
                         ▼  shape the solution
                         
   BUILD        │  TEST         │  SHIP        │  RETRO
   ────         │  ────         │  ────        │  ────
   10. Build    │  11. QA       │  12. Launch  │  (Retrospective)
```

The rule of thumb: **each step narrows the question**. You don't "design" in a vacuum — you design *for* a person (personas), *in* a structure (IA), *in* a mood (moodboard), *toward* a decision you can defend.

---

## Step 1 — The Brief

**What it answers:** "Why are we doing this at all, and how do we know we're done?"

**Output:** A short written brief. Goal, scope, success criteria, constraints, stakeholders, deadline.

**AutoTen example:** Look at [PARA/project/1-improve-homepage/task-description.md](../../project/1-improve-homepage/task-description.md). That file *is* the brief. It states the goal ("redesigned homepage that reads as premium"), the scope (which files are fair game, which aren't), success criteria (Lighthouse ≥ 85, bugs fixed, Dele approves), and why (current homepage reads as generic template).

**Common mistake:** Starting without a brief. You design toward a vague "make it better," then nobody can agree when to stop. If you can't write the brief in 15 minutes, you don't understand the project yet.

**Light version (solo dev):** Bullet list with Goal / Scope / Done-when. Takes 20 minutes.
**Heavy version (agency):** 3-page brief signed off by stakeholders before any design work starts.

---

## Step 2 — Discovery / Research

**What it answers:** "What's actually going on? Who else has solved this, and how?"

**Output:** Notes on:

- **Current state.** What does today's site do? Where are users falling off? Is there analytics data?
- **Competitors.** What do three or five comparable sites look like? What do they do that works? What's so bad you should never do it?
- **Domain behavior.** How do people actually shop in this category? For AutoTen: how do Nigerian car buyers research online? Is WhatsApp the primary contact channel? Is trust established through photos-of-the-lot, or through reviews, or through the owner's face?
- **Brand audit.** What colors, fonts, voice already exist? (For AutoTen, [PARA/area/AutoTen-Frontend/styling.md](../../area/AutoTen-Frontend/styling.md) is the brand audit — it documents what tokens exist in [globals.css](../../../src/app/globals.css), which are used correctly, and which are broken.)

**AutoTen example of what discovery should surface:**

- The existing site's [TopBar.tsx](../../../src/components/TopBar.tsx) uses `bg-primary` and renders *grayscale* because shadcn's `--primary` token is grayscale, not brand red. That's a discovery finding.
- The [HeroCarousel.tsx](../../../src/components/HeroCarousel.tsx) component is fully built but never rendered anywhere. That's discovery — dead code is evidence of an abandoned design direction.
- The site sells five brands (Toyota, Lexus, Mercedes, Land Rover, Honda) — but competitor Nigerian dealership sites tend to lead with featured inventory, not brand tiles. Worth noting before we assume "brand tiles is the right section."

**Light version:** One `.md` file with three sections: current-state, competitors, domain notes. One hour.
**Heavy version:** User interviews with 5–8 customers, analytics dashboards, formal competitive teardowns.

---

## Step 3 — Audience & Personas

**What it answers:** "Who are we designing for, and what do they need from this page?"

**Output:** 1–3 persona cards. Not the full marketing-textbook version with stock photos — just enough detail that when you're making a design decision, you can ask "would Tunde care about this?"

A useful persona has:

- A name and a one-line descriptor ("Tunde, 45, Lagos exec replacing an aging Land Cruiser")
- **Context** — when do they visit the site? From a phone on the way home from work? From a laptop on a Saturday morning?
- **Goal** — what are they trying to accomplish? ("Find out if AutoTen has the specific used G-Class I want, and judge whether I trust them enough to walk in.")
- **Blockers** — what could stop them? ("If the site looks like a template, he'll bounce. If prices aren't shown, he'll WhatsApp before visiting.")

**AutoTen example:** You probably need two personas — a **high-intent buyer** (Tunde above) and a **comparison shopper** (someone who's going to visit five dealership sites in one session, giving you 90 seconds to earn a second look). Designs that win for the comparison shopper usually also win for the high-intent buyer; the reverse is often not true.

**Light version:** Two short persona paragraphs. 30 minutes.
**Heavy version:** 5+ personas synthesized from interview transcripts.

---

## Step 4 — Information Architecture (IA)

**What it answers:** "What sections exist, in what order, and how do they relate?"

**Output:** A section-by-section outline of the page (or site). For the homepage: which blocks appear, in what order, and what each one's job is.

**AutoTen example — one possible homepage IA:**

1. **Nav** — Logo, 5 main links, primary CTA.
2. **Hero** — Single strong headline, one-line promise, primary CTA (View Vehicles), secondary CTA (Call).
3. **Featured Vehicles** — 3–6 real cars pulled from Supabase. This is the single biggest thing missing from the current homepage.
4. **Shop by Brand** — The five brands, each clickable → filtered vehicle list.
5. **Why AutoTen** — Three pillars (Premium, Transparent Pricing, After-Sales).
6. **Trust / Social Proof** — Years in business, cars sold, a testimonial or two.
7. **Visit Us** — Address, hours, phone, WhatsApp, map side-by-side.
8. **Outro CTA** — "Ready when you are" + buttons.
9. **Footer** — Secondary links, social, contact.

Each item on that list has a **job**. The hero's job isn't "look pretty" — it's "tell a new visitor within 3 seconds who AutoTen is, what they sell, and what to click next." If the hero doesn't do that job, redesign the hero.

**Common mistake:** Designing sections in isolation. If you polish the hero for a week without having decided whether Featured Vehicles is section 2 or section 4, you'll redo the hero when that decision lands.

**Light version:** Numbered list with "job of this section" in one sentence per item.
**Heavy version:** Full sitemap diagram + user flows.

---

## Step 5 — Content Strategy / Inventory

**What it answers:** "For every section in the IA, what copy, photos, data, and CTAs do we need? What do we have? What's missing?"

**Output:** A spreadsheet or table. Rows = content items. Columns = "needed / exists / status."

**AutoTen example table:**

| Section | Content needed | Exists? | Notes |
|---|---|---|---|
| Hero | Headline (≤ 6 words) | Yes — "Driven by Trust" | Weak; doesn't say what AutoTen sells |
| Hero | Subheadline (≤ 20 words) | Yes — "Find your next car with us" | Generic; rewrite to name Lagos + the marques |
| Hero | 30-second background video | Yes — `/brands/car-passing-through-highway-tunnel.mp4` | Fine |
| Hero | Primary CTA label + href | Yes — "View Vehicles" → `/vehicles` | Fine |
| Hero | Secondary CTA | **Missing** | Add "Call Us" → `tel:+2347040658608` |
| Featured Vehicles | 3–6 car cards from Supabase | **Missing entirely** | Supabase `cars` table exists; need a query |
| Featured Vehicles | Photos of each car | **Dependency** | Are photos good enough? Who uploads them? |
| Why AutoTen | Three pillar headlines + bodies | Yes | Copy is boilerplate; rewrite with specifics |
| Trust | Years in business, cars sold | **Missing** | Ask Dele: is it 10 years? 500+ cars? |
| Visit | Address, phone, WhatsApp, hours | Yes | Hours currently undocumented on site — check with business |

**Why this step matters:** You will discover, midway through building, that you have no good photo of the showroom interior, or that the "500+ cars sold" stat you built a section around doesn't actually exist. Better to find out now.

**Light version:** A checklist in [todo.md](../../project/1-improve-homepage/todo.md) under "content inventory."
**Heavy version:** Full content matrix in a spreadsheet with owners and due dates per item.

---

## Step 6 — Moodboard / Visual Direction

**What it answers:** "What should this site feel like before we start laying out pixels?"

**Output:** A collection of reference images, color swatches, font samples, textures — plus a short written paragraph of the tone ("premium but warm, Nigerian but international, confident but not flashy").

A moodboard is **not** a list of sites to copy. It's a collection of *feelings* you want the site to evoke. The output of a moodboard is **conviction**: when you later see two buttons and can't decide between them, the moodboard breaks the tie.

**AutoTen example contents of a moodboard:**

- Screenshots of 3–5 competitor / aspirational sites (Polestar, Porsche configurator, a specific Nigerian dealer, a Robb Report article)
- Color palette: 5–7 hexes, one primary, one accent, a couple neutrals. (AutoTen has this already via [globals.css](../../../src/app/globals.css) tokens — red `#e10600`, black `#0a0a0a`, white — but may extend with a warm paper tone or a gold highlight.)
- Typography specimens: the display font and body font you're committing to, shown at the actual sizes they'll appear on the site.
- Imagery style: are car photos shot on location or stock? Studio lighting or golden hour? Overhead or 3/4 angle? Consistency matters more than any one photo.
- Language / tone samples: 3 example sentences written in the voice the site should use. ("Driven by trust." is confident but vague. "Lagos' most vetted premium cars." is confident and specific. Pick one.)

**Common mistake:** Treating the moodboard as decoration. If you can't point to the moodboard and explain *why* a design decision is right, the moodboard failed.

**Light version:** A `moodboard.md` file with 6–10 links, a palette listed as hexes, and a 150-word tone paragraph.
**Heavy version:** Figma board with 40+ references, mood grids for multiple directions before committing.

---

## Step 7 — Wireframes (Lo-fi)

**What it answers:** "Does the structure work — before we get distracted by colors and type?"

**Output:** Grey-box layouts. No color, no type, no imagery beyond placeholder boxes. Just blocks, labels, and arrows showing where the user's eye goes next.

**Why wireframes are often skipped:** Because designers and devs want to see the "real thing." And for small projects, you can genuinely skip this — hi-fi mockups will surface structural problems eventually.

**When wireframes are worth it:**

- When two different section orders are possible and you're not sure which is right.
- When responsive behavior is non-obvious (a sidebar on desktop but where on mobile?).
- When a section has interactivity (a filter, a form, a carousel) and the interaction logic needs to be thought through before visual decisions.

**AutoTen example:** The "Visit Us" section on desktop wants a 2-column layout (address + map). On mobile it must stack. A 30-second lo-fi wireframe tells you *which* stacks on top (address on top, map below? or photo of showroom on top, address below that, map at the bottom?). That decision matters more than any color choice you'll make for that section.

**Light version:** ASCII drawing inline in a `.md` file. Literally `┌─ HERO ─┐` boxes.
**Heavy version:** Figma low-fidelity frames, one per breakpoint.

---

## Step 8 — Hi-fi Mockups

**What it answers:** "What does this actually look like when everything is committed — fonts, colors, spacing, imagery, microcopy?"

**Output:** Pixel-perfect designs of every page/state the brief covers, usually in Figma. Includes hover states, mobile layouts, error states, empty states.

**AutoTen example:** This is where the three preview routes you already have live:

- [src/app/design/option-a/](../../../src/app/design/option-a/) — dark cinematic
- [src/app/design/option-b/](../../../src/app/design/option-b/) — editorial luxury
- [src/app/design/option-c/](../../../src/app/design/option-c/) — sharp modern retail

These are **not** wireframes. They're three fully-committed aesthetic hypotheses, each with real fonts (Bodoni+Jost, Fraunces+DM Sans, Nunito+Heebo), real palettes, real animations, and real navbars.

**The mistake we made:** We arrived at step 8 by skipping steps 1–7. That means each option is an *aesthetic hypothesis*, not a *designed solution*. Picking a winner between them is now a taste contest, when it could have been a structured decision ("the moodboard pointed to editorial luxury, so Option B wins").

**Doing step 8 properly after the earlier steps are done:** You usually produce **one** hi-fi direction, not three, because steps 1–6 already eliminated the wrong directions.

**Light version:** In-browser mockup, one direction, iterated live.
**Heavy version:** Figma file with every page × every state × every breakpoint.

---

## Step 9 — Design Decisions & Tokens

**What it answers:** "For every subjective choice in the hi-fi, what's the rule?"

**Output:** A written record:

- **Color tokens** — exact hexes for every role (bg, surface, ink, muted, primary, primary-hover, success, danger...)
- **Type scale** — display font, body font, sizes (e.g. hero = 96px, h2 = 64px, body = 16px), line heights, letter spacing.
- **Spacing scale** — 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96px / 128px.
- **Radii** — `4px / 8px / 16px / 24px / 999px (pill)`.
- **Shadow tokens** — `subtle / card / elevated / floating`.
- **Motion tokens** — `fast = 150ms`, `base = 220ms`, `slow = 400ms`, easing = `cubic-bezier(0.2, 0.8, 0.2, 1)`.

**AutoTen example of where this already exists (partially):** [src/app/globals.css](../../../src/app/globals.css) defines `--color-primary`, `--color-inverse`, `--color-surface`, `--color-muted`, plus the radius scale. It's *partial* — no spacing scale, no motion tokens, no typography scale beyond the `.h1` / `.h2` / `.lead` component classes. A proper step 9 output for this project would extend `globals.css` with the missing tokens and document them in [styling.md](../../area/AutoTen-Frontend/styling.md).

**Why this step separates amateurs from professionals:** Without tokens, every new screen re-invents colors and spacing. With tokens, a new page takes an hour and looks exactly like the rest of the site.

---

## Step 10 — Build

**What it answers:** "How do we turn the design into working code without losing the design's intent?"

**Output:** The implementation. Clean, maintainable, matches the design.

**AutoTen implementation rules (project-specific):**

- Tailwind v4 utilities only — no bespoke CSS files for new components.
- shadcn/ui `<Button>` — never re-roll buttons.
- Fonts via `next/font/google` in [src/app/layout.tsx](../../../src/app/layout.tsx) (not via `<link>` tags or a CSS `@import`).
- Tokens live in [globals.css](../../../src/app/globals.css) under `@theme inline`, consumed as `bg-[var(--color-primary)]` when Tailwind's `bg-primary` doesn't resolve (see the well-known TopBar bug).
- Server components by default; `"use client"` only when you genuinely need state, effects, or browser APIs.
- Every new component file is under `src/components/`, flat structure, PascalCase name.

**Common mistake:** Treating the design as aspirational and the build as "what was actually feasible." If a design decision turned out to be too expensive to build, go back to step 8 and formally change the design. Don't silently downgrade in code.

---

## Step 11 — QA

**What it answers:** "Does this work for everyone, everywhere?"

**Output:** A pass against a checklist.

**Minimum checklist for AutoTen:**

- [ ] Works at 375px (small phone), 768px (tablet), 1024px (laptop), 1440px+ (desktop).
- [ ] All interactive elements are keyboard-navigable. Tab order is sensible.
- [ ] Focus states are visible (not just `outline: none`).
- [ ] All images have meaningful `alt` text.
- [ ] Contrast ratio ≥ 4.5 for body text, ≥ 3.0 for UI / large text.
- [ ] `prefers-reduced-motion: reduce` is respected — no animations for users who've opted out.
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Works with JS disabled (degraded but usable — important for slower connections in Lagos).
- [ ] No console errors, no hydration mismatches in Next.js.
- [ ] Test the whole page on actual mobile hardware, not just dev tools.

---

## Step 12 — Launch & Retro

**What it answers:** "Is it out? Did we learn anything?"

**Output:**

- The site is live on `main`, deployed on Vercel.
- A retrospective note: what worked, what we'd do differently next time. Goes in this project's `implementation-log/` before the folder gets archived to [PARA/archive/](../../archive/).

**Why the retro matters:** Without it, every project starts from zero. With it, the next project (`2-vehicles-page-redesign`?) starts with "last time, skipping step 6 cost us two days, so let's not."

---

## The honest picture for a solo dev relearning frontend

You do not need to do every step at agency-depth. You need to know they exist, pick your depth per step, and **never skip a step accidentally**.

For AutoTen's homepage project, a defensible light-version sequence is:

1. Brief (20 min) — [task-description.md](../../project/1-improve-homepage/task-description.md)
2. Discovery (1 hour) — short `research.md` with current-state, competitors, domain notes
3. Personas (30 min) — 2 short paragraphs
4. IA (30 min) — numbered section list with per-section "job"
5. Content inventory (45 min) — table of needed / exists / missing
6. Moodboard (1 hour) — `moodboard.md` with 6–10 refs + palette + tone paragraph
7. Wireframes — **skip** (structure is already clear)
8. Hi-fi — **1 direction** (not 3), iterated in-browser, based on moodboard
9. Tokens (30 min) — extend `globals.css` + document in `styling.md`
10. Build (session of real work) — Tailwind + shadcn refactor
11. QA (1 hour) — the checklist above
12. Launch + 200-word retro

Budget: roughly one focused weekend. Compare to the "iterate in the browser until it feels good" approach, which has no budget and no endpoint.

## The takeaway

**Hi-fi is step 8, not step 1.** When you feel the urge to jump straight to "let me just try something in the browser," ask yourself: *which of steps 1–7 am I assuming is already done?* If the honest answer is "none of them," go back and do them lightly. They're cheaper than rework.

## Further reading (next lectures in this folder, not yet written)

- `_2-writing-a-moodboard-that-breaks-ties.md`
- `_3-information-architecture-for-single-page-sites.md`
- `_4-design-tokens-the-contract-between-design-and-code.md`
- `_5-accessibility-isnt-a-checklist-but-heres-the-checklist.md`
