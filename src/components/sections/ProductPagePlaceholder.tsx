/** Marcadores visuales hasta que suban las imágenes definitivas (misma forma en todas las páginas de producto). */

export function HeroVisualPlaceholder() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="rounded-2xl border border-white/10 bg-white/[0.04] min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center px-8 py-10"
        aria-hidden
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">Visual principal</span>
        <span className="mt-2 text-sm text-white/25 text-center">Imagen próximamente</span>
      </div>
    </div>
  );
}

export function FeatureVisualPlaceholder() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div
        className="rounded-2xl border border-white/10 bg-white/[0.04] min-h-[200px] sm:min-h-[240px] flex flex-col items-center justify-center px-8 py-10"
        aria-hidden
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">Visual</span>
        <span className="mt-2 text-sm text-white/25 text-center">Imagen próximamente</span>
      </div>
    </div>
  );
}

export function CarouselSlidePlaceholder() {
  return (
    <div
      className="w-full max-w-md min-h-[240px] sm:min-h-[280px] rounded-2xl border border-gray-200/90 bg-white flex flex-col items-center justify-center px-6"
      aria-hidden
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">Visual</span>
      <span className="mt-2 text-sm text-gray-400 text-center">Imagen próximamente</span>
    </div>
  );
}
