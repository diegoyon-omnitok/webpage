import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ClientsBar from "@/components/sections/ClientsBar";
import ContentStats from "./ContentStats";
import ContentCarousel from "./ContentCarousel";
import FaqAccordion from "./FaqAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { canonicalRoutes } from "@/lib/markets";
import { LayoutTemplate, ArrowRight, Repeat, Folders, XCircle, TrendingDown } from "lucide-react";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export const metadata: Metadata = {
  title: "Contenido Enriquecido para Ecommerce y Retailers | Omnitok Content",
  description:
    "Crea y distribuye contenido enriquecido para tus páginas de producto. Mejora fichas de producto, destaca beneficios y aumenta conversión en retailers y marketplaces.",
};

export default function ContentPage() {
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
            <div className="self-start flex flex-col items-start pb-10 lg:pb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
                <LayoutTemplate size={13} className="text-accent" />
                <span className="text-xs font-semibold text-white">Omnitok Content</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gradient-brand">
                Crea y distribuye contenido enriquecido para tus paginas de producto
              </h1>
              <p className="mt-5 text-xl text-white/70 leading-relaxed max-w-xl">
                Mejora la experiencia de compra con contenido enriquecido para ecommerce y retailers
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-xl">
                Diseña páginas de producto más persuasivas, destaca atributos clave y distribuye contenido visual consistente en retailers y marketplaces.
              </p>
              <div className="flex mt-6">
                <Link href={canonicalRoutes.latam.contacto} className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-md">
                  Conversemos <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative flex items-end justify-center lg:justify-end w-full min-w-0 pl-0 lg:pl-2 self-end">
              <Image
                src="/plataforma/content/omnitok-content-hero.png"
                alt="Omnitok Content — PDPs y contenido de producto en retailers"
                width={1600}
                height={1000}
                className="block h-auto w-full max-w-[min(100%,32rem)] sm:max-w-[min(100%,36rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] object-contain object-left-bottom lg:translate-x-5 xl:translate-x-8 2xl:translate-x-12 origin-center lg:origin-right"
                style={{ filter: "drop-shadow(0 24px 48px rgba(77,74,157,0.5))" }}
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
              Mejora tus fichas de producto con contenido que convierte
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Cuando una PDP solo cumple con un formato básico, pierde capacidad para explicar beneficios, resolver dudas y empujar la conversión.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: Repeat,
                  title: "PDPs sin identidad de marca",
                  desc: "Plantillas estándar del retailer hacen que todos los productos se vean iguales y pierdan diferenciación frente al consumidor.",
                },
                {
                  num: "02",
                  icon: Folders,
                  title: "Información incompleta o poco clara",
                  desc: "Descripciones cortas, atributos faltantes e imágenes insuficientes impiden que el consumidor entienda el valor del producto.",
                },
                {
                  num: "03",
                  icon: XCircle,
                  title: "Sin contenido que impulse la decisión",
                  desc: "Sin elementos que resuelvan dudas o destaquen beneficios, el consumidor abandona la ficha antes de comprar.",
                },
                {
                  num: "04",
                  icon: TrendingDown,
                  title: "Experiencia inconsistente entre canales",
                  desc: "El contenido varía entre retailers, generando una experiencia fragmentada que debilita la percepción de marca.",
                },
              ].map((item) => (
                <div key={item.num} className="relative flex flex-col items-center text-center group h-full">
                  <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 gradient-brand shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:opacity-90">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 text-gradient-brand">{item.num}</span>
                  {/* Alturas mínimas para que el párrafo inicie alineado entre columnas */}
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
            <Link href={canonicalRoutes.latam.contacto} className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              Conversemos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      <ContentCarousel />

      <ContentStats />

      <IntegrationsSection hideTitle />

      <FaqAccordion />

      <RelatedLinksSection
        eyebrow="Enlaces relacionados"
        title="Lleva contenido enriquecido a retailers y marketplaces"
        description="El contenido enriquecido funciona mejor cuando se conecta con gestión de contenido de producto, monitoreo del digital shelf y una vía clara de conversión."
        links={[
          {
            title: "Gestión de contenido de producto",
            description: "Centraliza y distribuye la información que luego se transforma en contenido enriquecido.",
            href: canonicalRoutes.latam.connect,
            anchor: "Explora Omnitok Connect",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Mide precio, stock, visibilidad y calidad del contenido en cada retailer y marketplace.",
            href: canonicalRoutes.latam.dsa,
            anchor: "Conoce Digital Shelf Analytics",
          },
          {
            title: "Habla con Omnitok",
            description: "Solicita una conversación para revisar tus páginas de producto y oportunidades de conversión.",
            href: canonicalRoutes.latam.contacto,
            anchor: "Habla con nuestro equipo",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
