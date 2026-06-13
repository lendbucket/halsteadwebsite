import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedItem = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function RelatedContent({
  heading = "Keep exploring",
  items,
}: {
  heading?: string;
  items: RelatedItem[];
}) {
  return (
    <section className="bg-cream-200 py-20">
      <div className="container-wide">
        <p className="eyebrow text-center">Related</p>
        <h2 className="heading-section mt-3 text-center text-balance">
          {heading}
        </h2>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-navy/10 bg-white p-6 transition-all hover:border-navy/30 hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-gold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {item.description}
              </p>
              <p className="mt-4 inline-flex items-center text-sm font-semibold text-navy group-hover:text-gold">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
