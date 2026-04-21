# Business Information

## Legal

- **Name:** Auto Ten LTD
- **Brownview RC:** 1374621 (Brownview is operated by AutoTen)

## Office

**Address:** 19B, Mobolaji Bank Anthony Way, Opposite Army Cantonment, Maryland, Ikeja, Lagos, Nigeria

**On the site:**
- [Footer.tsx:12-15](../../../src/components/Footer.tsx#L12-L15) — full address in footer
- [MapEmbed.tsx](../../../src/components/MapEmbed.tsx) — Google Maps iframe pinning this address, used on `/` and `/contact`

**Office photos available:** 8 files in `public/office/` (`office1.webp` through `office8.webp`) — currently **unused** on the site.

## Contact

| Channel | Value | Source |
|---|---|---|
| Phone | `08097994400` | [Footer.tsx:16](../../../src/components/Footer.tsx#L16) |
| WhatsApp | `+234 704 065 8608` | [Footer.tsx:17](../../../src/components/Footer.tsx#L17) |
| Rentals email | `rentals@autoten.ng` | [rentals/page.tsx:76](../../../src/app/rentals/page.tsx#L76) |
| General email | ❓ Not yet defined — `/contact` page uses placeholder `hello@autoten.com` |

## Opening hours

| Day | Hours |
|---|---|
| Monday – Friday | 9:00 – 18:00 |
| Saturday | 9:00 – 16:00 |
| Sunday | Closed |

Source: [Footer.tsx:60-64](../../../src/components/Footer.tsx#L60-L64)

## Social media

| Platform | Handle | URL |
|---|---|---|
| WhatsApp | +234 704 065 8608 | https://wa.me/2347040658608 |
| Instagram | `@autotenltd` | https://www.instagram.com/autotenltd/ |
| Facebook | `AutoTenLtd` | https://www.facebook.com/AutoTenLtd/ |
| X / Twitter | `@autotenltd` | https://x.com/autotenltd |

Source: [Footer.tsx:72-123](../../../src/components/Footer.tsx#L72-L123)

## Live site

Production URL: **autoten.vercel.app** (per [CLAUDE.md](../../../CLAUDE.md)).

## Gaps

- **Placeholder contact info on `/contact`** — the page shows `+234 000 000 000 • hello@autoten.com`, not the real numbers. See [pages/contact.md](../AutoTen-Frontend/pages/contact.md).
- **Rentals page phone numbers** — [/rentals](../../../src/app/rentals/page.tsx) hardcodes `+2348012345678` with `// TODO update` comments.
- **No dedicated business email** for general inquiries — only `rentals@autoten.ng`.
- **Custom domain?** Currently on `autoten.vercel.app`. `autoten.ng` appears intended (used in rentals email) but DNS state unknown.
