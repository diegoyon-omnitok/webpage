"use client";

import { useEffect, useState } from "react";

function PlayIcon({ size, accent }: { size: number; accent: string }) {
  return (
    <span
      className="flex items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill={accent} aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function VideoTutorial({
  moduleName,
  accent,
  src,
}: {
  moduleName: string;
  accent: string;
  src?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Miniatura */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver tutorial de ${moduleName}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
      >
        <span
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${accent} 0%, #211f4b 100%)` }}
        />
        {src ? (
          <video src={src} className="absolute inset-0 h-full w-full object-cover" muted preload="metadata" />
        ) : null}
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <PlayIcon size={64} accent={accent} />
          <span className="text-sm font-semibold text-white/90">Tutorial · {moduleName}</span>
        </span>
      </button>

      {/* Modal ampliado */}
      {open && (
        <div
          className="animate-slide-up fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#1a1838] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full">
              {src ? (
                <video src={src} controls autoPlay className="h-full w-full" />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-3 text-center"
                  style={{ background: `linear-gradient(135deg, ${accent} 0%, #211f4b 100%)` }}
                >
                  <PlayIcon size={84} accent={accent} />
                  <p className="px-6 text-base font-semibold text-white">
                    El video tutorial de {moduleName} se mostrará aquí
                  </p>
                  <p className="text-xs text-white/70">(pendiente de subir)</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
