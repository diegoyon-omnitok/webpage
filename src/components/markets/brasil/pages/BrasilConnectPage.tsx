import Link from "next/link";
import Image from "next/image";
import { Package, ArrowRight, Upload, Database, EqualNot, Layers } from "lucide-react";
import ClientsBar from "@/components/markets/brasil/sections/ClientsBar";
import ConnectCarousel from "@/components/markets/brasil/sections/ConnectCarousel";
import ConnectStats from "@/components/markets/brasil/sections/ConnectStats";
import ConnectFaq from "@/components/markets/brasil/sections/ConnectFaq";
import FinalCTA from "@/components/markets/brasil/sections/FinalCTA";
import IntegrationsSection from "@/components/markets/brasil/sections/IntegrationsSection";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import ProductSchema from "@/components/markets/brasil/sections/ProductSchema";
import { canonicalRoutes } from "@/lib/markets";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export default function BrasilConnectPage() {
  return (
    <>
      <ProductSchema
        name="Omnitok PIM"
        description="Centralize, adapte e distribua seu conteúdo de produto para varejistas e marketplaces. Reduza trabalho manual e melhore a consistência entre canais."
        path={canonicalRoutes.brasil.connect}
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6EC1E4]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-6 lg:pt-10 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
            <div className="self-start flex flex-col items-start pb-10 lg:pb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6EC1E4]/15 border border-[#6EC1E4]/40 mb-5">
                <Package size={13} className="text-[#6EC1E4]" />
                <span className="text-xs font-semibold text-white">Omnitok PIM</span>
              </div>
              <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Gestão de conteúdo de produto: centralize e distribua para varejistas e marketplaces
              </h1>
              <p className="mt-5 text-xl text-white/70 leading-relaxed">
                Gerencie conteúdo de produto para varejistas e marketplaces a partir de uma única fonte de verdade.
              </p>
              <p className="mt-4 max-w-xl text-lg text-white/70 leading-relaxed">
                Centralize informações de produto, adapte formatos por canal e acelere a publicação de páginas de produto com mais controle operacional.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href={canonicalRoutes.brasil.contacto} className="w-full sm:w-auto justify-center flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-md">
                  Vamos conversar <ArrowRight size={16} />
                </Link>
                <a href="https://lab.omnitok.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">
                  Diagnóstico gratuito
                </a>
              </div>
            </div>
            <div className="relative flex items-end justify-center lg:justify-end w-full min-w-0 pl-0 lg:pl-2 self-end">
              <Image
                src="/plataforma/connect/page-banner-connect-nobg.png"
                alt="Omnitok PIM — gestão centralizada de conteúdo de produto para varejistas"
                title="Omnitok PIM — distribuição de informações de produto para múltiplos canais digitais"
                width={1600}
                height={1000}
                className="block h-auto w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,30rem)] lg:max-w-[min(100%,48rem)] xl:max-w-[min(100%,54rem)] object-contain object-center lg:object-left-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right lg:[mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
                style={{
                  filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.3))",
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <ClientsBar />

      <SeoBreadcrumbs
        items={[
          { label: "Início", href: canonicalRoutes.brasil.home },
          { label: "Gestão de conteúdo de produto" },
        ]}
      />


      {/* Pain points timeline */}
      <section className={`${sectionViewport} py-16 lg:py-20 relative overflow-hidden bg-white`}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1F87B5" }}>O problema</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Reduza trabalho manual em varejistas e marketplaces
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              O problema não é só cadastrar produtos: é centralizar informações de produto, adaptá-las a cada varejista e manter consistência entre múltiplos canais.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #6EC1E4 0%, #4D4A9D 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: Upload,
                  title: "Processos manuais que não escalam",
                  desc: "Cada varejista exige formatos diferentes. À medida que o catálogo cresce, a operação fica lenta e ineficiente.",
                },
                {
                  num: "02",
                  icon: Database,
                  title: "Informação fragmentada sem controle",
                  desc: "Os dados se dispersam em arquivos e versões diferentes. Sem uma fonte única, as inconsistências entre canais são inevitáveis.",
                },
                {
                  num: "03",
                  icon: EqualNot,
                  title: "Erros frequentes na publicação",
                  desc: "Atributos incompletos e imagens incorretas geram rejeições e retrabalhos que consomem tempo em cada envio ao varejista.",
                },
                {
                  num: "04",
                  icon: Layers,
                  title: "Produto inconsistente entre canais",
                  desc: "O mesmo produto aparece diferente em cada canal, afetando a percepção de marca e a experiência do consumidor.",
                },
              ].map((item) => (
                <div key={item.num} className="relative flex flex-col items-center text-center group h-full">
                  <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 gradient-brand shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:opacity-90">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-brand">{item.num}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug min-h-[4rem] flex items-start justify-center">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed min-h-[5.5rem]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href={canonicalRoutes.brasil.contacto} className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              Vamos conversar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      <ConnectCarousel />

      <ConnectStats />

      <IntegrationsSection hideTitle />

      <ConnectFaq />

      <RelatedLinksSection
        eyebrow="Links relacionados"
        title="Publique conteúdo de produto com mais velocidade e controle"
        description="A gestão de conteúdo de produto gera mais impacto quando se conecta com conteúdo enriquecido, monitoramento do digital shelf e uma conversa comercial clara."
        links={[
          {
            title: "Conteúdo enriquecido para e-commerce",
            description: "Transforme suas informações centralizadas em páginas de produto mais persuasivas e consistentes.",
            href: canonicalRoutes.brasil.content,
            anchor: "Ver o Omnitok Content",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Controle como esse conteúdo é executado em preço, estoque, promoções e visibilidade.",
            href: canonicalRoutes.brasil.dsa,
            anchor: "Explore o Digital Shelf Analytics",
          },
          {
            title: "Contato",
            description: "Fale com o time sobre automação, sindicação e atualização de conteúdo em varejistas.",
            href: canonicalRoutes.brasil.contacto,
            anchor: "Solicite uma demo",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
