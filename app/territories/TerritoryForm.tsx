"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function TerritoryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      type: "territory-license",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
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
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold">
          Application received
        </p>
        <h3 className="mt-4 text-2xl font-bold text-cream md:text-3xl">
          Your territory inquiry is in.
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-cream/80">
          The Halstead team will reach out within one business day to discuss
          your market, qualifications, and next steps.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/dealer" className="btn-gold group">
            Read about the dealer program
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/plans"
            className="inline-flex items-center justify-center rounded-lg border-2 border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10"
          >
            See customer plans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-cream">
            Full name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="block w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-cream">
            Email <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="block w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-cream">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="block w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-cream">
            City or territory of interest <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="location"
            required
            className="block w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
            placeholder="Houston, TX"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-cream">
          Current business or experience <span className="text-gold">*</span>
        </label>
        <textarea
          name="background"
          required
          rows={3}
          className="block w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
          placeholder="Tell us about your current business, sales experience, or why you want to operate a security territory"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-cream">
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          className="block w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
          placeholder="Anything else you want us to know"
        />
      </div>

      {error && (
        <div className="rounded-lg border border-burgundy/30 bg-burgundy/10 p-4 text-sm text-cream">
          Something went wrong. Please try again or email us at{" "}
          <a
            href="mailto:dealers@halsteadsecurity.com"
            className="font-semibold underline"
          >
            dealers@halsteadsecurity.com
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold btn-large group w-full justify-center"
      >
        {submitting ? "Submitting..." : "Submit territory application"}
        {!submitting && (
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        )}
      </button>

      <p className="text-xs text-cream/50">
        By submitting this form you agree to be contacted by Halstead Security
        about your territory inquiry. We do not sell your information. See our{" "}
        <Link href="/privacy" className="underline hover:text-cream/70">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
