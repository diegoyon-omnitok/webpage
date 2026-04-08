import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  title: string;
  description: string;
  href: string;
  anchor: string;
};

type RelatedLinksSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  links: RelatedLink[];
};

export default function RelatedLinksSection({
  eyebrow,
  title,
  description,
  links,
}: RelatedLinksSectionProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <h3 className="text-lg font-bold text-gray-900">{link.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{link.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {link.anchor}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
