/**
 * Ruta heredada `/recursos`.
 *
 * El proxy redirige `/recursos` → `/es/recursos` (ver `exactRedirects` en
 * `src/lib/markets.ts`), así que en producción esta ruta normalmente no se
 * alcanza. Se mantiene renderizando la MISMA biblioteca para que no exista una
 * versión distinta del contenido si alguna vez se llega directo.
 *
 * La página real vive en `src/components/pages/LatamRecursosPage.tsx`.
 */

import type { Metadata } from "next";
import LatamRecursosPage from "@/components/pages/LatamRecursosPage";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Recursos de eCommerce, PDP y Digital Shelf | Omnitok",
  description:
    "Descubre ebooks, guías, estudios y análisis de Omnitok sobre eCommerce, Product Experience, PDP, Digital Shelf y retail digital.",
  path: canonicalRoutes.latam.recursos,
  locale: "es",
});

export default function RecursosPage() {
  return <LatamRecursosPage />;
}
