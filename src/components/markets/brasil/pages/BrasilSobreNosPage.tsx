import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SobreNosMap from "@/components/markets/brasil/sections/SobreNosMap";
import SobreNosOrigem from "@/components/markets/brasil/sections/SobreNosOrigem";
import SobreNosOQueFazemos from "@/components/markets/brasil/sections/SobreNosOQueFazemos";
import SobreNosComoTrabalhamos from "@/components/markets/brasil/sections/SobreNosComoTrabalhamos";
import FloatingContactFormPtBr from "@/components/markets/brasil/sections/FloatingContactFormPtBr";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { canonicalRoutes } from "@/lib/markets";

export default function BrasilSobreNosPage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Conheça a Omnitok
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Somos a plataforma que ajuda marcas na América Latina a melhorar sua execução digital,
            conteúdo de produto e visibilidade em varejistas e marketplaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 40" fill="none" className="block w-full"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Início", href: canonicalRoutes.brasil.home },
          { label: "Sobre nós" },
        ]}
      />

      {/* ── NUEVAS SECCIONES (agregadas) ── */}
      <SobreNosOrigem />
      <SobreNosOQueFazemos />
      <SobreNosComoTrabalhamos />
      {/* ── FIN NUEVAS SECCIONES ── */}



      <SobreNosMap />

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Quer saber como a Omnitok trabalha com marcas na América Latina?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <Link href={canonicalRoutes.brasil.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
              Vamos conversar <ArrowRight size={16} />
            </Link>
            <Link href={canonicalRoutes.brasil.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinksSection
        eyebrow="Páginas-chave"
        title="Explore as soluções antes de falar com vendas"
        description="Estas páginas ajudam a entender onde a Omnitok gera mais impacto antes de falar com a equipe."
        links={[
          {
            title: "Conteúdo enriquecido para ecommerce",
            description: "Melhore páginas de produto e distribua conteúdo visual em varejistas e marketplaces.",
            href: canonicalRoutes.brasil.content,
            anchor: "Ver Omnitok Content",
          },
          {
            title: "Gestão de conteúdo de produto",
            description: "Centralize informações de produto e publique com menos fricção em múltiplos canais.",
            href: canonicalRoutes.brasil.connect,
            anchor: "Conheça o Omnitok PIM",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Meça preço, estoque, conteúdo e visibilidade digital em todos os seus varejistas.",
            href: canonicalRoutes.brasil.dsa,
            anchor: "Explore o Digital Shelf Analytics",
          },
        ]}
      />

      {/* Formulario flotante */}
      <FloatingContactFormPtBr />
    </>
  );
}
