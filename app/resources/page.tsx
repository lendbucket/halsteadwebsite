import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { RESOURCES_LIST } from "@/lib/resources";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata: Metadata = {
  title: "Home Security Buying Guides",
  description:
    "Home security buying guides: pricing, DIY vs professional installation, how to choose a system, and 2026 industry statistics.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesHubPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow text-center">
          <p className="eyebrow">Resources</p>
          <h1 className="heading-hero mt-4 text-balance">
            Home security, demystified.
          </h1>
          <p className="body-large mt-6">
            Honest buying guides, cost breakdowns, and industry data. Built to
            help you make a thoughtful decision, not pushed by marketing.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCES_LIST.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="group rounded-xl border border-navy/10 bg-white p-8 transition-all hover:border-navy/30 hover:shadow-xl"
              >
                <p className="eyebrow uppercase">{r.category.replace(/-/g, " ")}</p>
                <h2 className="mt-3 text-2xl font-bold text-navy group-hover:text-gold">
                  {r.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-navy/75">
                  {r.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-navy/60">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {r.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Updated {new Date(r.updatedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </div>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-navy group-hover:text-gold">
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        heading="Ready to take the next step?"
        items={[
          {
            href: "/plans",
            eyebrow: "Pricing",
            title: "See plans from $30/mo",
            description: "Compare Basic, Premium, and Pro Monitoring side by side.",
          },
          {
            href: "/compare",
            eyebrow: "Comparisons",
            title: "How Halstead stacks up",
            description: "Side-by-side vs ADT, Ring, SimpliSafe, and Vivint.",
          },
          {
            href: "/contact",
            eyebrow: "Get started",
            title: "Get a free quote",
            description: "Tell us about your home and get a custom recommendation.",
          },
        ]}
      />
    </>
  );
}
