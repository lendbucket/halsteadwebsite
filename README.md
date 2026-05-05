# Halstead Security — Marketing Site

Public-facing marketing website for Halstead Security and the Halstead dealer/franchise program.

## What this site does

Three audiences, three primary CTAs:

1. **Homeowners** — sells the consumer product (cameras + monthly service). CTA: "Get a Quote" / "See Plans".
2. **Prospective dealers** — sells the dealership opportunity. CTA: "Apply to be a Dealer".
3. **Prospective white-label partners** — sells the white-label platform. CTA: "Schedule a Demo".

## Stack

- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui components
- MDX for content
- Vercel hosting
- Resend or SendGrid for form submissions
- Plausible or PostHog for analytics

## Repo structure

```
halstead-marketing/
├── content/
│   ├── pages/        # MDX page content
│   ├── features/     # Per-feature marketing pages
│   ├── states/       # Per-state landing pages (SEO)
│   └── blog/         # Blog posts
├── docs/
│   ├── ROADMAP.md    # Marketing site phases
│   ├── PAGES.md      # Page inventory
│   └── COPY.md       # Brand voice & copy guidelines
└── README.md
```

## Page inventory (V1)

- Home `/`
- Why Halstead `/why`
- Plans & Pricing `/plans`
- Equipment `/equipment`
- Become a Dealer `/dealer`
- White-Label Platform `/white-label`
- About `/about`
- Contact `/contact`
- FAQ `/faq`
- Privacy `/privacy`
- Terms `/terms`

## Status

Phase: 0 — content planning before code

See `docs/ROADMAP.md` for the marketing buildout plan.
