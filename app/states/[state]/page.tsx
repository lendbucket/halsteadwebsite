import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const STATE_DATA: Record<
  string,
  {
    name: string;
    abbreviation: string;
    cities: string[];
    licensingBody: string;
    requirementsSummary: string;
    serviceStatus: "active" | "expanding" | "planned";
  }
> = {
  texas: {
    name: "Texas",
    abbreviation: "TX",
    cities: ["Corpus Christi", "Houston", "San Antonio", "Austin", "Dallas", "Fort Worth", "El Paso", "McAllen"],
    licensingBody: "Texas Department of Public Safety, Private Security Program",
    requirementsSummary: "Class B Security Contractor License under Texas Occupations Code Chapter 1702. Includes a $10,000 surety bond, $1M general liability insurance, qualifying party requirement, and fingerprinted background check.",
    serviceStatus: "active",
  },
  oklahoma: {
    name: "Oklahoma",
    abbreviation: "OK",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Edmond"],
    licensingBody: "Oklahoma Department of Labor, Alarm Industry Division",
    requirementsSummary: "Alarm Company License with bond and insurance requirements. Halstead's licensing wizard walks dealers through every step.",
    serviceStatus: "expanding",
  },
  louisiana: {
    name: "Louisiana",
    abbreviation: "LA",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"],
    licensingBody: "Louisiana State Fire Marshal",
    requirementsSummary: "License required for sale, install, or service. Halstead's licensing wizard walks dealers through every step.",
    serviceStatus: "expanding",
  },
  arkansas: {
    name: "Arkansas",
    abbreviation: "AR",
    cities: ["Little Rock", "Fayetteville", "Fort Smith"],
    licensingBody: "Arkansas Board of Private Investigators and Private Security Agencies",
    requirementsSummary: "Alarm Systems Company License required. Halstead's wizard guides dealers through application, bonding, and insurance.",
    serviceStatus: "planned",
  },
  "new-mexico": {
    name: "New Mexico",
    abbreviation: "NM",
    cities: ["Albuquerque", "Santa Fe", "Las Cruces"],
    licensingBody: "New Mexico Regulation and Licensing Department",
    requirementsSummary: "Alarm-related contractor license required. Halstead's wizard handles state-specific requirements.",
    serviceStatus: "planned",
  },
  arizona: {
    name: "Arizona",
    abbreviation: "AZ",
    cities: ["Phoenix", "Tucson", "Mesa", "Scottsdale"],
    licensingBody: "Arizona Department of Public Safety",
    requirementsSummary: "Alarm Agent and Alarm Business Licenses required. Halstead's wizard supports the full Arizona application process.",
    serviceStatus: "planned",
  },
  colorado: {
    name: "Colorado",
    abbreviation: "CO",
    cities: ["Denver", "Colorado Springs", "Boulder", "Fort Collins"],
    licensingBody: "Local municipality (state license generally not required)",
    requirementsSummary: "Colorado does not require a state-level alarm license, though some municipalities (Denver, Boulder) have local registration requirements.",
    serviceStatus: "planned",
  },
  tennessee: {
    name: "Tennessee",
    abbreviation: "TN",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    licensingBody: "Tennessee Alarm Systems Contractors Board",
    requirementsSummary: "License with Secretary of State registration required. Halstead's wizard handles every step.",
    serviceStatus: "planned",
  },
  florida: {
    name: "Florida",
    abbreviation: "FL",
    cities: ["Miami", "Tampa", "Orlando", "Jacksonville"],
    licensingBody: "Florida Department of Agriculture and Consumer Services, Division of Licensing",
    requirementsSummary: "Class B Burglar Alarm System Contractor license required. Halstead's wizard walks dealers through the rigorous Florida application process.",
    serviceStatus: "planned",
  },
};

export async function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const data = STATE_DATA[state];
  if (!data) return {};

  return {
    title: `Halstead Security in ${data.name} — Local Home Security`,
    description: `Professional home security in ${data.name} from $30/month. Locally installed by state-licensed Halstead dealers in ${data.cities.slice(0, 3).join(", ")} and beyond. No 36-month contracts.`,
    alternates: { canonical: `/states/${state}` },
    openGraph: {
      title: `Halstead Security ${data.name}`,
      description: `Professional, locally installed home security across ${data.name}. Get a free quote.`,
    },
  };
}

const stateFaqs = (stateName: string) => [
  {
    q: `How much does home security cost in ${stateName}?`,
    a: `Halstead Security plans in ${stateName} start at $30/month for the Basic tier. Premium is $50/month and Pro Monitoring is $75/month. Hardware kits range from $399 to $799 with 0% financing available through Reyna Title.`,
  },
  {
    q: `Are Halstead installers licensed in ${stateName}?`,
    a: `Yes. Every Halstead dealer holds a state-required alarm/security license appropriate to ${stateName}. We do not operate in any market without a properly licensed local dealer.`,
  },
  {
    q: `Do I need a contract to use Halstead in ${stateName}?`,
    a: `12-month minimum, then month-to-month. You can cancel anytime after your first year with no fees. Halstead does not use 36-month contracts.`,
  },
];

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = STATE_DATA[state];

  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/" },
            { name: data.name, url: `/states/${state}` },
          ]),
          generateFaqSchema(stateFaqs(data.name)),
        ]}
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Service Areas</p>
            <h1 className="heading-hero mt-4 text-balance">
              Halstead Security in {data.name}.
            </h1>
            <p className="body-large mt-6">
              Professional home security in {data.name}, installed by
              state-licensed Halstead dealers. Plans from $30/month, no
              36-month contracts, real local technicians.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/plans" className="btn-secondary">
                See Plans
              </Link>
            </div>

            {data.serviceStatus !== "active" && (
              <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-4 text-sm text-navy/80">
                <span className="font-semibold text-navy">
                  {data.serviceStatus === "expanding" ? "Expanding now: " : "Coming soon: "}
                </span>
                Halstead is actively recruiting founding dealers in {data.name}.{" "}
                <Link href="/dealer" className="font-semibold underline">
                  Apply to be a dealer
                </Link>
                .
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-subsection">
              Cities served in {data.name}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {data.cities.map((city) => (
                <Link
                  key={city}
                  href={`/cities/${city.toLowerCase().replace(/ /g, "-")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              For Operators
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl text-balance">
              Become a Halstead dealer in {data.name}.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              {data.requirementsSummary}
            </p>
            <p className="mt-4 text-sm text-cream/70">
              Regulatory body: {data.licensingBody}
            </p>
            <Link href="/dealer" className="mt-8 btn-gold inline-flex group">
              Learn about the dealer program
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-narrow">
          <h2 className="heading-section">Common questions in {data.name}.</h2>
          <div className="mt-8 space-y-3">
            {stateFaqs(data.name).map((faq, i) => (
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
    </>
  );
}
