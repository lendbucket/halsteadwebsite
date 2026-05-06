import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Halstead Security is built on the trust customers used to give to companies their parents used. Heritage trade brand for the modern home.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <p className="eyebrow">About</p>
          <h1 className="heading-display mt-4">A real security company.</h1>
          <p className="body-large mt-6">
            Halstead Security is built on a simple idea: the security industry
            got too big and too automated to remember that customers want to
            know who&apos;s protecting their home.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-narrow space-y-6 font-sans text-lg leading-relaxed text-navy/80">
          <p>
            The big national brands lock customers into 36-month contracts and
            route their support calls through anonymous call centers. The
            small independents fight to keep up with software, licensing, and
            modern customer expectations. Neither serves the customer well.
          </p>
          <p>
            Halstead exists in the space between. A national brand operated by
            independent local owners. National-grade software with
            neighborhood-level service. Professional installation with
            month-to-month flexibility.
          </p>
          <p>
            We&apos;re not the cheapest. We&apos;re not the biggest. We&apos;re
            not trying to be either.
          </p>
          <p className="font-serif text-xl font-semibold italic text-navy">
            We&apos;re trying to be the security company your parents would
            have used — supercharged with the tools and software customers
            expect today.
          </p>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="container-narrow">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            How Halstead works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream md:text-4xl">
            A network of local dealers, supported by a national platform.
          </h2>
          <div className="mt-8 space-y-6 font-sans text-lg leading-relaxed text-cream/80">
            <p>
              Halstead Security is a network of independent dealers operating
              under the Halstead brand in their local territories. Each dealer
              is a state-licensed alarm operator running their own business,
              supported by Halstead&apos;s platform, hardware sourcing,
              training, and back-office.
            </p>
            <p>When you become a Halstead customer, you get:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Equipment from a vetted, professional ONVIF-compliant supplier</li>
              <li>Installation from a local technician you can call directly</li>
              <li>A modern app and portal built by Halstead&apos;s platform team</li>
              <li>Monthly billing through industry-standard payment infrastructure</li>
              <li>Local support from the dealer who installed your system</li>
              <li>Platform-level support from the Halstead team if needed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-narrow">
          <p className="eyebrow">Founded by Robert Reyna</p>
          <h2 className="heading-section mt-3">Part of Reyna Holdings.</h2>
          <div className="mt-8 space-y-6 font-sans text-lg leading-relaxed text-navy/80">
            <p>
              Halstead Security is a venture of Reyna Holdings, a multi-vertical
              operating group based in Corpus Christi, Texas. Reyna ventures
              include:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li><span className="font-semibold">Salon Envy USA</span> — a salon franchise with locations across South Texas</li>
              <li><span className="font-semibold">Lone Star Contracting Services</span> — commercial landscaping</li>
              <li><span className="font-semibold">Reyna Title</span> — private mortgage lending</li>
              <li><span className="font-semibold">FieldPermit / Permit Crew</span> — construction compliance and permitting</li>
              <li><span className="font-semibold">Halstead Security</span> — the company you&apos;re reading about</li>
            </ul>
            <p>
              Reyna ventures share a common thesis: build vertically integrated
              operating businesses where every customer relationship in one
              vertical creates an opportunity in another. Halstead customers
              can finance hardware through Reyna Title. Lone Star commercial
              customers become Halstead commercial accounts. The integrated
              approach makes our unit economics structurally better than any
              pure-play security competitor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="container-narrow">
          <h2 className="heading-subsection">What Halstead is not.</h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-navy/80">
            We&apos;re trying to be transparent from the start, so here&apos;s
            what we&apos;re explicitly not:
          </p>
          <ul className="mt-6 space-y-3 font-sans text-base text-navy/80">
            <li>• <span className="font-semibold">Not a 36-month contract company.</span> We earn your business every month after year one.</li>
            <li>• <span className="font-semibold">Not a tech startup.</span> We&apos;re a security company that uses modern technology.</li>
            <li>• <span className="font-semibold">Not the cheapest option.</span> Cheap security usually means cheap product or cheap service.</li>
            <li>• <span className="font-semibold">Not building our own central monitoring station.</span> We partner with established UL-listed central stations.</li>
            <li>• <span className="font-semibold">Not building our own hardware.</span> We source from professional ONVIF-compliant suppliers.</li>
            <li>• <span className="font-semibold">Not licensed in every state yet.</span> We launch state by state with a licensed local dealer in each market.</li>
          </ul>
        </div>
      </section>

      <section className="bg-navy py-16 text-cream">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl font-semibold text-cream">
            Get in touch.
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-base text-cream/80 md:grid-cols-2">
            <div>
              <p className="font-semibold text-gold">Customer questions</p>
              <a href="mailto:hello@halsteadsecurity.com" className="text-cream/80 hover:text-cream">
                hello@halsteadsecurity.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-gold">Become a dealer</p>
              <a href="mailto:dealers@halsteadsecurity.com" className="text-cream/80 hover:text-cream">
                dealers@halsteadsecurity.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-gold">White-label partnerships</p>
              <a href="mailto:partner@halsteadsecurity.com" className="text-cream/80 hover:text-cream">
                partner@halsteadsecurity.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-gold">Press</p>
              <a href="mailto:press@halsteadsecurity.com" className="text-cream/80 hover:text-cream">
                press@halsteadsecurity.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
