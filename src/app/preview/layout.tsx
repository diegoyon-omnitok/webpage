import type { Metadata } from "next";

// Las páginas de /preview son mockups internos: nunca deben indexarse.
// Este layout cubre también las páginas client ("use client") que no
// pueden exportar metadata propia, como /preview/plataforma-demo.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
