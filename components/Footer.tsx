import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/seo";

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
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-cream"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 hover:text-cream"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone.replace("+1-", "(").replace(/(\d{3})-(\d{3})-(\d{4})/, "$1) $2-$3")}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Corpus Christi, TX
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/solutions/home-security" className="text-cream/80 hover:text-cream">Home Security</Link></li>
              <li><Link href="/solutions/business-security" className="text-cream/80 hover:text-cream">Business</Link></li>
              <li><Link href="/solutions/multifamily" className="text-cream/80 hover:text-cream">Multifamily</Link></li>
              <li><Link href="/solutions/short-term-rental" className="text-cream/80 hover:text-cream">Short-Term Rentals</Link></li>
              <li><Link href="/solutions/construction-site" className="text-cream/80 hover:text-cream">Construction</Link></li>
              <li><Link href="/industries" className="text-cream/80 hover:text-cream">All Industries →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              For Customers
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/plans" className="text-cream/80 hover:text-cream">Plans &amp; Pricing</Link></li>
              <li><Link href="/features" className="text-cream/80 hover:text-cream">Features</Link></li>
              <li><Link href="/compare" className="text-cream/80 hover:text-cream">Compare</Link></li>
              <li><Link href="/resources" className="text-cream/80 hover:text-cream">Resources</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-cream">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              For Operators
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/dealer" className="text-cream/80 hover:text-cream">Become a Dealer</Link></li>
              <li><Link href="/dealer/faq" className="text-cream/80 hover:text-cream">Dealer FAQ</Link></li>
              <li><Link href="/dealer/apply" className="text-cream/80 hover:text-cream">Apply Now</Link></li>
              <li><Link href="/white-label" className="text-cream/80 hover:text-cream">White-Label</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/states/texas" className="text-cream/80 hover:text-cream">Texas</Link></li>
              <li><Link href="/cities/corpus-christi" className="text-cream/80 hover:text-cream">Corpus Christi</Link></li>
              <li><Link href="/cities/houston" className="text-cream/80 hover:text-cream">Houston</Link></li>
              <li><Link href="/cities/san-antonio" className="text-cream/80 hover:text-cream">San Antonio</Link></li>
              <li><Link href="/cities/austin" className="text-cream/80 hover:text-cream">Austin</Link></li>
              <li><Link href="/cities/dallas" className="text-cream/80 hover:text-cream">Dallas</Link></li>
              <li><Link href="/about" className="text-cream/80 hover:text-cream">About Halstead</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cream/60">
            &copy; {year} Halstead Security, LLC. All rights reserved.
          </p>
          <p className="text-xs text-cream/60">
            Halstead Security and the Halstead Security shield mark are
            trademarks of Halstead Security, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
