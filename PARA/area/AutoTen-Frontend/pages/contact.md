# Contact — `/contact`

**File:** [src/app/contact/page.tsx](../../../../src/app/contact/page.tsx)
**Type:** Server component (static)
**Metadata:** `"Contact Us • Auto Ten"`

## Page structure (top to bottom)

1. Heading + placeholder contact line:
   > Phone: +234 000 000 000 • Email: hello@autoten.com
2. Map embed — Google Maps iframe of the Ikeja office
   - Component: [MapEmbed](../../../../src/components/MapEmbed.tsx)

## Components used

- [MapEmbed](../../../../src/components/MapEmbed.tsx)

## Data

None.

## Gaps / TODOs

- **Placeholder contact info is wrong.** Real numbers (from Footer):
  - Phone: `08097994400`
  - WhatsApp: `+234 704 065 8608`
  - Address: `19B, Mobolaji Bank Anthony Way, Opposite Army Cantonment, Maryland, Ikeja`
- **No contact form.** Users can't send a message without leaving the site.
- **No opening hours** (they're only in Footer).
- **No email address yet** (`hello@autoten.com` is placeholder; rentals uses `rentals@autoten.ng`).
- **No embedded WhatsApp button** — high-leverage for Nigerian market per the PDF plan.

## Priority

Higher than About. The whole site funnel ends here — broken contact info means broken leads.
