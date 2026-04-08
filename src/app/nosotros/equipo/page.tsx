import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipo — Omnitok",
  description: "Página en mantenimiento.",
};

export default function EquipoPage() {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Wrench size={36} className="text-white" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Página en mantenimiento</h1>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Estamos trabajando en esta sección. Vuelve pronto para conocer al equipo detrás de Omnitok.
        </p>
        <Link
          href="/es/nosotros"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-gray-900 hover:bg-white/90 transition-colors"
        >
          <ArrowLeft size={16} />
          Volver a Nosotros
        </Link>
      </div>
    </section>
  );
}
