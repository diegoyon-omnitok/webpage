import { SITE_URL } from "@/lib/markets";

type ProductSchemaProps = {
  name: string;
  description: string;
  path: string;
  locale: "es" | "en-US";
};

/**
 * JSON-LD SoftwareApplication para páginas de producto.
 * Sin precio ni ratings: solo nombre, categoría, descripción y publisher,
 * alineado con la política de claims de Omnitok.
 */
export default function ProductSchema({ name, description, path, locale }: ProductSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: "Omnitok",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
