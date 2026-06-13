import { AlertTriangle } from "lucide-react";

export function SecurityDisclaimer() {
  return (
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
                  <span className="font-semibold text-navy">
                    No security system prevents all crime.
                  </span>{" "}
                  Security cameras, alarms, and monitoring services are
                  deterrents and detection tools. They reduce risk but cannot
                  eliminate it. No system guarantees absolute safety.
                </li>
                <li>
                  <span className="font-semibold text-navy">
                    Systems depend on power and internet.
                  </span>{" "}
                  Camera and monitoring systems require electrical power and
                  an internet connection to operate. The Pro Monitoring tier
                  includes a cellular backup hub with a 24-hour battery, but
                  extended outages may affect system availability.
                </li>
                <li>
                  <span className="font-semibold text-navy">
                    Professional monitoring response times vary.
                  </span>{" "}
                  When professional monitoring detects a verified alarm, the
                  central station contacts local emergency services. Response
                  times depend on local law enforcement, fire, or EMS
                  availability and are outside Halstead&apos;s control.
                </li>
                <li>
                  <span className="font-semibold text-navy">
                    False alarm reduction is estimated.
                  </span>{" "}
                  Claims about false alarm reduction (such as the 70%
                  estimate for two-camera verification) are based on industry
                  data for dual-verification systems and may vary by
                  installation, environment, and usage.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
