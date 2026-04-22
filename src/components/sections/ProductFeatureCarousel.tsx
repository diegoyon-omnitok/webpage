"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CarouselSlidePlaceholder } from "@/components/sections/ProductPagePlaceholder";

export type ProductFeatureCarouselItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  descLead?: string;
  accent: string;
  dot: string;
  imageSrc?: string;
  imageAlt?: string;
  customVisual?: React.ReactNode;
  /** Disable hover scale/transform on this card's visual — useful for dense mockups where scaling blurs text/images. */
  disableHoverScale?: boolean;
};

type ProductFeatureCarouselProps = {
  sectionTitle: string;
  sectionSubtitle: string;
  labels: readonly string[];
  features: ProductFeatureCarouselItem[];
};

function FeatureVisualCell({
  f,
  isFirstBlock,
}: {
  f: ProductFeatureCarouselItem;
  isFirstBlock?: boolean;
}) {
  const compactInpage = Boolean(isFirstBlock && f.imageSrc);

  return (
    <div className="flex h-full w-full items-center justify-center p-3 sm:p-6 lg:min-h-[380px] lg:p-10 xl:p-12 min-h-[220px]">
      {f.customVisual ? (
        <div className={`w-full ${f.disableHoverScale ? "" : "motion-safe:transition-transform duration-300 lg:group-hover:scale-[1.02]"}`}>
          {f.customVisual}
        </div>
      ) : (
      <div
        className={
          compactInpage
            ? "w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[32rem] mx-auto flex items-center justify-center"
            : "w-full max-w-full flex items-center justify-center"
        }
      >
        {f.imageSrc ? (
          <Image
            src={f.imageSrc}
            alt={f.imageAlt ?? ""}
            title={f.imageAlt ?? ""}
            width={1600}
            height={1000}
            className={
              compactInpage
                ? "h-auto w-full object-contain object-center drop-shadow-[0_14px_36px_rgba(77,74,157,0.16)] motion-safe:transition-[filter,transform] duration-300 lg:group-hover:scale-105"
                : "h-auto w-full max-w-full object-contain object-center motion-safe:transition-transform duration-300 lg:group-hover:scale-105"
            }
            sizes={compactInpage ? "(max-width: 1024px) 90vw, 480px" : "(max-width: 1024px) 100vw, 45vw"}
          />
        ) : (
          <div className="w-full max-w-sm scale-95 motion-safe:transition-transform duration-300 lg:max-w-md lg:group-hover:scale-100">
            <CarouselSlidePlaceholder />
          </div>
        )}
      </div>
      )}
    </div>
  );
}

/**
 * Mismo bloque que “¿Por qué elegir Omnitok Content?”: tarjetas con franja superior,
 * zigzag texto/visual e icono + etiqueta 01 — …
 */
export default function ProductFeatureCarousel({
  sectionTitle,
  sectionSubtitle,
  labels,
  features,
}: ProductFeatureCarouselProps) {
  return (
    <section className="py-12 lg:py-20 bg-gray-50 box-border w-full">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">{sectionTitle}</h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">{sectionSubtitle}</p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {features.map((f, i) => {
            const Icon = f.icon;
            const reverse = i % 2 === 1;
            const label = labels[i] ?? "";
            const textOrderClass = reverse ? "order-1 lg:order-2" : "order-1";
            const visualOrderClass = reverse ? "order-2 lg:order-1" : "order-2";

            const textCell = (
              <div key="text" className={`flex min-h-0 min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-10 xl:p-12 ${textOrderClass}`}>
                <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center shadow-md`}
                  >
                    <Icon size={26} className="text-white" strokeWidth={2} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: f.dot }}>
                    {String(i + 1).padStart(2, "0")}{label ? ` — ${label}` : ""}
                  </p>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3">{f.title}</h3>
                {f.descLead ? (
                  <p className="text-base font-semibold text-gray-800 leading-snug mb-3">{f.descLead}</p>
                ) : null}
                <p className="text-base text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            );

            const visualCell = (
              <div key="visual" className={`min-h-0 min-w-0 overflow-hidden ${visualOrderClass}`}>
                <FeatureVisualCell f={f} isFirstBlock={i === 0} />
              </div>
            );

            return (
              <article key={f.title} className={`group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card ${f.disableHoverScale ? "" : "motion-safe:transition-transform duration-300 lg:hover:scale-[1.02]"}`}>
                <div className={`h-1 w-full bg-gradient-to-r ${f.accent}`} aria-hidden />
                <div className="grid items-stretch lg:min-h-[400px] lg:grid-cols-2 min-h-0">
                  {textCell}
                  {visualCell}
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4 mt-12 pt-10 border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">¿Te identificas con esto?</p>
          <Link
            href="/es/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
          >
            Agenda una conversación <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
