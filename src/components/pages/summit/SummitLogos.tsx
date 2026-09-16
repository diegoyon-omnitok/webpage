"use client";

/**
 * Barra de logos de clientes bajo el hero de la landing del Summit, con el
 * mismo tratamiento que la barra del home (`ClientsBar`): logos en gris
 * oscuro que toman color al pasar el cursor, movimiento continuo y lento.
 * Reutiliza la MISMA lista de marcas de `ClientsBar`: no se agregan ni se
 * escriben nombres a mano. Sin animación si el sistema pide menos movimiento.
 */

import Image from "next/image";
import { clients } from "@/components/sections/ClientsBar";
import s from "./SummitLanding.module.css";

export default function SummitLogos() {
  return (
    <section aria-label="Clientes de Omnitok" className="overflow-hidden bg-white pb-8 pt-6">
      <div className={`relative ${s.marqueeWrap}`}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        {/* Dos copias de la lista: la segunda cierra el bucle sin salto. */}
        <ul className={s.marquee}>
          {[0, 1].map((copia) =>
            clients.map((cliente) => (
              <li
                key={`${copia}-${cliente.name}`}
                aria-hidden={copia === 1 ? true : undefined}
                className={`mr-12 flex h-14 w-[140px] flex-shrink-0 items-center justify-center sm:mr-14 ${
                  copia === 1 ? s.dup : ""
                }`}
              >
                <Image
                  src={cliente.src}
                  alt={copia === 0 ? `${cliente.name}, cliente de Omnitok` : ""}
                  title={cliente.name}
                  width={140}
                  height={56}
                  className={`${cliente.tall ? "max-h-16" : cliente.shiftUp ? "max-h-12" : "max-h-10"} ${
                    cliente.shiftUp ? "-translate-y-[5px]" : ""
                  } w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
