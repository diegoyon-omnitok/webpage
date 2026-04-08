import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Omnitok para Consumer Goods / FMCG en LATAM",
  description:
    "Gestiona catálogos masivos de SKUs en múltiples países y retailers. Omnitok resuelve los desafíos de ejecución digital para marcas de consumo masivo en LATAM.",
};

export default function ConsumerGoodsPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-5">
            <ShoppingCart size={13} className="text-white" />
            <span className="text-xs font-semibold text-white">Consumer Goods / FMCG</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Las marcas de FMCG ya gestionan su{" "}
            <span className="text-gradient-brand">digital shelf con Omnitok</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            Miles de SKUs, múltiples países, decenas de retailers. Omnitok centraliza y automatiza la ejecución digital para marcas de consumo masivo en LATAM.
          </p>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Retos específicos de FMCG en LATAM</h2>
              <div className="space-y-3">
                {[
                  "Catálogos masivos de miles de SKUs que cambian constantemente",
                  "Presencia en Chile, Perú, Colombia, México y Argentina simultáneamente",
                  "Diferentes requisitos de atributos por país y por retailer",
                  "Equipos pequeños gestionando muchos canales manualmente",
                  "Necesidad de lanzar productos nuevos rápidamente en todos los canales",
                  "Falta de visibilidad sobre qué está funcionando y qué no",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-error text-xs">×</span>
                    </div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Cómo Omnitok lo resuelve</h2>
              <div className="space-y-3">
                {[
                  "PIM centralizado que escala con tu catálogo sin límite de SKUs",
                  "Distribución simultánea a todos los países y retailers desde un hub",
                  "Mapeo automático de atributos por país, idioma y formato de retailer",
                  "Automatización que reduce el trabajo manual en más del 60%",
                  "Lanzamiento de nuevos productos en todos los canales en horas, no semanas",
                  "Dashboard de analytics con visibilidad completa por SKU, categoría y retailer",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Caso de éxito: Marca FMCG en Chile</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card mt-6">
            <p className="text-lg font-bold text-success mb-2">+31% conversión en Mercado Libre</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Una marca líder de FMCG optimizó 2,400 PDPs en 3 semanas usando Omnitok Content y eliminó inconsistencias entre Falabella y MercadoLibre. El resultado fue un aumento de 31% en conversión y una reducción del 55% en tiempo de gestión de catálogo.
            </p>
            <Link href="/casos-de-exito/fmcg-chile" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:opacity-80">
              Leer caso completo <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">¿Tu marca de FMCG necesita controlar su digital shelf?</h2>
          <Link href="/es/contacto" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
