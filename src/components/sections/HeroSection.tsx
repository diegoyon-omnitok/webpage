import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

export default function HeroSection() {
  return (
    <section className="relative flex-1 min-h-0 w-full gradient-hero flex flex-col overflow-x-hidden pt-10 sm:pt-12 pb-0">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col min-h-0 pt-4 sm:pt-6 lg:pt-8 pb-0">
        <div className="grid flex-1 min-h-0 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 lg:items-stretch">
          {/* Left column */}
          <div className="animate-slide-up self-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-white/80">
                Ejecución digital para marcas en LATAM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
              Mejora la{" "}
              <span className="text-gradient-brand">ejecución digital</span>{" "}
              de tu marca en retailers y marketplaces
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              Omnitok ayuda a marcas que venden en retailers y marketplaces a centralizar
              contenido de producto, mejorar páginas de producto y ganar visibilidad
              sobre su ejecución digital.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={canonicalRoutes.latam.contacto}
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
              >
                Conversemos
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://lab.omnitok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors"
              >
                Diagnóstico gratuito
              </a>
            </div>

          </div>

          {/* Right column — Portada image (tamaño amplio, corrida a la derecha para el copy) */}
          <div className="relative animate-fade-in flex items-end justify-center lg:justify-end w-full min-w-0 pl-0 lg:pl-2 self-end">
            <Image
              src="/Imagen principal.png"
              alt="Omnitok: experiencia de compra y ejecución en el digital shelf en retailers"
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
  );
}
