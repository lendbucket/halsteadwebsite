"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, ArrowRight } from "lucide-react";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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

        {/* Mobile toggle - 44px min touch target */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
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

      {/* Full-screen mobile nav */}
      {mobileOpen && (
        <nav
          className="fixed inset-0 top-[calc(theme(spacing.4)*2+theme(spacing.7))] z-40 flex flex-col bg-cream lg:hidden"
          style={{
            height: "calc(100dvh - 60px)",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
          aria-label="Mobile"
        >
          <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-[44px] items-center rounded-lg px-4 text-lg font-medium transition-colors ${
                    isActive
                      ? "bg-navy/5 text-navy"
                      : "text-navy/80 active:bg-navy/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div
            className="border-t border-navy/10 px-6 py-6"
            style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 24px)" }}
          >
            <Link
              href="/contact"
              className="btn-gold btn-large flex w-full justify-center"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
