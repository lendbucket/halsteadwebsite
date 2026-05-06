import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { RESOURCES_LIST } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Home Security Resources & Buying Guides",
  description:
    "Complete buying guides for home security: pricing, DIY vs professional installation, how to choose a system, and industry statistics. Cornerstone resources for security buyers.",
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
            help you make a thoughtful decision — not pushed by marketing.
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

      <section className="bg-navy py-16 text-cream">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Have a question we haven&apos;t answered?
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Email{" "}
            <a
              href="mailto:hello@halsteadsecurity.com"
              className="font-semibold text-gold underline"
            >
              hello@halsteadsecurity.com
            </a>{" "}
            — a real person responds within 1 business day.
          </p>
        </div>
      </section>
    </>
  );
}
