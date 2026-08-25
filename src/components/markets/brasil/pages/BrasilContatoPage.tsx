import { Mail, Zap, ShieldCheck, Users } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import HubSpotFormEmbedPtBr from "@/components/markets/brasil/sections/HubSpotFormEmbedPtBr";
import { hubspotForms } from "@/lib/hubspot-forms";
import { canonicalRoutes } from "@/lib/markets";

export default function BrasilContatoPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Fale com a nossa equipe
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Solicite uma demo da Omnitok e vamos conversar sobre execução digital, conteúdo de
            produto e visibilidade digital para varejistas e marketplaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Início", href: canonicalRoutes.brasil.home },
          { label: "Contato" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulario */}
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(77,74,157,0.12)] p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Envie uma mensagem para nós</h2>
              <HubSpotFormEmbedPtBr config={hubspotForms.brasilContact} />
            </div>

            {/* Panel de marca */}
            <div className="relative rounded-2xl overflow-hidden p-8 lg:p-10" style={{ background: "linear-gradient(135deg, #4D4A9D 0%, #2D2B5F 100%)" }}>
              {/* Decoraciones */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

              <div className="relative space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">Vamos conversar</h2>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Nossa equipe está pronta para ajudar você a potencializar sua presença digital em varejistas e marketplaces.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "hola@omnitok.com", href: "mailto:hola@omnitok.com" },
                    { icon: Zap, label: "Tempo de resposta", value: "Respondemos o quanto antes", href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 rounded-xl bg-white/10 backdrop-blur-sm p-4">
                      <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-white hover:text-white/80 transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-white/90">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Por que Omnitok</p>
                  {[
                    { icon: Users, text: "Mais de 50 marcas líderes confiam em nós" },
                    { icon: ShieldCheck, text: "Integração direta com os principais varejistas da América Latina" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon size={16} className="text-emerald-400 flex-shrink-0" />
                      <p className="text-sm text-white/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinksSection
        eyebrow="Páginas-chave"
        title="Explore as soluções antes de falar com vendas"
        description="Se você chegou ao contato por interesse comercial, estas páginas ajudam a entender onde a Omnitok gera mais impacto sem competir com a intenção transacional desta URL."
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
    </>
  );
}
