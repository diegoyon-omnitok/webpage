import type { Metadata } from "next";
import BrasilBlogIndexPage from "@/components/markets/brasil/pages/BrasilBlogIndexPage";
import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Blog de Ecommerce, Digital Shelf e Varejistas | Omnitok",
  description:
    "Explore conteúdos sobre digital shelf, conteúdo enriquecido, varejistas, marketplaces e execução digital para marcas no Brasil.",
  path: canonicalRoutes.brasil.blog,
  locale: "pt-BR",
  keywords: [
    "blog de ecommerce para marcas",
    "blog de digital shelf",
    "blog de conteúdo enriquecido",
    "blog de varejistas e marketplaces",
  ],
  alternates: {
    es: marketAlternates.blog.latam,
    "en-US": marketAlternates.blog.usa,
    "pt-BR": marketAlternates.blog.brasil,
  },
});

export default function BrasilBlogPage() {
  return <BrasilBlogIndexPage />;
}
