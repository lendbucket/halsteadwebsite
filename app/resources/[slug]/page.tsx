import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { RESOURCES, RESOURCES_LIST } from "@/lib/resources";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, SITE } from "@/lib/seo";

export async function generateStaticParams() {
  return RESOURCES_LIST.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = RESOURCES[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "article",
      publishedTime: data.publishedDate,
      modifiedTime: data.updatedDate,
    },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = RESOURCES[slug];
  if (!data) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.metaDescription,
    image: `${SITE.url}/og.png`,
    datePublished: data.publishedDate,
    dateModified: data.updatedDate,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon.svg`,
      },
    },
    mainEntityOfPage: `${SITE.url}/resources/${slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Resources", url: "/resources" },
            { name: data.title, url: `/resources/${slug}` },
          ]),
          generateFaqSchema(data.faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            All Resources
          </Link>
          <p className="eyebrow mt-8 uppercase">{data.category.replace(/-/g, " ")}</p>
          <h1 className="heading-hero mt-4 text-balance">{data.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-navy/60">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {data.readingTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Updated{" "}
              {new Date(data.updatedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-navy/80 italic">
            {data.excerpt}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream pb-20">
        <div className="container-narrow">
          <article className="space-y-6">
            {data.body.map((block, i) => {
              if (block.type === "heading") {
                if (block.level === 2) {
                  return (
                    <h2
                      key={i}
                      className="mt-12 text-2xl font-bold text-navy md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <h3
                    key={i}
                    className="mt-8 text-xl font-bold text-navy"
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-navy/80"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="ml-6 list-disc space-y-2">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-lg leading-relaxed text-navy/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                return (
                  <aside
                    key={i}
                    className="my-8 rounded-xl border-2 border-gold bg-gold/10 p-6"
                  >
                    <h4 className="text-base font-bold text-navy">
                      {block.title}
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-navy/85">
                      {block.text}
                    </p>
                  </aside>
                );
              }
              return null;
            })}
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream pb-20">
        <div className="container-narrow">
          <h2 className="heading-subsection">Frequently asked</h2>
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
          <h2 className="text-2xl font-bold text-cream">Related resources</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.relatedResources.map((relatedSlug) => {
              const related = RESOURCES[relatedSlug];
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/resources/${relatedSlug}`}
                  className="group rounded-lg border border-cream/10 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
                >
                  <h3 className="text-base font-bold text-cream group-hover:text-gold">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-xs text-cream/70">{related.readingTime}</p>
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
            Ready to talk to Halstead?
          </h2>
          <p className="mt-4 text-lg text-navy/80">
            Get a free quote from your local Halstead team.
          </p>
          <Link
            href="/contact"
            className="mt-10 btn-primary btn-large group inline-flex"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
