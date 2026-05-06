import Link from "next/link";

export const metadata = {
  title: "White-Label Platform",
  description:
    "Operate a security business under your own brand using Halstead's platform, hardware, and back-office.",
};

const tiers = [
  {
    name: "Standard White-Label",
    price: "$5,000 setup + $1,500/mo",
    features: [
      "Custom domain via Cloudflare for SaaS",
      "Branded customer portal and emails",
      "Single mobile app with brand detection",
      "Up to 500 active customers",
      "Standard integration set",
      "Email support",
    ],
  },
  {
    name: "Premium White-Label",
    price: "$15,000 setup + $3,000/mo",
    features: [
      "Everything in Standard, plus:",
      "Custom-published mobile apps in App Store + Play Store under your developer account",
      "Up to 5,000 active customers",
      "Priority feature requests",
      "Dedicated platform support",
      "Quarterly business reviews",
      "Co-marketing opportunities",
    ],
    featured: true,
  },
  {
    name: "Enterprise White-Label",
    price: "Custom pricing",
    features: [
      "Multi-region deployment",
      "SLA guarantees",
      "Dedicated support team",
      "Custom feature development",
      "Strategic partnership terms",
    ],
  },
];

export default function WhiteLabelPage() {
  return (
    <>
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              For Established Operators
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-cream md:text-5xl lg:text-6xl">
              Run a security business under your own brand.
            </h1>
            <p className="mt-6 font-sans text-lg leading-relaxed text-cream/80 md:text-xl">
              Halstead&apos;s white-label platform lets established security
              companies, smart home installers, and adjacent service providers
              operate under their own brand using Halstead&apos;s full platform,
              hardware sourcing, and back-office support.
            </p>
            <Link href="/contact" className="mt-10 btn-gold inline-flex">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">Tiers</p>
            <h2 className="heading-section mt-3">Choose your scale.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg border-2 p-8 ${
                  tier.featured
                    ? "border-gold bg-cream-50 shadow-lg"
                    : "border-navy/10 bg-cream"
                }`}
              >
                {tier.featured && (
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                    Most popular
                  </p>
                )}
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {tier.name}
                </h3>
                <p className="mt-3 font-serif text-xl font-bold text-navy">
                  {tier.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="font-sans text-sm leading-relaxed text-navy/80">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              Who white-label is for
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream md:text-4xl">
              Operators ready to scale on Halstead infrastructure.
            </h2>

            <div className="mt-12 space-y-8">
              {[
                {
                  title: "Existing alarm companies",
                  body: "You have customers, installers, and a state license, but your software is a Frankenstein of email, spreadsheets, and a 2008-era CRM. Halstead's platform replaces all of that.",
                },
                {
                  title: "Adjacent home services brands",
                  body: "You're a successful HVAC, plumbing, or electrical company in a regional market. Adding a security line under your existing brand is a natural extension.",
                },
                {
                  title: "Property management groups",
                  body: "You manage thousands of doors. Halstead's white-label platform lets you offer security as a value-add to your tenants under your own brand.",
                },
                {
                  title: "Real estate brokerages",
                  body: "You close hundreds of homes a year. Bundle Halstead-powered security under your brokerage's brand as a closing gift or add-on service.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-xl font-semibold text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-cream/80">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold py-16">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Ready to talk?
          </h2>
          <p className="mt-4 font-sans text-lg text-navy/80">
            Email{" "}
            <a
              href="mailto:partner@halsteadsecurity.com"
              className="font-medium underline"
            >
              partner@halsteadsecurity.com
            </a>{" "}
            for a discovery call.
          </p>
          <Link href="/contact" className="mt-8 btn-primary inline-flex">
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
