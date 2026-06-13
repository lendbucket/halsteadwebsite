import Link from "next/link";
import { ShieldCheck, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <ShieldCheck className="h-7 w-7 text-gold" strokeWidth={2.5} />
              <span className="text-2xl font-bold tracking-tight text-cream">
                Halstead
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Professional home security, installed in your neighborhood.
              Heritage trade brand for the modern home.
            </p>
            <div className="mt-6 space-y-3 text-sm text-cream/70">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-cream"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.footer.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              For Customers
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.footer.customers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              For Operators
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.footer.operators.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.footer.areas.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cream/60">
            &copy; {year} Halstead Security, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/60">
            {siteConfig.footer.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cream">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
