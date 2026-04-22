import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Package, ArrowRight, Upload, Database, EqualNot, Layers } from "lucide-react";
import ClientsBar from "@/components/sections/ClientsBar";
import ConnectCarousel from "./ConnectCarousel";
import ConnectStats from "./ConnectStats";
import ConnectFaq from "./ConnectFaq";
import FinalCTA from "@/components/sections/FinalCTA";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { canonicalRoutes } from "@/lib/markets";
import { productHeroSection, sectionViewport } from "@/lib/sectionViewport";

export const metadata: Metadata = {
  title: "Gestiona y distribuye tu contenido de producto | Omnitok Connect",
  description:
    "Centraliza, adapta y distribuye tu contenido de producto a retailers y marketplaces. Reduce trabajo manual y mejora la consistencia entre canales.",
};

export default function ConnectPage() {
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
                <Package size={13} className="text-accent" />
                <span className="text-xs font-semibold text-white">Omnitok Connect</span>
              </div>
              <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Centraliza y distribuye informacion de producto en todos tus canales
              </h1>
              <p className="mt-5 text-xl text-white/70 leading-relaxed">
                Gestiona contenido de producto para retailers y marketplaces desde una sola fuente de verdad.
              </p>
              <p className="mt-4 max-w-xl text-lg text-white/70 leading-relaxed">
                Centraliza información de producto, adapta formatos por canal y acelera la publicación de fichas de producto con más control operativo.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href={canonicalRoutes.latam.contacto} className="w-full sm:w-auto justify-center flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-md">
                  Conversemos <ArrowRight size={16} />
                </Link>
                <a href="https://lab.omnitok.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors">
                  Diagnóstico gratuito
                </a>
              </div>
            </div>
            <div className="relative flex items-end justify-center lg:justify-end w-full min-w-0 pl-0 lg:pl-2 self-end">
              <Image
                src="/plataforma/connect/page-banner-connect-nobg.png"
                alt="Omnitok Connect — gestión centralizada de contenido de producto para retailers"
                title="Omnitok Connect — distribución de información de producto a múltiples canales digitales"
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


      {/* Pain points timeline */}
      <section className={`${sectionViewport} py-16 lg:py-20 relative overflow-hidden bg-white`}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF177B" }}>El problema</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Reduce trabajo manual en retailers y marketplaces
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              El problema no es solo cargar productos: es centralizar información de producto, adaptarla a cada retailer y mantener consistencia entre múltiples canales.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: Upload,
                  title: "Procesos manuales que no escalan",
                  desc: "Cada retailer exige formatos distintos. A medida que el catálogo crece, la operación se vuelve lenta e ineficiente.",
                },
                {
                  num: "02",
                  icon: Database,
                  title: "Información fragmentada sin control",
                  desc: "Los datos se dispersan en archivos y versiones distintas. Sin una fuente única, las inconsistencias entre canales son inevitables.",
                },
                {
                  num: "03",
                  icon: EqualNot,
                  title: "Errores frecuentes en publicación",
                  desc: "Atributos incompletos e imágenes incorrectas generan rechazos y reprocesos que consumen tiempo en cada carga al retailer.",
                },
                {
                  num: "04",
                  icon: Layers,
                  title: "Producto inconsistente entre canales",
                  desc: "El mismo producto se ve distinto en cada canal, afectando la percepción de marca y la experiencia del consumidor.",
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
            <Link href={canonicalRoutes.latam.contacto} className="flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg">
              Conversemos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      <ConnectCarousel />

      <ConnectStats />

      <IntegrationsSection hideTitle />

      <ConnectFaq />

      <RelatedLinksSection
        eyebrow="Enlaces relacionados"
        title="Publica contenido de producto con mayor velocidad y control"
        description="La gestión de contenido de producto genera más impacto cuando se conecta con contenido enriquecido, monitoreo del digital shelf y una conversación comercial clara."
        links={[
          {
            title: "Contenido enriquecido para ecommerce",
            description: "Transforma tu información centralizada en fichas de producto más persuasivas y consistentes.",
            href: canonicalRoutes.latam.content,
            anchor: "Ver Omnitok Content",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Controla cómo se ejecuta ese contenido en precio, stock, promociones y visibilidad.",
            href: canonicalRoutes.latam.dsa,
            anchor: "Explora Digital Shelf Analytics",
          },
          {
            title: "Contacto",
            description: "Habla con el equipo sobre automatización, sindicación y actualización de contenido en retailers.",
            href: canonicalRoutes.latam.contacto,
            anchor: "Solicita una demo",
          },
        ]}
      />

      <FinalCTA />
    </>
  );
}
