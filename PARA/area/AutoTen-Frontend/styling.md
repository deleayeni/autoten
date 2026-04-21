# Styling & Design System

All styling config lives in [src/app/globals.css](../../../src/app/globals.css). No `tailwind.config.js` — this is Tailwind v4's CSS-first approach.

## Brand tokens

Defined under `@theme inline` in [globals.css](../../../src/app/globals.css):

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#e10600` | CTA red — hero buttons, rentals "Request a car" button |
| `--color-primary-hover` | `#c10500` | Hover state for the above |
| `--color-inverse` | `#0a0a0a` | Black — navbar solid state, footer background |
| `--color-surface` | `#ffffff` | Cards/panels |
| `--color-muted` | `#64748b` | Secondary text |

**⚠️ Gotcha:** shadcn's own `--primary` token (in `:root`, OKLCH) is a grayscale. So `bg-primary` in Tailwind does **not** give you brand red. For brand red, use `bg-[var(--color-primary)]`. This is why [TopBar.tsx](../../../src/components/TopBar.tsx)'s `bg-primary` renders grayscale, not red.

## Typography

Fonts loaded in [src/app/layout.tsx](../../../src/app/layout.tsx) via `next/font/google`:

| Font | Role | CSS variable | Tailwind token |
|---|---|---|---|
| **Nunito Sans** | Headings | `--font-nunito` → `--font-display` | `font-display` |
| **Heebo** | Body & UI | `--font-heebo` → `--font-sans` | `font-sans` |

Applied to `<html>` via `className={`${nunito.variable} ${heebo.variable}`}`, then `body { font-family: var(--font-heebo); }`.

## Component classes (custom)

Defined in `@layer components` in [globals.css](../../../src/app/globals.css):

| Class | Definition | Purpose |
|---|---|---|
| `.h1` | `font-display font-bold tracking-tight text-4xl md:text-5xl` | Hero headings (used in [HeroVideo](../../../src/components/HeroVideo.tsx)) |
| `.h2` | `font-display font-semibold tracking-tight text-3xl md:text-4xl` | Section headings (Why Choose Us, Brands We Offer) |
| `.lead` | `text-lg md:text-xl text-foreground/90` | Subheadings / hero supporting text |
| `.muted` | `text-muted` | Secondary text (currently unused?) |

**⚠️ Usage inconsistency:** Some pages use `.h1` (HeroVideo), others use raw Tailwind like `text-3xl font-bold` (most `/about`, `/vehicles`, `/contact`). Worth standardizing.

## Button system

Two layers:

1. **shadcn Button** ([src/components/ui/button.tsx](../../../src/components/ui/button.tsx)) — uses `class-variance-authority` (cva). Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, **`dark`**, **`light`** (custom additions). Sizes: `default`, `sm`, `lg`, `icon`.

2. **Legacy `.btn` classes** — referenced in [src/app/page.tsx](../../../src/app/page.tsx) ("Read More" uses `btn btn-dark`) but **not defined** in `globals.css`. Likely leftover from an earlier iteration. Either define them or migrate to `<Button variant="dark">`.

## OKLCH colors

All `:root` tokens (background, foreground, card, primary, etc.) are shadcn defaults in OKLCH color space. You inherit a full light/dark theme system even though the site doesn't have a dark mode toggle yet.

## Layout constants

| Variable | Value | Use |
|---|---|---|
| `--header-h` | `80px` | NavBar height. Pages use `pt-[var(--header-h)]` to offset fixed nav. Also read by NavBar's IntersectionObserver to calculate rootMargin. |
| `--radius` | `0.625rem` | Base border-radius. Derived: `--radius-sm/md/lg/xl`. |

## Animations

`@import "tw-animate-css"` brings in a utility animation library. Not heavily used yet — mostly potential.

## Dark mode

`@custom-variant dark (&:is(.dark *));` is wired up, and `:root.dark` overrides exist. **No toggle exists in the UI** — dark mode is dormant.

## Gaps / TODOs

- **Unify typography**: pick `.h1` or raw Tailwind, apply consistently.
- **Define `.btn` classes** or remove from [page.tsx](../../../src/app/page.tsx).
- **Fix `bg-primary` usage** in [TopBar](../../../src/components/TopBar.tsx) — should use brand red.
- **Consider a dark toggle**, since the infrastructure is already in place.
- **No spacing scale docs** — `py-12`, `py-16`, `mt-6`, `mt-8`, `mt-10` are used inconsistently across pages.
