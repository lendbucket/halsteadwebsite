import Link from "next/link";
import { Check, ArrowRight, TrendingUp, MapPin, GraduationCap, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateFaqSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Halstead Dealer — $15,000 Founding Territory",
  description:
    "Own a Halstead Security territory in your city. Founding dealer fee: $15,000 one-time. Includes brand license, software platform, state licensing wizard, training, and 90-day support. First 25 dealers only.",
  alternates: { canonical: "/dealer" },
  openGraph: {
    title: "Own a Halstead Security Territory — $15,000 Founding Offer",
    description:
      "Run your own security business under a brand customers trust. Software, training, and back-office included. First 25 dealers locked at the founding rate.",
  },
};

const includes = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Exclusive territory",
    description: "A defined geographic area, typically 50K to 150K population. Yours alone.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "The Halstead brand",
    description: "Full license to operate as Halstead Security in your territory.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Full Halstead platform",
    description: "Customer management, billing, install workflow, mobile app, and more.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "State licensing wizard",
    description: "Step-by-step roadmap through your state's alarm licensing requirements.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "5-day intensive training",
    description: "Product, sales, install, customer service, and compliance certification.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Marketing kit",
    description: "Templates, signs, ads, collateral — professionally designed, ready to deploy.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Founding rate locked 24 months",
    description: "Future dealer fees will be higher. Your founding rate is locked.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "25 free customer setups",
    description: "Saves you $2,475 in platform fees during your first cohort of customers.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "5 starter inventory kits",
    description: "Free at platform cost — saves $2,000 to get you to your first installs.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "90-day onboarding support",
    description: "Direct access to platform team. Weekly check-ins. Slack with founding cohort.",
  },
];

const compareTable = [
  ["Halstead Founding Dealer", "$15,000", "Full platform", "Exclusive", "Halstead brand"],
  ["ADT Authorized Dealer", "$50,000+", "Limited", "No exclusivity", "ADT brand"],
  ["Brinks Dealer Program", "$25K-$100K", "Limited", "Negotiable", "Brinks brand"],
  ["Vivint Smart Home Pro", "$30K-$50K", "Vivint platform", "No exclusivity", "Vivint brand"],
  ["Independent (no brand)", "$30K-$75K", "Build your own", "N/A", "Your brand"],
];

const dealerFaqs = [
  {
    q: "What is the Halstead Security dealer program?",
    a: "Halstead Security is a national security brand operated through a network of independent, locally-owned dealers. Each dealer holds an exclusive territory, runs their own state-licensed alarm business, and operates on Halstead's software platform with Halstead's brand and back-office support.",
  },
  {
    q: "Why is the founding dealer fee $15,000?",
    a: "We benchmarked against existing dealer programs. ADT requires $50,000+. Brinks requires $25,000-$100,000. Vivint requires $30,000-$50,000. Independent launches cost $30,000-$75,000 with no brand. $15,000 is intentionally priced below the competition for our founding cohort, locked for 24 months.",
  },
  {
    q: "What does a Halstead dealer earn?",
    a: "Three revenue streams: customer subscriptions (70/30 split with platform), hardware margin (20-50% per kit), and add-on services (100% to dealer). Year 1 with 50 customers: ~$1,550/month, $18,600/year. Year 3 with 200 customers: ~$7,200/month, $86,400/year. Payback period on the $15,000 fee: about 10 months.",
  },
  {
    q: "Is the $15,000 fee refundable?",
    a: "Refundable in full if Halstead does not approve your application or if Halstead changes the program structure within 30 days of your payment. Non-refundable after training begins.",
  },
  {
    q: "Can I finance the $15,000?",
    a: "Yes. Reyna Title (a sister company) offers founding dealer financing for qualified applicants — typically 12 to 24 month terms at competitive rates.",
  },
  {
    q: "Is Halstead a franchise?",
    a: "No. Halstead is structured as a software platform with a trademark license, not a franchise. This means more flexibility for dealers, less regulatory burden, and faster path to launch.",
  },
];

