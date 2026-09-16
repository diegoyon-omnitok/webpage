"use client";

/**
 * Problemáticas que Omnitok detecta en las marcas, en una línea breve.
 * Reutiliza la MISMA lista de problemas del home (`sections/ProblemSection`),
 * mostrando solo el título de cada una: en escritorio como línea horizontal
 * con seis hitos; en celular como línea vertical. Sin textos largos.
 */

import { problems } from "@/components/sections/ProblemSection";

export default function SummitProblems() {
  return (
    <section aria-labelledby="summit-problemas-titulo" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent sm:text-sm">
            Lo que detectamos hoy
          </p>
          <h2 id="summit-problemas-titulo" className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Seis problemas que le cuestan ventas a tu marca
          </h2>
        </div>

        {/* Línea de hitos: horizontal en escritorio, vertical en celular */}
        <ol className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {/* Línea horizontal (solo escritorio), a la altura de los íconos */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden h-px bg-gray-200 lg:block"
          />

          {problems.map((problema) => {
            const Icon = problema.icon;
            return (
              <li key={problema.number} className="relative flex items-start gap-3 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-[1] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                  <Icon size={20} aria-hidden />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                    {problema.number}
                  </span>
                </span>
                <p className="pt-3 text-sm font-semibold leading-snug text-gray-800 lg:pt-0">
                  {problema.title}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
