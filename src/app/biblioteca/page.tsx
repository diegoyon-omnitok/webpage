import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Lightbulb, BookOpen, Boxes, BarChart3, Play } from "lucide-react";
import { readSession, KC_COOKIE, displayName } from "@/lib/kc-auth";
import { MODULES } from "./content";
import SubmoduleList from "./_components/SubmoduleList";

export default async function BibliotecaPage() {
  const store = await cookies();
  const user = readSession(store.get(KC_COOKIE)?.value);
  if (!user) redirect("/biblioteca/login");
  const name = displayName(user);

  return (
    <main className="min-h-screen bg-[#F6F7FB]">
      {/* Barra superior */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#211f4b]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Image
            src="/omnitok-logo-portal.png"
            alt="Omnitok"
            width={1000}
            height={169}
            className="h-8 w-auto rounded-md"
            priority
          />
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-white/70 sm:inline">
              Hola, <strong className="text-white">{name}</strong>
            </span>
            <a
              href="/api/kc/logout"
              className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Salir
            </a>
          </div>
        </div>
      </header>

      {/* Hero (mismo estilo que el inicio del sitio) */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Patrón de grid de fondo */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glows de marca */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />

        {/* Decoraciones flotantes a los lados (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
          {/* Izquierda */}
          <div className="kc-float absolute left-[6%] top-[23%]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-sm">
              <BookOpen size={32} className="text-white/80" />
            </div>
          </div>
          <div className="kc-float-rev absolute bottom-[15%] left-[8%]" style={{ animationDelay: "0.8s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-sm">
              <Boxes size={26} className="text-white/80" />
            </div>
          </div>
          <span className="kc-twinkle absolute left-[3.5%] top-[56%] text-3xl text-accent">✦</span>

          {/* Derecha */}
          <div className="kc-float-rev absolute right-[6%] top-[27%]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-sm">
              <BarChart3 size={32} className="text-white/80" />
            </div>
          </div>
          <div className="kc-float absolute bottom-[17%] right-[8%]" style={{ animationDelay: "1.2s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-sm">
              <Play size={24} className="text-white/80" />
            </div>
          </div>
          <span className="kc-twinkle absolute right-[4%] top-[19%] text-2xl text-accent" style={{ animationDelay: "1.5s" }}>✦</span>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="animate-slide-up flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-medium text-white/80">Centro de aprendizaje</span>
            </div>
            <h1 className="max-w-3xl text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Biblioteca de <span className="text-gradient-brand">Aprendizaje</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Aquí tu equipo aprende a dominar las herramientas de Omnitok de punta a punta.
              Reunimos guías paso a paso y video tutoriales de Content, Connect y Digital Shelf
              Analytics, con el detalle de cómo configurar cada módulo, interpretar sus datos y
              convertirlos en decisiones. La meta es clara: que ejecutes con autonomía y
              consistencia en cada retailer y marketplace, sin depender de soporte para avanzar.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="space-y-8">
          {MODULES.map((m, i) => (
            <article
              key={m.key}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="p-7 sm:p-9">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                  style={{ background: m.accent }}
                >
                  Módulo {i + 1}
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-gray-900">{m.name}</h2>
                <p className="mt-1 font-semibold" style={{ color: m.accent }}>
                  {m.tagline}
                </p>
                <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">{m.intro}</p>
                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">
                    Sub-módulos
                  </p>
                  <SubmoduleList submodules={m.submodules} accent={m.accent} />
                </div>
              </div>
              {m.suggestions.length > 0 ? (
                <div className="border-t border-gray-100 bg-[#FAFAFD] px-7 py-6 sm:px-9">
                  <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                    <Lightbulb size={14} style={{ color: m.accent }} /> Sugerencias
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-3">
                    {m.suggestions.map((s, k) => (
                      <li key={k} className="flex gap-2.5 text-sm text-gray-600">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
                          style={{ background: m.accent }}
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white py-8 text-center text-xs text-gray-400">
        Biblioteca de Aprendizaje · Omnitok · Contenido exclusivo para clientes
      </footer>
    </main>
  );
}
