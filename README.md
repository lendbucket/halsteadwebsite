# Halstead Security — Marketing Site v2

Next.js 14 marketing site for Halstead Security with full SEO infrastructure.

## What's new in v2

- **Inter throughout** (no more serif) using `next/font/google` for optimal loading
- **Real CTAs** on every page with destination-specific tracking parameters
- **Multi-step dealer application** at `/dealer/apply` with progress indicator
- **SEO infrastructure**:
  - `sitemap.xml` — dynamic, includes all pages plus state and city templates
  - `robots.txt` — allows GPTBot and Googlebot, references sitemap
  - JSON-LD structured data: Organization, LocalBusiness, FAQPage, Product, BreadcrumbList
  - Per-page `Metadata` exports with title, description, canonical, Open Graph
  - Semantic HTML throughout for accessibility and crawler comprehension
  - Security headers in `next.config.js`
- **State landing pages** at `/states/[state]` with 9 states pre-configured
- **City landing pages** at `/cities/[city]` with 9 cities pre-configured
- **FAQ accordions** on home, plans, dealer, and per-city pages (each emits FAQ schema)
- **Patched security vulnerability** — Next.js 14.2.30 (was 14.2.16)

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home with hero, value prop, plans teaser, dealer CTA, FAQ |
| `/plans` | Pricing tiers, hardware, comparison table, FAQ |
| `/features` | Smart features deep dive |
| `/dealer` | $15K founding dealer pitch, ROI math, FAQ |
| `/dealer/faq` | All 20+ dealer questions |
| `/dealer/apply` | Multi-step application form |
| `/white-label` | Three white-label tiers |
| `/about` | Company story + Reyna ecosystem |
| `/contact` | Multi-purpose form (customer/dealer/partner) |
| `/states/[state]` | Per-state SEO landing |
| `/cities/[city]` | Per-city SEO landing |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots |
| `/api/lead` | Form submission endpoint |

## SEO checklist

- [x] Per-page titles (templated as `{Page} · Halstead Security`)
- [x] Per-page descriptions tuned to keyword intent
- [x] Canonical URLs on every page
- [x] Open Graph tags (with social image placeholder)
- [x] Twitter Card tags
- [x] JSON-LD: Organization, LocalBusiness, FAQ, Product, Breadcrumb
- [x] Sitemap.xml (priorities + change frequency)
- [x] Robots.txt (allows AI crawlers and Googlebot)
- [x] Mobile-responsive
- [x] Semantic HTML
- [x] Fast page weights (under 100kb first load)
- [x] Per-state and per-city landing page templates for local SEO
- [ ] Real OG image (currently placeholder reference)
- [ ] Google Search Console verification (add code to `layout.tsx` metadata.verification)
- [ ] Bing Webmaster verification

## Brand

- **Navy:** `#0F1B2D` — primary
- **Gold:** `#C9A547` — accent
- **Cream:** `#F4F1EA` — supporting
- **Forest:** `#2F5233` — success states
- **Burgundy:** `#7A1F1F` — error states

## Typography

- **Inter** — entire site, loaded via `next/font/google` for self-hosting and optimal LCP
- Display weights: 700, 800
- Body weights: 400, 500, 600

## Local development

```bash
npm install
npm run dev
```

Site at http://localhost:3000

## Form submissions

`/api/lead` currently logs to Vercel logs. To enable real email delivery,
add `RESEND_API_KEY` to environment variables and uncomment the Resend block
in `app/api/lead/route.ts`.

## Deployment

Vercel auto-deploys on push to `main`. The framework preset is now correctly
detected as Next.js.

## Adding more cities or states

Edit `app/cities/[city]/page.tsx` or `app/states/[state]/page.tsx` and add
entries to the `CITY_DATA` or `STATE_DATA` objects. They auto-render and
auto-include in the sitemap (after also adding to the `cities` or `states`
arrays in `app/sitemap.ts`).
