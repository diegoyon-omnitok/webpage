"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const testimonials = [
  {
    quote:
      "Escolhemos trabalhar com a Omnitok porque eles se adaptaram perfeitamente às nossas necessidades, oferecendo uma excelente relação custo-benefício. Com o apoio deles, conseguimos aumentar a visibilidade da nossa marca, identificamos oportunidades para melhorar a experiência do cliente e otimizamos nossos investimentos, o que resultou em um crescimento significativo da receita.",
    name: "Diego Ibarra",
    role: "AMS Marketplaces Analytics & Program Manager",
    company: "HP Inc",
    photo: "/testimonials/diego-ibarra.png",
  },
  {
    quote:
      "Com o apoio da Omnitok, conseguimos organizar e agilizar significativamente o processo de gestão de conteúdo de ecommerce, facilitando o upload, a atualização e a gestão de mais de 80 SKUs em diferentes categorias. Demos um salto importante em design, tornando os conteúdos in-page muito mais interativos e atraentes para nossos clientes.",
    name: "Matias Sabaj",
    role: "Product Manager Electro",
    company: "TCL Electronics",
    photo: "/testimonials/matias-sabaj.png",
  },
  {
    quote:
      "Com a Omnitok, conseguimos organizar e tornar mais eficiente a administração do conteúdo, centralizando a gestão e facilitando a atualização das páginas de produto de forma mais consistente entre os diferentes canais. Vimos uma melhora na implementação e na gestão de conteúdo, além de uma comunicação mais organizada entre equipes e varejistas. Destacamos muito a disposição da equipe e o acompanhamento constante durante todo o processo.",
    name: "Andrés Morales",
    role: "Digital Marketing Head",
    company: "Hisense",
    photo: "/testimonials/andres-morales.jpg",
  },
  {
    quote:
      "Trabalhar com a Omnitok nos permitiu otimizar a implementação de conteúdo in-page, melhorando significativamente a apresentação dos nossos produtos. Conseguimos fortalecer a presença da nossa marca no ecommerce, entregar uma experiência mais completa e informativa ao consumidor e contar com páginas de produto mais atraentes, capazes de comunicar melhor os benefícios e diferenciais dos nossos produtos. Destacamos o acompanhamento da equipe, a agilidade na gestão e a facilidade para implementar soluções alinhadas às nossas necessidades.",
    name: "Josefa Ode",
    role: "Head of Marketing",
    company: "Caixun",
    photo: "/testimonials/josefa-ode.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Manchas suaves — primary Omnitok (#4D4A9D / primary-dark) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <div
          className="absolute -top-28 -right-20 w-[min(100vw,440px)] h-[min(100vw,440px)] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at 35% 40%, rgba(77,74,157,0.2) 0%, rgba(77,74,157,0.07) 42%, transparent 68%)",
          }}
        />
        <div
          className="absolute top-[42%] -left-36 w-[380px] h-[380px] -translate-y-1/2 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle at 55% 50%, rgba(59,56,128,0.16) 0%, rgba(77,74,157,0.06) 48%, transparent 72%)",
          }}
        />
        <div
          className="absolute -bottom-32 left-[20%] w-[340px] h-[340px] rounded-full blur-[95px]"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(77,74,157,0.14) 0%, transparent 65%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,74,157,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(77,74,157,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Depoimentos de marcas que já usam a Omnitok
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            Equipes de digital commerce no Brasil e na América Latina que transformaram sua visibilidade e conversão com a Omnitok.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card + side arrows */}
          <div className="relative flex items-center gap-3 lg:gap-8">

            <button
              type="button"
              onClick={prev}
              className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center text-primary border border-gray-200 bg-white transition-all duration-200 hover:border-primary/30 hover:bg-gray-50 hover:-translate-x-2 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

          <div className="flex-1 flex flex-col rounded-2xl border border-gray-100 shadow-card bg-white overflow-hidden transition-all duration-300 lg:hover:scale-[1.08] lg:hover:shadow-modal cursor-default">
            <div
              className="h-0.5 w-full shrink-0 rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,23,123,0.92) 0%, #A78BFA 48%, rgba(77,74,157,0.85) 100%)",
              }}
              aria-hidden
            />
            <div className="p-5 sm:p-8 flex flex-col flex-1 justify-between">
              <>
                <div>
                  <Quote size={22} className="mb-3 sm:mb-4" style={{ color: "#4D4A9D" }} />
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                    <Image
                      src={t.photo}
                      alt={`${t.name} — depoimento sobre a Omnitok`}
                      title={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                    <p className="text-xs font-semibold" style={{ color: "#FF177B" }}>{t.company}</p>
                  </div>
                </div>
              </>
            </div>
          </div>

            <button
              type="button"
              onClick={next}
              className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center text-white transition-all duration-200 hover:opacity-90 hover:translate-x-2 shadow-sm gradient-brand"
            >
              <ChevronRight size={18} />
            </button>

          </div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center text-primary border border-gray-200 bg-white shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm gradient-brand"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background: i === current ? "#FF177B" : "rgba(77,74,157,0.2)",
                }}
              />
            ))}
          </div>

          <div className="flex justify-center mt-10 lg:mt-12">
            <Link
              href={canonicalRoutes.brasil.contacto}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
            >
              Vamos conversar
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
