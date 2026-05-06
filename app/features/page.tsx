import Link from "next/link";

export const metadata = {
  title: "Features",
  description:
    "Smart features built for the way you actually live. From vacation mode to family check-ins to package detection.",
};

const featureGroups = [
  {
    title: "Smart filtering that actually works",
    items: [
      {
        name: "Two-camera verification",
        description: "Most security alarms trigger on a single sensor. Halstead requires corroboration from a second camera or sensor before escalating. This single feature eliminates 70% of false alarms.",
      },
      {
        name: "AI motion classification",
        description: "Person, vehicle, package, animal, or other. Subscribe only to the categories that matter to you. Person at 3am? Notify. Squirrel at 3am? Skip.",
      },
      {
        name: "Storm mode",
        description: "Severe weather alert from the National Weather Service automatically calms motion sensitivity. No more 50 false alerts during a thunderstorm.",
      },
      {
        name: "Smart family check-ins",
        description: "Your kids come home from school. Halstead recognizes them, sends you a 'Sarah is home, 3:47pm' notification — without triggering a scary alarm.",
      },
    ],
  },
  {
    title: "Living-with-it features",
    items: [
      {
        name: "Vacation mode",
        description: "One toggle. Increases sensitivity. Sets longer retention. Sends you a daily digest. Alerts your trusted neighbor list. Returns to normal when you tap it off.",
      },
      {
        name: "Visitor pass",
        description: "Your cleaner comes Tuesday at 10am. Generate a visitor pass that records video for your archive but doesn't blast you with alerts during their window.",
      },
      {
        name: "Doorbell scripts",
        description: "Set pre-recorded responses for the doorbell. Auto-respond when nobody's home.",
      },
      {
        name: "Historical timeline",
        description: "'What happened at my house yesterday from 3-5pm?' Halstead AI summarizes everything that occurred in any window in plain language.",
      },
      {
        name: "Halstead Watch (opt-in)",
        description: "Share blurred motion events with neighbors who are also Halstead customers. A community watch network without the toxicity of Citizen or Nextdoor.",
      },
    ],
  },
  {
    title: "When something does happen",
    items: [
      {
        name: "Smart escalation",
        description: "Motion detected. Push notification sent. No response in 90 seconds? Halstead calls you. No answer? Calls your emergency contact. Pro tier? Dispatches authorities.",
      },
      {
        name: "Two-way audio",
        description: "Talk to whoever's at your door from anywhere.",
      },
      {
        name: "Package alerts",
        description: "Halstead AI distinguishes a package being placed (delivery confirmation) from a package being removed (theft alert).",
      },
      {
        name: "Cellular backup",
        description: "Internet down? Power glitched? Pro Monitoring includes a cellular backup hub that keeps your system online.",
      },
    ],
  },
  {
    title: "For your finances",
    items: [
      {
        name: "Insurance discount auto-submission",
        description: "Halstead generates the certificate of monitoring and auto-files with your home insurance carrier annually. Most carriers offer 5-15% discounts on monitored homes.",
      },
      {
        name: "Hardware financing through Reyna Title",
        description: "0% interest, 12 months. No need to put $400-800 of cameras on a credit card.",
      },
      {
        name: "Real estate sale report",
        description: "Selling your home? Halstead generates a professional report on your installed equipment for your listing.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <p className="eyebrow">Features</p>
          <h1 className="heading-display mt-4">
            Smart features. Built for the way you actually live.
          </h1>
          <p className="body-large mt-6">
            Most security apps blow up your phone with motion alerts, flag
            every passing car, and scare you out of using them. Halstead is
            engineered differently.
          </p>
        </div>
      </section>

      {featureGroups.map((group, i) => (
        <section
          key={group.title}
          className={i % 2 === 0 ? "bg-cream pb-20" : "bg-navy py-20 text-cream"}
        >
          <div className="container-narrow">
            <h2
              className={`font-serif text-3xl font-semibold md:text-4xl ${
                i % 2 === 0 ? "text-navy" : "text-cream"
              }`}
            >
              {group.title}
            </h2>
            <div className="mt-10 space-y-8">
              {group.items.map((item) => (
                <div key={item.name}>
                  <h3
                    className={`font-serif text-xl font-semibold ${
                      i % 2 === 0 ? "text-navy" : "text-gold"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-2 font-sans text-base leading-relaxed ${
                      i % 2 === 0 ? "text-navy/80" : "text-cream/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-cream py-20">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Ready to see it work?</h2>
          <p className="body-large mt-4">
            Get a free quote from your local Halstead team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-gold">
              Get a Free Quote
            </Link>
            <Link href="/plans" className="btn-secondary">
              See Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
