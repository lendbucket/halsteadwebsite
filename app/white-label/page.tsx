import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White-Label Security Platform — Run Your Brand on Halstead",
  description:
    "Operate a security business under your own brand using Halstead's full platform, hardware sourcing, and back-office. Three tiers from $5,000 setup. For established alarm operators and home services brands.",
  alternates: { canonical: "/white-label" },
};

const tiers = [
  {
    name: "Standard",
    price: "$5,000 setup + $1,500/mo",
    audience: "For operators serving up to 500 customers",
    features: [
      "Custom domain via Cloudflare for SaaS",
      "Branded customer portal and emails",
      "Single mobile app with brand detection",
      "Standard integration set",
      "Email support",
    ],
  },
  {
    name: "Premium",
    price: "$15,000 setup + $3,000/mo",
    audience: "For operators serving up to 5,000 customers",
    features: [
      "Everything in Standard, plus:",
      "Custom-published mobile apps under your developer account",
      "Priority feature requests",
      "Dedicated platform support",
      "Quarterly business reviews",
      "Co-marketing opportunities",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    audience: "For operators serving 5,000+ customers",
    features: [
      "Multi-region deployment",
      "SLA guarantees",
      "Dedicated support team",
      "Custom feature development",
      "Strategic partnership terms",
    ],
  },
];

const audiences = [
  {
    title: "Existing alarm companies",
    body: "You have customers, installers, and a state license, but your software is a Frankenstein of email, spreadsheets, and a 2008-era CRM. Halstead's platform replaces all of that and lets you compete with national brands on technology while keeping your local relationships.",
  },
  {
    title: "Adjacent home services brands",
    body: "You're a successful HVAC, plumbing, or electrical company in a regional market. Adding a security line under your existing brand is a natural extension. Customers already trust you. Halstead provides the platform and product so you don't have to build them.",
  },
  {
    title: "Property management groups",
    body: "You manage thousands of doors. Halstead's white-label platform lets you offer security as a value-add to your tenants under your own brand, with consolidated billing and centralized portal access.",
  },
  {
    title: "Real estate brokerages",
    body: "You close hundreds of homes a year. Bundle Halstead-powered security under your brokerage's brand as a closing gift or add-on service. Recurring revenue stream that complements your transaction-based business.",
  },
];

export default function WhiteLabelPage() {
  return (
    <>
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              For Established Operators
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-cream md:text-5xl lg:text-6xl text-balance">
              Run a security business under your own brand.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/80 md:text-xl text-pretty">
              Halstead&apos;s white-label platform lets established security
              companies, smart home installers, and adjacent service providers
              operate under their own brand using Halstead&apos;s full
              platform, hardware sourcing, and back-office support.
            </p>
            <Link href="/contact?type=partner" className="mt-10 btn-gold btn-large group inline-flex">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">Tiers</p>
            <h2 className="heading-section mt-3 text-balance">
              Choose your scale.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={tier.featured ? "card-featured" : "card"}
              >
                {tier.featured && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                    Most popular
                  </p>
                )}
                <h3 className="text-2xl font-bold text-navy">{tier.name}</h3>
                <p className="mt-3 text-xl font-bold text-navy">{tier.price}</p>
                <p className="mt-2 text-sm text-navy/60">{tier.audience}</p>

                <ul className="mt-6 space-y-3 border-t border-navy/10 pt-6">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm leading-relaxed text-navy/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact?type=partner"
                  className={`mt-6 block w-full text-center ${
                    tier.featured ? "btn-gold" : "btn-secondary"
                  }`}
                >
                  Inquire about {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Who white-label is for
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl text-balance">
              Operators ready to scale on Halstead infrastructure.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {audiences.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-cream/10 bg-cream/5 p-6"
                >
                  <h3 className="text-lg font-bold text-gold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-16">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl text-balance">
            Ready to talk?
          </h2>
          <p className="mt-4 text-lg text-navy/80">
            Email{" "}
            <a
              href="mailto:partner@halsteadsecurity.com"
              className="font-semibold underline"
            >
              partner@halsteadsecurity.com
            </a>{" "}
            for a discovery call.
          </p>
          <Link href="/contact?type=partner" className="mt-10 btn-primary btn-large group inline-flex">
            Schedule a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
