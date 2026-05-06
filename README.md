# Halstead Security — Marketing Site

Next.js 14 marketing site for Halstead Security. Deploys automatically to Vercel on push.

## Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS with Halstead brand colors
- Lucide icons
- React 18

## Pages

- `/` — Home (hero + value prop + dual CTA)
- `/plans` — Pricing tiers + hardware + comparison
- `/features` — Smart features deep dive
- `/dealer` — $15K founding dealer pitch
- `/dealer/faq` — Detailed dealer questions
- `/white-label` — Premium tier for established operators
- `/about` — Company story + Reyna ecosystem
- `/contact` — Multi-purpose form (customer/dealer/partner)
- `/api/lead` — Form submission endpoint

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000

## Brand colors

- Navy `#0F1B2D` — primary
- Gold `#C9A547` — accent
- Cream `#F4F1EA` — supporting
- Forest `#2F5233` — success
- Burgundy `#7A1F1F` — error

## Typography

- Source Serif 4 — headings (heritage feel)
- Inter — body (modern readable)

## Form submissions

The `/api/lead` endpoint currently logs to Vercel logs. To wire up real email
delivery, add `RESEND_API_KEY` to env vars and uncomment the Resend code in
`app/api/lead/route.ts`.

## Deployment

Vercel auto-deploys on push to `main`. Preview deploys on every PR.

## Roadmap

See `../docs/ROADMAP.md` (in the parent doc folder) for the marketing site
roadmap and `../content/INDEX.md` for content inventory.

Coming in Phase 2:
- Per-state landing pages (SEO)
- Per-city local SEO pages
- Blog
- Customer testimonials
- Live chat widget
- Quote calculator

## License

Proprietary. All rights reserved.
