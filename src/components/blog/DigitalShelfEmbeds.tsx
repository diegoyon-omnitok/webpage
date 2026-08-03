import type { ReactNode } from "react";

/**
 * Componentes visuales del artículo
 * "Por qué medir tu digital shelf ya no es opcional".
 * Se inyectan en el rawText mediante marcadores [[embed:clave]].
 *
 * Nota: se usa <div>/<span> en lugar de <p>/<ul>/<li> para que la tipografía
 * global de .blog-content (color/indentación) no pise los estilos propios.
 */

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-4 rounded-r-2xl border-l-4 border-accent bg-primary/[0.04] px-6 py-5 sm:px-8">
      <div className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">{children}</div>
    </blockquote>
  );
}

function WhyItMatters({ children }: { children: ReactNode }) {
  return (
    <aside className="my-2 rounded-2xl bg-[#E6E3F5]/60 p-6">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">¿Por qué importa este dato?</div>
      <div className="text-[15px] leading-relaxed text-gray-700">{children}</div>
    </aside>
  );
}

function KpiRow({
  items,
  source,
}: {
  items: { value: string; label: string }[];
  source: string;
}) {
  return (
    <div className="my-2">
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-card">
            <div className="text-3xl font-extrabold tracking-tight text-primary">{item.value}</div>
            <div className="mt-2 text-xs font-medium leading-snug text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-xs text-gray-400">Fuente: {source}</div>
    </div>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">{children}</div>;
}

const check = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const cross = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/* ============ Embeds ============ */

const tldr = (
  <div className="my-2 rounded-3xl border border-gray-100 bg-gray-50/70 p-6 sm:p-8">
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
      En 30 segundos
    </div>
    <div className="space-y-2.5">
      {[
        "El ecommerce LATAM crece 1.5x más rápido que el promedio global — y tus errores de ejecución escalan con él.",
        "La pérdida no empieza en la venta: empieza en precio, stock, contenido y visibilidad.",
        "La auditoría manual ya no alcanza: el shelf cambia todos los días.",
        "Framework de 4 capas para empezar a medir: presencia → competitividad → calidad → priorización.",
      ].map((line) => (
        <div key={line} className="flex items-start gap-3 text-[15px] leading-relaxed text-gray-700">
          <span className="mt-1 text-primary">{check}</span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  </div>
);

const quoteEjecucion = <PullQuote>“Las ventas rara vez caen primero. Primero cae la ejecución.”</PullQuote>;

const quoteDeterioro = (
  <PullQuote>“El digital shelf se deteriora antes de que el dashboard comercial lo refleje.”</PullQuote>
);

const quoteShopper = <PullQuote>“El shopper nunca ve tu dashboard. Solo ve tu Digital Shelf.”</PullQuote>;

const quoteMonitoreo = (
  <PullQuote>“Lo que no monitoreas hoy puede convertirse en una pérdida mañana.”</PullQuote>
);

const quotePatron = (
  <PullQuote>“Primero se degrada la ejecución, después se nota el negocio.”</PullQuote>
);

const kpiLatam = (
  <>
    <KpiRow
      items={[
        { value: "12.2%", label: "crecimiento del retail ecommerce LATAM en 2025" },
        { value: "US$191.25 mil MM", label: "ventas proyectadas en la región" },
        { value: "1.5x", label: "más rápido que el promedio global" },
      ]}
      source="EMARKETER, 2025"
    />
    <WhyItMatters>
      Crecer 1.5x más rápido que el mundo significa que cada semana entran más SKUs, más sellers y más
      promociones a competir por las mismas búsquedas. Para un eCommerce Manager, la lectura no es “hay más
      torta”: es que <strong className="text-gray-900">el costo de cada error de ejecución se multiplica</strong>, porque ocurre frente a
      más shoppers y más competidores que hace un año.
    </WhyItMatters>
  </>
);

const infografiaConcentracion = (
  <>
    <figure className="my-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
      <SectionKicker>El embudo de concentración</SectionKicker>
      <div className="space-y-3">
        <div className="rounded-xl bg-primary/10 px-5 py-4">
          <div className="text-sm font-semibold text-gray-900">Ecommerce LATAM</div>
          <div className="text-xs text-gray-500">US$191.25 mil millones proyectados en 2025</div>
        </div>
        <div className="mx-auto w-[88%] rounded-xl bg-primary/20 px-5 py-4">
          <div className="text-sm font-semibold text-gray-900">3 países concentran 84.5% de las ventas</div>
          <div className="text-xs text-gray-500">Argentina · Brasil · México</div>
        </div>
        <div className="mx-auto w-[72%] rounded-xl bg-primary px-5 py-4">
          <div className="text-sm font-semibold text-white">3 players mueven &gt;60% del GMV B2C en México</div>
          <div className="text-xs text-white/75">Mercado Libre · Amazon México · Shein</div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-gray-400">
        Fuentes: EMARKETER 2025 · AMVO 2026 · Similarweb 2025
      </figcaption>
    </figure>
    <WhyItMatters>
      Si 3 marketplaces concentran más del 60% del GMV de tu mercado, tu negocio digital tiene{" "}
      <strong className="text-gray-900">pocos puntos únicos de falla</strong>. Un quiebre de stock, una ficha degradada o una caída de
      posiciones en uno solo de esos players no es un incidente aislado: puede comprometer una porción
      desproporcionada de tu venta del mes.
    </WhyItMatters>
  </>
);

const pdpComparacion = (
  <figure className="my-2">
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600">
          <span className="h-2 w-2 rounded-full bg-green-500" /> PDP consistente
        </div>
        <div className="mb-3 flex h-24 items-center justify-center rounded-xl bg-[#E6E3F5]">
          <div className="h-14 w-14 rounded-full bg-primary/50" />
        </div>
        <div className="mb-3 flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-8 flex-1 rounded-md bg-[#E6E3F5]" />
          ))}
        </div>
        <div className="space-y-1.5 text-sm">
          <div className="flex items-center gap-2 text-green-600">{check}<span className="text-gray-700">Título completo y correcto</span></div>
          <div className="flex items-center gap-2 text-green-600">{check}<span className="text-gray-700">Galería + video</span></div>
          <div className="flex items-center gap-2 text-green-600">{check}<span className="text-gray-700">Atributos críticos presentes</span></div>
        </div>
      </div>
      <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
          <span className="h-2 w-2 rounded-full bg-red-500" /> PDP degradada
        </div>
        <div className="mb-3 flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
          <div className="h-14 w-14 rounded-full bg-gray-200" />
        </div>
        <div className="mb-3 flex gap-2">
          <div className="h-8 flex-1 rounded-md bg-gray-100" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-8 flex-1 rounded-md border-2 border-dashed border-gray-200" />
          ))}
        </div>
        <div className="space-y-1.5 text-sm">
          <div className="flex items-center gap-2 text-red-500">{cross}<span className="text-gray-500">Título truncado…</span></div>
          <div className="flex items-center gap-2 text-red-500">{cross}<span className="text-gray-500">Sin video ni imágenes secundarias</span></div>
          <div className="flex items-center gap-2 text-red-500">{cross}<span className="text-gray-500">Atributos faltantes</span></div>
        </div>
      </div>
    </div>
    <figcaption className="mt-3 text-center text-xs text-gray-400">
      El mismo producto puede competir con fuerzas muy distintas según el retailer.
    </figcaption>
  </figure>
);

