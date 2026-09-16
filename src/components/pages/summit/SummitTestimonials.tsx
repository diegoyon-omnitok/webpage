"use client";

/**
 * Carrusel compacto de testimonios para la landing del Summit.
 * Usa los MISMOS testimonios publicados en el home (`Testimonials`): nombre,
 * cargo, empresa y foto vienen de esa fuente; aquí no se inventa nada.
 *
 * - Avanza solo, lento; se pausa al pasar el cursor, al enfocar o al tocar.
 * - Control manual con flechas y puntos; en táctil se desliza con el dedo
 *   (scroll nativo con snap).
 * - Con `prefers-reduced-motion` no avanza solo ni anima el desplazamiento.
 * - Tarjetas con alto mínimo fijo para que el layout no salte.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/components/sections/Testimonials";
import s from "./SummitLanding.module.css";

const INTERVALO_MS = 7000;
const LARGO_MAX = 210;

/**
 * Recorta la cita en un límite de frase para que la tarjeta sea breve.
 * Es texto literal del testimonio original (solo se corta, no se reescribe).
 */
function extracto(cita: string) {
  const limpia = cita.trim();
  if (limpia.length <= LARGO_MAX) return limpia;
  const frases = limpia.match(/[^.!?]+[.!?]+/g) ?? [limpia];
  let salida = "";
  for (const frase of frases) {
    if (salida && (salida + frase).length > LARGO_MAX) break;
    salida += frase;
  }
  salida = salida.trim();
  return salida.length < limpia.length ? `${salida.replace(/\.+$/, "")}…` : salida;
}

export default function SummitTestimonials() {
  const pistaRef = useRef<HTMLUListElement>(null);
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [menosMovimiento, setMenosMovimiento] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => setMenosMovimiento(consulta.matches);
    aplicar();
    consulta.addEventListener("change", aplicar);
    return () => consulta.removeEventListener("change", aplicar);
  }, []);

  const irA = useCallback(
    (destino: number) => {
      const pista = pistaRef.current;
      if (!pista) return;
      const objetivo = ((destino % total) + total) % total;
      const tarjeta = pista.children[objetivo] as HTMLElement | undefined;
      if (!tarjeta) return;
      pista.scrollTo({
        left: tarjeta.offsetLeft - pista.offsetLeft,
        behavior: menosMovimiento ? "auto" : "smooth",
      });
      setIndice(objetivo);
    },
    [total, menosMovimiento],
  );

  // Avance automático (se detiene en pausa o con menos movimiento).
  useEffect(() => {
    if (pausado || menosMovimiento) return;
    const temporizador = window.setInterval(() => irA(indice + 1), INTERVALO_MS);
    return () => window.clearInterval(temporizador);
  }, [indice, pausado, menosMovimiento, irA]);

  // Sincroniza los puntos cuando la persona desliza con el dedo.
  function alDesplazar() {
    const pista = pistaRef.current;
    if (!pista) return;
    const hijos = Array.from(pista.children) as HTMLElement[];
    const posicion = pista.scrollLeft + pista.offsetLeft;
    let masCercano = 0;
    let distanciaMin = Number.POSITIVE_INFINITY;
    hijos.forEach((hijo, i) => {
      const distancia = Math.abs(hijo.offsetLeft - posicion);
      if (distancia < distanciaMin) {
        distanciaMin = distancia;
        masCercano = i;
      }
    });
    if (masCercano !== indice) setIndice(masCercano);
  }

  const botonControl =
    "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm transition-colors hover:border-primary/40 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  return (
    <section
      aria-labelledby="summit-testimonios-titulo"
      className="bg-[#F7F7FA] py-12 sm:py-16"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
      onTouchStart={() => setPausado(true)}
      onTouchEnd={() => setPausado(false)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="summit-testimonios-titulo" className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Lo que dicen las marcas
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Equipos de ecommerce que ya trabajan con Omnitok.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button type="button" onClick={() => irA(indice - 1)} aria-label="Testimonio anterior" className={botonControl}>
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={() => irA(indice + 1)} aria-label="Testimonio siguiente" className={botonControl}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <ul
          ref={pistaRef}
          onScroll={alDesplazar}
          aria-live="off"
          className={`mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 ${s.noScrollbar}`}
        >
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              aria-label={`Testimonio ${i + 1} de ${total}`}
              className="flex min-h-[240px] w-[86%] flex-shrink-0 snap-start flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:w-[400px] sm:p-6"
            >
              <div className="flex gap-3">
                <Quote size={18} className="mt-0.5 flex-shrink-0 text-accent" aria-hidden />
                <p className="text-sm leading-relaxed text-gray-700">{extracto(t.quote)}</p>
              </div>
              <footer className="mt-5 flex items-center gap-3">
                <Image
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs leading-snug text-gray-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </footer>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Elegir testimonio">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === indice}
              aria-label={`Ir al testimonio ${i + 1}`}
              onClick={() => irA(i)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                i === indice ? "w-6 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
