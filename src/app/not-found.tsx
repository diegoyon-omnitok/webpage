import Link from "next/link";

// 404 global bilingüe: se renderiza para cualquier ruta inexistente
// (incluye los notFound() del catch-all LATAM). Mantiene al visitante
// dentro del sitio con enlaces a los destinos principales de cada mercado.
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden gradient-hero px-6 py-16">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/75">
          La página que buscas no existe o fue movida.
          <span className="mt-1 block text-base text-white/55">
            The page you are looking for does not exist or has moved.
          </span>
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/es"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white gradient-brand shadow-lg transition-opacity hover:opacity-90"
          >
            Ir al inicio (Español)
          </Link>
          <Link
            href="/en-us"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Go to US site (English)
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/es/digital-shelf-analytics" className="text-white/70 underline-offset-4 hover:text-white hover:underline">
            Digital Shelf Analytics
          </Link>
          <Link href="/es/contenido-enriquecido" className="text-white/70 underline-offset-4 hover:text-white hover:underline">
            Contenido enriquecido
          </Link>
          <Link href="/es/blog" className="text-white/70 underline-offset-4 hover:text-white hover:underline">
            Blog
          </Link>
          <Link href="/es/contacto" className="text-white/70 underline-offset-4 hover:text-white hover:underline">
            Contacto
          </Link>
        </div>
      </div>
    </main>
  );
}
