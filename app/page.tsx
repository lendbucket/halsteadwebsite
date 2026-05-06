import Link from "next/link";
import { Shield, MapPin, Phone, Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-cream-200 pb-24 pt-20 md:pt-32">
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <p className="eyebrow">Halstead Security · Established 2026</p>
            <h1 className="heading-display mt-4">
              Professional security,
              <br />
              <span className="text-navy">installed in your neighborhood.</span>
            </h1>
            <p className="body-large mt-6 max-w-2xl">
              Real cameras. Real installation. Real support. Halstead Security
              delivers professional home security with no 36-month contracts,
              installed by a local technician, monitored by smart software.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/plans" className="btn-secondary">
                See Plans
              </Link>
            </div>
            <p className="mt-6 font-sans text-sm text-navy/60">
              No 36-month contracts. No hidden fees. No call centers.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-cream py-24">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">Why Halstead</p>
            <h2 className="heading-section mt-3">
              A real security company. Run by people who pick up.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <PillarCard
              icon={<MapPin className="h-8 w-8 text-gold" strokeWidth={2} />}
              title="Locally installed"
              description="A real technician comes to your home. No drop-shipped box for you to figure out alone. Your installer is your neighbor — and you can call them directly."
            />
            <PillarCard
              icon={<Sparkles className="h-8 w-8 text-gold" strokeWidth={2} />}
              title="Monthly, not 36-month"
              description="Pay month-to-month after your first year. Cancel anytime. We earn your business every month, not by trapping you in a multi-year contract."
            />
            <PillarCard
              icon={<Phone className="h-8 w-8 text-gold" strokeWidth={2} />}
              title="Real people, real support"
              description="When you call Halstead, a person picks up. Your local Halstead team handles installation, support, and service."
            />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-navy py-24 text-cream">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">What you get</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-cream md:text-4xl">
                Smart features. Built for the way you actually live.
              </h2>
              <p className="mt-6 font-sans text-lg leading-relaxed text-cream/80">
                Most security apps blow up your phone with motion alerts, flag
                every passing car, and scare you out of using them. Halstead is
                engineered differently.
              </p>
              <Link
                href="/features"
                className="mt-8 inline-flex items-center gap-2 font-sans font-medium text-gold hover:text-gold-300"
              >
                See all features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <ul className="space-y-4">
              {[
                "Two-camera verification cuts false alarms by 70%",
                "AI motion classification (person, vehicle, package)",
                "Vacation mode that thinks for you",
                "Visitor pass system for cleaners and contractors",
                "Storm mode mutes weather false alarms",
                "Smart family check-ins",
                "Insurance discount auto-submission",
                "Hardware financing at 0% through Reyna Title",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="font-sans text-base text-cream/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plans teaser */}
      <section className="bg-cream py-24">
        <div className="container-wide">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="eyebrow">Plans starting at $30/month</p>
            <h2 className="heading-section mt-3">
              Three plans. No setup fees.
            </h2>
            <p className="body-large mt-4">
              Honest pricing. Hardware financing available. Cancel anytime
              after your first year.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PlanTeaser
              name="Basic"
              price="$30"
              tagline="Up to 4 cameras with smart alerts"
            />
            <PlanTeaser
              name="Premium"
              price="$50"
              tagline="Up to 8 cameras with AI filters and vacation mode"
              featured
            />
            <PlanTeaser
              name="Pro Monitoring"
              price="$75"
              tagline="Professional dispatch and cellular backup"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/plans" className="btn-primary">
              See full pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Dealer CTA */}
      <section className="relative overflow-hidden bg-gold py-24">
        <div className="container-wide relative">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-sans text-sm font-medium uppercase tracking-widest text-navy/70">
                For Operators
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy md:text-4xl">
                Own a Halstead Security territory in your city.
              </h2>
              <p className="mt-6 font-sans text-lg leading-relaxed text-navy/80">
                Founding dealer territories available now for{" "}
                <span className="font-semibold">$15,000</span>. We provide the
                brand, software, licensing roadmap, training, and back-office.
                You build the local relationships and run the installs.
              </p>
              <p className="mt-4 font-sans text-sm font-medium text-navy">
                Founding rate locked for 24 months &middot; First 25 dealers
                only.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <Link href="/dealer" className="btn-primary group">
                Apply to be a Dealer
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/dealer/faq"
                className="font-sans text-sm font-medium text-navy/80 hover:text-navy"
              >
                Read the FAQ &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PillarCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-navy/10 bg-cream-50 p-8 transition-shadow hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="font-serif text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 font-sans text-base leading-relaxed text-navy/70">
        {description}
      </p>
    </div>
  );
}

function PlanTeaser({
  name,
  price,
  tagline,
  featured = false,
}: {
  name: string;
  price: string;
  tagline: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border-2 p-8 transition-all hover:shadow-lg ${
        featured
          ? "border-gold bg-cream-50 shadow-md"
          : "border-navy/10 bg-cream"
      }`}
    >
      {featured && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
          Most popular
        </p>
      )}
      <h3 className="font-serif text-2xl font-semibold text-navy">{name}</h3>
      <p className="mt-2 font-sans text-3xl font-bold text-navy">
        {price}
        <span className="text-base font-normal text-navy/60">/month</span>
      </p>
      <p className="mt-4 font-sans text-sm leading-relaxed text-navy/70">
        {tagline}
      </p>
    </div>
  );
}