const tablaFugas = (
  <div className="my-2 overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
    <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm">
      <thead>
        <tr className="bg-primary">
          <th className="px-4 py-3 font-semibold text-white">Fuga silenciosa</th>
          <th className="px-4 py-3 font-semibold text-white">Cómo se ve desde adentro</th>
          <th className="px-4 py-3 font-semibold text-white">Cómo se ve desde el shopper</th>
          <th className="px-4 py-3 font-semibold text-white">Riesgo si se ignora</th>
        </tr>
      </thead>
      <tbody className="text-gray-600">
        <tr className="border-t border-gray-100">
          <td className="px-4 py-3 font-semibold text-gray-900">Precio fuera de estrategia</td>
          <td className="px-4 py-3">“Seguimos vendiendo”</td>
          <td className="px-4 py-3">“Está más caro que la otra marca”</td>
          <td className="px-4 py-3">Erosión de percepción de precio</td>
        </tr>
        <tr className="border-t border-gray-100 bg-gray-50/60">
          <td className="px-4 py-3 font-semibold text-gray-900">Quiebre parcial</td>
          <td className="px-4 py-3">“El producto está publicado”</td>
          <td className="px-4 py-3">“No está mi talla/variante”</td>
          <td className="px-4 py-3">Conversión perdida sin alarma</td>
        </tr>
        <tr className="border-t border-gray-100">
          <td className="px-4 py-3 font-semibold text-gray-900">Contenido inconsistente</td>
          <td className="px-4 py-3">“La ficha está aprobada”</td>
          <td className="px-4 py-3">“Esta ficha no me convence”</td>
          <td className="px-4 py-3">Pierdes la comparación</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const calloutRetailMedia = (
  <WhyItMatters>
    Que la mitad de las retail media networks de la región haya nacido en un solo año significa que{" "}
    <strong className="text-gray-900">la góndola se volvió subastable de golpe</strong>. Las posiciones que tu marca “ganaba” por
    relevancia ahora también se compran. Si tu medición no separa orgánico de patrocinado, no sabes si tu
    visibilidad es un activo o una factura.
  </WhyItMatters>
);

const chatIa = (
  <div className="my-2 rounded-3xl border border-gray-100 bg-gray-50/70 p-5 sm:p-6">
    <div className="mb-4 flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-5 py-3.5 shadow-card">
        <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-white/70">👤 Usuario</div>
        <div className="text-[15px] font-medium text-white">¿Por qué cayó mi Share of Search?</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-gray-100 bg-white px-5 py-4 shadow-card">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary">🤖 Omnitok AI</div>
        <div className="mb-2.5 text-[15px] text-gray-700">Detectamos tres causas en tus búsquedas clave:</div>
        <div className="space-y-1.5 text-[15px] text-gray-700">
          <div className="flex items-start gap-2"><span className="mt-1 text-green-600">{check}</span><span>Bajó tu disponibilidad en 2 retailers (el buscador deja de mostrarte).</span></div>
          <div className="flex items-start gap-2"><span className="mt-1 text-green-600">{check}</span><span>Tu PDP perdió atributos críticos y descendió en relevancia.</span></div>
          <div className="flex items-start gap-2"><span className="mt-1 text-green-600">{check}</span><span>Un competidor aumentó su visibilidad patrocinada en la categoría.</span></div>
        </div>
      </div>
    </div>
  </div>
);

const frameworkSenales = (
  <div className="my-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
    <SectionKicker>Las 3 señales tempranas</SectionKicker>
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        { n: "1", t: "Disponibilidad real", d: "por SKU y retailer" },
        { n: "2", t: "Posición y share of search", d: "en búsquedas clave" },
        { n: "3", t: "Calidad y consistencia de PDP", d: "donde se decide la compra" },
      ].map((s) => (
        <div key={s.n} className="rounded-2xl bg-gray-50/80 p-5 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-sm font-extrabold text-white">
            {s.n}
          </div>
          <div className="text-sm font-bold text-gray-900">{s.t}</div>
          <div className="mt-1 text-xs text-gray-500">{s.d}</div>
        </div>
      ))}
    </div>
  </div>
);

