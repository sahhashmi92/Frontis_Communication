# Frontis Communications — frontiscommunications.com

Marketing website for **Frontis Communications** · _Communication That Connects_

Next.js (App Router) + Tailwind CSS v4, Poppins via `next/font`.
All 14 pages are statically prerendered — no server runtime required.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local development → http://localhost:3000
npm run build     # production build (all routes prerendered static)
npm run start     # serve the production build
npx eslint app components lib   # lint
node scripts/process-assets.mjs # regenerate brand assets from assets/logo-horizontal.png
```

## Structure

| Path | What it is |
| --- | --- |
| `app/` | One folder per page (14 routes + 404, sitemap, robots) |
| `components/` | Header (2-col services dropdown + mobile menu), Footer, CtaBand, PageHero, RelatedServices, Reveal, icons, blocks |
| `lib/site.ts` | **Single source of truth**: company details, phone, emails, the eight service lines, industries, form endpoint |
| `assets/` | Master brand artwork (not served to the browser) |
| `public/brand/` | Generated, web-optimized brand assets |
| `scripts/process-assets.mjs` | Rebuilds `public/brand` + favicons from the master logo |

## Pages

Home · About · Careers · Services hub · Industries · Contact
Services: Customer Acquisition · Back-Office Support · Talent Solutions ·
Performance Marketing · Digital Innovation & Software Development ·
AI & Automation · Application Development · Cloud Management & Migration

## Brand assets

`assets/logo-horizontal.png` is the master (transparent, tightly cropped).
Running `node scripts/process-assets.mjs` regenerates everything derived from it:

- `public/brand/logo-horizontal.png` — header and footer wordmark
- `public/brand/mark.png` — symbol only, used in the homepage hero tile
- `public/brand/og.png` — 1200×630 social share card with the tagline
- `app/icon.png`, `app/apple-icon.png` — favicons

Replace the master file and re-run the script to roll out a new logo everywhere.

## Contact form

Submissions post to a Google Apps Script web app bound to a Google Sheet. Each
submission appends a row and emails an alert to the address set as
`NOTIFY_EMAIL` in the script. Source is versioned at
`scripts/google-apps-script-form.gs`; the live copy is managed from the sheet
via Extensions → Apps Script.

To point the form at a different backend, set `NEXT_PUBLIC_FORM_ENDPOINT` in
Vercel — it overrides the default in `lib/site.ts`.

## Deployment

Pushes to `main` deploy automatically to Vercel. Attach `frontiscommunications.com`
in Vercel → Settings → Domains, then verify the site in Google Search Console and
submit `https://frontiscommunications.com/sitemap.xml`.

## Awaiting real content

- **Mailing address** — not yet published anywhere on the site.
- **Named open roles** — the Careers page describes hiring areas and the process; add specific postings when roles open.
- **Case studies / blog** — not built; add when real content exists.

## SEO in place

Unique title and description per page · one H1 per page · alt text on every image ·
Organization schema (home) · Service schema (each service page) ·
`sitemap.xml` + `robots.txt` · OG image.
