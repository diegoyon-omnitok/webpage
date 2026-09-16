"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Rutas que se sirven SIN navbar, footer ni widget de WhatsApp: landings
 * cerradas de conversión (la persona llega por QR y no debe tener salidas).
 * El resto del sitio no cambia.
 */
const BARE_PATHS = ["/es/summit"];

type ShellFrameProps = {
  navbar: ReactNode;
  footer: ReactNode;
  widget: ReactNode;
  children: ReactNode;
};

export default function ShellFrame({ navbar, footer, widget, children }: ShellFrameProps) {
  const pathname = usePathname();
  const bare = BARE_PATHS.includes(pathname.replace(/\/$/, ""));

  if (bare) {
    return <main>{children}</main>;
  }

  return (
    <>
      {navbar}
      <main>{children}</main>
      {footer}
      {widget}
    </>
  );
}
