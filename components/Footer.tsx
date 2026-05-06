import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-7 w-7 text-gold" strokeWidth={2.5} />
              <span className="font-serif text-2xl font-bold text-cream">
                Halstead
              </span>
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/70">
              Professional security, installed in your neighborhood. Heritage
              trade brand for the modern home.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              For Homeowners
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/plans" className="font-sans text-sm text-cream/80 hover:text-cream">
                  Plans &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/features" className="font-sans text-sm text-cream/80 hover:text-cream">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-cream/80 hover:text-cream">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              For Operators
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/dealer" className="font-sans text-sm text-cream/80 hover:text-cream">
                  Become a Dealer
                </Link>
              </li>
              <li>
                <Link href="/dealer/faq" className="font-sans text-sm text-cream/80 hover:text-cream">
                  Dealer FAQ
                </Link>
              </li>
              <li>
                <Link href="/white-label" className="font-sans text-sm text-cream/80 hover:text-cream">
                  White-Label Platform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="font-sans text-sm text-cream/80 hover:text-cream">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-cream/80 hover:text-cream">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:hello@halsteadsecurity.com" className="font-sans text-sm text-cream/80 hover:text-cream">
                  hello@halsteadsecurity.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="font-sans text-xs text-cream/60">
            &copy; {new Date().getFullYear()} Halstead Security. All rights reserved.
          </p>
          <p className="mt-2 font-sans text-xs text-cream/60 md:mt-0">
            Halstead Security and the Halstead Security shield mark are trademarks of Halstead Security, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
