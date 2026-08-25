import Link from "next/link";
import Image from "next/image";
import ClientsBar from "@/components/markets/brasil/sections/ClientsBar";
import { BarChart3, ArrowRight, Clock, EyeOff, Brain, BarChart2 } from "lucide-react";
import DsaAiAgent from "@/components/markets/brasil/sections/DsaAiAgent";
import AnalyticsCarousel from "@/components/markets/brasil/sections/AnalyticsCarousel";
import AnalyticsStats from "@/components/markets/brasil/sections/AnalyticsStats";
import AnalyticsFaq from "@/components/markets/brasil/sections/AnalyticsFaq";
import FinalCTA from "@/components/markets/brasil/sections/FinalCTA";
import IntegrationsSection from "@/components/markets/brasil/sections/IntegrationsSection";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import ProductSchema from "@/components/markets/brasil/sections/ProductSchema";
import { canonicalRoutes } from "@/lib/markets";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export default function BrasilDsaPage() {
  return (
    <>
      <ProductSchema
        name="Omnitok Digital Shelf Analytics"
        description="Monitore preços, estoque, conteúdo e visibilidade digital em varejistas e marketplaces, com um agente de IA que prioriza ações."
        path={canonicalRoutes.brasil.dsa}
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
            <div className="self-start flex flex-col items-start pb-10 lg:pb-14 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#393689]/60 border border-[#7B78CE]/40 mb-5">
                <BarChart3 size={13} className="text-[#A5A3DC]" />
                <span className="text-xs font-semibold text-white">Omnitok DSA</span>
              </div>
              <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Digital Shelf Analytics: monitoramento de preços, estoque e conteúdo com agente de IA
              </h1>
              <p className="mt-5 text-xl text-white/90 leading-relaxed font-medium max-w-xl">
                Monitore preço, estoque, conteúdo e visibilidade. E pergunte ao agente o que está acontecendo e o que fazer.
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-xl">
                O Omnitok DSA combina monitoramento contínuo da execução digital com um agente de IA conectado a milhões de dados em tempo real. Ele não só detecta problemas: diz por que acontecem e o que priorizar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 w-full">
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
                src="/plataforma/digital-shelf-analytics/imagenes-sueltas.png"
                alt="Digital Shelf Analytics — monitoramento de preço, estoque e posicionamento em varejistas"
                title="Omnitok Digital Shelf Analytics — visibilidade da execução digital no ponto de venda online"
                width={1024}
                height={1024}
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
          { label: "Digital Shelf Analytics" },
        ]}
      />

      <section className={`${sectionViewport} py-16 lg:py-20 relative overflow-hidden bg-white`}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#393689" }}>O problema</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Você tem dados, mas não tem respostas
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              As marcas monitoram preços e estoque, mas continuam sem conseguir responder rapidamente por que as coisas mudam, o que priorizar e onde agir primeiro. O problema já não é ter dados. É transformá-los em decisões.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #393689 0%, #FF177B 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: EyeOff,
                  title: "Dashboards que ninguém lê por completo",
                  desc: "Seu time tem acesso aos dados, mas não tem tempo para analisar todos. Os problemas são detectados tarde ou se perdem entre as métricas.",
                },
                {
                  num: "02",
                  icon: Clock,
                  title: "Análise manual que leva dias",
                  desc: "Montar um relatório de execução, comparar preços ou preparar um QBR exige horas de trabalho manual cruzando fontes.",
                },
                {
                  num: "03",
                  icon: Brain,
                  title: "Contexto que se perde entre times",
                  desc: "Os insights ficam na cabeça de quem os encontrou. Sem uma camada que conecte análise com ação, o conhecimento não escala.",
                },
                {
                  num: "04",
                  icon: BarChart2,
                  title: "Dados sem priorização nem recomendação",
                  desc: "Você sabe que há problemas, mas não quais atacar primeiro. Sem priorização automática, tudo parece igualmente urgente.",
                },
              ].map((item) => (
                <div key={item.num} className="relative flex flex-col items-center text-center group h-full">
                  <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 gradient-brand shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:opacity-90">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-brand">{item.num}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug min-h-[4rem] flex items-start justify-center">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed min-h-[4.75rem]">{item.desc}</p>
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


      <DsaAiAgent />

      <AnalyticsCarousel />

      <AnalyticsStats />

      <IntegrationsSection hideTitle />

      <AnalyticsFaq />

      <RelatedLinksSection
        eyebrow="Links relacionados"
        title="Transforme o digital shelf em uma vantagem operacional"
        description="O Digital Shelf Analytics gera mais valor quando se conecta com gestão de conteúdo de produto, conteúdo enriquecido e uma rota comercial clara."
        links={[
          {
            title: "Gestão de conteúdo de produto",
            description: "Centralize as informações que depois você precisa monitorar em varejistas e marketplaces.",
            href: canonicalRoutes.brasil.connect,
            anchor: "Explore o Omnitok PIM",
          },
          {
            title: "Conteúdo enriquecido para e-commerce",
            description: "Melhore páginas de produto e fortaleça a experiência que depois você poderá medir no digital shelf.",
            href: canonicalRoutes.brasil.content,
            anchor: "Ver o Omnitok Content",
          },
          {
            title: "Contato",
            description: "Fale com a Omnitok para revisar o monitoramento de preços, estoque, conteúdo e visibilidade.",
            href: canonicalRoutes.brasil.contacto,
            anchor: "Solicite uma demo",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
