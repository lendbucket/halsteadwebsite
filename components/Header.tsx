"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/features", label: "Features" },
  { href: "/plans", label: "Plans" },
  { href: "/compare", label: "Compare" },
  { href: "/dealer", label: "Become a Dealer" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-navy/10 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-cream"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Halstead Security home"
        >
          <ShieldCheck className="h-7 w-7 text-navy" strokeWidth={2.5} />
          <span className="text-2xl font-bold tracking-tight text-navy">
            Halstead
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-navy/5 text-navy"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-gold ml-4">
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-navy/10 bg-cream lg:hidden"
          aria-label="Mobile"
        >
          <div className="container-wide flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gold mt-4 self-start"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
