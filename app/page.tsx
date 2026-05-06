import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Sparkles,
  ArrowRight,
  Camera,
  Bell,
  Wifi,
  CheckCircle2,
  Star,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { generateFaqSchema, SITE } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halstead Security — Professional Home Security, Installed in Your Neighborhood",
  description:
    "Real cameras, professionally installed by a local technician. No 36-month contracts. Plans from $30/month with smart AI alerts, mobile app, and optional 24/7 professional monitoring. Free quote in minutes.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "How much does Halstead Security cost?",
    a: "Halstead Security plans start at $30/month for the Basic tier (4 cameras, 7-day cloud storage), $50/month for Premium (8 cameras, 30-day storage, smart AI filters), and $75/month for Pro Monitoring (UL-listed central station dispatch, cellular backup). Hardware is sold separately at install, with kits ranging from $399 to $799. Hardware financing is available through Reyna Title at 0% interest for 12 months.",
  },
  {
    q: "Does Halstead Security require a long-term contract?",
    a: "No. Halstead requires a 12-month minimum, then converts to month-to-month. You can cancel anytime after your first year with no fees. This is intentionally different from ADT, Brinks, and Vivint, which typically require 36-month contracts with significant early termination penalties.",
  },
  {
    q: "Is Halstead Security professionally installed?",
    a: "Yes. Every Halstead system is installed by a state-licensed local technician — not a drop-shipped DIY box. Your installer is your neighbor, and you can call them directly for support, service, or troubleshooting throughout the life of your system.",
  },
  {
    q: "Where does Halstead Security currently operate?",
    a: "Halstead is launching in Texas with founding dealers in Corpus Christi, Houston, San Antonio, Dallas, and Austin. Expansion to Oklahoma, Louisiana, Arkansas, New Mexico, Arizona, Colorado, Tennessee, and Florida is planned for 2026 and 2027. If you're outside our current service area, you can join the waitlist or apply to be a dealer in your market.",
  },
  {
    q: "Does Halstead offer professional monitoring?",
    a: "Yes, on the Pro Monitoring tier ($75/month). Professional monitoring is provided through a UL-listed central station partner with 24/7 staff trained to dispatch police, fire, and medical responders. Pro Monitoring also includes a cellular backup hub that keeps your system online during internet or power outages.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateFaqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream pt-20 md:pt-28 lg:pt-32">
        <div className="absolute inset-0 pattern-dots opacity-50" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Now accepting founding members
              </span>
            </div>

            <h1 className="heading-hero mt-6 text-balance">
              Professional home security,{" "}
              <span className="text-gold">installed in your neighborhood.</span>
            </h1>

            <p className="body-large mt-6 max-w-2xl text-pretty">
              Real cameras. Real installation. Real support. Halstead Security
              delivers professionally installed home security with smart AI
              alerts, optional 24/7 monitoring, and no 36-month contracts.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold btn-large group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/plans" className="btn-secondary btn-large">
                See Plans &amp; Pricing
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest" />
                No 36-month contracts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest" />
                Local technicians
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest" />
                State-licensed dealers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest" />
                0% hardware financing
              </span>
            </div>
          </div>
        </div>

        {/* Scrolling stats bar */}
        <div className="mt-20 border-y border-navy/10 bg-navy py-6 text-cream">
          <div className="container-wide">
            <div className="grid gap-6 text-center md:grid-cols-4">
              <Stat number="$30" label="Starting at /month" />
              <Stat number="12 mo" label="Then month-to-month" />
              <Stat number="0%" label="Hardware financing" />
              <Stat number="24/7" label="Professional monitoring available" />
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">Why Halstead Security</p>
            <h2 className="heading-section mt-3 text-balance">
              A real security company. Run by people who pick up.
            </h2>
            <p className="body-large mt-6">
              Three reasons Halstead works differently than ADT, Ring, or
              SimpliSafe — and why our customers stay.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PillarCard
              icon={<MapPin className="h-7 w-7 text-gold" strokeWidth={2} />}
              title="Locally installed by your neighbor"
              description="A real, state-licensed technician comes to your home. No drop-shipped box. Your installer is your neighbor — you can call them directly for support."
            />
            <PillarCard
              icon={<Sparkles className="h-7 w-7 text-gold" strokeWidth={2} />}
              title="Monthly, not 36-month"
              description="Pay month-to-month after your first year. Cancel anytime. We earn your business every month, not by trapping you in a multi-year contract."
              featured
            />
            <PillarCard
              icon={<Phone className="h-7 w-7 text-gold" strokeWidth={2} />}
              title="Real people answer"
              description="When you call Halstead, a real person picks up. Your local Halstead team handles installation, support, and service — not an offshore call center."
            />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative overflow-hidden bg-navy py-24 text-cream">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                Smart features
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl text-balance">
                Engineered to be smart without being annoying.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream/80 text-pretty">
                Most security apps blow up your phone with motion alerts, flag
                every passing car, and scare you out of using them. Halstead is
                engineered differently — with smart filtering that knows the
                difference between a delivery truck and a stranger.
              </p>
              <Link
                href="/features"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-300 group"
              >
                Explore all features
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Two-camera verification cuts false alarms 70%",
                "AI motion classification — person, vehicle, package",
                "Vacation mode automation",
                "Visitor pass for cleaners and contractors",
                "Storm mode mutes weather false alarms",
                "Smart family check-ins",
                "Smart escalation chain",
                "Insurance discount auto-submission",
                "0% hardware financing",
                "Two-way audio doorbell",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg bg-cream/5 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-sm text-cream/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plans teaser */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Plans &amp; Pricing</p>
            <h2 className="heading-section mt-3 text-balance">
              Three plans. No setup fees. No hidden costs.
            </h2>
            <p className="body-large mt-6">
              Honest pricing. Hardware financing available. Cancel anytime
              after your first year.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <PlanTeaser
              name="Basic"
              price="30"
              tagline="Up to 4 cameras with smart alerts and 7-day cloud storage."
              features={["4 cameras included", "7-day cloud storage", "Mobile app", "Local install"]}
            />
            <PlanTeaser
              name="Premium"
              price="50"
              tagline="Up to 8 cameras with AI filters, vacation mode, and visitor passes."
              features={["8 cameras included", "30-day storage", "AI smart filters", "Priority support"]}
              featured
            />
            <PlanTeaser
              name="Pro Monitoring"
              price="75"
              tagline="Professional UL-listed dispatch with cellular backup."
              features={["24/7 monitoring", "Police dispatch", "Cellular backup", "60-day storage"]}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/plans" className="btn-primary">
              Compare full pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-200 py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">How Halstead works</p>
            <h2 className="heading-section mt-3">
              From quote to live in 14 days.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <Step
              number="01"
              title="Get your free quote"
              description="Tell us about your home. A local Halstead technician calls within 1 business day to walk through your needs."
            />
            <Step
              number="02"
              title="Schedule your install"
              description="Pick a date that works. Most installs take 2 to 4 hours. We handle everything from mounting to network setup."
            />
            <Step
              number="03"
              title="Activate the app"
              description="Your installer walks you through the iOS or Android app and shows you how to use every feature."
            />
            <Step
              number="04"
              title="Live, monitored, protected"
              description="Your home is now protected. Smart alerts. Cloud video. Local support. 24/7 monitoring optional."
            />
          </div>
        </div>
      </section>

      {/* Dealer CTA */}
      <section className="relative overflow-hidden bg-gold py-20 md:py-24">
        <div className="container-wide relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-navy/70">
                For Operators
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl text-balance">
                Own a Halstead Security territory in your city.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/80 text-pretty">
                Founding dealer territories available now for{" "}
                <span className="font-bold">$15,000</span>. We provide the
                brand, software, licensing roadmap, training, and back-office.
                You build the local relationships and run the installs.
              </p>
              <p className="mt-4 text-sm font-semibold text-navy">
                Founding rate locked for 24 months · First 25 dealers only.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link href="/dealer" className="btn-primary btn-large group">
                Apply to be a Dealer
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/dealer/faq"
                className="text-sm font-semibold text-navy/80 hover:text-navy"
              >
                Read the dealer FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28" id="faq">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <p className="eyebrow">Common questions</p>
            <h2 className="heading-section mt-3">
              Frequently asked.
            </h2>
          </div>

          <div className="space-y-2">
            {homeFaqs.map((faq, i) => (
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 text-cream">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-cream md:text-4xl lg:text-5xl text-balance">
            Ready to protect your home with Halstead?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
            Get a free, no-pressure quote from your local Halstead team.
            We&apos;ll walk through your needs and recommend a plan in under 15
            minutes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-gold btn-large group">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-cream/30 px-8 py-4 text-base font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (361) 555-0100
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-gold md:text-4xl">{number}</p>
      <p className="mt-1 text-xs text-cream/70">{label}</p>
    </div>
  );
}

function PillarCard({
  icon,
  title,
  description,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "card-featured"
          : "card"
      }
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold leading-tight text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">{description}</p>
    </div>
  );
}

function PlanTeaser({
  name,
  price,
  tagline,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={featured ? "card-featured" : "card"}
    >
      {featured && (
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
          Most popular
        </p>
      )}
      <h3 className="text-xl font-bold text-navy">{name}</h3>
      <p className="mt-2">
        <span className="text-4xl font-bold text-navy">${price}</span>
        <span className="text-base font-medium text-navy/60">/mo</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-navy/70">{tagline}</p>
      <ul className="mt-5 space-y-2 border-t border-navy/10 pt-5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-navy/80">
            <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={`/contact?plan=${name.toLowerCase().replace(" ", "-")}`}
        className={`mt-6 block w-full text-center ${featured ? "btn-gold" : "btn-secondary"}`}
      >
        Get {name}
      </Link>
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
