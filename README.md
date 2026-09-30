# MK Supply Group — Frontend

React website for **mksupplygroup.com**, built from the MK Supply Group design system and the v2 homepage design (EN + NL).

## Stack

React 18 · Vite · React Router · MUI 6 (Emotion) · react-i18next · react-hook-form · react-helmet-async · Iconify · prop-types

## Getting started

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

## Routes

| URL   | What                                                              |
| ----- | ----------------------------------------------------------------- |
| `/`   | Redirects to `/nl` for Dutch browsers, otherwise `/en`             |
| `/en` | English homepage                                                  |
| `/nl` | Dutch homepage                                                    |
| other | Redirects to the preferred language                               |

The EN | NL switch in the header keeps the current section (`/en#contact` → `/nl#contact`).

## Project structure

```
src/
  assets/images/          logo, hero, category photos, product bottles (webp)
  components/
    layout/               Header, MobileMenu, LanguageSwitch, Logo, Footer, LanguageLayout, navItems
    sections/             Hero, Stats, Categories, ProductSection, Sectors, HowItWorks, About, Contact
    ui/                   Section, SectionHeader, Eyebrow, TextLink, CategoryCard,
                          ProductCard (desktop), ProductRow (mobile), SizeBadge, WhatsAppButton
    forms/                ContactForm (react-hook-form), FormField
  data/
    company.js            KvK details, phone, email, address, WhatsApp link
    products.js           categories + product lines (sizes, EAN barcodes, images)
  hooks/useIsDesktop.js   true from 900px up (switches card vs row layouts)
  i18n/                   i18next setup + locales/en.json, locales/nl.json
  pages/Home.jsx          page composition + SEO tags (title, description, hreflang, canonical)
  services/contact.js     form submit (placeholder until the backend exists)
  icons.js                icons registered locally (no Iconify API calls at runtime)
  theme.js                MUI theme from the design tokens
```

## Editing content

- **Text (both languages):** `src/i18n/locales/en.json` and `nl.json`. Keys are identical in both files.
- **Company details:** `src/data/company.js`.
- **Products:** `src/data/products.js`. Add an item to a product line's `items` array (size, EAN, image). Product names and descriptions come from `products.<line>` in the locale files.
- **New category:** add it to `categories` in `products.js` and add `categories.<id>.title/subtitle` to both locale files. Set `comingSoon: true` to show it greyed out.
- **Colours / fonts / radii:** `src/theme.js` (`tokens` holds the design-system colours, also available as `theme.palette.brand.*`).

## Connecting the backend (later)

```bash
npm i axios react-hot-toast
```

1. Copy `.env.example` to `.env` and set `VITE_API_URL`.
2. In `src/services/contact.js` replace the simulated request with the axios call described in the comment.
3. Optionally swap the success/error `Alert` in `ContactForm.jsx` for `react-hot-toast` (add `<Toaster />` in `App.jsx`).

The form already sends: `company, kvk, email, phone, buyerType, message, consent, language`.

## Deploying

It is a static single-page app: deploy `dist/` to Netlify, Vercel, Cloudflare Pages or any static host.
All routes must fall back to `index.html` — `public/_redirects` already does this on Netlify/Cloudflare Pages.
`vercel.json` does the same on Vercel.

## Before going live

- Create `info@mksupplygroup.com` on the domain.
- Add the VAT number to the footer (`footer.legal` in both locale files) once you have it.
- Add Privacy policy and Terms pages (links currently point to `#privacy` / `#terms`).
- Have a native speaker check `nl.json`.
- Replace water photos with English-label versions when available (`src/assets/images/pran-water-*.webp`).
