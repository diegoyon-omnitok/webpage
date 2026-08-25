import Link from "next/link";
import Image from "next/image";
import ClientsBar from "@/components/markets/brasil/sections/ClientsBar";
import ContentStats from "@/components/markets/brasil/sections/ContentStats";
import ContentCarousel from "@/components/markets/brasil/sections/ContentCarousel";
import FaqAccordion from "@/components/markets/brasil/sections/FaqAccordion";
import FinalCTA from "@/components/markets/brasil/sections/FinalCTA";
import IntegrationsSection from "@/components/markets/brasil/sections/IntegrationsSection";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import ProductSchema from "@/components/markets/brasil/sections/ProductSchema";
import { canonicalRoutes } from "@/lib/markets";
import { LayoutTemplate, ArrowRight, Repeat, Folders, XCircle, TrendingDown } from "lucide-react";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export default function BrasilContentPage() {
  return (
    <>
      <ProductSchema
        name="Omnitok Content"
        description="Crie e distribua conteúdo enriquecido para suas páginas de produto. Melhore páginas de produto, destaque benefícios e aumente a conversão em varejistas e marketplaces."
        path={canonicalRoutes.brasil.content}
      />
      <section className={`${productHeroSection} pt-24 pb-0`}>
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-6 lg:pt-10 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
            <div className="self-start flex flex-col items-start pb-10 lg:pb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
                <LayoutTemplate size={13} className="text-accent" />
                <span className="text-xs font-semibold text-white">Omnitok Content</span>
              </div>
              <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Crie e distribua conteúdo enriquecido para suas páginas de produto
              </h1>
              <p className="mt-5 text-xl text-white/70 leading-relaxed max-w-xl">
                Melhore a experiência de compra com conteúdo enriquecido para e-commerce e varejistas
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-xl">
                Crie páginas de produto mais persuasivas, destaque atributos-chave e distribua conteúdo visual consistente em varejistas e marketplaces.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href={canonicalRoutes.brasil.contacto} className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-md">
                  Vamos conversar <ArrowRight size={16} />
                </Link>
                <a href="https://lab.omnitok.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">
                  Diagnóstico gratuito
                </a>
              </div>
            </div>
            <div className="relative flex items-end justify-center lg:justify-end w-full min-w-0 pl-0 lg:pl-2 self-end">
              <Image
                src="/plataforma/content/omnitok-content-hero.png"
                alt="Omnitok Content — conteúdo enriquecido para PDPs em varejistas e marketplaces"
                title="Omnitok Content — plataforma de conteúdo enriquecido para e-commerce"
                width={1600}
                height={1000}
                className="block h-auto w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,30rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-center lg:object-left-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right lg:[mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
                style={{
                  filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.5))",
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ClientsBar />

      <SeoBreadcrumbs
        items={[
          { label: "Início", href: canonicalRoutes.brasil.home },
          { label: "Conteúdo enriquecido" },
        ]}
      />


      <section className={`${sectionViewport} py-16 lg:py-20 relative overflow-hidden bg-white`}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>O problema</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Melhore suas páginas de produto com conteúdo que converte
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Quando uma PDP cumpre apenas o formato básico, ela perde capacidade de explicar benefícios, resolver dúvidas e impulsionar a conversão.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: Repeat,
                  title: "PDPs sem identidade de marca",
                  desc: "Templates padrão do varejista fazem com que todos os produtos pareçam iguais e percam diferenciação diante do consumidor.",
                },
                {
                  num: "02",
                  icon: Folders,
                  title: "Informação incompleta ou pouco clara",
                  desc: "Descrições curtas, atributos faltando e imagens insuficientes impedem que o consumidor entenda o valor do produto.",
                },
                {
                  num: "03",
                  icon: XCircle,
                  title: "Sem conteúdo que impulsione a decisão",
                  desc: "Sem elementos que resolvam dúvidas ou destaquem benefícios, o consumidor abandona a página antes de comprar.",
                },
                {
                  num: "04",
                  icon: TrendingDown,
                  title: "Experiência inconsistente entre canais",
                  desc: "O conteúdo varia entre varejistas, gerando uma experiência fragmentada que enfraquece a percepção de marca.",
                },
              ].map((item) => (
                <div key={item.num} className="relative flex flex-col items-center text-center group h-full">
                  <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 gradient-brand shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:opacity-90">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-brand">{item.num}</span>
                  {/* Alturas mínimas para que o parágrafo comece alinhado entre colunas */}
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug lg:min-h-[4rem] flex items-start justify-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed lg:min-h-[4.75rem]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>


          <div className="flex justify-center mt-10">
            <Link href={canonicalRoutes.brasil.contacto} className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              Vamos conversar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      <ContentCarousel />

      <ContentStats />

      <IntegrationsSection hideTitle />

      <FaqAccordion />

      <RelatedLinksSection
        eyebrow="Links relacionados"
        title="Leve conteúdo enriquecido a varejistas e marketplaces"
        description="O conteúdo enriquecido funciona melhor quando se conecta com gestão de conteúdo de produto, monitoramento do digital shelf e um caminho claro de conversão."
        links={[
          {
            title: "Gestão de conteúdo de produto",
            description: "Centralize e distribua as informações que depois se transformam em conteúdo enriquecido.",
            href: canonicalRoutes.brasil.connect,
            anchor: "Explore o Omnitok PIM",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Meça preço, estoque, visibilidade e qualidade do conteúdo em cada varejista e marketplace.",
            href: canonicalRoutes.brasil.dsa,
            anchor: "Conheça o Digital Shelf Analytics",
          },
          {
            title: "Fale com a Omnitok",
            description: "Solicite uma conversa para revisar suas páginas de produto e oportunidades de conversão.",
            href: canonicalRoutes.brasil.contacto,
            anchor: "Fale com nosso time",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
