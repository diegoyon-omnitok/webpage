"use client";

/**
 * ════════════════════════════════════════════════════════════════════════════
 *  /es/summit — Landing del eCommerce Innovation Summit 2026 (CCS)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  Experiencia CERRADA de conversión: la persona llega escaneando el QR del
 *  stand (casi siempre desde el celular) y el único objetivo es que agende una
 *  reunión con Julián Portilla.
 *
 *  Orden (principios de landing SaaS de alta conversión):
 *    1. Hero: titular corto de beneficio, dolor → solución, 3 beneficios, CTA.
 *    2. Barra de logos de clientes bajo el hero (como en el home) — confianza.
 *    3. Problemáticas detectadas (línea breve, misma lista del home).
 *    3b. Cómo ayuda Omnitok (DSA · PIM · Content) — beneficios, no features.
 *    4. CTA repetido.
 *    5. Testimonios reales en carrusel compacto.
 *    6. Cierre: invitación + calendario de Julián embebido (la conversión).
 *
 *  - Sin navbar, footer ni WhatsApp (ver `layout/ShellFrame.tsx`).
 *  - Encabezado mínimo: solo el logo, sin enlace. No hay salidas.
 *  - Todos los CTA hacen scroll suave al calendario (#agenda).
 *
 *  Fuentes de contenido (nada inventado):
 *  - Logos de clientes: lista de `sections/ClientsBar` (home LATAM).
 *  - Testimonios: lista de `sections/Testimonials` (home LATAM).
 *
 *  El calendario es el HubSpot Meetings de Julián embebido en
 *  `summit/SummitAgenda.tsx` (link en `summit/config.ts`). No se toca.
 *
 *  Página NO LISTADA: fuera de menú y sitemap, con noindex/nofollow desde el
 *  catch-all de /es.
 * ════════════════════════════════════════════════════════════════════════════
 */

import Image from "next/image";
import { BarChart3, CalendarDays, CheckCircle2, LayoutTemplate, Package } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";
import SummitAgenda from "./summit/SummitAgenda";
import SummitLogos from "./summit/SummitLogos";
import SummitProblems from "./summit/SummitProblems";
import SummitTestimonials from "./summit/SummitTestimonials";

/* ── Contenido ─────────────────────────────────────────────────────────── */

const BENEFICIOS = ["Detecta oportunidades.", "Corrige tu ejecución.", "Convierte mejor."];

/** Colores oficiales por solución (Brand Kit): DSA índigo, PIM celeste, Content magenta. */
const SOLUCIONES = [
  {
    nombre: "Omnitok DSA",
    icon: BarChart3,
    color: "#393689",
    texto: "Monitorea precio, disponibilidad, posicionamiento y calidad de contenido en cada retailer.",
  },
  {
    nombre: "Omnitok PIM",
    icon: Package,
    color: "#6EC1E4",
    texto: "Centraliza la información de producto y la adapta al formato requerido por cada canal.",
  },
  {
    nombre: "Omnitok Content",
    icon: LayoutTemplate,
    color: "#FF177B",
    texto: "Crea y activa contenido enriquecido dentro de las páginas de producto.",
  },
] as const;

/* ── Estilos compartidos ───────────────────────────────────────────────── */

