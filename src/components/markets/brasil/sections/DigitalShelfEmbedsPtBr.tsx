import type { ReactNode } from "react";

/**
 * Versión pt-BR de `src/components/blog/DigitalShelfEmbeds.tsx` para el artículo
 * "Por qué medir tu digital shelf ya no es opcional" (traducción Brasil).
 * Se inyectan en el rawText mediante marcadores [[embed:clave]].
 * Las claves del objeto NO se traducen; solo el contenido visible.
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
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">Por que esse dado importa?</div>
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
      <div className="mt-3 text-center text-xs text-gray-400">Fonte: {source}</div>
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
      Em 30 segundos
    </div>
    <div className="space-y-2.5">
      {[
        "O ecommerce LATAM cresce 1,5x mais rápido que a média global — e seus erros de execução escalam junto com ele.",
        "A perda não começa na venda: começa em preço, estoque, conteúdo e visibilidade.",
        "A auditoria manual já não é suficiente: o shelf muda todos os dias.",
        "Framework de 4 camadas para começar a medir: presença → competitividade → qualidade → priorização.",
      ].map((line) => (
        <div key={line} className="flex items-start gap-3 text-[15px] leading-relaxed text-gray-700">
          <span className="mt-1 text-primary">{check}</span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  </div>
);

const quoteEjecucion = <PullQuote>“As vendas raramente caem primeiro. Primeiro cai a execução.”</PullQuote>;

const quoteDeterioro = (
  <PullQuote>“O digital shelf se deteriora antes que o dashboard comercial mostre isso.”</PullQuote>
);

const quoteShopper = <PullQuote>“O shopper nunca vê o seu dashboard. Ele só vê o seu Digital Shelf.”</PullQuote>;

const quoteMonitoreo = (
  <PullQuote>“O que você não monitora hoje pode virar uma perda amanhã.”</PullQuote>
);

const quotePatron = (
  <PullQuote>“Primeiro a execução se degrada, depois o negócio sente.”</PullQuote>
);

const kpiLatam = (
  <>
    <KpiRow
      items={[
        { value: "12,2%", label: "crescimento do retail ecommerce LATAM em 2025" },
        { value: "US$ 191,25 bi", label: "vendas projetadas na região" },
        { value: "1,5x", label: "mais rápido que a média global" },
      ]}
      source="EMARKETER, 2025"
    />
    <WhyItMatters>
      Crescer 1,5x mais rápido que o mundo significa que a cada semana entram mais SKUs, mais sellers e mais
      promoções competindo pelas mesmas buscas. Para um eCommerce Manager, a leitura não é “o bolo ficou
      maior”: é que <strong className="text-gray-900">o custo de cada erro de execução se multiplica</strong>, porque ele acontece diante de
      mais shoppers e mais concorrentes do que há um ano.
    </WhyItMatters>
  </>
);

const infografiaConcentracion = (
  <>
    <figure className="my-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
      <SectionKicker>O funil de concentração</SectionKicker>
      <div className="space-y-3">
        <div className="rounded-xl bg-primary/10 px-5 py-4">
          <div className="text-sm font-semibold text-gray-900">Ecommerce LATAM</div>
          <div className="text-xs text-gray-500">US$ 191,25 bilhões projetados em 2025</div>
        </div>
        <div className="mx-auto w-[88%] rounded-xl bg-primary/20 px-5 py-4">
          <div className="text-sm font-semibold text-gray-900">3 países concentram 84,5% das vendas</div>
          <div className="text-xs text-gray-500">Argentina · Brasil · México</div>
        </div>
        <div className="mx-auto w-[72%] rounded-xl bg-primary px-5 py-4">
          <div className="text-sm font-semibold text-white">3 players movimentam &gt;60% do GMV B2C no México</div>
          <div className="text-xs text-white/75">Mercado Libre · Amazon México · Shein</div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-gray-400">
        Fontes: EMARKETER 2025 · AMVO 2026 · Similarweb 2025
      </figcaption>
    </figure>
    <WhyItMatters>
      Se 3 marketplaces concentram mais de 60% do GMV do seu mercado, seu negócio digital tem{" "}
      <strong className="text-gray-900">poucos pontos únicos de falha</strong>. Uma ruptura de estoque, uma página degradada ou uma queda de
      posições em apenas um desses players não é um incidente isolado: pode comprometer uma parcela
      desproporcional da sua venda do mês.
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
          <div className="flex items-center gap-2 text-green-600">{check}<span className="text-gray-700">Título completo e correto</span></div>
          <div className="flex items-center gap-2 text-green-600">{check}<span className="text-gray-700">Galeria + vídeo</span></div>
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
          <div className="flex items-center gap-2 text-red-500">{cross}<span className="text-gray-500">Sem vídeo nem imagens secundárias</span></div>
          <div className="flex items-center gap-2 text-red-500">{cross}<span className="text-gray-500">Atributos faltando</span></div>
        </div>
      </div>
    </div>
    <figcaption className="mt-3 text-center text-xs text-gray-400">
      O mesmo produto pode competir com forças muito diferentes dependendo do varejista.
    </figcaption>
  </figure>
);

const tablaFugas = (
  <div className="my-2 overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
    <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm">
      <thead>
        <tr className="bg-primary">
          <th className="px-4 py-3 font-semibold text-white">Vazamento silencioso</th>
          <th className="px-4 py-3 font-semibold text-white">Como parece de dentro</th>
          <th className="px-4 py-3 font-semibold text-white">Como o shopper vê</th>
          <th className="px-4 py-3 font-semibold text-white">Risco se for ignorado</th>
        </tr>
      </thead>
      <tbody className="text-gray-600">
        <tr className="border-t border-gray-100">
          <td className="px-4 py-3 font-semibold text-gray-900">Preço fora da estratégia</td>
          <td className="px-4 py-3">“Continuamos vendendo”</td>
          <td className="px-4 py-3">“Está mais caro que a outra marca”</td>
          <td className="px-4 py-3">Erosão da percepção de preço</td>
        </tr>
        <tr className="border-t border-gray-100 bg-gray-50/60">
          <td className="px-4 py-3 font-semibold text-gray-900">Ruptura parcial</td>
          <td className="px-4 py-3">“O produto está publicado”</td>
          <td className="px-4 py-3">“Não tem meu tamanho/variante”</td>
          <td className="px-4 py-3">Conversão perdida sem alarme</td>
        </tr>
        <tr className="border-t border-gray-100">
          <td className="px-4 py-3 font-semibold text-gray-900">Conteúdo inconsistente</td>
          <td className="px-4 py-3">“A página está aprovada”</td>
          <td className="px-4 py-3">“Esta página não me convence”</td>
          <td className="px-4 py-3">Você perde a comparação</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const calloutRetailMedia = (
  <WhyItMatters>
    O fato de metade das retail media networks da região ter nascido em um único ano significa que{" "}
    <strong className="text-gray-900">a gôndola virou leilão de repente</strong>. As posições que a sua marca “ganhava” por
    relevância agora também são compradas. Se a sua medição não separa orgânico de patrocinado, você não sabe se a sua
    visibilidade é um ativo ou uma fatura.
  </WhyItMatters>
);

const chatIa = (
  <div className="my-2 rounded-3xl border border-gray-100 bg-gray-50/70 p-5 sm:p-6">
    <div className="mb-4 flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-5 py-3.5 shadow-card">
        <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-white/70">👤 Usuário</div>
        <div className="text-[15px] font-medium text-white">Por que meu Share of Search caiu?</div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-gray-100 bg-white px-5 py-4 shadow-card">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary">🤖 Omnitok AI</div>
        <div className="mb-2.5 text-[15px] text-gray-700">Detectamos três causas nas suas buscas-chave:</div>
        <div className="space-y-1.5 text-[15px] text-gray-700">
          <div className="flex items-start gap-2"><span className="mt-1 text-green-600">{check}</span><span>Sua disponibilidade caiu em 2 varejistas (o buscador deixa de exibir você).</span></div>
          <div className="flex items-start gap-2"><span className="mt-1 text-green-600">{check}</span><span>Sua PDP perdeu atributos críticos e caiu em relevância.</span></div>
          <div className="flex items-start gap-2"><span className="mt-1 text-green-600">{check}</span><span>Um concorrente aumentou sua visibilidade patrocinada na categoria.</span></div>
        </div>
      </div>
    </div>
  </div>
);

const frameworkSenales = (
  <div className="my-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
    <SectionKicker>Os 3 sinais antecipados</SectionKicker>
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        { n: "1", t: "Disponibilidade real", d: "por SKU e varejista" },
        { n: "2", t: "Posição e share of search", d: "nas buscas-chave" },
        { n: "3", t: "Qualidade e consistência da PDP", d: "onde a compra é decidida" },
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
        { value: "253 M", label: "pedidos na Argentina (2025)" },
        { value: "645 M", label: "unidades vendidas" },
        { value: "+55%", label: "crescimento ano a ano" },
      ]}
      source="CACE, 2025"
    />
    <WhyItMatters>
      Com 253 milhões de pedidos por ano, uma ruptura que afeta “apenas” 1% da sua operação já não é um
      arredondamento: são milhões de oportunidades de compra resolvidas a favor de outro.{" "}
      <strong className="text-gray-900">Nessa escala, o pequeno deixa de existir.</strong>
    </WhyItMatters>
  </>
);

const tablaAuditoria = (
  <div className="my-2 overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
    <table className="w-full min-w-[560px] border-collapse bg-white text-left text-sm">
      <thead>
        <tr className="bg-primary">
          <th className="px-4 py-3 font-semibold text-white" />
          <th className="px-4 py-3 font-semibold text-white">📋 Auditoria manual</th>
          <th className="px-4 py-3 font-semibold text-white">⚡ Monitoramento contínuo</th>
        </tr>
      </thead>
      <tbody className="text-gray-600">
        {[
          ["Frequência", "Semanal, por amostragem", "Diária, catálogo completo"],
          ["Cobertura", "Alguns SKUs e varejistas", "Todos os SKUs, todos os canais"],
          ["Rupturas parciais", "Quase impossíveis de ver", "Detecção automática por variante e seller"],
          ["Orgânico vs patrocinado", "Não distingue", "Separado por tipo de presença"],
          ["Tempo da equipe", "Horas consolidando dados", "Horas decidindo ações"],
          ["Momento da detecção", "Quando a venda já caiu", "Quando o sinal muda"],
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
    <SectionKicker>As 4 camadas do digital shelf</SectionKicker>
    <div className="space-y-1">
      {[
        { n: "1", t: "Presença", q: "Estou publicado e comprável?" },
        { n: "2", t: "Competitividade", q: "Estou alinhado frente à concorrência?" },
        { n: "3", t: "Qualidade de execução", q: "Minha PDP me representa bem?" },
        { n: "4", t: "Priorização", q: "O que ataco primeiro?" },
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
    <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">💡 Dica prática</div>
    <div className="text-[15px] leading-relaxed text-gray-700">
      Para priorizar sem um modelo complexo, cruze duas perguntas para cada achado:{" "}
      <strong className="text-gray-900">quanto esse SKU vende?</strong> e <strong className="text-gray-900">quanto esse canal pesa?</strong>{" "}
      O que cair em “SKU estrela + canal grande” é tratado hoje. O resto entra na agenda.
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
        <div>“Acho que foi o preço”</div>
        <div>Reage quando a venda cai</div>
        <div>Hipóteses soltas na reunião</div>
      </div>
    </div>
    <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-6 shadow-card">
      <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600">
        <span className="text-green-600">{check}</span> Medindo o shelf
      </div>
      <div className="space-y-3 text-sm font-medium text-gray-700">
        <div>“Foi uma diferença de 8% vs o concorrente A em 2 varejistas”</div>
        <div>Reage quando o sinal muda</div>
        <div>Sinais concretos do ponto de venda</div>
      </div>
    </div>
  </div>
);

const checklistMonitoreo = (
  <div className="my-4 rounded-3xl gradient-hero p-7 shadow-card sm:p-9">
    <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
      O que uma marca precisa monitorar
    </div>
    <div className="flex flex-wrap gap-2.5">
      {["Preço", "Disponibilidade", "Share of Search", "PDP", "Concorrência", "Execução", "Alertas"].map(
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

export const digitalShelfEmbedsPtBr: Record<string, ReactNode> = {
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
