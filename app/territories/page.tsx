import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  MapPin,
  Zap,
  DollarSign,
  Users,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { AnimateIn } from "@/components/AnimateIn";
import { generateFaqSchema, SITE } from "@/lib/seo";
import { TerritoryForm } from "./TerritoryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Own a Security Territory",
  description:
    "License a protected Halstead Security territory. Resell white-label cloud cameras and monitoring under your brand or ours. Recurring revenue. Apply now.",
  alternates: { canonical: "/territories" },
  keywords: [
    "security camera business opportunity",
    "white label security cameras",
    "start a security business",
    "security dealer program",
    "recurring revenue security business",
    "home security business opportunity",
    "security monitoring reseller",
    "security camera reseller program",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE.url}/territories`,
    siteName: SITE.name,
    title: "Own a Security Territory | Halstead Licensing",
    description:
      "License a protected Halstead Security territory. Resell white-label cloud cameras and monitoring under your brand or ours. Recurring revenue. Apply now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Own a Security Territory | Halstead Licensing",
    description:
      "License a protected Halstead Security territory. Resell white-label cloud cameras and monitoring under your brand or ours. Recurring revenue. Apply now.",
    creator: SITE.twitter,
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Halstead Security Territory Licensing",
  serviceType: "Security Territory Licensing",
  provider: {
    "@type": "Organization",
    name: "Halstead Security",
    url: SITE.url,
  },
  areaServed: {
    "@type": "Country",
    name: "US",
  },
  description:
    "License a protected territory to operate a professional security business powered by CamCloud white-label cloud cameras and monitoring.",
};

const territoryFaqs = [
  {
    q: "Is this a franchise?",
    a: "Halstead operates a licensing model. You license the Halstead brand, technology, and operating system rather than purchasing a traditional franchise. Licensing is designed to move faster and lighter than a franchise. Final terms are set in your license agreement.",
  },
  {
    q: "Can I run it under my own brand?",
    a: "Yes. You can operate under your own business name using Halstead white-label technology, or you can operate as a Halstead Security location. The choice is yours and is determined during onboarding.",
  },
  {
    q: "What is CamCloud?",
    a: "CamCloud is the cloud video surveillance platform that powers Halstead cameras and recordings. As a licensee you resell it white-label as part of your offering. [[FILL: confirm or refine this one line from your CamCloud materials]]",
  },
  {
    q: "Do I need security industry experience?",
    a: "No. The playbook, pricing, and onboarding are provided. Industry experience helps but is not required. What matters is your ability to sell, execute, and build local relationships.",
  },
  {
    q: "How do I make money?",
    a: "Recurring monthly subscriptions and monitoring, plus hardware margins. Every customer you sign pays every month. That revenue recurs and renews month after month, compounding as you grow your customer base.",
  },
  {
    q: "How big is a territory?",
    a: "Territories are defined by metro area and zip code boundaries and are protected. One licensee per market. Territory size varies by population density and market opportunity.",
  },
  {
    q: "Who handles professional monitoring?",
    a: "Professional monitoring is provided through a UL-listed central station partner. You offer it to your customers without building or staffing your own monitoring center.",
  },
  {
    q: "How fast can I launch?",
    a: "Weeks, not months. The brand, website, platform, and playbook already exist. Once you are approved and onboarded, your territory can go live quickly because the infrastructure is already built.",
  },
];

export default function TerritoriesPage() {
  return (
    <>
      <JsonLd data={[SERVICE_SCHEMA, generateFaqSchema(territoryFaqs)]} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-cream pt-20 md:pt-28 lg:pt-32">
        <div className="absolute inset-0 pattern-dots opacity-50" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <p className="eyebrow">Halstead Licensing Program</p>

            <h1 className="heading-hero mt-6 text-balance">
              Own the security company in your city.
            </h1>

            <p className="body-large mt-6 max-w-2xl text-pretty">
              We built the brand, the cameras, the software, and the recurring
              revenue engine. You run the territory. Halstead licenses everything
              you need to launch a professional security business under your own
              name or ours, powered by CamCloud and backed by a real operating
              system.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#apply" className="btn-gold btn-large group">
                Claim your territory
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#model" className="btn-secondary btn-large">
                See the model
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                White-label cloud cameras
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Recurring monthly revenue
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Protected territory
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Launch in weeks, not months
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 border-y border-navy/10 bg-navy py-6 text-cream">
          <div className="container-wide">
            <div className="grid gap-6 text-center md:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-gold md:text-4xl">1</p>
                <p className="mt-1 text-xs text-cream/70">Licensee per market</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold md:text-4xl">100%</p>
                <p className="mt-1 text-xs text-cream/70">Your customers, your revenue</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold md:text-4xl">Weeks</p>
                <p className="mt-1 text-xs text-cream/70">From approval to launch</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold md:text-4xl">$30-75</p>
                <p className="mt-1 text-xs text-cream/70">Customer plans you resell</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="bg-navy py-24 text-cream">
        <AnimateIn className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              The reality
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl text-balance">
              The security business is the best recurring revenue game in
              America. Starting one from scratch will break you.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/80 text-pretty">
              Monthly recurring revenue is the prize. Every customer pays every
              month, forever. But a solo operator has to build a brand from
              nothing, source hardware, stand up a cloud video platform, find a
              monitoring station, configure billing, build a website, rank on
              Google, and figure out sales before earning a single dollar. Most
              people never make it past setup. The ones who do spend a year and
              six figures getting to where Halstead puts you on day one.
            </p>
            <p className="mt-6 text-lg font-semibold text-gold">
              Halstead is the shortcut. We hand you the machine. You turn the
              key.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* 3. THE OFFER STACK */}
      <section className="bg-cream py-20 md:py-28">
        <AnimateIn className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">What you get</p>
            <h2 className="heading-section mt-3 text-balance">
              Everything you need to run a security company. Licensed to you on
              day one.
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            <ValueCard
              title="The Halstead brand and a launch-ready website under your business name or the Halstead Security name"
              icon={<ShieldCheck className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="CamCloud-powered cloud video surveillance you resell as your own. [[FILL: one line on the CamCloud camera and cloud offering from your CamCloud reseller materials]]"
              icon={<Zap className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="Professional monitoring you can offer without building a central station"
              icon={<ShieldCheck className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="Recurring billing and integrated payment processing"
              icon={<DollarSign className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="A protected territory so no other Halstead operator competes in your backyard"
              icon={<MapPin className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="The full sales playbook, pricing, and onboarding"
              icon={<Users className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="Done-for-you local SEO pages and marketing assets"
              icon={<Zap className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
            <ValueCard
              title="Direct support from the Halstead team"
              icon={<Users className="h-6 w-6 text-gold" strokeWidth={2} />}
            />
          </div>
        </AnimateIn>
      </section>

      {/* 4. WHITE-LABEL EXPLAINER */}
      <section className="bg-navy py-24 text-cream">
        <AnimateIn className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Two paths, one platform
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl text-balance">
              Your name on the door. Our machine behind it.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-cream/10 bg-cream/5 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Option A
              </p>
              <h3 className="mt-3 text-xl font-bold text-cream">
                Run it as your own brand
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                Use your own business name, your own logo, your own identity.
                Halstead technology runs behind the scenes as white-label
                infrastructure. Your customers see your brand on the app, the
                website, the invoices, and the install truck. You build equity in
                your name while we handle the platform, the cameras, and the
                cloud.
              </p>
            </div>

            <div className="rounded-xl border border-gold/30 bg-gold/5 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Option B
              </p>
              <h3 className="mt-3 text-xl font-bold text-cream">
                Operate as a Halstead Security location
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                Use the Halstead Security brand, the Halstead website, and the
                Halstead reputation from day one. You get instant brand
                recognition, national SEO, and a professional identity without
                building your own. Customers trust the name before you knock on
                the first door. You focus on sales and installs while the brand
                works for you.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-cream/60">
            You choose during onboarding. Both paths use the same CamCloud
            platform, the same playbook, and the same support from Halstead.
          </p>
        </AnimateIn>
      </section>

      {/* 5. THE MODEL / ECONOMICS */}
      <section className="bg-cream-200 py-20 md:py-28" id="model">
        <AnimateIn className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">The model</p>
            <h2 className="heading-section mt-3 text-balance">
              Why licensees build wealth on recurring revenue.
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-navy/10 bg-white p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Illustrative example
              </p>
              <p className="mt-6 text-lg leading-relaxed text-navy/80">
                Every customer you sign pays every month. That revenue recurs and
                renews. One hundred customers at an average of fifty dollars per
                month is five thousand dollars in monthly recurring revenue. That
                is sixty thousand dollars a year that renews while you sign the
                next hundred.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-cream-200 p-4 text-center">
                  <p className="text-2xl font-bold text-navy">$30</p>
                  <p className="mt-1 text-xs text-navy/60">Basic plan / mo</p>
                </div>
                <div className="rounded-lg bg-cream-200 p-4 text-center">
                  <p className="text-2xl font-bold text-navy">$50</p>
                  <p className="mt-1 text-xs text-navy/60">Premium plan / mo</p>
                </div>
                <div className="rounded-lg bg-cream-200 p-4 text-center">
                  <p className="text-2xl font-bold text-navy">$75</p>
                  <p className="mt-1 text-xs text-navy/60">Pro Monitoring / mo</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-navy/60">
              Figures above are illustrative examples of the recurring revenue
              model only. They are not a promise, projection, or guarantee of
              income or earnings. Actual results depend on your market, effort,
              pricing, and execution, and most new businesses carry risk of loss.
              Halstead does not guarantee any level of sales or profit.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="bg-cream py-20 md:py-28">
        <AnimateIn className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="heading-section mt-3">
              From application to live territory.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <Step
              number="01"
              title="Apply and qualify"
              description="Submit your application. We review your background, market, and fit for the Halstead operating model."
            />
            <Step
              number="02"
              title="Get approved and onboarded"
              description="Sign your license agreement, complete the onboarding playbook, and get trained on the platform and sales process."
            />
            <Step
              number="03"
              title="Launch your territory"
              description="Your territory site and platform go live. You have the brand, the cameras, the pricing, and the tools to start selling."
            />
            <Step
              number="04"
              title="Sign customers and earn"
              description="Start signing customers and earning recurring monthly revenue. Every install compounds your income month over month."
            />
          </div>
        </AnimateIn>
      </section>

      {/* 7. WHO THIS IS FOR */}
      <section className="bg-navy py-24 text-cream">
        <AnimateIn className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Is this you?
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl text-balance">
              Built for operators. Not for tire-kickers.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-cream/10 bg-cream/5 p-8">
              <h3 className="text-lg font-bold text-gold">
                This is for you if
              </h3>
              <ul className="mt-6 space-y-4">
                <QualifyItem positive text="You want to own a real business with real customers and real recurring revenue" />
                <QualifyItem positive text="You can sell or you can build a team that sells" />
                <QualifyItem positive text="You want predictable monthly income that compounds as you grow" />
                <QualifyItem positive text="You want a protected market where you are the only operator" />
                <QualifyItem positive text="You are ready to commit capital and effort to build something" />
              </ul>
            </div>

            <div className="rounded-xl border border-cream/10 bg-cream/5 p-8">
              <h3 className="text-lg font-bold text-cream/60">
                This is not for you if
              </h3>
              <ul className="mt-6 space-y-4">
                <QualifyItem positive={false} text="You want passive income with zero effort" />
                <QualifyItem positive={false} text="You are not ready to invest in your own business" />
                <QualifyItem positive={false} text="You want to get rich overnight without doing the work" />
                <QualifyItem positive={false} text="You are looking for a side hobby, not a real company" />
              </ul>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 8. SCARCITY / AVAILABILITY */}
      <section className="relative overflow-hidden bg-gold py-20 md:py-24">
        <div className="container-wide relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-navy/70">
              Limited availability
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl text-balance">
              Territories are limited and going fast.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/80 text-pretty">
              Each market is awarded to one licensee. Once a territory is
              claimed, it is closed. Early operators lock in founding licensee
              terms that will not be available once the initial markets are
              filled.
            </p>
            <p className="mt-6 text-lg font-bold text-navy">
              [[FILL: license fee and monthly structure, for example: Founding
              territory license $X one time plus $Y per month for platform,
              brand, and support. Or tell Claude the structure and it will format
              it here.]]
            </p>
            <div className="mt-10">
              <a href="#apply" className="btn-primary btn-large group">
                Claim your territory
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-cream py-20 md:py-28" id="faq">
        <AnimateIn className="container-narrow">
          <div className="mb-12 text-center">
            <p className="eyebrow">Common questions</p>
            <h2 className="heading-section mt-3">
              Questions before you claim a territory.
            </h2>
          </div>

          <div className="space-y-2">
            {territoryFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-navy/10 bg-white p-6 transition-all hover:border-navy/20"
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
        </AnimateIn>
      </section>

      {/* 10. FINAL CTA + APPLICATION */}
      <section className="bg-navy py-20 text-cream" id="apply">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Apply now
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl text-balance">
              Claim your territory before someone else does.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
              The best territories go to the operators who move first. Submit
              your application and the Halstead team will reach out within one
              business day.
            </p>
          </div>

          <TerritoryForm />
        </div>
      </section>

      {/* 11. DISCLOSURES */}
      <section className="bg-cream-200 py-12">
        <div className="container-narrow">
          <div className="rounded-lg border border-navy/10 bg-white p-6 md:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-navy">
                  Important disclosures
                </h2>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-navy/70">
                  <li>
                    Figures above are illustrative examples of the recurring
                    revenue model only. They are not a promise, projection, or
                    guarantee of income or earnings. Actual results depend on
                    your market, effort, pricing, and execution, and most new
                    businesses carry risk of loss. Halstead does not guarantee
                    any level of sales or profit.
                  </li>
                  <li>
                    Halstead Security territory licensing is offered through a
                    license agreement. Availability, terms, and territory
                    boundaries are subject to qualification and final agreement.
                    CamCloud is a trademark of its respective owner and is
                    referenced here to describe the technology platform.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-navy/10 bg-white p-6 transition-all hover:shadow-lg hover:border-navy/20">
      <div className="flex-shrink-0">{icon}</div>
      <p className="text-base font-semibold leading-snug text-navy">{title}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold text-gold">{number}</p>
      <h3 className="mt-3 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/70">{description}</p>
    </div>
  );
}

function QualifyItem({
  positive,
  text,
}: {
  positive: boolean;
  text: string;
}) {
  return (
    <li className="flex items-start gap-3">
      {positive ? (
        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={2.5} />
      ) : (
        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-cream/20 text-xs text-cream/40">
          &times;
        </span>
      )}
      <span className={`text-sm ${positive ? "text-cream/90" : "text-cream/50"}`}>
        {text}
      </span>
    </li>
  );
}
