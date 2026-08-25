import { SITE_URL } from "@/lib/markets";

type ProductSchemaProps = {
  name: string;
  description: string;
  path: string;
};

/**
 * JSON-LD SoftwareApplication para páginas de produto do mercado Brasil.
 * Sem preço nem ratings: apenas nome, categoria, descrição e publisher,
 * alinhado à política de claims da Omnitok.
 */
export default function ProductSchema({ name, description, path }: ProductSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
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
