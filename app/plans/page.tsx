import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateProductSchema, generateFaqSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans & Pricing — Home Security from $30/month",
  description:
    "Halstead Security plans start at $30/month. No 36-month contracts. Compare Basic ($30), Premium ($50), and Pro Monitoring ($75). Hardware kits from $399. 0% financing through Reyna Title.",
  alternates: { canonical: "/plans" },
};

const plans = [
  {
    name: "Basic",
    price: 30,
    tagline: "For homes that want professional security without paying for monitoring they don't use.",
    features: [
      "Up to 4 cameras",
      "7-day cloud video storage",
      "Real-time motion alerts",
      "Live view from anywhere",
      "Two-way audio doorbell support",
      "Mobile app (iOS + Android)",
      "Local Halstead support",
      "Professionally installed",
    ],
    bestFor: "Homeowners who want professional cameras and self-monitor through the app.",
  },
  {
    name: "Premium",
    price: 50,
    tagline: "For families who want smart filtering and longer history.",
    features: [
      "Up to 8 cameras",
      "30-day cloud video storage",
      "Smart motion filters (wind, rain, animals)",
      "Priority alert routing",
      "Smart family check-ins",
      "Vacation mode automation",
      "Visitor pass generator",
      "Storm mode",
      "Priority phone support",
    ],
    bestFor: "Active households where the app is part of daily life.",
    featured: true,
  },
  {
    name: "Pro Monitoring",
    price: 75,
    tagline: "For families who want a real person to dispatch help if something happens.",
    features: [
      "24/7 professional monitoring (UL-listed)",
      "Police, fire, and medical dispatch",
      "Cellular backup hub included",
      "Two-camera verification",
      "Smart escalation chain",
      "60-day cloud video storage",
      "Annual maintenance visit",
    ],
    bestFor: "Homeowners who want professional monitoring without ADT-style 36-month contracts.",
  },
];

const compareRows = [
  { label: "Professional install", h: "Local technician", a: "Subcontract", r: "DIY only", s: "DIY only" },
  { label: "Month-to-month after year 1", h: true, a: false, r: true, s: true },
  { label: "Local technician contact", h: true, a: false, r: false, s: false },
  { label: "Pro monitoring", h: "$75/mo", a: "$40-60/mo", r: "$20/mo", s: "$30/mo" },
  { label: "Smart AI motion filters", h: "Premium tier", a: "Limited", r: "Add-on", s: "Limited" },
  { label: "Hardware financing 0%", h: true, a: "Bundled", r: false, s: false },
  { label: "Cancel anytime after y1", h: true, a: false, r: true, s: true },
];

const plansFaqs = [
  {
    q: "What's the difference between Basic, Premium, and Pro Monitoring?",
    a: "Basic ($30/month) covers up to 4 cameras with 7-day cloud storage and motion alerts — you self-monitor through the app. Premium ($50/month) adds AI smart filters, vacation mode, visitor passes, longer storage, and supports up to 8 cameras. Pro Monitoring ($75/month) adds 24/7 professional dispatch through a UL-listed central station and a cellular backup hub.",
  },
  {
    q: "How much do the cameras cost?",
    a: "Hardware is sold separately at install. A 4-camera starter kit is $399, 6-camera kit is $599, 8-camera kit is $799. Add-ons include doorbell ($149), floodlight camera ($199), and cellular backup hub ($99). Financing is available through Reyna Title at 0% interest for 12 months.",
  },
  {
    q: "Is there a contract?",
    a: "12-month minimum, then month-to-month. You can cancel anytime after your first year with no fees. This is intentionally simpler than ADT or Brinks 36-month contracts.",
  },
  {
    q: "What if I move?",
    a: "Halstead moves with you. Your local Halstead team will uninstall and reinstall at your new address (within our service area) for a flat fee. The equipment is yours — you bought it.",
  },
  {
    q: "What happens if I cancel?",
    a: "After year one, monitoring stops at the end of your current billing month. The cameras you bought continue working as standalone devices with local recording on the hub.",
  },
];

