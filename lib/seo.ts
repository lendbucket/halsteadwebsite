/**
 * SEO utilities for Halstead Security marketing site.
 *
 * Generates JSON-LD structured data, Open Graph tags, and Twitter cards
 * to maximize search engine visibility and social sharing quality.
 */

export const SITE = {
  name: "Halstead Security",
  url: "https://halsteadsecurity.com",
  description:
    "Professional home security, installed by a local technician, monitored by smart software. No 36-month contracts. Real cameras, real installation, real support.",
  twitter: "@halsteadsecurity",
  email: "hello@halsteadsecurity.com",
  phone: "+1-361-555-0100",
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
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description: SITE.description,
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  foundingDate: SITE.founded,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    email: SITE.email,
    availableLanguage: ["English", "Spanish"],
    areaServed: "US",
  },
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  sameAs: [
    // Add social profiles as they come online
  ],
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SecuritySystemInstallationService",
  name: SITE.name,
  image: `${SITE.url}/og.png`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$30 - $75 per month",
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.8006,
    longitude: -97.3964,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    {
      "@type": "State",
      name: "Texas",
    },
  ],
};

/**
 * Generates a FAQ structured data schema from a list of Q&As.
 * Critical for capturing "People Also Ask" featured snippets in Google.
 */
export function generateFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Generates breadcrumb structured data.
 * Helps Google show breadcrumb navigation in search results.
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

/**
 * Product schema for subscription plans.
 * Helps with merchant listings and rich pricing snippets.
 */
export function generateProductSchema(plan: {
  name: string;
  description: string;
  price: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Halstead Security ${plan.name} Plan`,
    description: plan.description,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      price: plan.price,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Helper: render JSON-LD as a script tag.
 * Use in any page like: <JsonLd data={ORGANIZATION_SCHEMA} />
 */
export function jsonLdString(data: object): string {
  return JSON.stringify(data);
}
