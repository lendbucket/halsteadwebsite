import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import type { Metadata } from "next";
import { FEATURES, FEATURES_LIST } from "@/lib/features";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, SITE } from "@/lib/seo";

export async function generateStaticParams() {
  return FEATURES_LIST.map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}): Promise<Metadata> {
  const { feature } = await params;
  const data = FEATURES[feature];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/features/${feature}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "article",
    },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature } = await params;
  const data = FEATURES[feature];
  if (!data) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.metaTitle,
    description: data.metaDescription,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` },
    },
    mainEntityOfPage: `${SITE.url}/features/${feature}`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How ${data.name} Works`,
    description: data.whatItIs,
    step: data.howItWorks.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          howToSchema,
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Features", url: "/features" },
            { name: data.name, url: `/features/${feature}` },
          ]),
          generateFaqSchema(data.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            All Features
          </Link>
          <p className="eyebrow mt-8">{data.hero.eyebrow}</p>
          <h1 className="heading-hero mt-4 text-balance">{data.hero.title}</h1>
          <p className="body-large mt-6">{data.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {data.availableOn.map((tier) => (
              <span
                key={tier}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy"
              >
                <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                {tier}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-cream pb-20">
        <div className="container-narrow">
          <h2 className="heading-subsection">What it is</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {data.whatItIs}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-narrow">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl text-balance">
            Step by step.
          </h2>

          <div className="mt-12 space-y-6">
            {data.howItWorks.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 rounded-lg border border-cream/10 bg-cream/5 p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-cream py-20">
        <div className="container-narrow">
          <h2 className="heading-subsection">Why it matters</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {data.whyItMatters}
          </p>
        </div>
      </section>

      {/* Technical details */}
      {data.technicalDetails && (
        <section className="bg-cream pb-20">
          <div className="container-narrow">
            <h2 className="heading-subsection">Technical details</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              {data.technicalDetails}
            </p>
          </div>
        </section>
      )}

      {/* Comparison */}
      {data.comparisonToCompetitors && (
        <section className="bg-cream pb-20">
          <div className="container-narrow">
            <h2 className="heading-subsection">How Halstead compares</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              {data.comparisonToCompetitors}
            </p>
          </div>
        </section>
      )}

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
          <h2 className="text-2xl font-bold text-cream">Related features</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.relatedFeatures.map((slug) => {
              const related = FEATURES[slug];
              if (!related) return null;
              return (
                <Link
                  key={slug}
                  href={`/features/${slug}`}
                  className="group rounded-lg border border-cream/10 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
                >
                  <h3 className="text-lg font-bold text-cream group-hover:text-gold">
                    {related.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {related.hero.subtitle.split(".")[0]}.
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
            Get Halstead for your home or business.
          </h2>
          <Link href="/contact" className="mt-10 btn-primary btn-large group inline-flex">
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
