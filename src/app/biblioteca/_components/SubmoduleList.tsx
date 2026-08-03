"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import VideoTutorial from "./VideoTutorial";
import type { SubModule } from "../content";

export default function SubmoduleList({
  submodules,
  accent,
}: {
  submodules: SubModule[];
  accent: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      {submodules.map((sm, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={sm.name} className={i > 0 ? "border-t border-gray-100" : ""}>
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-gray-50"
            >
              <span className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: accent }}
                />
                <span className="font-semibold text-gray-900">{sm.name}</span>
              </span>
              <ChevronDown
                size={18}
                className={`flex-none text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen ? (
              <div className="animate-slide-up px-5 pb-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                  {/* Texto en pasos (izquierda) */}
                  <div>
                    <p className="text-sm leading-relaxed text-gray-600">{sm.description}</p>
                    <ol className="mt-4 space-y-2.5">
                      {sm.steps.map((step, k) => (
                        <li key={k} className="flex gap-3 text-sm text-gray-700">
                          <span
                            className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-bold text-white"
                            style={{ background: accent }}
                          >
                            {k + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  {/* Video (derecha) */}
                  <div>
                    <VideoTutorial moduleName={sm.name} accent={accent} src={sm.videoSrc} />
                    <p className="mt-2 text-center text-xs text-gray-400">
                      Toca el video para ampliarlo
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
