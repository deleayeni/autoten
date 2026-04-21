# Rentals — `/rentals`

**File:** [src/app/rentals/page.tsx](../../../../src/app/rentals/page.tsx)
**Type:** Server component (static — no data fetching)
**Metadata:** `"Rentals • Brownview by AutoTen"`
**Brand:** This is the **Brownview** sub-brand — chauffeur-driven rentals, same team/office as AutoTen.

## Page structure (top to bottom)

1. **Header** — Brownview logo + title + RC number ("RC: 1374621")
   - Logo: `/brownviewlogohd.png`
2. **Pitch section** — description + bullet list (sedans/SUVs/luxury/vans, driver included, fuel/tolls)
   - 3 CTAs: "Request a car" (anchor to form), "WhatsApp", "Call"
3. **Quick request form** (id: `#request`)
   - Fields: Name, Email, Phone, Dates, Vehicle (Sedan/SUV/Luxury SUV/Van), Notes
   - Submits via `mailto:rentals@autoten.ng` (browser opens mail client — NOT a real form backend)

## Components used

None — everything is inline JSX.

## Data

None. Static page.

## Gaps / TODOs

- **Placeholder phone numbers.** The file contains `+2348012345678` with `// TODO update` comments. Real number is in [Footer](../../../../src/components/Footer.tsx) (`+234 704 065 8608`).
- **Form is `mailto:`-based.** Works but is fragile — relies on user having a mail client configured. Should be a real form → Supabase or a form service.
- **No booking engine.** The PDF roadmap calls for: availability calendar, daily/weekly rates, add-ons (driver/child seat), deposit logic, Paystack/Flutterwave payments. None exist yet.
- **No fleet listing.** Users can't see which cars are available — they just pick a category from a dropdown.
- **Brownview branding is light.** Just the logo. No separate color scheme, no distinct footer treatment.
