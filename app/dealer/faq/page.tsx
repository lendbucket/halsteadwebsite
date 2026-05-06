import Link from "next/link";

export const metadata = {
  title: "Dealer FAQ",
  description:
    "Detailed answers to questions about becoming a Halstead Security dealer, the territory program, licensing, training, and dealer economics.",
};

const sections = [
  {
    title: "The basics",
    qa: [
      {
        q: "What is Halstead Security?",
        a: "Halstead Security is a national security brand operated through a network of independent, locally-owned dealers. Each dealer holds an exclusive territory, runs their own state-licensed alarm business, and operates on Halstead's software platform with Halstead's brand and back-office support.",
      },
      {
        q: "Is Halstead a franchise?",
        a: "No. Halstead is structured as a software platform with a trademark license, not a franchise. This is a deliberate choice — it means more flexibility for dealers, less regulatory burden for both parties, and faster path to launch.",
      },
      {
        q: "How does Halstead make money?",
        a: "Three ways: the one-time territory fee from each dealer, a monthly platform fee from each dealer, and a 30% share of customer subscription revenue. We make money when our dealers make money.",
      },
    ],
  },
  {
    title: "The $15,000 founding dealer fee",
    qa: [
      {
        q: "Why $15,000?",
        a: "We benchmarked against existing dealer programs. ADT requires $50,000+. Brinks requires $25,000-$100,000. Vivint requires $30,000-$50,000. Independent launches cost $30,000-$75,000 with no brand. $15,000 is intentionally priced below the competition for our founding cohort.",
      },
      {
        q: "Is the fee refundable?",
        a: "Refundable in full if Halstead does not approve your application or if Halstead changes the program structure within 30 days of your payment. Non-refundable after training begins.",
      },
      {
        q: "Can I finance the $15,000?",
        a: "Yes. Reyna Title (a sister company) offers founding dealer financing for qualified applicants — typically 12 to 24 month terms at competitive rates.",
      },
    ],
  },
  {
    title: "Territory & exclusivity",
    qa: [
      {
        q: "How is a territory defined?",
        a: "By ZIP codes. Each territory is a defined cluster of contiguous ZIP codes covering 50,000 to 150,000 in population.",
      },
      {
        q: "What does 'exclusive' mean?",
        a: "No other Halstead dealer can sell, install, or monitor in your territory. Halstead corporate doesn't compete with you in your territory either.",
      },
      {
        q: "Can I expand my territory later?",
        a: "Yes. After 12 months of meeting performance thresholds, you can apply to expand into adjacent territories at the standard rate ($25,000) or multi-territory rate ($10,000 each, up to 5 total).",
      },
    ],
  },
  {
    title: "State licensing",
    qa: [
      {
        q: "Do I need a state alarm license?",
        a: "Yes. Every state requires some form of license to sell, install, or monitor alarm systems. Halstead's licensing wizard walks you through your state's specific requirements.",
      },
      {
        q: "What if I don't have alarm industry experience?",
        a: "Some states require a 'qualifying party' with documented industry experience. If you don't have it personally, you can hire a qualifying party as a W-2 employee. Halstead can help you find one in most markets.",
      },
      {
        q: "How long does state licensing take?",
        a: "Texas: 6-8 weeks. Most other states: 6-12 weeks. We recommend starting the licensing process in parallel with your training.",
      },
    ],
  },
  {
    title: "Money & economics",
    qa: [
      {
        q: "What does a dealer actually earn?",
        a: "At 50 customers (Year 1): ~$1,550/month, $18,600/year. ROI: ~10 months. At 200 customers (Year 3): ~$7,200/month, $86,400/year. These are reasonable but not guaranteed projections.",
      },
      {
        q: "When do I get paid?",
        a: "Customer subscription payouts arrive in your Stripe Connect account on Stripe's standard schedule (typically 2-day rolling). Hardware payments are immediate at install.",
      },
      {
        q: "What's the platform fee for?",
        a: "The $499/month covers software access, hosting, customer-facing portal, mobile app, ongoing platform development, central marketing, and platform-tier support.",
      },
    ],
  },
  {
    title: "Risks & exit",
    qa: [
      {
        q: "What if Halstead the company fails?",
        a: "The dealer agreement includes provisions for platform discontinuance. Your customer book stays yours. Equipment continues to function as standalone cameras. Halstead would help you migrate to an alternative platform.",
      },
      {
        q: "What if I want out?",
        a: "After 24 months you can transfer your territory to a qualified buyer. Halstead has right of first refusal at fair market value. Most established territories sell at 3-5x annual gross profit.",
      },
    ],
  },
];

export default function DealerFAQPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <p className="eyebrow">Dealer Program</p>
          <h1 className="heading-display mt-4">Frequently asked questions.</h1>
          <p className="body-large mt-6">
            Detailed answers to common questions from prospective Halstead
            dealers.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="bg-cream pb-12">
          <div className="container-narrow">
            <h2 className="heading-subsection border-b border-navy/10 pb-4">
              {section.title}
            </h2>
            <div className="mt-8 space-y-8">
              {section.qa.map((item) => (
                <div key={item.q}>
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {item.q}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-relaxed text-navy/80">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy py-16 text-cream">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl font-semibold text-cream">
            Still have questions?
          </h2>
          <p className="mt-4 font-sans text-lg text-cream/80">
            Email{" "}
            <a
              href="mailto:dealers@halsteadsecurity.com"
              className="font-medium text-gold underline"
            >
              dealers@halsteadsecurity.com
            </a>{" "}
            — a real person reads every email and responds within 1 business
            day.
          </p>
          <Link href="/contact" className="mt-8 btn-gold inline-flex">
            Start your application
          </Link>
        </div>
      </section>
    </>
  );
}
