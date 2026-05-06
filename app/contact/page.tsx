"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

type FormType = "customer" | "dealer" | "partner";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialType: FormType =
    searchParams.get("type") === "partner"
      ? "partner"
      : searchParams.get("type") === "dealer"
      ? "dealer"
      : "customer";

  const [formType, setFormType] = useState<FormType>(initialType);
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
        alert("Something went wrong. Please email us directly.");
      }
    } catch {
      alert("Something went wrong. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <Check className="h-8 w-8 text-gold" strokeWidth={3} />
        </div>
        <p className="eyebrow mt-6">Thank you</p>
        <h1 className="heading-hero mt-4 text-balance">We got your message.</h1>
        <p className="body-large mt-6">
          A real person on the Halstead team will respond within 1 business
          day.
        </p>
        <Link href="/" className="mt-10 btn-primary inline-flex">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <p className="eyebrow">Contact</p>
      <h1 className="heading-hero mt-4 text-balance">How can we help?</h1>
      <p className="body-large mt-6">
        Tell us a bit about yourself and a real person will respond within 1
        business day.
      </p>

      <div className="mt-10 flex flex-wrap gap-2 rounded-lg bg-cream-200 p-2">
        {(
          [
            { id: "customer", label: "I want a quote" },
            { id: "dealer", label: "Become a dealer" },
            { id: "partner", label: "White-label" },
          ] as { id: FormType; label: string }[]
        ).map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setFormType(option.id)}
            className={`flex-1 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
              formType === option.id
                ? "bg-navy text-cream shadow-md"
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
            label="Property type"
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
          <label className="label-base">Tell us more</label>
          <textarea
            name="message"
            rows={5}
            className="input-base"
            placeholder={
              formType === "customer"
                ? "What kind of system are you thinking about? Any specific concerns?"
                : formType === "dealer"
                ? "Why are you interested in Halstead? What's your timeline?"
                : "What scale of partnership are you looking for? Any specific requirements?"
            }
          />
        </div>

        <button type="submit" disabled={submitting} className="btn-gold group">
          {submitting ? "Sending..." : "Send Message"}
          {!submitting && (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>

        <p className="text-xs text-navy/60">
          By submitting this form you agree to be contacted by Halstead
          Security or one of our local dealers about your inquiry. We
          don&apos;t sell your information.
        </p>
      </form>

      <div className="mt-16 border-t border-navy/10 pt-8">
        <h2 className="text-xl font-bold text-navy">Or email us directly</h2>
        <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
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
            <p className="font-semibold text-navy">White-label</p>
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
    </>
  );
}

export default function ContactPage() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-narrow">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
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
