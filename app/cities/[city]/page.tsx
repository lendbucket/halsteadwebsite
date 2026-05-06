import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateFaqSchema, SITE } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const CITY_DATA: Record<
  string,
  {
    name: string;
    state: string;
    stateSlug: string;
    population: string;
    nickname?: string;
    serviceStatus: "active" | "expanding" | "planned";
    neighborhoods: string[];
    intro: string;
  }
> = {
  "corpus-christi": {
    name: "Corpus Christi",
    state: "Texas",
    stateSlug: "texas",
    population: "320,000+",
    nickname: "The Sparkling City by the Sea",
    serviceStatus: "active",
    neighborhoods: ["Calallen", "Flour Bluff", "Padre Island", "Annaville", "Six Points", "Southside", "Westside"],
    intro: "Halstead Security launched in Corpus Christi as our first market. Our founding team operates locally, and we know the difference between a Calallen install and a Padre Island install.",
  },
  "houston": {
    name: "Houston",
    state: "Texas",
    stateSlug: "texas",
    population: "2.3M+",
    nickname: "Space City",
    serviceStatus: "expanding",
    neighborhoods: ["The Heights", "Montrose", "Memorial", "River Oaks", "Galleria", "Bellaire", "Sugar Land", "The Woodlands", "Katy", "Pearland"],
    intro: "Halstead is actively expanding into Houston with founding dealer territories available across the metro. Houston's combination of sprawl and density makes locally installed, locally supported security especially valuable.",
  },
  "san-antonio": {
    name: "San Antonio",
    state: "Texas",
    stateSlug: "texas",
    population: "1.5M+",
    nickname: "Alamo City",
    serviceStatus: "expanding",
    neighborhoods: ["Stone Oak", "Alamo Heights", "Olmos Park", "Terrell Hills", "King William", "Southtown", "Helotes"],
    intro: "Halstead is recruiting founding dealers across the San Antonio metro. Our Spanish-speaking dealer program is a strategic priority for serving the city's Hispanic-majority neighborhoods.",
  },
  "austin": {
    name: "Austin",
    state: "Texas",
    stateSlug: "texas",
    population: "975,000+",
    nickname: "Live Music Capital",
    serviceStatus: "expanding",
    neighborhoods: ["Westlake", "Tarrytown", "Hyde Park", "Mueller", "South Congress", "Zilker", "Round Rock", "Cedar Park"],
    intro: "Halstead is recruiting founding dealers in Austin. Tech-savvy homeowners appreciate the platform's smart features, and Austin's continued growth creates strong opportunity for new dealers.",
  },
  "dallas": {
    name: "Dallas",
    state: "Texas",
    stateSlug: "texas",
    population: "1.3M+",
    nickname: "Big D",
    serviceStatus: "expanding",
    neighborhoods: ["Highland Park", "University Park", "Preston Hollow", "Lakewood", "Oak Cliff", "Plano", "Frisco", "Allen"],
    intro: "Halstead is recruiting founding dealers across the Dallas-Fort Worth metroplex. The size and diversity of DFW means we may award multiple dealer territories to cover specific zones effectively.",
  },
  "fort-worth": {
    name: "Fort Worth",
    state: "Texas",
    stateSlug: "texas",
    population: "950,000+",
    nickname: "Cowtown",
    serviceStatus: "planned",
    neighborhoods: ["Westover Hills", "TCU", "Arlington Heights", "Tanglewood", "Rivercrest", "Keller", "Southlake"],
    intro: "Halstead is planning Fort Worth coverage as part of the broader DFW expansion.",
  },
  "el-paso": {
    name: "El Paso",
    state: "Texas",
    stateSlug: "texas",
    population: "680,000+",
    nickname: "Sun City",
    serviceStatus: "planned",
    neighborhoods: ["West Side", "East Side", "Northeast", "Mission Valley", "Upper Valley"],
    intro: "Halstead's bilingual dealer program is well-suited to El Paso. We're actively recruiting founding dealers in the region.",
  },
  "mcallen": {
    name: "McAllen",
    state: "Texas",
    stateSlug: "texas",
    population: "143,000+",
    serviceStatus: "expanding",
    neighborhoods: ["Sharyland", "North McAllen", "South McAllen", "Edinburg", "Mission", "Pharr"],
    intro: "Halstead is actively expanding into the Rio Grande Valley with bilingual founding dealers. The RGV's growth and proximity to the border makes locally trusted security a natural fit.",
  },
  "laredo": {
    name: "Laredo",
    state: "Texas",
    stateSlug: "texas",
    population: "260,000+",
    nickname: "Gateway City",
    serviceStatus: "planned",
    neighborhoods: ["North Laredo", "Del Mar", "South Laredo", "Plantation"],
    intro: "Halstead's bilingual dealer program is being launched in Laredo. Founding dealer applications welcome.",
  },
};

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = CITY_DATA[city];
  if (!data) return {};

  return {
    title: `Home Security in ${data.name}, ${data.state} — Halstead Security`,
    description: `Professional home security in ${data.name}, ${data.state} from $30/month. Locally installed by state-licensed Halstead dealers serving ${data.neighborhoods.slice(0, 3).join(", ")} and beyond. No 36-month contracts. Free quote.`,
    alternates: { canonical: `/cities/${city}` },
    openGraph: {
      title: `Halstead Security ${data.name}`,
      description: `Locally installed home security in ${data.name}, ${data.state}. Get a free quote.`,
    },
  };
}

