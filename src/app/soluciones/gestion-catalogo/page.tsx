import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Gestión de Catálogo Digital — Centraliza y distribuye",
  description:
    "Elimina el caos de hojas de cálculo y actualizaciones manuales. Centraliza tu catálogo de productos y distribúyelo automáticamente a todos tus retailers.",
};

export default function GestionCatalogoPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet/20 border border-violet/30 mb-5">
            <Database size={13} className="text-violet-light" />
            <span className="text-xs font-semibold text-white">Solución</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Fin al caos de hojas de cálculo{" "}
            <span className="text-gradient-brand">y actualizaciones manuales</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            Centraliza todos los datos de tus productos y distribúyelos automáticamente a cada retailer en su formato exacto. Sin errores, sin retrasos, sin duplicación de trabajo.
          </p>
          <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Ver Demo <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">El problema que resuelve Connect</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "15 hrs", label: "promedio de gestión manual de catálogo por semana" },
              { val: "23%", label: "de errores en catálogos gestionados manualmente" },
              { val: "5 días", label: "promedio para propagar un cambio a todos los retailers" },
            ].map((s) => (
              <div key={s.label} className="bg-error/5 border border-error/10 rounded-xl p-4">
                <p className="text-2xl font-extrabold text-error">{s.val}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-success/5 rounded-xl border border-success/10">
            <p className="text-sm font-semibold text-gray-700">Con Omnitok Connect, las marcas reducen el tiempo de gestión de catálogo en un <span className="text-success font-bold">60%</span> en los primeros 30 días.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para centralizar tu catálogo?</h2>
          <Link href={canonicalRoutes.latam.connect} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white gradient-primary hover:opacity-90 transition-opacity mr-3">
            Ver Omnitok Connect <ArrowRight size={15} />
          </Link>
          <Link href={canonicalRoutes.latam.contacto} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity">
            Conversemos <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
