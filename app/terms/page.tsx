import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Halstead Security website, form submissions, and dealer program inquiries. Last updated June 2026.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-narrow">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-hero mt-4">Terms of Service</h1>
        <p className="body-large mt-6">
          Last updated: June 12, 2026
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-navy/80">
          <div className="rounded-lg border border-gold/30 bg-gold/10 p-5 text-sm text-navy/80">
            <p className="font-semibold text-navy">
              These terms are provided as a good-faith framework for using
              this website. They have not been reviewed by an attorney and
              should not be treated as legal advice. We recommend consulting
              qualified legal counsel before relying on this document for
              compliance purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              1. Acceptance of terms
            </h2>
            <p className="mt-3">
              By accessing or using the Halstead Security website at{" "}
              <Link href="/" className="font-semibold underline">
                halsteadsecurity.com
              </Link>{" "}
              (&quot;the Site&quot;), you agree to be bound by these Terms of
              Service. If you do not agree, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              2. Description of service
            </h2>
            <p className="mt-3">
              The Site provides information about Halstead Security&apos;s home
              security products, monitoring plans, dealer program, and
              white-label platform. The Site includes contact forms that allow
              you to request a quote, apply to become a dealer, or inquire
              about white-label partnerships.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              3. Form submissions
            </h2>
            <p className="mt-3">
              When you submit a form on the Site, you consent to being
              contacted by Halstead Security or a local Halstead dealer
              regarding your inquiry. You represent that the information you
              provide is accurate and that you are authorized to provide it.
            </p>
            <p className="mt-3">
              Form submissions do not create a binding contract, service
              agreement, or dealer relationship. Any such agreements will be
              documented separately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              4. Dealer program inquiries
            </h2>
            <p className="mt-3">
              Submitting a dealer application through the Site does not
              guarantee acceptance into the Halstead dealer program.
              Acceptance is subject to review, background check, and
              execution of a separate dealer agreement. The $15,000 founding
              dealer fee referenced on the Site is not collected at the
              application stage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              5. Pricing and availability
            </h2>
            <p className="mt-3">
              Prices, plans, and features described on the Site are subject to
              change without notice. Pricing shown is for informational
              purposes only and does not constitute a binding offer.
              Availability of services depends on your geographic location and
              local dealer coverage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              6. Intellectual property
            </h2>
            <p className="mt-3">
              All content on the Site, including text, graphics, logos, and
              software, is the property of Halstead Security, LLC or its
              licensors and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative
              works from Site content without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              7. Limitation of liability
            </h2>
            <p className="mt-3">
              The Site and its content are provided &quot;as is&quot; without
              warranties of any kind. Halstead Security is not liable for any
              damages arising from your use of the Site, reliance on
              information presented, or inability to access the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              8. Privacy
            </h2>
            <p className="mt-3">
              Your use of the Site is also governed by our{" "}
              <Link href="/privacy" className="font-semibold underline">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your personal
              information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              9. Changes to these terms
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. Changes will be
              posted on this page with an updated &quot;last updated&quot;
              date. Continued use of the Site after changes constitutes
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              10. Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the State of Texas. Any
              disputes arising from these terms or your use of the Site shall
              be resolved in the courts of Nueces County, Texas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">11. Contact</h2>
            <p className="mt-3">
              Questions about these terms? Email{" "}
              <a
                href="mailto:hello@halsteadsecurity.com"
                className="font-semibold underline"
              >
                hello@halsteadsecurity.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
