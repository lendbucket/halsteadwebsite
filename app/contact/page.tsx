"use client";

import { useState } from "react";
import Link from "next/link";

type FormType = "customer" | "dealer" | "partner";

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>("customer");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: formType }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-cream py-20 md:py-32">
        <div className="container-narrow text-center">
          <p className="eyebrow">Thank you</p>
          <h1 className="heading-display mt-4">We got your message.</h1>
          <p className="body-large mt-6">
            A real person on the Halstead team will respond within 1 business
            day.
          </p>
          <Link href="/" className="mt-8 btn-primary inline-flex">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-narrow">
        <p className="eyebrow">Contact</p>
        <h1 className="heading-display mt-4">How can we help?</h1>
        <p className="body-large mt-6">
          Tell us a bit about yourself and a real person will respond within 1
          business day.
        </p>

        {/* Form type selector */}
        <div className="mt-10 flex flex-wrap gap-2 rounded-lg bg-cream-200 p-2">
          {(
            [
              { id: "customer", label: "I want a quote" },
              { id: "dealer", label: "Become a dealer" },
              { id: "partner", label: "White-label inquiry" },
            ] as { id: FormType; label: string }[]
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setFormType(option.id)}
              className={`flex-1 rounded-md px-4 py-3 font-sans text-sm font-medium transition-colors ${
                formType === option.id
                  ? "bg-navy text-cream"
                  : "text-navy/70 hover:bg-cream"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field
              label={formType === "customer" ? "City / State" : "Operating state"}
              name="location"
              required
            />
          </div>

          {formType === "customer" && (
            <Field
              label="Approximate property type"
              name="property"
              placeholder="Single family home, condo, business, etc."
            />
          )}

          {formType === "dealer" && (
            <Field
              label="Background"
              name="background"
              placeholder="Brief description of your existing business or alarm experience"
            />
          )}

          {formType === "partner" && (
            <Field
              label="Company"
              name="company"
              placeholder="Your existing company name and current customer count"
              required
            />
          )}

          <div>
            <label className="block font-sans text-sm font-medium text-navy">
              Tell us more
              <textarea
                name="message"
                rows={5}
                className="mt-2 block w-full rounded-md border border-navy/20 bg-cream-50 px-4 py-3 font-sans text-base text-navy focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                placeholder={
                  formType === "customer"
                    ? "What kind of system are you thinking about? Any specific concerns?"
                    : formType === "dealer"
                    ? "Why are you interested in Halstead? What's your timeline?"
                    : "What scale of partnership are you looking for? Any specific requirements?"
                }
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-gold w-full md:w-auto"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

          <p className="font-sans text-xs text-navy/60">
            By submitting this form you agree to be contacted by Halstead
            Security or one of our local dealers about your inquiry. We
            don&apos;t sell your information.
          </p>
        </form>

        {/* Direct contacts */}
        <div className="mt-16 border-t border-navy/10 pt-8">
          <h2 className="font-serif text-xl font-semibold text-navy">
            Or email us directly
          </h2>
          <div className="mt-6 grid gap-4 font-sans text-sm md:grid-cols-2">
            <div>
              <p className="font-semibold text-navy">Customer questions</p>
              <a
                href="mailto:hello@halsteadsecurity.com"
                className="text-navy/70 hover:text-navy"
              >
                hello@halsteadsecurity.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy">Become a dealer</p>
              <a
                href="mailto:dealers@halsteadsecurity.com"
                className="text-navy/70 hover:text-navy"
              >
                dealers@halsteadsecurity.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy">White-label partnerships</p>
              <a
                href="mailto:partner@halsteadsecurity.com"
                className="text-navy/70 hover:text-navy"
              >
                partner@halsteadsecurity.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy">Press</p>
              <a
                href="mailto:press@halsteadsecurity.com"
                className="text-navy/70 hover:text-navy"
              >
                press@halsteadsecurity.com
              </a>
            </div>
          </div>
        </div>
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
    <label className="block font-sans text-sm font-medium text-navy">
      {label}
      {required && <span className="text-burgundy"> *</span>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border border-navy/20 bg-cream-50 px-4 py-3 font-sans text-base text-navy focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
      />
    </label>
  );
}
