"use client";

import {
  TrendingUp,
  FileWarning,
  LayoutTemplate,
  Store,
  MessageCircle,
  Sparkles,
  Layers,
} from "lucide-react";

const pasos = [
  {
    icon: TrendingUp,
    titulo: "De la analítica a la acción",
    desc: "Pasamos de medir el ecommerce a permitir que las marcas actúen directamente sobre él, cerrando la brecha entre dato e impacto.",
    year: "El inicio",
  },
  {
    icon: FileWarning,
    titulo: "El problema del contenido",
    desc: "Las marcas perdían ventas por fichas desactualizadas, inconsistentes o incompletas en los retailers. Ese era el punto de entrada.",
    year: "El diagnóstico",
  },
  {
    icon: LayoutTemplate,
    titulo: "Omnitok Content como núcleo",
    desc: "Construimos una solución para gestionar, enriquecer y sincronizar el contenido de producto en múltiples plataformas desde un solo lugar.",
    year: "La solución",
  },
  {
    icon: Store,
    titulo: "Ejecución en el canal",
    desc: "Integramos directamente con los sistemas de los retailers para garantizar que el contenido correcto llegue al lugar correcto, siempre.",
    year: "La integración",
  },
  {
    icon: MessageCircle,
    titulo: "Interacción con el consumidor",
    desc: "Agregamos asistencia en vivo e IA conversacional dentro del PDP para acompañar al shopper en el momento de la decisión.",
    year: "La conexión",
  },
  {
    icon: Sparkles,
    titulo: "Evolución hacia IA",
    desc: "Incorporamos inteligencia artificial para automatizar tareas, personalizar experiencias y escalar la ejecución sin aumentar el equipo.",
    year: "La evolución",
  },
  {
    icon: Layers,
    titulo: "Plataforma integrada",
    desc: "Hoy Omnitok es un ecosistema completo: contenido, analítica, conexión con retailers e IA, todo en una sola plataforma.",
    year: "Hoy",
  },
];

export default function NosotrosQueHacemos() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}
          >
            <span className="text-xs font-semibold text-white">Nuestra evolución</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Esto es lo que hacemos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Construimos un sistema que permite a las marcas pasar de entender el ecommerce a controlarlo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical central */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 md:left-1/2 md:-translate-x-px"
            style={{ background: "linear-gradient(180deg,#FF177B 0%,#4D4A9D 100%)" }}
          />

          <div className="space-y-10">
            {pasos.map((paso, i) => {
              const Icon = paso.icon;
              const isRight = i % 2 === 0;

              return (
                <div
                  key={paso.titulo}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Nodo central */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-50"
                      style={{ background: "linear-gradient(135deg,#FF177B 0%,#4D4A9D 100%)" }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Tarjeta — alterna izquierda/derecha en desktop, siempre a la derecha en mobile */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isRight ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 group">
                      {/* Etiqueta de etapa */}
                      <span
                        className="inline-block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#FF177B" }}
                      >
                        {paso.year}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                        {paso.titulo}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {paso.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