const cityFaqs = (cityName: string, stateName: string) => [
  {
    q: `How much does home security cost in ${cityName}?`,
    a: `Halstead Security plans in ${cityName} start at $30/month for the Basic tier. Premium ($50/month) adds AI smart filters and longer storage. Pro Monitoring ($75/month) includes 24/7 professional dispatch through a UL-listed central station. Hardware kits range from $399 to $799 with 0% financing available.`,
  },
  {
    q: `Are Halstead installers licensed in ${stateName}?`,
    a: `Yes. Every Halstead dealer in ${cityName} holds the state-required ${stateName} alarm/security license. We do not operate in any market without a properly licensed local dealer.`,
  },
  {
    q: `Does Halstead require a long-term contract in ${cityName}?`,
    a: `12-month minimum, then month-to-month. Cancel anytime after your first year with no fees. Halstead does not use 36-month contracts like ADT, Brinks, or Vivint.`,
  },
  {
    q: `How fast can Halstead install in ${cityName}?`,
    a: `Most ${cityName} customers can be quoted, scheduled, and installed within 7 to 14 days. Same-week installation is available depending on dealer capacity.`,
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = CITY_DATA[city];

  if (!data) notFound();

  return (
    <>
      <JsonLd
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: data.state, url: `/states/${data.stateSlug}` },
            { name: data.name, url: `/cities/${city}` },
          ]),
          generateFaqSchema(cityFaqs(data.name, data.state)),
        ]}
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-navy/60">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span>/</span>
              <Link href={`/states/${data.stateSlug}`} className="hover:text-navy">
                {data.state}
              </Link>
              <span>/</span>
              <span className="text-navy">{data.name}</span>
            </div>

            <p className="eyebrow mt-6">Service Area</p>
            <h1 className="heading-hero mt-4 text-balance">
              Home Security in {data.name}, {data.state}.
            </h1>
            <p className="body-large mt-6">
              Professional home security in {data.name}
              {data.nickname && ` — ${data.nickname}`} — installed by
              state-licensed local Halstead dealers. Plans from $30/month, no
              36-month contracts, real local technicians.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold btn-large group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="btn-secondary btn-large"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </div>

            {data.serviceStatus !== "active" && (
              <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-4 text-sm text-navy/80">
                <span className="font-semibold text-navy">
                  {data.serviceStatus === "expanding"
                    ? "Expanding now: "
                    : "Coming soon: "}
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
            <h2 className="heading-subsection">Why Halstead in {data.name}.</h2>
            <p className="body-base mt-6">{data.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Service Area Coverage
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cream md:text-4xl text-balance">
              Neighborhoods served in {data.name}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              Halstead serves the entire {data.name} metro, including:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {data.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm font-medium text-cream/90"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Halstead Plans in {data.name}</p>
            <h2 className="heading-section mt-3 text-balance">
              Three plans. One local team.
            </h2>
            <p className="body-large mt-6">
              {data.name} customers choose between three plans. Pricing is the
              same across all our service areas — no zip code surcharges.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { name: "Basic", price: 30, line: "4 cameras, 7-day storage" },
              { name: "Premium", price: 50, line: "8 cameras, AI filters, vacation mode", featured: true },
              { name: "Pro Monitoring", price: 75, line: "24/7 dispatch, cellular backup" },
            ].map((p) => (
              <div key={p.name} className={p.featured ? "card-featured" : "card"}>
                {p.featured && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                    Most popular
                  </p>
                )}
                <h3 className="text-xl font-bold text-navy">{p.name}</h3>
                <p className="mt-2 text-3xl font-bold text-navy">
                  ${p.price}
                  <span className="text-sm font-medium text-navy/60">/mo</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{p.line}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/plans" className="btn-secondary">
              See full pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-narrow">
          <h2 className="heading-section text-balance">Common questions in {data.name}.</h2>
          <div className="mt-8 space-y-3">
            {cityFaqs(data.name, data.state).map((faq, i) => (
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

      <section className="bg-navy py-20 text-cream">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Ready to protect your {data.name} home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
            Get a free quote from your local Halstead {data.name} team.
          </p>
          <Link href="/contact" className="mt-10 btn-gold btn-large group inline-flex">
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
