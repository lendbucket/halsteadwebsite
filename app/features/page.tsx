import Link from "next/link";
import { ArrowRight, Zap, Bell, Shield, DollarSign } from "lucide-react";
import type { Metadata } from "next";
import { FEATURES_LIST } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features — Smart Home Security That Works",
  description:
    "Every Halstead feature explained: AI motion classification, two-camera verification, vacation mode, family check-ins, smart escalation, cellular backup, and more. Deep technical detail on each.",
  alternates: { canonical: "/features" },
};

const categoryMeta = {
  "smart-filtering": {
    title: "Smart filtering that actually works",
    description: "Halstead's AI cuts through noise so you only see what matters.",
    icon: <Zap className="h-6 w-6" />,
  },
  automation: {
    title: "Living-with-it features",
    description: "Built so you actually use the system, not just install it.",
    icon: <Bell className="h-6 w-6" />,
  },
  response: {
    title: "When something does happen",
    description: "Smart escalation that gets help when you need it.",
    icon: <Shield className="h-6 w-6" />,
  },
  financial: {
    title: "For your finances",
    description: "Halstead saves you money beyond the subscription.",
    icon: <DollarSign className="h-6 w-6" />,
  },
};

export default function FeaturesHubPage() {
  const grouped = FEATURES_LIST.reduce(
    (acc, f) => {
      if (!acc[f.category]) acc[f.category] = [];
      acc[f.category].push(f);
      return acc;
    },
    {} as Record<string, typeof FEATURES_LIST>
  );

  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow text-center">
          <p className="eyebrow">Features</p>
          <h1 className="heading-hero mt-4 text-balance">
            Smart features.
            <br />
            <span className="text-gold">Built for the way you actually live.</span>
          </h1>
          <p className="body-large mt-6">
            Most security apps blow up your phone with motion alerts, flag
            every passing car, and scare you out of using them. Halstead is
            engineered differently. Click any feature for detail.
          </p>
        </div>
      </section>

      {Object.entries(categoryMeta).map(([key, meta], i) => {
        const features = grouped[key] || [];
        if (features.length === 0) return null;
        const isDark = i % 2 === 1;

        return (
          <section
            key={key}
            className={isDark ? "bg-navy py-20 text-cream" : "bg-cream pb-20"}
          >
            <div className="container-wide">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                    isDark ? "bg-gold/20 text-gold" : "bg-gold/10 text-gold"
                  }`}
                >
                  {meta.icon}
                </div>
                <div>
                  <h2
                    className={`text-3xl font-bold md:text-4xl text-balance ${
                      isDark ? "text-cream" : "text-navy"
                    }`}
                  >
                    {meta.title}
                  </h2>
                  <p
                    className={`mt-2 text-lg ${
                      isDark ? "text-cream/70" : "text-navy/70"
                    }`}
                  >
                    {meta.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2">
                {features.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/features/${f.slug}`}
                    className={`group rounded-xl p-6 transition-all ${
                      isDark
                        ? "border border-cream/10 bg-cream/5 hover:bg-cream/10"
                        : "border border-navy/10 bg-white hover:border-navy/30 hover:shadow-xl"
                    }`}
                  >
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-gold" : "text-navy"
                      }`}
                    >
                      {f.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isDark ? "text-cream/80" : "text-navy/75"
                      }`}
                    >
                      {f.hero.subtitle}
                    </p>
                    <p
                      className={`mt-4 inline-flex items-center text-sm font-semibold ${
                        isDark
                          ? "text-cream group-hover:text-gold"
                          : "text-navy group-hover:text-gold"
                      }`}
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-cream py-20">
        <div className="container-narrow text-center">
          <h2 className="heading-section text-balance">Ready to see it work?</h2>
          <p className="body-large mt-4">
            Get a free quote from your local Halstead team.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-gold btn-large group">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/plans" className="btn-secondary btn-large">
              See Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
