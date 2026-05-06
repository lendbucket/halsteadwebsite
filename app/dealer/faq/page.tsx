import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateFaqSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealer FAQ — Halstead Security Territory Program",
  description:
    "Detailed answers about becoming a Halstead Security dealer: territory program, $15,000 founding fee, state licensing, training, dealer economics, and program structure.",
  alternates: { canonical: "/dealer/faq" },
};

const sections = [
  {
    title: "The basics",
    qa: [
      {
        q: "What is Halstead Security?",
        a: "Halstead Security is a national home security brand operated through a network of independent, locally-owned dealers. Each dealer holds an exclusive territory, runs their own state-licensed alarm business, and operates on Halstead's software platform with Halstead's brand and back-office support.",
      },
      {
        q: "Is Halstead a franchise?",
        a: "No. Halstead is structured as a software platform with a trademark license, not a franchise. This is a deliberate choice — it means more flexibility for dealers, less regulatory burden for both parties, and faster path to launch.",
      },
      {
        q: "How does Halstead make money?",
        a: "Three ways: the one-time territory fee from each dealer, a monthly platform fee from each dealer, and a 30% share of customer subscription revenue. We make money when our dealers make money — incentives are aligned.",
      },
      {
        q: "What does a dealer actually do day to day?",
        a: "Dealers handle local relationships: marketing, sales, installation, customer support, and ongoing service. Halstead handles software, billing, hardware sourcing, brand, training, and compliance tools.",
      },
    ],
  },
  {
    title: "The $15,000 founding dealer fee",
    qa: [
      {
        q: "Why $15,000?",
        a: "We benchmarked against existing dealer programs. ADT Authorized Dealer requires $50,000+ committed. Brinks requires $25,000-$100,000. Vivint Smart Home Pro requires $30,000-$50,000. Independent alarm company launches cost $30,000-$75,000 with no brand recognition. $15,000 for everything Halstead provides is intentionally priced below the competition for our founding cohort.",
      },
      {
        q: "What's included in the $15,000?",
        a: "Exclusive geographic territory (50K-150K population), Halstead brand license, full software platform, state licensing wizard, 5-day intensive training and certification, marketing kit (templates, signs, ads, collateral), 90-day onboarding support, 25 free customer setups (worth $2,475), 5 starter inventory kits at platform cost (worth $2,000), founding rate locked for 24 months.",
      },
      {
        q: "What's not included?",
        a: "State licensing fees ($400-$1,500 depending on state), surety bond ($500-$2,000 annual), insurance ($1,500-$3,500 annual), LLC formation ($300-$500), background check ($50-$150), inventory beyond the 5 starter kits, vehicle, and other normal business expenses.",
      },
      {
        q: "Is the $15,000 refundable?",
        a: "Refundable in full if Halstead does not approve your application or if Halstead changes the program structure within 30 days of your payment. Non-refundable after training begins.",
      },
      {
        q: "Can I finance the $15,000?",
        a: "Yes. Reyna Title (a sister company under Reyna Holdings) offers founding dealer financing for qualified applicants — typically 12 to 24 month terms at competitive rates. Apply with your dealer application.",
      },
    ],
  },
  {
    title: "Territory and exclusivity",
    qa: [
      {
        q: "How is a territory defined?",
        a: "By ZIP codes. Each territory is a defined cluster of contiguous ZIP codes covering 50,000 to 150,000 in population. Available territories are reviewed during your application.",
      },
      {
        q: "What does 'exclusive' mean?",
        a: "No other Halstead dealer can sell, install, or monitor in your territory. Halstead corporate doesn't compete with you in your territory either.",
      },
      {
        q: "Can I expand my territory later?",
        a: "Yes. After 12 months of meeting performance thresholds, you can apply to expand into adjacent territories at the standard rate ($25,000) or multi-territory rate ($10,000 each, up to 5 total).",
      },
      {
        q: "What happens if I'm not performing?",
        a: "There's a 'use it or lose it' clause. 90-day informal check-in, 6-month review, 12-month formal review against minimum thresholds. 24 months below threshold means territory forfeiture with right of first refusal to a neighboring dealer.",
      },
    ],
  },
  {
    title: "State licensing",
    qa: [
      {
        q: "Do I need a state alarm license?",
        a: "Yes. Every state requires some form of license to sell, install, or monitor alarm systems. Halstead's licensing wizard walks you through your state's specific requirements step by step.",
      },
      {
        q: "What if I don't have alarm industry experience?",
        a: "Some states require a 'qualifying party' with documented industry experience. If you don't have it personally, you can hire a qualifying party as a W-2 employee. Halstead can help you identify and recruit one in most markets.",
      },
      {
        q: "How long does state licensing take?",
        a: "Texas: 6-8 weeks. Most other states: 6-12 weeks. We recommend starting the licensing process in parallel with your training to compress your launch timeline.",
      },
      {
        q: "What does state licensing cost?",
        a: "Varies by state. Roughly $400-$1,500 in fees, plus surety bond ($500-$2,000), plus insurance ($1,500-$3,500). Halstead's wizard breaks this down by state.",
      },
    ],
  },
  {
    title: "Money and economics",
    qa: [
      {
        q: "What does a Halstead dealer actually earn?",
        a: "At 50 customers (Year 1): ~$1,550/month, $18,600/year. ROI on the $15,000 fee: about 10 months. At 200 customers (Year 3): ~$7,200/month, $86,400/year. At 500+ customers (Year 5): $20,000+/month with territory value of $700K-$1.2M. These are reasonable mid-case projections, not guarantees.",
      },
      {
        q: "When do I get paid?",
        a: "Customer subscription payouts arrive in your Stripe Connect account on Stripe's standard schedule (typically 2-day rolling). Hardware payments are immediate at install. Halstead's platform fee is auto-debited monthly.",
      },
      {
        q: "What's the platform fee for?",
        a: "The $499/month covers software access, hosting, customer-facing portal, mobile app, ongoing platform development, central marketing, and platform-tier support.",
      },
      {
        q: "What's the 30% subscription split for?",
        a: "Customer subscriptions are billed to Halstead's platform via Stripe. Stripe takes its merchant fee. Halstead retains 30% (covering platform fee, brand royalty, central station relationships, software development). 70% flows to the dealer's Stripe Connect account.",
      },
    ],
  },
  {
    title: "Risks and exit",
    qa: [
      {
        q: "What if Halstead the company fails?",
        a: "The dealer agreement includes provisions for platform discontinuance. Your customer book stays yours. Equipment continues to function as standalone cameras. Halstead would help you migrate to an alternative platform. Your territory exclusivity ends, but your business doesn't.",
      },
      {
        q: "What if I want out?",
        a: "After 24 months you can transfer your territory to a qualified buyer. Halstead has right of first refusal at fair market value. Most established territories sell at 3-5x annual gross profit.",
      },
      {
        q: "What if I just want to walk away?",
        a: "You can terminate the dealer agreement with 60 days notice (after the first year). Customers transfer to a neighboring dealer or to Halstead corporate. No refund of the territory fee.",
      },
    ],
  },
];

