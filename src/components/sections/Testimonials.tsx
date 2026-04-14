"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const testimonials = [
  {
    quote:
      "Elegimos trabajar con Omnitok porque se adaptaron perfectamente a nuestras necesidades, ofreciendo una excelente relación calidad-precio. Con su apoyo, logramos aumentar la visibilidad de nuestra marca, identificamos oportunidades para mejorar la experiencia del cliente y optimizamos nuestras inversiones, lo que resultó en un crecimiento significativo de los ingresos.",
    name: "Diego Ibarra",
    role: "AMS Marketplaces Analytics & Program Manager",
    company: "HP Inc",
    photo: "/testimonials/diego-ibarra.png",
  },
  {
    quote:
      "Con el apoyo de Omnitok logramos ordenar y agilizar significativamente el proceso de gestión de contenido ecommerce, facilitando la carga, actualización y gestión de más de 80 SKUs en distintas categorías. Dimos un salto importante en diseño, haciendo que los inpage sean mucho más interactivos y atractivos para nuestros clientes.",
    name: "Matias Sabaj",
    role: "Product Manager Electro",
    company: "TCL Electronics",
    photo: "/testimonials/matias-sabaj.png",
  },
  { empty: true, name: "", role: "", company: "", photo: "", quote: "" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Manchas suaves — primary Omnitok (#4D4A9D / primary-dark) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <div
          className="absolute -top-28 -right-20 w-[min(100vw,440px)] h-[min(100vw,440px)] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at 35% 40%, rgba(77,74,157,0.2) 0%, rgba(77,74,157,0.07) 42%, transparent 68%)",
          }}
        />
        <div
          className="absolute top-[42%] -left-36 w-[380px] h-[380px] -translate-y-1/2 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle at 55% 50%, rgba(59,56,128,0.16) 0%, rgba(77,74,157,0.06) 48%, transparent 72%)",
          }}
        />
        <div
          className="absolute -bottom-32 left-[20%] w-[340px] h-[340px] rounded-full blur-[95px]"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(77,74,157,0.14) 0%, transparent 65%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,74,157,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(77,74,157,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Testimonios de marcas que ya usan Omnitok
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Equipos de digital commerce en LATAM que transformaron su visibilidad y conversión con Omnitok.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card + side arrows */}
          <div className="relative flex items-center gap-8">

            <button
              type="button"
              onClick={prev}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-primary border border-gray-200 bg-white transition-all duration-200 hover:border-primary/30 hover:bg-gray-50 hover:-translate-x-2 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

          <div className="flex-1 flex flex-col min-h-[280px] rounded-2xl border border-gray-100 shadow-card bg-white overflow-hidden transition-all duration-300 hover:scale-[1.08] hover:shadow-modal cursor-default">
            <div
              className="h-0.5 w-full shrink-0 rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,23,123,0.92) 0%, #A78BFA 48%, rgba(77,74,157,0.85) 100%)",
              }}
              aria-hidden
            />
            <div className="p-8 flex flex-col flex-1 justify-between">
            {t.empty ? (
              <div className="flex flex-col items-center justify-center gap-4 flex-1 py-8">
                <div className="w-12 h-12 rounded-full bg-gray-200/80" />
                <div className="space-y-2 w-56">
                  <div className="h-2.5 rounded-full bg-gray-200/80" />
                  <div className="h-2.5 rounded-full bg-gray-200/80 w-4/5" />
                  <div className="h-2.5 rounded-full bg-gray-200/80 w-3/5" />
                </div>
                <p className="text-[11px] text-gray-300 font-medium tracking-widest uppercase">Próximamente</p>
              </div>
            ) : (
              <>
                <div>
                  <Quote size={28} className="mb-4" style={{ color: "#4D4A9D" }} />
                  <p className="text-base text-gray-600 leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                    <p className="text-xs font-semibold" style={{ color: "#FF177B" }}>{t.company}</p>
                  </div>
                </div>
              </>
            )}
            </div>
          </div>

            <button
              type="button"
              onClick={next}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:opacity-90 hover:translate-x-2 shadow-sm gradient-brand"
            >
              <ChevronRight size={18} />
            </button>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background: i === current ? "#FF177B" : "rgba(77,74,157,0.2)",
                }}
              />
            ))}
          </div>

          <div className="flex justify-center mt-10 lg:mt-12">
            <Link
              href={canonicalRoutes.latam.contacto}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
            >
              Conversemos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
