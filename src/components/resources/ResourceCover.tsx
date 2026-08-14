import Image from "next/image";
import { resourceTypeLabels, type Resource } from "@/data/resources";

/**
 * Portada del recurso.
 *
 * · Si el recurso tiene `cover`, se usa esa imagen (optimizada por next/image,
 *   que ya sirve WebP/AVIF y lazy loading por defecto).
 * · Si no la tiene, se genera una portada con la identidad de Omnitok. Así se
 *   puede publicar un recurso sin esperar el diseño de la portada real.
 */

type ResourceCoverProps = {
  resource: Resource;
  /** "card" = tarjeta de la biblioteca · "hero" = landing individual */
  variant?: "card" | "hero";
  priority?: boolean;
  /**
   * Oculta el título dentro de la portada. Se usa cuando el título ya aparece
   * junto a la portada (tarjeta horizontal de recursos relacionados), para no
   * repetirlo dos veces.
   */
  showTitle?: boolean;
};

export default function ResourceCover({
  resource,
  variant = "card",
  priority = false,
  showTitle = true,
}: ResourceCoverProps) {
  const isHero = variant === "hero";

  if (resource.cover) {
    // Apaisadas ("wide" y "page") ocupan toda la columna; las verticales, no.
    const landscape = resource.coverAspect === "wide" || resource.coverAspect === "page";
    const ratio =
      resource.coverAspect === "page"
        ? { width: 1600, height: 1200 }
        : { width: 1920, height: 1080 };
    return (
      <Image
        src={resource.cover}
        alt={resource.coverAlt ?? `Portada de ${resource.title}`}
        width={landscape ? ratio.width : isHero ? 900 : 640}
        height={landscape ? ratio.height : isHero ? 1160 : 820}
        sizes={
          landscape
            ? "(max-width: 1024px) 92vw, 620px"
            : isHero
              ? "(max-width: 1024px) 90vw, 320px"
              : "(max-width: 640px) 90vw, 360px"
        }
        priority={priority}
        /**
         * Las portadas "page" son la primera página de un PDF: recortarlas
         * corta el titular o el pie con el logo. Se muestran completas y
         * centradas; el resto sigue rellenando el contenedor.
         */
        className={
          resource.coverAspect === "page"
            ? "h-full w-full bg-gray-50 object-contain"
            : "h-full w-full object-cover"
        }
      />
    );
  }

  // Sin título la portada se usa en una columna estrecha: menos aire y menos
  // elementos, para que el pie no choque con la bajada.
  const dense = !showTitle;

  return (
    <div
      aria-hidden
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden ${
        dense ? "p-5" : "p-6 lg:p-8"
      }`}
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 30% 88%, rgba(255,106,170,0.30) 0%, rgba(255,106,170,0) 62%), linear-gradient(158deg, #3E3A83 0%, #4D4A9D 48%, #2C2860 100%)",
      }}
    >
      <div>
        <span
          className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
          style={{ background: "#FF6AAA" }}
        >
          {resourceTypeLabels[resource.type]}
        </span>
        {showTitle ? (
          <p
            className={`mt-5 font-bold leading-tight text-white ${
              isHero ? "text-2xl lg:text-[28px]" : "text-lg"
            }`}
          >
            {resource.title}
          </p>
        ) : null}
        {resource.coverSubtitle ? (
          <>
            <span
              className={`block h-0.5 w-10 rounded-full ${dense ? "mt-3.5" : "mt-4"}`}
              style={{ background: "rgba(255,106,170,0.7)" }}
            />
            <p
              className={`mt-3.5 leading-relaxed text-white/65 ${
                dense
                  ? "line-clamp-4 text-[13px]"
                  : isHero
                    ? "text-[15px]"
                    : "line-clamp-3 text-[13px]"
              }`}
            >
              {resource.coverSubtitle}
            </p>
          </>
        ) : null}
      </div>

      {/* Pie de portada: identidad de marca, sin datos inventados */}
      <div className={`flex items-center justify-between gap-3 ${dense ? "mt-5" : ""}`}>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-8 rounded-full" style={{ background: "#FF6AAA" }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
            Omnitok
          </span>
        </div>
        {/* En columna estrecha se omite: no cabe sin romper en dos líneas. */}
        {dense ? null : (
          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
            Banco de recursos
          </span>
        )}
      </div>
    </div>
  );
}
