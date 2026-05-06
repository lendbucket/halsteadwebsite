import Link from "next/link";
import { ArrowRight, Home, Building2, Building, Hotel, HardHat, Leaf, Car, Church } from "lucide-react";
import type { Metadata } from "next";
import { SOLUTIONS_LIST } from "@/lib/solutions";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industries — Halstead Security by Vertical",
  description:
    "Halstead Security serves residential homes, commercial businesses, multifamily properties, short-term rentals, construction sites, cannabis dispensaries, auto dealerships, and houses of worship across Texas and expanding markets.",
  alternates: { canonical: "/industries" },
};

const iconMap: Record<string, React.ReactNode> = {
  "home-security": <Home className="h-8 w-8" strokeWidth={1.75} />,
  "business-security": <Building2 className="h-8 w-8" strokeWidth={1.75} />,
  "multifamily": <Building className="h-8 w-8" strokeWidth={1.75} />,
  "short-term-rental": <Hotel className="h-8 w-8" strokeWidth={1.75} />,
  "construction-site": <HardHat className="h-8 w-8" strokeWidth={1.75} />,
  "cannabis-dispensary": <Leaf className="h-8 w-8" strokeWidth={1.75} />,
  "auto-dealership": <Car className="h-8 w-8" strokeWidth={1.75} />,
  "houses-of-worship": <Church className="h-8 w-8" strokeWidth={1.75} />,
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ])}
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Industries we serve</p>
            <h1 className="heading-hero mt-4 text-balance">
              Security designed for your industry.
            </h1>
            <p className="body-large mt-6">
              Halstead Security adapts hardware, configuration, and software to
              eight industry verticals. Each has its own compliance
              considerations, threat profile, and operational requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="space-y-6">
            {SOLUTIONS_LIST.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group block rounded-xl border border-navy/10 bg-white p-8 transition-all hover:border-navy/30 hover:shadow-xl"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                    {iconMap[s.slug]}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-navy">{s.name}</h2>
                    <p className="mt-1 text-sm font-medium text-navy/60">
                      {s.industry}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-navy/75">
                      {s.hero.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                      View solution
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-cream">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Halstead also serves storage facilities, medical practices, K-12
            schools, banks, and other commercial verticals through custom
            engagements.
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
