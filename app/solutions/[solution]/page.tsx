import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import type { Metadata } from "next";
import { SOLUTIONS, SOLUTIONS_LIST } from "@/lib/solutions";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, SITE } from "@/lib/seo";

export async function generateStaticParams() {
  return SOLUTIONS_LIST.map((s) => ({ solution: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}): Promise<Metadata> {
  const { solution } = await params;
  const data = SOLUTIONS[solution];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/solutions/${solution}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "article",
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution } = await params;
  const data = SOLUTIONS[solution];
  if (!data) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Halstead ${data.name}`,
    description: data.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Halstead Security",
      url: SITE.url,
    },
    areaServed: { "@type": "State", name: "Texas" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: data.pricing.starting.replace(/[^0-9]/g, ""),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          serviceSchema,
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: data.name, url: `/solutions/${solution}` },
          ]),
          generateFaqSchema(data.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy"
            >
              <ArrowLeft className="h-4 w-4" />
              All Solutions
            </Link>
            <p className="eyebrow mt-8">{data.hero.eyebrow}</p>
            <h1 className="heading-hero mt-4 text-balance">{data.hero.title}</h1>
            <p className="body-large mt-6">{data.hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold btn-large group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/plans" className="btn-secondary btn-large">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-cream pb-20">
        <div className="container-narrow">
          <div className="space-y-12">
            <article>
              <h2 className="heading-subsection">{data.problem.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-navy/80">
                {data.problem.body}
              </p>
            </article>
            <article>
              <h2 className="heading-subsection">{data.solution.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-navy/80">
                {data.solution.body}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Key features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl text-balance">
              How Halstead serves {data.shortName.toLowerCase()}.
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {data.keyFeatures.map((f) => (
              <article
                key={f.title}
                className="rounded-lg border border-cream/10 bg-cream/5 p-6"
              >
                <h3 className="text-lg font-bold text-gold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-cream py-20">
        <div className="container-narrow text-center">
          <p className="eyebrow">Starting at</p>
          <p className="mt-3 text-5xl font-bold text-navy md:text-6xl">
            {data.pricing.starting}
          </p>
          <p className="mt-4 text-base text-navy/70">{data.pricing.note}</p>
          <Link href="/contact" className="mt-10 btn-gold inline-flex group">
            Get a Custom Quote
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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

      {/* Related */}
      <section className="bg-navy py-16 text-cream">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-cream">Related solutions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.relatedSolutions.map((slug) => {
              const related = SOLUTIONS[slug];
              if (!related) return null;
              return (
                <Link
                  key={slug}
                  href={`/solutions/${slug}`}
                  className="group rounded-lg border border-cream/10 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
                >
                  <h3 className="text-lg font-bold text-cream group-hover:text-gold">
                    {related.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">
                    {related.industry}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl text-balance">
            Ready to protect your {data.shortName.toLowerCase()}?
          </h2>
          <p className="mt-4 text-lg text-navy/80">
            Get a custom quote from your local Halstead team.
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
