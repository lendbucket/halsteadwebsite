import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Halstead Security collects, uses, and protects your personal information. Last updated June 2026.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-narrow">
        <p className="eyebrow">Legal</p>
        <h1 className="heading-hero mt-4">Privacy Policy</h1>
        <p className="body-large mt-6">
          Last updated: June 12, 2026
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-navy/80">
          <div className="rounded-lg border border-gold/30 bg-gold/10 p-5 text-sm text-navy/80">
            <p className="font-semibold text-navy">
              This policy is provided as a good-faith disclosure of our data
              practices. It has not been reviewed by an attorney and should not
              be treated as legal advice. We recommend consulting qualified
              legal counsel before relying on this document for compliance
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">1. Who we are</h2>
            <p className="mt-3">
              Halstead Security, LLC (&quot;Halstead,&quot; &quot;we,&quot;
              &quot;us&quot;) is a home security brand operated through a
              network of independent local dealers. Our website is{" "}
              <Link href="/" className="font-semibold underline">
                halsteadsecurity.com
              </Link>
              . Our primary contact email is{" "}
              <a
                href="mailto:hello@halsteadsecurity.com"
                className="font-semibold underline"
              >
                hello@halsteadsecurity.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              2. Information we collect
            </h2>
            <p className="mt-3">
              We collect only information you voluntarily provide through our
              website forms:
            </p>
            <ul className="mt-4 ml-6 list-disc space-y-2">
              <li>
                <span className="font-semibold">Contact form</span> (Get a
                Quote, Dealer Inquiry, White-Label Inquiry): full name, email
                address, phone number, city/state, property type or business
                background, and any message you include.
              </li>
              <li>
                <span className="font-semibold">Dealer application</span>:
                full name, email address, phone number, city/state, business
                name, industry background, years of experience, approximate
                startup capital, motivation, preferred operating state and
                metro area, preferred ZIP codes, and launch timeline.
              </li>
            </ul>
            <p className="mt-4">
              We do not use tracking cookies, analytics pixels, or third-party
              advertising scripts on this website. We do not collect browsing
              behavior, IP addresses for profiling, or device fingerprints.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              3. How we use your information
            </h2>
            <ul className="mt-3 ml-6 list-disc space-y-2">
              <li>
                To respond to your inquiry within one business day via email
                or phone.
              </li>
              <li>
                To connect you with a local Halstead dealer in your service
                area, if applicable.
              </li>
              <li>
                To evaluate dealer applications and schedule interviews.
              </li>
              <li>
                To send transactional emails related to your inquiry (not
                marketing emails unless you opt in).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              4. How we share your information
            </h2>
            <p className="mt-3">
              We may share your contact information with a local Halstead
              dealer in your geographic area so they can follow up on your
              inquiry. We do not sell, rent, or trade your personal
              information to third parties for marketing purposes.
            </p>
            <p className="mt-3">
              We use{" "}
              <span className="font-semibold">Resend</span> for transactional
              email delivery and{" "}
              <span className="font-semibold">Vercel</span> for website
              hosting. These service providers process data only as necessary
              to deliver their services to us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              5. Data retention
            </h2>
            <p className="mt-3">
              We retain form submissions for as long as needed to fulfill the
              purpose for which they were collected (typically the duration of
              a customer or dealer relationship, plus any legally required
              retention period). You may request deletion of your data at any
              time by emailing{" "}
              <a
                href="mailto:hello@halsteadsecurity.com"
                className="font-semibold underline"
              >
                hello@halsteadsecurity.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              6. Your rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have the right to access,
              correct, delete, or port your personal data. To exercise any of
              these rights, contact us at{" "}
              <a
                href="mailto:hello@halsteadsecurity.com"
                className="font-semibold underline"
              >
                hello@halsteadsecurity.com
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              7. Children&apos;s privacy
            </h2>
            <p className="mt-3">
              Our website is not directed at children under 13. We do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">
              8. Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. Changes will be
              posted on this page with an updated &quot;last updated&quot;
              date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">9. Contact us</h2>
            <p className="mt-3">
              If you have questions about this privacy policy, contact us at{" "}
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
