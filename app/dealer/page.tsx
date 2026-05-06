import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Become a Halstead Dealer",
  description:
    "Run your own security business under a brand customers trust. Founding dealer territories available for $15,000.",
};

const includes = [
  {
    title: "Exclusive territory",
    description: "A defined geographic area, typically 50K to 150K population. Yours alone.",
  },
  {
    title: "The Halstead brand",
    description: "Full license to operate as Halstead Security in your territory.",
  },
  {
    title: "The full Halstead platform",
    description: "Customer management, billing, install workflow, mobile app, and more.",
  },
  {
    title: "State licensing wizard",
    description: "Step-by-step roadmap through your state's alarm licensing requirements.",
  },
  {
    title: "5-day intensive training",
    description: "Product, sales, install, customer service, and compliance certification.",
  },
  {
    title: "Marketing kit",
    description: "Templates, signs, ads, collateral — professionally designed, ready to deploy.",
  },
  {
    title: "Founding rate locked 24 months",
    description: "Future dealer fees will be higher. Your founding rate is locked.",
  },
  {
    title: "25 free customer setups",
    description: "Saves you $2,475 in platform fees during your first cohort of customers.",
  },
  {
    title: "5 starter inventory kits",
    description: "Free at platform cost — saves $2,000 to get you to your first installs.",
  },
  {
    title: "90-day onboarding support",
    description: "Direct access to platform team. Weekly check-ins. Slack workspace with founding cohort.",
  },
];

const compareTable = [
  ["Halstead Founding Dealer", "$15,000", "Full platform", "Exclusive", "Halstead brand"],
  ["ADT Authorized Dealer", "$50,000+", "Limited", "No exclusivity", "ADT brand"],
  ["Brinks Dealer Program", "$25K-$100K", "Limited", "Negotiable", "Brinks brand"],
  ["Vivint Smart Home Pro", "$30K-$50K", "Vivint platform", "No exclusivity", "Vivint brand"],
  ["Independent (no brand)", "$30K-$75K", "Build your own", "N/A", "Your brand"],
];

