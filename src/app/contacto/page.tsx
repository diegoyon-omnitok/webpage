import type { Metadata } from "next";
import { Mail, Zap, ShieldCheck, Users } from "lucide-react";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import RelatedLinksSection from "@/components/seo/RelatedLinksSection";
import HubSpotFormEmbed from "@/components/ui/HubSpotFormEmbed";
import { hubspotForms } from "@/lib/hubspot-forms";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Contacto — Omnitok",
  description:
    "Habla con el equipo de Omnitok y conoce cómo mejorar la ejecución digital, el contenido y la visibilidad de tu marca en retailers y marketplaces.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Habla con nuestro equipo
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Solicita una demo de Omnitok y conversemos sobre ejecución digital, contenido de
            producto y visibilidad digital para retailers y marketplaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Inicio", href: canonicalRoutes.latam.home },
          { label: "Contacto" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulario */}
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(77,74,157,0.12)] p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              <HubSpotFormEmbed config={hubspotForms.latamContact} />
            </div>

            {/* Panel de marca */}
            <div className="relative rounded-2xl overflow-hidden p-8 lg:p-10" style={{ background: "linear-gradient(135deg, #4D4A9D 0%, #2D2B5F 100%)" }}>
              {/* Decoraciones */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

              <div className="relative space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">Conversemos</h2>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Nuestro equipo está listo para ayudarte a potenciar tu presencia digital en retailers y marketplaces.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "hola@omnitok.com", href: "mailto:hola@omnitok.com" },
                    { icon: Zap, label: "Tiempo de respuesta", value: "Te respondemos a la brevedad", href: null },
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
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Por qué Omnitok</p>
                  {[
                    { icon: Users, text: "Más de 50 marcas líderes confían en nosotros" },
                    { icon: ShieldCheck, text: "Integración directa con los principales retailers de LATAM" },
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
        eyebrow="Paginas clave"
        title="Explora las soluciones antes de hablar con ventas"
        description="Si llegaste a contacto por interés comercial, estas páginas te ayudan a entender dónde Omnitok genera más impacto sin competir con la intención transaccional de esta URL."
        links={[
          {
            title: "Contenido enriquecido para ecommerce",
            description: "Mejora fichas de producto y distribuye contenido visual en retailers y marketplaces.",
            href: canonicalRoutes.latam.content,
            anchor: "Ver Omnitok Content",
          },
          {
            title: "Gestión de contenido de producto",
            description: "Centraliza información de producto y publica con menos fricción en múltiples canales.",
            href: canonicalRoutes.latam.connect,
            anchor: "Conoce Omnitok Connect",
          },
          {
            title: "Digital Shelf Analytics",
            description: "Mide precio, stock, contenido y visibilidad digital en todos tus retailers.",
            href: canonicalRoutes.latam.dsa,
            anchor: "Explora Digital Shelf Analytics",
          },
        ]}
      />
    </>
  );
}
