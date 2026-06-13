/**
 * Central site configuration.
 *
 * All navigation links, contact details, and brand constants live here
 * so they can be updated in one place.
 */

export const siteConfig = {
  name: "Halstead Security",
  url: "https://halsteadsecurity.com",
  description:
    "Professional home security, installed by a local technician, monitored by smart software. No 36-month contracts. Real cameras, real installation, real support.",
  twitter: "@halsteadsecurity",

  contact: {
    email: "hello@halsteadsecurity.com",
    dealers: "dealers@halsteadsecurity.com",
    partner: "partner@halsteadsecurity.com",
    press: "press@halsteadsecurity.com",
  },

  address: {
    streetAddress: "Corpus Christi",
    addressLocality: "Corpus Christi",
    addressRegion: "TX",
    postalCode: "78401",
    addressCountry: "US",
  },

  founder: "Robert Reyna",
  founded: "2026",

  brand: {
    primary: "#0F1B2D",
    accent: "#C9A547",
  },

  nav: {
    main: [
      { href: "/solutions", label: "Solutions" },
      { href: "/features", label: "Features" },
      { href: "/plans", label: "Plans" },
      { href: "/compare", label: "Compare" },
      { href: "/dealer", label: "Become a Dealer" },
      { href: "/territories", label: "Own a Territory" },
      { href: "/resources", label: "Resources" },
    ],
    cta: { href: "/contact", label: "Get a Free Quote" },
  },

  footer: {
    solutions: [
      { href: "/solutions/home-security", label: "Home Security" },
      { href: "/solutions/business-security", label: "Business" },
      { href: "/solutions/multifamily", label: "Multifamily" },
      { href: "/solutions/short-term-rental", label: "Short-Term Rentals" },
      { href: "/solutions/construction-site", label: "Construction" },
      { href: "/industries", label: "All Industries \u2192" },
    ],
    customers: [
      { href: "/plans", label: "Plans & Pricing" },
      { href: "/features", label: "Features" },
      { href: "/compare", label: "Compare" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Get a Quote" },
    ],
    operators: [
      { href: "/dealer", label: "Become a Dealer" },
      { href: "/dealer/faq", label: "Dealer FAQ" },
      { href: "/dealer/apply", label: "Apply Now" },
      { href: "/territories", label: "Own a Territory" },
      { href: "/white-label", label: "White-Label" },
    ],
    areas: [
      { href: "/states/texas", label: "Texas" },
      { href: "/cities/corpus-christi", label: "Corpus Christi" },
      { href: "/cities/houston", label: "Houston" },
      { href: "/cities/san-antonio", label: "San Antonio" },
      { href: "/cities/austin", label: "Austin" },
      { href: "/cities/dallas", label: "Dallas" },
      { href: "/about", label: "About Halstead" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
} as const;
