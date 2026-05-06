# Halstead Marketing Site — Content Index

This is the inventory of marketing content. The Next.js site reads from `content/pages/*.mdx` and renders each as a page.

## Pages currently in this repo

| Slug | File | Purpose |
|------|------|---------|
| `/` | `pages/home.mdx` | Hero + value prop + dual CTA (customer + dealer) |
| `/plans` | `pages/plans.mdx` | Subscription pricing, hardware costs, comparison |
| `/features` | `pages/features.mdx` | Smart features, AI capabilities, what's coming |
| `/dealer` | `pages/dealer.mdx` | $15K founding dealer offer (THE money page) |
| `/dealer/faq` | `pages/dealer-faq.mdx` | Detailed dealer questions |
| `/white-label` | `pages/white-label.mdx` | Established operators, premium tier |
| `/about` | `pages/about.mdx` | Company story, Reyna ecosystem context |

## Pages to add in Phase 2 of marketing buildout

| Slug | Purpose |
|------|---------|
| `/quote` | Lead capture form for homeowner interest |
| `/dealer/apply` | Dealer application form |
| `/white-label/discovery` | White-label calendar booking |
| `/equipment` | Hardware catalog with photos |
| `/why-halstead` | Detailed competitive comparison |
| `/contact` | Contact form |
| `/faq` | Customer-facing FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/blog` | Blog index |
| `/states/texas` | Texas-specific landing page |

## Pages to add in Phase 3

| Slug | Purpose |
|------|---------|
| `/states/[state]` | Per-state landing pages (OK, LA, AR, NM, AZ, CO, TN, FL) |
| `/cities/[city]` | Per-major-city local SEO pages |
| `/compare/[competitor]` | Halstead vs ADT, Ring, SimpliSafe, Vivint |
| `/case-studies/[customer]` | Customer testimonial deep dives |
| `/dealer-stories/[dealer]` | Dealer success stories |

## Content writing principles

See `docs/COPY.md` for full brand voice guide. Key principles:

1. **Direct, not clever.** Cove and SimpliSafe's voice, not Vivint's.
2. **Confident, not boastful.**
3. **Plain English.** Reader is a 60-year-old homeowner.
4. **Local, not corporate.** Name cities, name people.
5. **Heritage cues.** Halstead since 2026, professional install, family ownership.

## Words to use
Protect, watch, guard, home, family, neighborhood, trusted, professional, dependable, local technician, certified installer.

## Words to avoid
Disrupt, revolutionary, cutting-edge, next-generation, AI-powered (in user-facing copy), seamless, empower.

## Building the actual Next.js site

These MDX files are content. The site infrastructure (Next.js + Tailwind + MDX rendering) gets built in Phase 1 of the marketing roadmap (see `docs/ROADMAP.md`).

Typical structure when the site is implemented:

```
halsteadwebsite/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # renders content/pages/home.mdx
│   ├── plans/page.tsx        # renders content/pages/plans.mdx
│   ├── dealer/page.tsx
│   ├── dealer/faq/page.tsx
│   ├── about/page.tsx
│   ├── features/page.tsx
│   └── white-label/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   └── PricingCard.tsx
├── content/
│   └── pages/                # YOU ARE HERE
└── public/
```

For now, the MDX files themselves are the deliverable. The Next.js scaffolding gets generated when you start the marketing site build (Day 18-21 of the platform build, per `BUILD-21-DAYS.md`).
