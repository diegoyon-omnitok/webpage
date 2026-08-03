import type { Metadata } from "next";

// Portal de clientes (contenido gated): NUNCA debe indexarse.
// Este layout aplica noindex a todas las páginas bajo /biblioteca,
// incluidas las client components que no pueden exportar metadata propia.
export const metadata: Metadata = {
  title: "Biblioteca de Aprendizaje",
  robots: { index: false, follow: false },
};

export default function BibliotecaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