export default function DealerFAQPage() {
  const allFaqs = sections.flatMap((s) => s.qa);

  return (
    <>
      <JsonLd data={generateFaqSchema(allFaqs)} />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow text-center">
          <p className="eyebrow">Dealer Program</p>
          <h1 className="heading-hero mt-4 text-balance">
            Frequently asked questions.
          </h1>
          <p className="body-large mt-6">
            Detailed answers about the Halstead Security dealer program,
            territory structure, licensing, and dealer economics.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="bg-cream pb-12">
          <div className="container-narrow">
            <h2 className="heading-subsection border-b border-navy/10 pb-4">
              {section.title}
            </h2>
            <div className="mt-6 space-y-3">
              {section.qa.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-lg border border-navy/10 bg-white p-6 transition-colors hover:border-navy/20"
                >
                  <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-navy">
                    <span className="pr-4">{item.q}</span>
                    <span className="flex-shrink-0 text-gold transition-transform group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-navy/75">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy py-16 text-cream">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Email{" "}
            <a
              href="mailto:dealers@halsteadsecurity.com"
              className="font-semibold text-gold underline"
            >
              dealers@halsteadsecurity.com
            </a>{" "}
            — a real person responds within 1 business day.
          </p>
          <Link href="/dealer/apply" className="mt-10 btn-gold btn-large group inline-flex">
            Start your application
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
