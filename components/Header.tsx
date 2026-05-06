"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "/plans", label: "Plans" },
  { href: "/features", label: "Features" },
  { href: "/dealer", label: "Become a Dealer" },
  { href: "/white-label", label: "White-Label" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-navy" strokeWidth={2.5} />
          <span className="font-serif text-2xl font-bold text-navy">
            Halstead
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-navy/80 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-sm">
            Get a Quote
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-navy/10 bg-cream lg:hidden">
          <div className="container-wide flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-base font-medium text-navy/80 hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gold mt-2 self-start"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