export default function PlansPage() {
  return (
    <>
      <JsonLd
        data={[
          ...plans.map((p) =>
            generateProductSchema({ name: p.name, description: p.tagline, price: p.price })
          ),
          generateFaqSchema(plansFaqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow text-center">
          <p className="eyebrow">Plans &amp; Pricing</p>
          <h1 className="heading-hero mt-4 text-balance">
            Honest pricing.
            <br />
            <span className="text-gold">No setup fees.</span>
          </h1>
          <p className="body-large mt-6">
            Three plans designed for how customers actually use home security.
            Cancel anytime after your first year.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={plan.featured ? "card-featured relative" : "card"}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy shadow-md">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold text-navy">{plan.name}</h2>
                <p className="mt-3 text-5xl font-bold text-navy">
                  ${plan.price}
                  <span className="text-base font-medium text-navy/60">
                    /month
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  {plan.tagline}
                </p>

                <ul className="mt-6 space-y-3 border-t border-navy/10 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold"
                        strokeWidth={3}
                      />
                      <span className="text-sm text-navy/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-navy/10 pt-4 text-xs italic text-navy/60">
                  Best for: {plan.bestFor}
                </p>

                <Link
                  href={`/contact?plan=${plan.name.toLowerCase().replace(" ", "-")}`}
                  className={`mt-6 block w-full text-center ${
                    plan.featured ? "btn-gold" : "btn-secondary"
                  }`}
                >
                  Get {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Hardware
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl text-balance">
              Cameras and equipment, sold separately at install.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              Halstead works with proven, professional-grade IP cameras with
              night vision, weather resistance, and motion detection. All
              hardware comes with a 24-month warranty.
            </p>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {[
                ["4-camera starter kit", "$399"],
                ["6-camera kit", "$599"],
                ["8-camera kit", "$799"],
                ["Doorbell add-on", "$149"],
                ["Floodlight camera", "$199"],
                ["Cellular backup hub", "$99"],
              ].map(([item, price]) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-cream/10 py-3"
                >
                  <span className="text-base text-cream/90">{item}</span>
                  <span className="text-lg font-bold text-gold">{price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-5">
              <p className="text-sm text-cream/90">
                <span className="font-bold text-gold">Hardware financing:</span>{" "}
                0% interest for 12 months through Reyna Title. Apply during
                checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-center">How we compare</p>
            <h2 className="heading-section mt-3 text-center text-balance">
              Halstead vs the big national brands.
            </h2>

            <div className="mt-12 overflow-x-auto rounded-xl border border-navy/10">
              <table className="w-full bg-white">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th className="py-4 px-4 text-left text-sm font-semibold">Feature</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold">Halstead</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold text-cream/70">ADT</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold text-cream/70">Ring</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold text-cream/70">SimpliSafe</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.label} className="border-t border-navy/10">
                      <td className="py-4 px-4 text-left text-sm font-medium text-navy">
                        {row.label}
                      </td>
                      <CompareCell value={row.h} highlight />
                      <CompareCell value={row.a} />
                      <CompareCell value={row.r} />
                      <CompareCell value={row.s} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20" id="faq">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <p className="eyebrow">Common questions</p>
            <h2 className="heading-section mt-3">Plans &amp; pricing FAQ.</h2>
          </div>

          <div className="space-y-2">
            {plansFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-navy/10 bg-white p-6"
              >
                <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-navy">
                  <span className="pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-gold transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-navy/75">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Ready to protect your home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
            Get a free quote from your local Halstead team. We&apos;ll
            recommend the right plan in under 15 minutes.
          </p>
          <Link href="/contact" className="mt-10 btn-gold btn-large group inline-flex">
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}

function CompareCell({
  value,
  highlight = false,
}: {
  value: boolean | string;
  highlight?: boolean;
}) {
  const cls = highlight
    ? "py-4 px-4 text-center text-sm font-bold text-navy bg-gold/10"
    : "py-4 px-4 text-center text-sm text-navy/70";

  if (typeof value === "boolean") {
    return (
      <td className={cls}>
        {value ? (
          <Check className="mx-auto h-5 w-5 text-gold" strokeWidth={3} />
        ) : (
          <X className="mx-auto h-5 w-5 text-navy/30" strokeWidth={2} />
        )}
      </td>
    );
  }

  return <td className={cls}>{value}</td>;
}
