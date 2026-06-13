import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-narrow text-center">
        <ShieldCheck className="mx-auto h-16 w-16 text-gold" strokeWidth={1.5} />
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-gold">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-navy/70">
          The page you&apos;re looking for may have been moved or removed.
          Here are some helpful places to start:
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 md:grid-cols-3">
          <Link
            href="/plans"
            className="group rounded-xl border border-navy/10 bg-white p-6 text-center transition-all hover:border-navy/30 hover:shadow-lg"
          >
            <p className="text-lg font-bold text-navy group-hover:text-gold">
              Plans & Pricing
            </p>
            <p className="mt-2 text-sm text-navy/60">
              From $30/month
            </p>
          </Link>

          <Link
            href="/solutions"
            className="group rounded-xl border border-navy/10 bg-white p-6 text-center transition-all hover:border-navy/30 hover:shadow-lg"
          >
            <p className="text-lg font-bold text-navy group-hover:text-gold">
              Solutions
            </p>
            <p className="mt-2 text-sm text-navy/60">
              By industry
            </p>
          </Link>

          <Link
            href="/contact"
            className="group rounded-xl border border-navy/10 bg-white p-6 text-center transition-all hover:border-navy/30 hover:shadow-lg"
          >
            <p className="text-lg font-bold text-navy group-hover:text-gold">
              Contact Us
            </p>
            <p className="mt-2 text-sm text-navy/60">
              Get a free quote
            </p>
          </Link>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
