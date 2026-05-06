"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";

type Step = 1 | 2 | 3;

export default function DealerApplyPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const stepData = Object.fromEntries(formData.entries()) as Record<string, string>;
    setData({ ...data, ...stepData });
    setStep((step + 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const finalData = { ...data, ...Object.fromEntries(formData.entries()), type: "dealer-application" };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      if (res.ok) setSubmitted(true);
      else alert("Something went wrong. Please email dealers@halsteadsecurity.com directly.");
    } catch {
      alert("Something went wrong. Please email dealers@halsteadsecurity.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-cream py-20 md:py-32">
        <div className="container-narrow text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
            <Check className="h-8 w-8 text-gold" strokeWidth={3} />
          </div>
          <p className="eyebrow mt-6">Application received</p>
          <h1 className="heading-hero mt-4">Welcome to the cohort.</h1>
          <p className="body-large mt-6">
            A member of the Halstead team will review your application and
            schedule a phone interview within 3 to 5 business days.
          </p>
          <p className="body-base mt-4">
            Watch for an email from{" "}
            <span className="font-semibold">dealers@halsteadsecurity.com</span>.
          </p>
          <Link href="/" className="mt-10 btn-primary inline-flex">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-narrow">
        <Link
          href="/dealer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dealer Program
        </Link>

        <p className="eyebrow mt-8">Founding Dealer Application</p>
        <h1 className="heading-hero mt-4 text-balance">
          Apply to own a Halstead territory.
        </h1>
        <p className="body-large mt-6">
          Three quick steps. Takes about 10 minutes. We&apos;ll review your
          application and schedule a phone interview within 3 to 5 business
          days.
        </p>

        {/* Progress */}
        <div className="mt-12">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    step >= s
                      ? "bg-gold text-navy"
                      : "bg-navy/10 text-navy/40"
                  }`}
                >
                  {step > s ? <Check className="h-4 w-4" strokeWidth={3} /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-1 flex-1 rounded ${
                      step > s ? "bg-gold" : "bg-navy/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-medium text-navy/60">
            <span>About you</span>
            <span className="text-center">Background</span>
            <span className="text-right">Territory</span>
          </div>
        </div>

        {/* Step 1: About */}
        {step === 1 && (
          <form onSubmit={handleNext} className="mt-12 space-y-6">
            <h2 className="heading-subsection">Step 1 of 3 · About you</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="City, State" name="location" required />
            </div>
            <Field label="Existing business or LLC name" name="business" placeholder="If you don't have one yet, write 'forming new'" />
            <button type="submit" className="btn-primary group">
              Continue to Step 2
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}

        {/* Step 2: Background */}
        {step === 2 && (
          <form onSubmit={handleNext} className="mt-12 space-y-6">
            <h2 className="heading-subsection">Step 2 of 3 · Background</h2>

            <div>
              <label className="label-base">Your industry background</label>
              <select name="industry" required className="input-base">
                <option value="">Select your background</option>
                <option value="alarm">Alarm/security industry</option>
                <option value="home-services">Home services (HVAC, plumbing, electrical)</option>
                <option value="real-estate">Real estate</option>
                <option value="construction">Construction or contracting</option>
                <option value="entrepreneur">First-time entrepreneur</option>
                <option value="corporate">Corporate professional changing careers</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="label-base">Years of relevant business experience</label>
              <select name="experience" required className="input-base">
                <option value="">Select range</option>
                <option value="0-2">0 to 2 years</option>
                <option value="3-5">3 to 5 years</option>
                <option value="6-10">6 to 10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="label-base">Approximate startup capital available</label>
              <select name="capital" required className="input-base">
                <option value="">Select range</option>
                <option value="under-25k">Under $25,000</option>
                <option value="25-50k">$25,000 - $50,000</option>
                <option value="50-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
              <p className="mt-2 text-xs text-navy/60">
                Beyond the $15,000 dealer fee, expect $10,000-$25,000 for
                licensing, insurance, initial inventory, vehicle, and operating
                capital.
              </p>
            </div>

            <div>
              <label className="label-base">Why are you interested in Halstead?</label>
              <textarea
                name="motivation"
                required
                rows={4}
                className="input-base"
                placeholder="What draws you to security? What about the Halstead model specifically?"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary"
              >
                Back
              </button>
              <button type="submit" className="btn-primary group">
                Continue to Step 3
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Territory */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <h2 className="heading-subsection">Step 3 of 3 · Territory</h2>

            <div>
              <label className="label-base">Preferred operating state</label>
              <select name="state" required className="input-base">
                <option value="">Select state</option>
                <option value="TX">Texas</option>
                <option value="OK">Oklahoma</option>
                <option value="LA">Louisiana</option>
                <option value="AR">Arkansas</option>
                <option value="NM">New Mexico</option>
                <option value="AZ">Arizona</option>
                <option value="CO">Colorado</option>
                <option value="TN">Tennessee</option>
                <option value="FL">Florida</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="label-base">Preferred city or metro</label>
              <input
                type="text"
                name="metro"
                required
                placeholder="e.g. Houston, Dallas, San Antonio"
                className="input-base"
              />
            </div>

            <div>
              <label className="label-base">Preferred ZIP codes (if known)</label>
              <input
                type="text"
                name="zips"
                placeholder="e.g. 77001, 77002, 77003"
                className="input-base"
              />
              <p className="mt-2 text-xs text-navy/60">
                Optional. We&apos;ll discuss specific territory definition during
                your phone interview.
              </p>
            </div>

            <div>
              <label className="label-base">Timeline to launch</label>
              <select name="timeline" required className="input-base">
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="exploring">Just exploring for now</option>
              </select>
            </div>

            <div>
              <label className="label-base">Anything else you want us to know?</label>
              <textarea
                name="notes"
                rows={3}
                className="input-base"
                placeholder="Optional. Connections, special circumstances, questions, etc."
              />
            </div>

            <div className="rounded-lg border border-navy/10 bg-cream-50 p-4 text-xs leading-relaxed text-navy/70">
              By submitting this application, you authorize Halstead Security to
              perform a background check and credit check as part of dealer
              evaluation. The $15,000 founding dealer fee is not collected at
              this stage — it is paid only after acceptance and contract
              signing.
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-secondary"
                disabled={submitting}
              >
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold group"
              >
                {submitting ? "Submitting..." : "Submit Application"}
                {!submitting && (
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="label-base">
        {label}
        {required && <span className="text-burgundy"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="input-base"
      />
    </div>
  );
}
