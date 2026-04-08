import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Monitor, Sparkles, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrias — Omnitok para tu categoría",
  description:
    "Omnitok adapta la ejecución digital a los desafíos específicos de cada industria: Consumer Goods, Electrónica, Belleza y Hogar.",
};

const industrias = [
  {
    icon: ShoppingCart,
    title: "Consumer Goods / FMCG",
    desc: "Gestiona catálogos masivos de SKUs en múltiples países con consistencia y velocidad.",
    href: "/industrias/consumer-goods",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Monitor,
    title: "Electrónica y Tecnología",
    desc: "Especificaciones técnicas complejas que deben ser perfectas en cada retailer y actualización.",
    href: "/industrias/electronica",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    icon: Sparkles,
    title: "Cuidado Personal y Belleza",
    desc: "Contenido aspiracional y técnico que transmite la propuesta de valor en el punto digital de venta.",
    href: "/industrias/belleza",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Home,
    title: "Hogar y Mejoramiento",
    desc: "SKUs complejos con múltiples variantes, dimensiones y requisitos técnicos específicos por retailer.",
    href: "/industrias/hogar",
    color: "text-violet",
    bg: "bg-violet/10",
  },
];

export default function IndustriasPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Omnitok para{" "}
            <span className="text-gradient-brand">tu industria</span>
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Cada industria tiene sus propios desafíos de ejecución digital. Omnitok se adapta a los requerimientos específicos de tu categoría.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {industrias.map((ind) => (
              <Link
                key={ind.title}
                href={ind.href}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center mb-5`}>
                  <ind.icon size={24} className={ind.color} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">{ind.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
                <div className={`flex items-center gap-1.5 mt-5 text-sm font-semibold ${ind.color} group-hover:gap-2 transition-all`}>
                  Ver solución para {ind.title.split(" ")[0]} <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
