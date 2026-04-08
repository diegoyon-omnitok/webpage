import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/markets";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SeoBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function SeoBreadcrumbs({ items }: SeoBreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight size={14} className="text-gray-300" /> : null}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-700">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
