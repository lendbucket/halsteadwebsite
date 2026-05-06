import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { COMPARISONS_LIST } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "Compare Halstead vs Other Home Security Companies",
  description:
    "Detailed comparisons of Halstead Security against ADT, Ring, SimpliSafe, and Vivint. See pricing, features, contract terms, and capabilities side-by-side.",
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

      <section className="bg-navy py-16 text-cream">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Considering another brand?
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Tell us which one and we&apos;ll do an honest side-by-side
            comparison for your specific situation.
          </p>
          <Link href="/contact" className="mt-10 btn-gold inline-flex group">
            Talk to our team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
