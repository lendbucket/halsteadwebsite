import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Plans & Pricing",
  description:
    "Simple, transparent monthly pricing. No 36-month contracts. No hidden fees.",
};

const plans = [
  {
    name: "Basic",
    price: 30,
    tagline:
      "For homes that want professional security without paying for monitoring they don't use.",
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
    bestFor:
      "Homeowners who want professional cameras and self-monitor through the app.",
  },
  {
    name: "Premium",
    price: 50,
    tagline: "For families who want smart filtering and longer history.",
    features: [
      "Up to 8 cameras",
      "30-day cloud video storage",
      "Smart motion filters (filters wind, rain, animals)",
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
    tagline:
      "For families who want a real person to dispatch help if something happens.",
    features: [
      "24/7 professional monitoring (UL-listed)",
      "Police, fire, and medical dispatch",
      "Cellular backup hub included",
      "Two-camera verification",
      "Smart escalation chain",
      "60-day cloud storage",
      "Annual maintenance visit",
    ],
    bestFor:
      "Homeowners who want professional monitoring without ADT-style contracts.",
  },
];

const compareRows = [
  { label: "Professional install", halstead: "Local technician", adt: "Subcontract", ring: "DIY only", simplisafe: "DIY only" },
  { label: "Month-to-month after year 1", halstead: true, adt: false, ring: true, simplisafe: true },
  { label: "Local technician contact", halstead: true, adt: false, ring: false, simplisafe: false },
  { label: "Pro monitoring option", halstead: "$75/mo", adt: "$40-60/mo", ring: "$20/mo", simplisafe: "$30/mo" },
  { label: "Smart AI filters", halstead: "Premium tier", adt: "Limited", ring: "Add-on", simplisafe: "Limited" },
  { label: "Hardware financing 0%", halstead: true, adt: "Bundled", ring: false, simplisafe: false },
];

export default function PlansPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Plans &amp; Pricing</p>
            <h1 className="heading-display mt-4">
              Honest pricing. No setup fees.
            </h1>
            <p className="body-large mt-6">
              Three plans. Cancel anytime after your first year.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-cream pb-24">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border-2 p-8 ${
                  plan.featured
                    ? "border-gold bg-cream-50 shadow-lg"
                    : "border-navy/10 bg-cream"
                }`}
              >
                {plan.featured && (
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                    Most popular
                  </p>
                )}
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {plan.name}
                </h3>
                <p className="mt-3 font-sans text-4xl font-bold text-navy">
                  ${plan.price}
                  <span className="text-base font-normal text-navy/60">
                    /month
                  </span>
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-navy/70">
                  {plan.tagline}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" strokeWidth={3} />
                      <span className="font-sans text-sm text-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-navy/10 pt-4 font-sans text-xs italic text-navy/60">
                  Best for: {plan.bestFor}
                </p>

                <Link
                  href="/contact"
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
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
              Hardware
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream md:text-4xl">
              Cameras and equipment, sold separately at install.
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-cream/80">
              Halstead works with proven, professional-grade IP cameras with
              night vision, weather resistance, and motion detection.
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
                  <span className="font-sans text-base text-cream/90">{item}</span>
                  <span className="font-sans text-lg font-semibold text-gold">{price}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-4 font-sans text-sm text-cream/90">
              <span className="font-semibold text-gold">Hardware financing available</span> through
              Reyna Title — 0% interest, 12 months.
            </p>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow text-center">How we compare</p>
            <h2 className="heading-section mt-3 text-center">
              Halstead vs the big guys
            </h2>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-navy/20">
                    <th className="py-4 text-left font-sans text-sm font-semibold text-navy">Feature</th>
                    <th className="py-4 text-center font-sans text-sm font-semibold text-gold">Halstead</th>
                    <th className="py-4 text-center font-sans text-sm font-semibold text-navy/60">ADT</th>
                    <th className="py-4 text-center font-sans text-sm font-semibold text-navy/60">Ring</th>
                    <th className="py-4 text-center font-sans text-sm font-semibold text-navy/60">SimpliSafe</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.label} className="border-b border-navy/10">
                      <td className="py-4 font-sans text-sm font-medium text-navy">{row.label}</td>
                      <CompareCell value={row.halstead} highlight />
                      <CompareCell value={row.adt} />
                      <CompareCell value={row.ring} />
                      <CompareCell value={row.simplisafe} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream pb-24">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl rounded-lg bg-navy p-12 text-center text-cream">
            <h2 className="font-serif text-3xl font-semibold text-cream">
              Ready to protect your home?
            </h2>
            <p className="mt-4 font-sans text-lg text-cream/80">
              Get a free quote from your local Halstead team.
            </p>
            <Link href="/contact" className="mt-8 btn-gold inline-flex">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CompareCell({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  const cell = (content: React.ReactNode) => (
    <td
      className={`py-4 text-center font-sans text-sm ${
        highlight ? "bg-gold/5 font-semibold text-navy" : "text-navy/70"
      }`}
    >
      {content}
    </td>
  );

  if (typeof value === "boolean") {
    return cell(
      value ? (
        <Check className="mx-auto h-5 w-5 text-gold" strokeWidth={3} />
      ) : (
        <X className="mx-auto h-5 w-5 text-navy/30" strokeWidth={2} />
      )
    );
  }

  return cell(value);
}
