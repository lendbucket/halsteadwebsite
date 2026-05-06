import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check, X } from "lucide-react";
import type { Metadata } from "next";
import { COMPARISONS, COMPARISONS_LIST } from "@/lib/comparisons";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return COMPARISONS_LIST.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const data = COMPARISONS[competitor];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/compare/${competitor}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "article",
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const data = COMPARISONS[competitor];
  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Compare", url: "/compare" },
            { name: `vs ${data.competitor}`, url: `/compare/${competitor}` },
          ]),
          generateFaqSchema(data.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            All Comparisons
          </Link>
          <p className="eyebrow mt-8">{data.hero.eyebrow}</p>
          <h1 className="heading-hero mt-4 text-balance">{data.hero.title}</h1>
          <p className="body-large mt-6">{data.hero.subtitle}</p>
        </div>
      </section>

      {/* Overviews */}
      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-navy/10 bg-white p-8">
              <p className="eyebrow">Halstead</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/75">
                {data.halsteadOverview}
              </p>
            </article>
            <article className="rounded-xl border border-navy/10 bg-white p-8">
              <p className="eyebrow">{data.competitor}</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/75">
                {data.competitorOverview}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold text-center">
              Side by side
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold text-cream md:text-4xl text-balance">
              Feature comparison.
            </h2>

            <div className="mt-12 overflow-x-auto rounded-xl border border-cream/10 bg-cream/5">
              <table className="w-full">
                <thead className="border-b border-cream/20 bg-cream/10">
                  <tr>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-cream">
                      Feature
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-semibold text-gold">
                      Halstead
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-semibold text-cream/70">
                      {data.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparisonTable.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-cream/10"
                    >
                      <td className="py-4 px-4 text-sm font-medium text-cream/90">
                        {row.feature}
                      </td>
                      <CompareCell value={row.halstead} winner={row.winner === "halstead"} />
                      <CompareCell value={row.competitor} winner={row.winner === "competitor"} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Who should choose what */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-gold/30 bg-gold/10 p-8">
              <h2 className="text-xl font-bold text-navy">
                Who should choose Halstead
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/80">
                {data.whoShouldChooseHalstead}
              </p>
            </article>
            <article className="rounded-xl border border-navy/10 bg-white p-8">
              <h2 className="text-xl font-bold text-navy">
                Who should choose {data.competitor}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/80">
                {data.whoShouldChooseCompetitor}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream pb-20">
        <div className="container-narrow">
          <h2 className="heading-subsection">Common questions</h2>
          <div className="mt-8 space-y-3">
            {data.faqs.map((faq, i) => (
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
      <section className="bg-gold py-20">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl text-balance">
            Ready to make the switch to Halstead?
          </h2>
          <p className="mt-4 text-lg text-navy/80">
            Get a free quote and we&apos;ll help you compare for your specific
            situation.
          </p>
          <Link href="/contact" className="mt-10 btn-primary btn-large group inline-flex">
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
  winner,
}: {
  value: boolean | string;
  winner: boolean;
}) {
  const cellClass = winner
    ? "py-4 px-4 text-center text-sm font-bold text-gold bg-gold/10"
    : "py-4 px-4 text-center text-sm text-cream/80";

  if (typeof value === "boolean") {
    return (
      <td className={cellClass}>
        {value ? (
          <Check className="mx-auto h-5 w-5" strokeWidth={3} />
        ) : (
          <X className="mx-auto h-5 w-5 text-cream/30" strokeWidth={2} />
        )}
      </td>
    );
  }

  return <td className={cellClass}>{value}</td>;
}
