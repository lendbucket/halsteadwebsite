import Link from "next/link";
import { ArrowRight, Home, Building2, Building, Hotel, HardHat, Leaf, Car, Church } from "lucide-react";
import type { Metadata } from "next";
import { SOLUTIONS_LIST } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions — Industries Halstead Security Serves",
  description:
    "Halstead Security solutions for residential homes, small businesses, multifamily properties, short-term rentals, construction sites, cannabis dispensaries, auto dealerships, and houses of worship.",
  alternates: { canonical: "/solutions" },
};

const iconMap: Record<string, React.ReactNode> = {
  "home-security": <Home className="h-7 w-7" strokeWidth={1.75} />,
  "business-security": <Building2 className="h-7 w-7" strokeWidth={1.75} />,
  "multifamily": <Building className="h-7 w-7" strokeWidth={1.75} />,
  "short-term-rental": <Hotel className="h-7 w-7" strokeWidth={1.75} />,
  "construction-site": <HardHat className="h-7 w-7" strokeWidth={1.75} />,
  "cannabis-dispensary": <Leaf className="h-7 w-7" strokeWidth={1.75} />,
  "auto-dealership": <Car className="h-7 w-7" strokeWidth={1.75} />,
  "houses-of-worship": <Church className="h-7 w-7" strokeWidth={1.75} />,
};

export default function SolutionsHubPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Solutions</p>
            <h1 className="heading-hero mt-4 text-balance">
              Built for the way your industry actually works.
            </h1>
            <p className="body-large mt-6">
              Halstead Security adapts to eight distinct industries, each with
              specialized hardware, configuration, and software features. Find
              your solution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS_LIST.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group rounded-xl border border-navy/10 bg-white p-6 transition-all hover:border-navy/30 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                  {iconMap[solution.slug]}
                </div>
                <h2 className="mt-4 text-lg font-bold text-navy">
                  {solution.shortName}
                </h2>
                <p className="mt-2 text-sm text-navy/70">{solution.industry}</p>
                <p className="mt-4 inline-flex items-center text-sm font-semibold text-navy group-hover:text-gold">
                  Learn more
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
            Don&apos;t see your industry?
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Halstead also serves storage facilities, medical practices, K-12
            schools, banks, and other commercial verticals. Contact our team
            for a custom solution.
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
