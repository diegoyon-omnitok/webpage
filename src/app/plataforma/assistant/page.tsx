import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Bot, ArrowRight, Repeat, Folders, XCircle, TrendingDown } from "lucide-react";
import ClientsBar from "@/components/sections/ClientsBar";
import AssistantFeatures from "./AssistantFeatures";
import AssistantStats from "./AssistantStats";
import AssistantFaq from "./AssistantFaq";
import FinalCTA from "@/components/sections/FinalCTA";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { canonicalRoutes } from "@/lib/markets";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export const metadata: Metadata = {
  title: "Asistente de Compra para Ecommerce | Chat y Recomendación con IA",
  description:
    "Ayuda a tus shoppers a elegir mejor con un asistente de compra para ecommerce. Responde preguntas, recomienda productos y mejora la conversión en tus PDP.",
};

export default function AssistantPage() {
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
                <Bot size={13} className="text-accent" />
                <span className="text-xs font-semibold text-white">Omnitok Assistant</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Convierte mejor con un asistente en tus paginas de producto
              </h1>
              <p className="mt-5 text-xl text-white/70 leading-relaxed max-w-xl">
                Implementa un asistente de compra para ecommerce en el momento exacto de la decision.
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-xl">
                Responde dudas, recomienda productos con IA y acompaña al shopper cuando necesita contexto para avanzar hacia la compra.
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
                src="/plataforma/assistant/page-banner-assistant-1-1-scaled.png"
                alt="Omnitok Assistant — IA en el PDP que responde y convierte"
                width={1600}
                height={1000}
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


      <section className={`${sectionViewport} py-16 lg:py-20 relative overflow-hidden bg-white`}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>El problema</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Acompaña al shopper en el momento de decisión
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Cuando el cliente no encuentra ayuda para comparar, entender o elegir, la decisión se frena y la conversión se pierde en la PDP.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: Repeat,
                  title: "El cliente compra sin asistencia",
                  desc: "No hay nadie que responda preguntas ni guíe la decisión, generando incertidumbre en el proceso de compra.",
                },
                {
                  num: "02",
                  icon: Folders,
                  title: "Diferencias entre productos poco claras",
                  desc: "Cuando las opciones no se explican bien, el cliente no logra tomar una decisión informada con confianza.",
                },
                {
                  num: "03",
                  icon: XCircle,
                  title: "Sin ayuda en el momento clave",
                  desc: "El ecommerce no ofrece asistencia en el instante preciso en que el cliente necesita decidir.",
                },
                {
                  num: "04",
                  icon: TrendingDown,
                  title: "Abandono por dudas sin respuesta",
                  desc: "Ante cualquier pregunta sin respuesta, el usuario posterga la compra o abandona el proceso por completo.",
                },
              ].map((item) => (
                <div key={item.num} className="relative flex flex-col items-center text-center group h-full">
                  <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 gradient-brand shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:opacity-90">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-brand">{item.num}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug min-h-[4rem] flex items-start justify-center">
                    {item.title}
                  </h3>
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


      <AssistantFeatures />

      <AssistantStats />

      <IntegrationsSection hideTitle />

      <AssistantFaq />

      <RelatedLinksSection
        eyebrow="Enlaces relacionados"
        title="Responde dudas y recomienda productos con IA"
        description="Un asistente de compra para ecommerce funciona mejor cuando se integra con páginas de producto claras y rutas de conversión bien definidas."
        links={[
          {
            title: "Contenido enriquecido para ecommerce",
            description: "Mejora la calidad de las páginas de producto donde aparece el asistente.",
            href: canonicalRoutes.latam.content,
            anchor: "Ver Omnitok Content",
          },
          {
            title: "Gestión de contenido de producto",
            description: "Centraliza la información que nutre recomendaciones, atributos y respuestas del asistente.",
            href: canonicalRoutes.latam.connect,
            anchor: "Explora Omnitok Connect",
          },
          {
            title: "Contacto",
            description: "Habla con Omnitok para evaluar un asistente virtual para ecommerce en tus PDP.",
            href: canonicalRoutes.latam.contacto,
            anchor: "Habla con ventas",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
