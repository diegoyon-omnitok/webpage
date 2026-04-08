"use client";

import { useState } from "react";

const values = [
  {
    title: "Compromiso con el cliente",
    desc: "Su éxito es nuestro verdadero objetivo.",
  },
  {
    title: "Esfuerzo y cercanía",
    desc: "Corremos junto a ellos, sin excusas.",
  },
  {
    title: "Creatividad y autonomía",
    desc: "Desarrollamos nuestras propias soluciones, somos dueños de nuestro destino.",
  },
  {
    title: "Transparencia",
    desc: "No prometemos lo que no podemos cumplir.",
  },
  {
    title: "Agilidad y eficiencia",
    desc: "Resolvemos rápido, barato y con impacto real.",
  },
];

function FlipCard({ title, desc }: { title: string; desc: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-44 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl gradient-brand flex items-center justify-center p-6 shadow-card"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-lg font-bold text-white text-center leading-snug">{title}</h3>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-gray-100 shadow-card flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-base text-gray-600 text-center leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function NosotrosValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Valores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <FlipCard key={v.title} title={v.title} desc={v.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
