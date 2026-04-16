import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ClientsBar from "@/components/sections/ClientsBar";
import { BarChart3, ArrowRight, Clock, EyeOff, Brain, BarChart2 } from "lucide-react";
import DsaAiAgent from "./DsaAiAgent";
import AnalyticsCarousel from "./AnalyticsCarousel";
import AnalyticsStats from "./AnalyticsStats";
import AnalyticsFaq from "./AnalyticsFaq";
import FinalCTA from "@/components/sections/FinalCTA";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { canonicalRoutes } from "@/lib/markets";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export const metadata: Metadata = {
  title: "Digital Shelf Analytics para Marcas | Monitorea precios, stock y contenido",
  description:
    "Monitorea precios, stock, contenido y visibilidad digital en retailers y marketplaces. Detecta quiebres de ejecución y toma decisiones con Digital Shelf Analytics.",
};

export default function AnalyticsPage() {
  return (
    <>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
                <BarChart3 size={13} className="text-accent" />
                <span className="text-xs font-semibold text-white">Digital Shelf Analytics</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Monitoreo + IA: convierte datos del digital shelf en decisiones
              </h1>
              <p className="mt-5 text-xl text-white/90 leading-relaxed font-medium max-w-xl">
                Monitorea precio, stock, contenido y visibilidad. Y pregúntale a la IA qué está pasando y qué hacer.
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-xl">
                Omnitok DSA combina monitoreo continuo de ejecución digital con un agente de IA conectado a millones de datos en tiempo real. No solo detecta problemas, te dice por qué ocurren y qué priorizar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 w-full">
                <Link href={canonicalRoutes.latam.contacto} className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-md">
                  Conversemos <ArrowRight size={16} />
                </Link>
                <a href="https://lab.omnitok.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">
                  Diagnóstico gratuito
                </a>
              </div>
            </div>
            <div className="relative flex items-end justify-center lg:justify-end w-full min-w-0 pl-0 lg:pl-2 self-end">
              <Image
                src="/plataforma/digital-shelf-analytics/imagenes-sueltas.png"
                alt="Digital Shelf Analytics — monitoreo de precio, stock y posicionamiento en retailers"
                title="Omnitok Digital Shelf Analytics — visibilidad de ejecución digital en el punto de venta online"
                width={1024}
                height={1024}
                className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-left-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right"
                style={{
                  filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.5))",
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
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
          { label: "Inicio", href: canonicalRoutes.latam.home },
          { label: "Digital Shelf Analytics" },
        ]}
      />

      <section className={`${sectionViewport} py-16 lg:py-20 relative overflow-hidden bg-white`}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>El problema</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Tienes datos, pero no tienes respuestas
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Las marcas monitorean precios y stock, pero siguen sin poder responder rápidamente por qué cambian las cosas, qué priorizar y dónde actuar primero. El problema ya no es tener datos. Es convertirlos en decisiones.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: EyeOff,
                  title: "Dashboards que nadie lee completos",
                  desc: "Tu equipo tiene acceso a datos, pero no tiene tiempo para analizarlos todos. Los problemas se detectan tarde o se pierden entre métricas.",
                },
                {
                  num: "02",
                  icon: Clock,
                  title: "Análisis manual que toma días",
                  desc: "Armar un reporte de ejecución, comparar precios o preparar un QBR requiere horas de trabajo manual cruzando fuentes.",
                },
                {
                  num: "03",
                  icon: Brain,
                  title: "Contexto que se pierde entre equipos",
                  desc: "Los insights quedan en la cabeza de quien los encontró. Sin una capa que conecte análisis con acción, el conocimiento no escala.",
                },
                {
                  num: "04",
                  icon: BarChart2,
                  title: "Datos sin priorización ni recomendación",
                  desc: "Sabes que hay problemas, pero no cuáles atacar primero. Sin priorización automática, todo parece igual de urgente.",
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
            <Link href={canonicalRoutes.latam.contacto} className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              Conversemos <ArrowRight size={16} />
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
        eyebrow="Enlaces relacionados"
        title="Convierte el digital shelf en una ventaja operativa"
        description="Digital Shelf Analytics genera más valor cuando se conecta con gestión de contenido de producto, contenido enriquecido y una ruta comercial clara."
        links={[
          {
            title: "Gestión de contenido de producto",
            description: "Centraliza la información que luego necesitas monitorear en retailers y marketplaces.",
            href: canonicalRoutes.latam.connect,
            anchor: "Explora Omnitok Connect",
          },
          {
            title: "Contenido enriquecido para ecommerce",
            description: "Mejora fichas de producto y fortalece la experiencia que después podrás medir en el digital shelf.",
            href: canonicalRoutes.latam.content,
            anchor: "Ver Omnitok Content",
          },
          {
            title: "Contacto",
            description: "Habla con Omnitok para revisar monitoreo de precios, stock, contenido y visibilidad.",
            href: canonicalRoutes.latam.contacto,
            anchor: "Solicita una demo",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
