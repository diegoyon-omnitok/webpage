import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NosotrosMap from "./NosotrosMap";
import NosotrosOrigen from "./NosotrosOrigen";
import NosotrosQueHacemos from "./NosotrosQueHacemos";
import NosotrosComoTrabajamos from "./NosotrosComoTrabajamos";
import FloatingContactForm from "@/components/ui/FloatingContactForm";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Nosotros | Omnitok",
  description:
    "Conoce a Omnitok, la plataforma que ayuda a marcas a mejorar su ejecución digital, contenido y visibilidad en retailers y marketplaces.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Conoce a Omnitok
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Somos la plataforma que ayuda a marcas en LATAM a mejorar su ejecución digital,
            contenido de producto y visibilidad en retailers y marketplaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 40" fill="none" className="block w-full"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Inicio", href: canonicalRoutes.latam.home },
          { label: "Nosotros" },
        ]}
      />

      {/* ── NUEVAS SECCIONES (agregadas) ── */}
      <NosotrosOrigen />
      <NosotrosQueHacemos />
      <NosotrosComoTrabajamos />
      {/* ── FIN NUEVAS SECCIONES ── */}



      <NosotrosMap />

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Quieres conocer cómo trabaja Omnitok con marcas en LATAM?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
              Conversemos <ArrowRight size={16} />
            </Link>
            <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinksSection
        eyebrow="Explora Omnitok"
        title="Conoce la plataforma detrás de nuestra historia"
        description="La página Nosotros refuerza confianza de marca. Desde aquí puedes profundizar en las soluciones principales y luego hablar con el equipo."
        links={[
          {
            title: "Gestión de contenido de producto",
            description: "Descubre cómo Omnitok centraliza información de producto para retailers y marketplaces.",
            href: canonicalRoutes.latam.connect,
            anchor: "Explora Omnitok Connect",
          },
          {
            title: "Contenido enriquecido para ecommerce",
            description: "Descubre cómo Omnitok mejora las páginas de producto en retailers.",
            href: canonicalRoutes.latam.content,
            anchor: "Ver Omnitok Content",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Entiende cómo monitoreamos ejecución digital, visibilidad y conversión.",
            href: canonicalRoutes.latam.dsa,
            anchor: "Explora Digital Shelf Analytics",
          },
        ]}
      />

      {/* Formulario flotante */}
      <FloatingContactForm />
    </>
  );
}
