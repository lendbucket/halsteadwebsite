import Link from "next/link";
import { ArrowRight, Camera, Shield, Bell, Zap, Phone, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Smart Home Security That Works",
  description:
    "Halstead's smart home security features: AI motion classification, two-camera verification, vacation mode, visitor passes, smart family check-ins, package detection, and professional dispatch.",
  alternates: { canonical: "/features" },
};

const groups = [
  {
    title: "Smart filtering that actually works",
    icon: <Zap className="h-6 w-6" />,
    description: "Halstead's AI cuts through noise so you only see what matters.",
    items: [
      {
        name: "Two-camera verification",
        description: "Most security alarms trigger on a single sensor. Halstead requires corroboration from a second camera or sensor before escalating. This single feature eliminates 70% of false alarms — the leading cause of customer dissatisfaction in home security.",
      },
      {
        name: "AI motion classification",
        description: "Person, vehicle, package, animal, or other. Subscribe only to the categories that matter to you. Person at 3 a.m.? Get notified. Squirrel at 3 a.m.? Skip it. Available on the Premium tier and above.",
      },
      {
        name: "Storm mode",
        description: "Severe weather alert from the National Weather Service automatically calms motion sensitivity. No more 50 false alerts during a thunderstorm or hurricane warning.",
      },
      {
        name: "Smart family check-ins",
        description: "Your kids come home from school. Halstead recognizes them, sends you a 'Sarah is home, 3:47pm' notification — without triggering a scary alarm. Pre-register household members at install.",
      },
    ],
  },
  {
    title: "Living-with-it features",
    icon: <Bell className="h-6 w-6" />,
    description: "Built so you actually use the system, not just install it.",
    items: [
      {
        name: "Vacation mode",
        description: "One toggle. Increases sensitivity. Sets longer retention. Sends you a daily digest. Alerts your trusted neighbor list. Returns to normal when you tap it off.",
      },
      {
        name: "Visitor pass",
        description: "Your cleaner comes Tuesday at 10 a.m. Generate a visitor pass that records video for your archive but doesn't blast you with alerts during their window. Perfect for cleaners, contractors, dog walkers, in-laws.",
      },
      {
        name: "Doorbell scripts",
        description: "Set pre-recorded responses for the doorbell. 'We're not interested, please leave.' 'Please leave packages on the porch.' Auto-respond when nobody's home.",
      },
      {
        name: "Historical timeline",
        description: "'What happened at my house yesterday from 3 to 5pm?' Halstead AI summarizes everything that occurred in any window in plain English.",
      },
      {
        name: "Halstead Watch (opt-in)",
        description: "Share blurred motion events with neighbors who are also Halstead customers. A community watch network without the toxicity of Citizen or Nextdoor — just neighbors helping neighbors stay aware.",
      },
    ],
  },
  {
    title: "When something does happen",
    icon: <Shield className="h-6 w-6" />,
    description: "Smart escalation that gets help when you need it.",
    items: [
      {
        name: "Smart escalation chain",
        description: "Motion detected. Push notification sent. No response in 90 seconds? Halstead calls you. No answer? Calls your emergency contact. Pro Monitoring tier? Dispatches authorities through our UL-listed central station partner.",
      },
      {
        name: "Two-way audio doorbell",
        description: "Talk to whoever's at your door from anywhere. Tell the delivery driver where to leave the package. Tell the unexpected visitor you'll be right there. Tell the wrong-house visitor they have the wrong house.",
      },
      {
        name: "Package alerts",
        description: "Halstead AI distinguishes a package being placed (delivery confirmation with photo) from a package being removed (theft alert with critical priority).",
      },
      {
        name: "Cellular backup",
        description: "Internet down? Power glitched? Pro Monitoring tier includes a cellular backup hub that keeps your system online when nothing else is. LTE-M radio, 24-hour battery backup.",
      },
    ],
  },
  {
    title: "For your finances",
    icon: <DollarSign className="h-6 w-6" />,
    description: "Halstead saves you money beyond the subscription.",
    items: [
      {
        name: "Insurance discount auto-submission",
        description: "Halstead generates the certificate of monitoring and auto-files with your home insurance carrier annually. Most major carriers offer 5-15% discounts on monitored homes — Halstead does the paperwork so you actually get the discount.",
      },
      {
        name: "Hardware financing through Reyna Title",
        description: "0% interest, 12 months. No need to put $400 to $800 of cameras on a credit card. Apply during checkout, instant decision.",
      },
      {
        name: "Real estate sale report",
        description: "Selling your home? Halstead generates a professional report on your installed equipment for your listing. Buyers pay more for homes with professional security already in place.",
      },
    ],
  },
];

export default function FeaturesPage() {
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
            engineered differently.
          </p>
        </div>
      </section>

      {groups.map((group, i) => (
        <section
          key={group.title}
          className={i % 2 === 0 ? "bg-cream pb-20" : "bg-navy py-20 text-cream"}
        >
          <div className="container-narrow">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                  i % 2 === 0 ? "bg-gold/10 text-gold" : "bg-gold/20 text-gold"
                }`}
              >
                {group.icon}
              </div>
              <div>
                <h2
                  className={`text-3xl font-bold md:text-4xl text-balance ${
                    i % 2 === 0 ? "text-navy" : "text-cream"
                  }`}
                >
                  {group.title}
                </h2>
                <p
                  className={`mt-2 text-lg ${
                    i % 2 === 0 ? "text-navy/70" : "text-cream/70"
                  }`}
                >
                  {group.description}
                </p>
              </div>
            </div>
            <div className="mt-12 space-y-8 pl-0 md:pl-16">
              {group.items.map((item) => (
                <article key={item.name}>
                  <h3
                    className={`text-xl font-bold ${
                      i % 2 === 0 ? "text-navy" : "text-gold"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-2 text-base leading-relaxed ${
                      i % 2 === 0 ? "text-navy/80" : "text-cream/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

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