export default function DealerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              For Operators
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-cream md:text-5xl lg:text-6xl">
              Own a Halstead Security territory in your city.
            </h1>
            <p className="mt-6 font-sans text-lg leading-relaxed text-cream/80 md:text-xl">
              Halstead Security is building a national network of independent,
              locally-owned dealers. We&apos;re looking for entrepreneurs,
              established alarm operators, and home services pros who want to
              run their own security business — under a brand customers trust,
              with the software and back-office to scale.
            </p>

            <div className="mt-10 rounded-lg border-2 border-gold bg-gold/10 p-8">
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                Founding Dealer Offer
              </p>
              <p className="mt-3 font-serif text-4xl font-bold text-cream md:text-5xl">
                $15,000 one-time
              </p>
              <p className="mt-3 font-sans text-base text-cream/90">
                Locked rate for 24 months &middot; First 25 dealers only
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/dealer/faq"
                className="inline-flex items-center justify-center rounded-md border-2 border-cream/30 px-6 py-3 font-sans font-medium text-cream hover:border-cream hover:bg-cream/10"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Why now</p>
            <h2 className="heading-section mt-3">
              The gap in the security industry.
            </h2>
            <div className="mt-8 space-y-6 font-sans text-lg leading-relaxed text-navy/80">
              <p>
                The security industry is run by a few national giants and a
                long tail of small independent operators. The giants treat
                customers like contracts. The independents fight to keep up
                with software and licensing.
              </p>
              <p>
                There&apos;s a gap in the middle: a real local business that
                operates under a national brand with national-grade software.
                That&apos;s Halstead.
              </p>
              <p>
                If you&apos;re already in alarm, home services, or a related
                trade, you have everything you need to run a Halstead territory
                except the brand, the software, and the playbook. We provide
                all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              What $15,000 includes
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream md:text-4xl">
              Everything you need to launch in 90 days.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {includes.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-cream/10 bg-cream/5 p-6"
              >
                <Check className="h-6 w-6 flex-shrink-0 text-gold" strokeWidth={3} />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-cream/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-gold bg-gold/10 p-6 text-center">
            <p className="font-sans text-base text-cream/90">
              <span className="font-bold text-gold">Net immediate value:</span>{" "}
              $4,475 in benefits + the territory + the brand + the software +
              the training. Real cost: $10,525 for everything else.
            </p>
          </div>
        </div>
      </section>

      {/* Money math */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">How a Halstead dealer earns</p>
            <h2 className="heading-section mt-3">The math.</h2>
            <p className="body-large mt-6 max-w-2xl">
              Three revenue streams flow to a Halstead dealer: customer
              subscriptions (70/30 split with platform), hardware margin
              (20-50% per kit), and add-on services (100% to dealer).
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <YearCard
                label="Year 1"
                customers="50 customers"
                monthly="$1,550/mo"
                annual="$18,600/year"
                detail="Payback period: ~10 months"
              />
              <YearCard
                label="Year 3"
                customers="200 customers"
                monthly="$7,200+/mo"
                annual="$86,400+/year"
                detail="Territory becomes a transferable asset"
                featured
              />
              <YearCard
                label="Year 5"
                customers="500+ customers"
                monthly="$20,000+/mo"
                annual="$240,000+/year"
                detail="Territory value: $700K-$1.2M"
              />
            </div>

            <p className="mt-8 font-sans text-sm italic text-navy/60">
              These are mid-case projections based on industry-standard
              subscription dynamics in a well-run security territory. Some
              dealers will outperform; some will underperform. Nothing is
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-center">How Halstead compares</p>
            <h2 className="heading-section mt-3 text-center">
              Other dealer programs in security.
            </h2>

            <div className="mt-12 overflow-x-auto rounded-lg border border-navy/10">
              <table className="w-full bg-cream-50">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th className="py-4 px-4 text-left font-sans text-sm font-semibold">Program</th>
                    <th className="py-4 px-4 text-center font-sans text-sm font-semibold">Entry cost</th>
                    <th className="py-4 px-4 text-center font-sans text-sm font-semibold">Software</th>
                    <th className="py-4 px-4 text-center font-sans text-sm font-semibold">Territory</th>
                    <th className="py-4 px-4 text-center font-sans text-sm font-semibold">Brand</th>
                  </tr>
                </thead>
                <tbody>
                  {compareTable.map((row, i) => (
                    <tr
                      key={row[0]}
                      className={`border-t border-navy/10 ${
                        i === 0 ? "bg-gold/10 font-semibold" : ""
                      }`}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`py-4 px-4 font-sans text-sm ${
                            j === 0 ? "text-left text-navy" : "text-center text-navy/80"
                          } ${i === 0 ? "text-navy" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-center font-sans text-sm italic text-navy/60">
              You can spend more for less brand. You can spend less for no
              brand. Halstead is the right cost for the right value.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
              Founding dealer slots: 25 total.
            </h2>
            <p className="mt-4 font-sans text-lg text-navy/80">
              Once filled, the standard rate becomes $25,000.
            </p>
            <Link href="/contact" className="mt-8 btn-primary inline-flex group">
              Start your application
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-6 font-sans text-sm text-navy/70">
              Or email{" "}
              <a href="mailto:dealers@halsteadsecurity.com" className="font-medium underline">
                dealers@halsteadsecurity.com
              </a>{" "}
              with questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function YearCard({
  label,
  customers,
  monthly,
  annual,
  detail,
  featured = false,
}: {
  label: string;
  customers: string;
  monthly: string;
  annual: string;
  detail: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border-2 p-6 ${
        featured ? "border-gold bg-cream-50 shadow-lg" : "border-navy/10 bg-cream-50"
      }`}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
        {label}
      </p>
      <p className="mt-2 font-sans text-sm text-navy/70">{customers}</p>
      <p className="mt-4 font-serif text-3xl font-bold text-navy">{monthly}</p>
      <p className="font-sans text-base font-semibold text-navy/80">{annual}</p>
      <p className="mt-4 border-t border-navy/10 pt-4 font-sans text-sm text-navy/70">
        {detail}
      </p>
    </div>
  );
}