const CTA =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_28px_-10px_rgba(255,23,123,0.7)] transition-colors hover:bg-[#E0156E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const TARJETA =
  "rounded-2xl border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]";

/* ══════════════════════════════════════════════════════════════════════════
   PÁGINA
   ══════════════════════════════════════════════════════════════════════════ */

export default function LatamSummitPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* ─────────────────── ENCABEZADO MÍNIMO (solo logo) ─────────────────── */}
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <Image
            src="/omnitok-logo.svg"
            alt="Omnitok"
            width={200}
            height={52}
            priority
            className="h-9 w-auto object-contain sm:h-10 [filter:brightness(0)_saturate(100%)_invert(28%)_sepia(60%)_saturate(600%)_hue-rotate(220deg)_brightness(85%)]"
          />
        </div>
      </header>

      {/* ─────────────────────────────── HERO ─────────────────────────────── */}
      <section aria-labelledby="summit-hero-titulo" className="relative overflow-hidden gradient-hero text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-4 pb-14 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 sm:text-sm">
            Digital Shelf Execution
          </p>
          <h1
            id="summit-hero-titulo"
            className="mt-4 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Mejora la <span className="text-gradient-brand">ejecución digital</span> de tu marca
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            ¿Tus productos se ven distintos en cada retailer? Precios fuera de rango, quiebres de
            stock y fichas incompletas te hacen perder ventas. Omnitok monitorea cómo se ven,
            centraliza su información y activa contenido enriquecido desde una sola plataforma.
          </p>

          <ul
            className="mx-auto mt-6 flex max-w-2xl flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8"
            aria-label="Beneficios"
          >
            {BENEFICIOS.map((beneficio) => (
              <li key={beneficio} className="flex items-center gap-2.5 text-base font-semibold text-white">
                <CheckCircle2 size={20} className="flex-shrink-0 text-gradient-brand" aria-hidden />
                {beneficio}
              </li>
            ))}
          </ul>

          <a href="#agenda" className={`${CTA} mt-8 w-full sm:w-auto`}>
            <CalendarDays size={18} aria-hidden />
            Agenda una reunión
          </a>
        </div>
      </section>

      {/* ───────────────────────── MARCAS QUE CONFÍAN ─────────────────────── */}
      <SummitLogos />

      {/* ─────────────────────── PROBLEMÁTICAS DETECTADAS ─────────────────── */}
      <SummitProblems />

      {/* ───────────────────────── CÓMO AYUDA OMNITOK ─────────────────────── */}
      <section aria-labelledby="summit-soluciones-titulo" className="bg-[#F7F7FA] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="summit-soluciones-titulo" className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Cómo ayuda Omnitok a tu marca
            </h2>
            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Tres soluciones que trabajan juntas sobre tus páginas de producto en retailers y marketplaces.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {SOLUCIONES.map((solucion) => (
              <article key={solucion.nombre} className={`${TARJETA} flex flex-col p-6`}>
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${solucion.color}1A`, color: solucion.color }}
                  aria-hidden
                >
                  <solucion.icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{solucion.nombre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-[15px]">{solucion.texto}</p>
                <span
                  aria-hidden
                  className="mt-6 block h-1 w-10 rounded-full"
                  style={{ backgroundColor: solucion.color }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRODUCTO EN ACCIÓN ─────────────────────── */}
      <section aria-label="Agenda una reunión" className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a href="#agenda" className={`${CTA} w-full sm:w-auto`}>
              <CalendarDays size={18} aria-hidden />
              Agenda una reunión
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TESTIMONIOS ──────────────────────────── */}
      <SummitTestimonials />

      {/* ───────────────────── CIERRE + AGENDA DE JULIÁN ──────────────────── */}
      <section
        id="agenda"
        aria-labelledby="summit-cta-titulo"
        className="scroll-mt-4 border-t border-gray-100 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 id="summit-cta-titulo" className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Conversemos sobre la ejecución digital de tu marca
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              Agenda una reunión con nuestro equipo y descubre oportunidades para mejorar la presencia
              de tus productos en cada retailer.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">
              Agenda directamente con Julián Portilla
            </p>
          </div>

          {/* HubSpot Meetings de Julián — integración intacta */}
          <SummitAgenda />
        </div>
      </section>

      {/* ───────────────────── PIE MÍNIMO (solo legal) ────────────────────── */}
      <footer className="border-t border-gray-100 bg-white py-6 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Omnitok ·{" "}
          <a
            href={canonicalRoutes.latam.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-gray-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Política de privacidad
          </a>
        </p>
      </footer>
    </div>
  );
}