const kpiCace = (
  <>
    <KpiRow
      items={[
        { value: "253 M", label: "órdenes en Argentina (2025)" },
        { value: "645 M", label: "unidades vendidas" },
        { value: "+55%", label: "crecimiento interanual" },
      ]}
      source="CACE, 2025"
    />
    <WhyItMatters>
      Con 253 millones de órdenes al año, un quiebre que afecta “solo” al 1% de tu operación ya no es un
      redondeo: son millones de oportunidades de compra que se resuelven a favor de otro.{" "}
      <strong className="text-gray-900">A esta escala, lo pequeño ya no existe.</strong>
    </WhyItMatters>
  </>
);

const tablaAuditoria = (
  <div className="my-2 overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
    <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm">
      <thead>
        <tr className="bg-primary">
          <th className="px-4 py-3 font-semibold text-white" />
          <th className="px-4 py-3 font-semibold text-white">📋 Auditoría manual</th>
          <th className="px-4 py-3 font-semibold text-white">⚡ Monitoreo continuo</th>
        </tr>
      </thead>
      <tbody className="text-gray-600">
        {[
          ["Frecuencia", "Semanal, por muestreo", "Diaria, catálogo completo"],
          ["Cobertura", "Algunos SKUs y retailers", "Todos los SKUs, todos los canales"],
          ["Quiebres parciales", "Casi imposibles de ver", "Detección automática por variante y seller"],
          ["Orgánico vs patrocinado", "No distingue", "Separado por tipo de presencia"],
          ["Tiempo del equipo", "Horas consolidando datos", "Horas decidiendo acciones"],
          ["Momento de detección", "Cuando ya cayó la venta", "Cuando cambia la señal"],
        ].map(([k, a, b], i) => (
          <tr key={k} className={`border-t border-gray-100 ${i % 2 ? "bg-gray-50/60" : ""}`}>
            <td className="px-4 py-3 font-semibold text-gray-900">{k}</td>
            <td className="px-4 py-3">{a}</td>
            <td className="px-4 py-3 font-medium text-primary">{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const frameworkCapas = (
  <div className="my-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
    <SectionKicker>Las 4 capas del digital shelf</SectionKicker>
    <div className="space-y-1">
      {[
        { n: "1", t: "Presencia", q: "¿Estoy publicado y comprable?" },
        { n: "2", t: "Competitividad", q: "¿Estoy alineado frente a la competencia?" },
        { n: "3", t: "Calidad de ejecución", q: "¿Mi PDP me representa bien?" },
        { n: "4", t: "Priorización", q: "¿Qué ataco primero?" },
      ].map((c, i) => (
        <div key={c.n}>
          <div className="flex items-center gap-4 rounded-2xl bg-gray-50/80 px-5 py-4">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full gradient-brand text-sm font-extrabold text-white">
              {c.n}
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">{c.t}</div>
              <div className="text-xs text-gray-500">{c.q}</div>
            </div>
          </div>
          {i < 3 && <div className="ml-10 h-4 w-px bg-gray-200" />}
        </div>
      ))}
    </div>
  </div>
);

const tipPriorizacion = (
  <aside className="my-2 rounded-2xl border border-amber-100 bg-amber-50/70 p-6">
    <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">💡 Tip práctico</div>
    <div className="text-[15px] leading-relaxed text-gray-700">
      Para priorizar sin un modelo complejo, cruza dos preguntas por cada hallazgo:{" "}
      <strong className="text-gray-900">¿cuánto vende ese SKU?</strong> y <strong className="text-gray-900">¿cuánto pesa ese canal?</strong>{" "}
      Lo que caiga en “SKU estrella + canal grande” se atiende hoy. El resto se agenda.
    </div>
  </aside>
);

const antesDespues = (
  <div className="my-2 grid gap-4 sm:grid-cols-2">
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card">
      <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
        <span className="text-red-500">{cross}</span> Antes de medir
      </div>
      <div className="space-y-3 text-sm text-gray-500">
        <div>“Creo que fue el precio”</div>
        <div>Reacciona cuando cae la venta</div>
        <div>Hipótesis sueltas en la reunión</div>
      </div>
    </div>
    <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-6 shadow-card">
      <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600">
        <span className="text-green-600">{check}</span> Midiendo el shelf
      </div>
      <div className="space-y-3 text-sm font-medium text-gray-700">
        <div>“Fue una brecha de 8% vs competidor A en 2 retailers”</div>
        <div>Reacciona cuando cambia la señal</div>
        <div>Señales concretas del punto de venta</div>
      </div>
    </div>
  </div>
);

const checklistMonitoreo = (
  <div className="my-4 rounded-3xl gradient-hero p-7 shadow-card sm:p-9">
    <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
      Lo que una marca necesita monitorear
    </div>
    <div className="flex flex-wrap gap-2.5">
      {["Precio", "Disponibilidad", "Share of Search", "PDP", "Competencia", "Ejecución", "Alertas"].map(
        (item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20"
          >
            <span className="text-green-300">{check}</span>
            {item}
          </span>
        )
      )}
    </div>
  </div>
);

export const digitalShelfEmbeds: Record<string, ReactNode> = {
  tldr,
  "quote-ejecucion": quoteEjecucion,
  "kpi-latam": kpiLatam,
  "infografia-concentracion": infografiaConcentracion,
  "quote-deterioro": quoteDeterioro,
  "pdp-comparacion": pdpComparacion,
  "tabla-fugas": tablaFugas,
  "callout-retail-media": calloutRetailMedia,
  "chat-ia": chatIa,
  "framework-senales": frameworkSenales,
  "kpi-cace": kpiCace,
  "quote-shopper": quoteShopper,
  "tabla-auditoria": tablaAuditoria,
  "quote-monitoreo": quoteMonitoreo,
  "framework-capas": frameworkCapas,
  "tip-priorizacion": tipPriorizacion,
  "antes-despues": antesDespues,
  "checklist-monitoreo": checklistMonitoreo,
  "quote-patron": quotePatron,
};
