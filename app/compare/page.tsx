import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { COMPARISONS_LIST } from "@/lib/comparisons";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata: Metadata = {
  title: "Compare Home Security Companies",
  description:
    "Halstead vs ADT, Ring, SimpliSafe, and Vivint. Pricing, features, contract terms, and capabilities compared side by side.",
  alternates: { canonical: "/compare" },
};

export default function CompareHubPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow text-center">
          <p className="eyebrow">Comparisons</p>
          <h1 className="heading-hero mt-4 text-balance">
            How Halstead compares.
          </h1>
          <p className="body-large mt-6">
            Detailed side-by-side comparisons against the major home security
            brands. Pricing, features, contract terms, hardware quality, and
            customer support compared honestly.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2">
            {COMPARISONS_LIST.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group rounded-xl border border-navy/10 bg-white p-8 transition-all hover:border-navy/30 hover:shadow-xl"
              >
                <p className="eyebrow">vs {c.competitor}</p>
                <h2 className="mt-3 text-2xl font-bold text-navy">
                  Halstead vs {c.competitor}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-navy/75">
                  {c.hero.subtitle}
                </p>
                <p className="mt-6 inline-flex items-center text-sm font-semibold text-navy group-hover:text-gold">
                  Read the comparison
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        heading="Dive deeper."
        items={[
          {
            href: "/plans",
            eyebrow: "Pricing",
            title: "See what Halstead actually costs",
            description: "Three plans, transparent pricing, no hidden fees.",
          },
          {
            href: "/features",
            eyebrow: "Features",
            title: "What makes Halstead different",
            description: "AI filters, vacation mode, two-camera verification, and more.",
          },
          {
            href: "/contact",
            eyebrow: "Get started",
            title: "Get your free quote in 15 minutes",
            description: "Tell us about your home. A real person responds in 1 business day.",
          },
        ]}
      />
    </>
  );
}