export default function DealerPage() {
  return (
    <>
      <JsonLd data={generateFaqSchema(dealerFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-20 text-cream md:py-32">
        <div className="absolute inset-0 pattern-dots opacity-10" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              For Operators
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-cream md:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Own a Halstead Security territory in your city.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/80 md:text-xl text-pretty">
              Halstead Security is building a national network of independent,
              locally-owned dealers. We&apos;re looking for entrepreneurs,
              established alarm operators, and home services pros who want to
              run their own security business — under a brand customers trust,
              with the software and back-office to scale.
            </p>

            <div className="mt-10 rounded-xl border-2 border-gold bg-gold/10 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Founding Dealer Offer
              </p>
              <p className="mt-3 text-5xl font-bold text-cream md:text-6xl">
                $15,000
                <span className="text-2xl font-medium text-cream/70"> one-time</span>
              </p>
              <p className="mt-3 text-base text-cream/90">
                Locked rate for 24 months · First 25 dealers only
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dealer/apply" className="btn-gold btn-large group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/dealer/faq"
                className="inline-flex items-center justify-center rounded-lg border-2 border-cream/30 px-8 py-4 text-base font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <p className="eyebrow">Why now</p>
          <h2 className="heading-section mt-3 text-balance">
            The gap in the security industry.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-navy/80">
            <p>
              The security industry is run by a few national giants and a long
              tail of small independent operators. The giants treat customers
              like contracts. The independents fight to keep up with software
              and licensing.
            </p>
            <p>
              There&apos;s a gap in the middle: a real local business that
              operates under a national brand with national-grade software.
              That&apos;s Halstead.
            </p>
            <p className="text-xl font-semibold italic text-navy">
              If you&apos;re already in alarm, home services, or a related
              trade, you have everything you need to run a Halstead territory
              except the brand, the software, and the playbook. We provide all
              three.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              What $15,000 includes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl lg:text-5xl text-balance">
              Everything you need to launch in 90 days.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {includes.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-cream/10 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl border-2 border-gold bg-gold/10 p-6 text-center">
            <p className="text-base text-cream">
              <span className="font-bold text-gold">Net immediate value:</span>{" "}
              $4,475 in benefits + the territory + the brand + the software +
              the training.
              <br />
              <span className="text-cream/70">Real cost: $10,525 for everything else.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Money math */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">How a Halstead dealer earns</p>
            <h2 className="heading-section mt-3 text-balance">The math.</h2>
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
                annual="$18,600/yr"
                detail="Payback period: ~10 months"
              />
              <YearCard
                label="Year 3"
                customers="200 customers"
                monthly="$7,200+/mo"
                annual="$86,400+/yr"
                detail="Territory becomes a transferable asset"
                featured
              />
              <YearCard
                label="Year 5"
                customers="500+ customers"
                monthly="$20,000+/mo"
                annual="$240,000+/yr"
                detail="Territory value: $700K-$1.2M"
              />
            </div>

            <p className="mt-8 text-sm italic text-navy/60">
              Mid-case projections based on industry-standard subscription
              dynamics in a well-run security territory. Some dealers will
              outperform; some will underperform. Nothing is guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-center">How Halstead compares</p>
            <h2 className="heading-section mt-3 text-center text-balance">
              Other dealer programs in security.
            </h2>

            <div className="mt-12 overflow-x-auto rounded-xl border border-navy/10 shadow-sm">
              <table className="w-full bg-white">
                <thead className="bg-navy text-cream">
                  <tr>
                    <th className="py-4 px-4 text-left text-sm font-semibold">Program</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold">Entry cost</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold">Software</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold">Territory</th>
                    <th className="py-4 px-4 text-center text-sm font-semibold">Brand</th>
                  </tr>
                </thead>
                <tbody>
                  {compareTable.map((row, i) => (
                    <tr
                      key={row[0]}
                      className={`border-t border-navy/10 ${
                        i === 0 ? "bg-gold/10 font-bold" : ""
                      }`}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`py-4 px-4 text-sm ${
                            j === 0 ? "text-left font-medium text-navy" : "text-center text-navy/80"
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

            <p className="mt-6 text-center text-sm italic text-navy/60">
              Spend more for less brand, or less for no brand. Halstead is the
              right cost for the right value.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream pb-20" id="faq">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <p className="eyebrow">Common questions</p>
            <h2 className="heading-section mt-3">Dealer program FAQ.</h2>
          </div>

          <div className="space-y-2">
            {dealerFaqs.map((faq, i) => (
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

          <div className="mt-10 text-center">
            <Link href="/dealer/faq" className="btn-secondary">
              See all 20+ dealer questions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl text-balance">
            Founding dealer slots: 25 total.
          </h2>
          <p className="mt-4 text-lg text-navy/80">
            Once filled, the standard rate becomes $25,000.
          </p>
          <Link href="/dealer/apply" className="mt-10 btn-primary btn-large group inline-flex">
            Start your application
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-6 text-sm text-navy/70">
            Or email{" "}
            <a
              href="mailto:dealers@halsteadsecurity.com"
              className="font-semibold underline"
            >
              dealers@halsteadsecurity.com
            </a>{" "}
            with questions.
          </p>
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
    <div className={featured ? "card-featured" : "card"}>
      <p className="text-xs font-bold uppercase tracking-widest text-gold">
        {label}
      </p>
      <p className="mt-2 text-sm text-navy/70">{customers}</p>
      <p className="mt-4 text-3xl font-bold text-navy">{monthly}</p>
      <p className="text-base font-semibold text-navy/80">{annual}</p>
      <p className="mt-4 border-t border-navy/10 pt-4 text-sm text-navy/70">
        {detail}
      </p>
    </div>
  );
}
