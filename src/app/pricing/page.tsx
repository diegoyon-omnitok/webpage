import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Planes de Omnitok",
  description:
    "Planes flexibles para marcas de todos los tamaños. Desde startups hasta grandes corporaciones que venden en múltiples retailers de LATAM.",
};

const plans = [
  {
    name: "Starter",
    desc: "Para marcas que están empezando su ejecución digital",
    price: "Consultar",
    highlight: false,
    features: [
      "Hasta 500 SKUs activos",
      "2 retailers conectados",
      "Omnitok Content básico",
      "Omnitok Connect",
      "Soporte por email",
      "Onboarding asistido",
    ],
    notIncluded: ["Digital Shelf Analytics", "Omnitok Assistant", "Multi-país"],
    cta: "Solicitar Demo",
    href: "/es/contacto",
  },
  {
    name: "Growth",
    desc: "Para marcas con operaciones establecidas en múltiples canales",
    price: "Consultar",
    highlight: true,
    badge: "Más popular",
    features: [
      "Hasta 5,000 SKUs activos",
      "6 retailers conectados",
      "Omnitok Content avanzado",
      "Omnitok Connect",
      "Omnitok Assistant",
      "Digital Shelf Analytics",
      "Soporte dedicado en español",
      "Multi-país (hasta 3)",
      "Onboarding premium",
    ],
    notIncluded: [],
    cta: "Solicitar Demo",
    href: "/es/contacto",
  },
  {
    name: "Enterprise",
    desc: "Para grandes marcas con operaciones complejas en LATAM",
    price: "A medida",
    highlight: false,
    features: [
      "SKUs ilimitados",
      "Retailers ilimitados",
      "Plataforma completa",
      "Multi-país sin límite",
      "SLA garantizado",
      "Customer Success Manager",
      "Integraciones personalizadas",
      "Reportes y dashboards a medida",
      "Capacitación para el equipo",
    ],
    notIncluded: [],
    cta: "Hablar con ventas",
    href: "/es/contacto",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Planes que escalan{" "}
            <span className="text-gradient-brand">con tu negocio</span>
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Precios adaptados a la realidad de las marcas en LATAM. Desde las primeras integraciones hasta operaciones masivas multipaís.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden flex flex-col ${
                  plan.highlight
                    ? "border-2 border-primary shadow-card-hover relative"
                    : "border border-gray-100 shadow-card"
                }`}
              >
                {plan.highlight && (
                  <div className="gradient-brand text-center py-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1 bg-white">
                  <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-4">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-2xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.price !== "A medida" && (
                      <span className="text-sm text-gray-400 ml-1">— desde</span>
                    )}
                  </div>

                  <ul className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-3.5 h-3.5 rounded-full border border-gray-200 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`mt-6 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-opacity ${
                      plan.highlight
                        ? "text-white gradient-brand hover:opacity-90"
                        : "text-primary border border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">¿Tienes preguntas sobre el pricing?</h3>
              <p className="text-sm text-gray-500 mt-1">Todos los planes son personalizables. Conversemos sobre tu caso específico.</p>
            </div>
          <Link href="/es/contacto" className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-primary hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">
              <MessageCircle size={16} />
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
