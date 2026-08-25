/**
 * Mockups HTML em pt-BR replicando o dashboard Omnitok DSA.
 * Todos os dados são fictícios / ilustrativos.
 */

const headerBg = "linear-gradient(135deg, #211f4b 0%, #2d2a6e 100%)";
const cellBorder = "1px solid #e5e7eb";

/* ── Shared helpers ── */

function WinnerBadge({ text, color }: { text: string; color: string }) {
  const bg = color === "green" ? "#dcfce7" : color === "purple" ? "#ede9fe" : color === "blue" ? "#dbeafe" : "#f3f4f6";
  const fg = color === "green" ? "#166534" : color === "purple" ? "#4D4A9D" : color === "blue" ? "#1e40af" : "#374151";
  return <span className="inline-block rounded px-1.5 py-0.5 text-[10px] font-bold" style={{ background: bg, color: fg }}>{text}</span>;
}

function StockDot({ status }: { status: string }) {
  return <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: status === "active" ? "#22c55e" : "#ef4444" }} />;
}

function MiniBar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-14 h-2.5 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
      <span className="tabular-nums font-bold text-[11px]" style={{ color }}>{value}%</span>
    </div>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const bg = score >= 80 ? "#dcfce7" : score >= 60 ? "#fef3c7" : "#fee2e2";
  const fg = score >= 80 ? "#166534" : score >= 60 ? "#92400e" : "#991b1b";
  return <span className="rounded px-1.5 py-0.5 font-bold tabular-nums" style={{ background: bg, color: fg }}>{score}%</span>;
}

function CheckMark({ ok }: { ok: boolean }) {
  return <span className="text-[13px]" style={{ color: ok ? "#22c55e" : "#d1d5db" }}>{ok ? "✓" : "✕"}</span>;
}

/* ================================================================== */
/*  1. PRICING MATRIX                                                 */
/* ================================================================== */

const pricingRows = [
  { id: "10241", brand: "Brand A", model: "Aspirador Pro 2000W", cat: "Eletro", r1: "R$ 899", r1note: "+4% R2", r2: null, r3: "R$ 849", r4: null, gap: "+5.9%", winner: "Retail 3", winTag: "blue", status: "3-20% atrás" },
  { id: "10382", brand: "Brand A", model: "Micro-ondas Digital 30L", cat: "Cozinha", r1: "R$ 599", r1note: null, r2: null, r3: null, r4: null, gap: "Melhor", winner: "Retail 1", winTag: "purple", status: "Ganhando" },
  { id: "10455", brand: "Brand B", model: "Geladeira Frost Free 340L", cat: "Eletro", r1: "R$ 3.499", r1note: "+12% R2", r2: "R$ 3.899", r3: "R$ 3.125", r4: null, gap: "+12.0%", winner: "Retail 3", winTag: "blue", status: "20%+ atrás" },
  { id: "10523", brand: "Brand A", model: "Máquina de Lavar 12kg", cat: "Lavanderia", r1: null, r1note: null, r2: "R$ 2.349", r3: "R$ 2.299", r4: "R$ 2.299", gap: "-2.1%", winner: "Retail 2", winTag: "green", status: "3-20% atrás" },
  { id: "10671", brand: "Brand C", model: "Forno de Embutir 65L", cat: "Cozinha", r1: "R$ 1.699", r1note: "+3% R3", r2: "R$ 1.649", r3: null, r4: null, gap: "Melhor", winner: "Retail 1", winTag: "purple", status: "Empatado" },
];

const pricingT = {
  title: "Matriz de Preços por Produto",
  sub: "820 produtos visíveis · Preço efetivo",
  export: "Exportar",
  expand: "Expandir",
  headers: ["ID", "Marca", "Produto", "Cat.", "Retail 1", "Retail 2", "Retail 3", "Retail 4", "Gap", "Vencedor", "Status"],
};

export function PricingMatrixMockup() {
  const t = pricingT;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight" style={{ fontSize: "11px" }}>
      <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: headerBg }}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{t.title}</p>
          <p className="text-[9px] text-white/40">{t.sub}</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold bg-white/10 text-white/70">{t.export}</span>
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold bg-accent/80 text-white">{t.expand}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full sm:min-w-[560px]">
        <thead><tr className="bg-gray-50">{t.headers.map((h, idx) => {
          const hideMobile = [0, 1, 3, 6, 7, 9, 10].includes(idx);
          return <th key={h} className={`px-1.5 py-2 text-left font-bold text-gray-500 uppercase tracking-wider ${hideMobile ? 'hidden sm:table-cell' : ''}`} style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>;
        })}</tr></thead>
        <tbody>
          {pricingRows.map((r) => {
            const status = r.status;
            const isWinning = status === "Ganhando";
            const isTied = status === "Empatado";
            return (
              <tr key={r.id} className="hover:bg-gray-50/50">
                <td className="hidden sm:table-cell px-1.5 py-2 text-gray-400 tabular-nums" style={{ borderBottom: cellBorder }}>{r.id}</td>
                <td className="hidden sm:table-cell px-1.5 py-2 font-semibold text-gray-700" style={{ borderBottom: cellBorder }}>{r.brand}</td>
                <td className="px-1.5 py-2 text-gray-600 truncate max-w-[100px] sm:max-w-[80px]" style={{ borderBottom: cellBorder }}>{r.model}</td>
                <td className="hidden sm:table-cell px-1.5 py-2 text-gray-500" style={{ borderBottom: cellBorder }}>{r.cat}</td>
                <td className="px-1.5 py-2 tabular-nums" style={{ borderBottom: cellBorder }}>{r.r1 ? <div><span className="font-semibold text-gray-800">{r.r1}</span>{r.r1note && <div className="text-[9px] text-green-600">{r.r1note}</div>}</div> : <span className="text-gray-300">-</span>}</td>
                <td className="px-1.5 py-2 tabular-nums text-gray-600" style={{ borderBottom: cellBorder }}>{r.r2 || <span className="text-gray-300">-</span>}</td>
                <td className="hidden sm:table-cell px-1.5 py-2 tabular-nums text-gray-600" style={{ borderBottom: cellBorder }}>{r.r3 || <span className="text-gray-300">-</span>}</td>
                <td className="hidden sm:table-cell px-1.5 py-2 tabular-nums text-gray-600" style={{ borderBottom: cellBorder }}>{r.r4 || <span className="text-gray-300">-</span>}</td>
                <td className="px-1.5 py-2 tabular-nums font-semibold" style={{ borderBottom: cellBorder, color: r.gap === "Melhor" || r.gap.startsWith("-") ? "#16a34a" : "#dc2626" }}>{r.gap}</td>
                <td className="hidden sm:table-cell px-1.5 py-2" style={{ borderBottom: cellBorder }}><WinnerBadge text={r.winner} color={r.winTag} /></td>
                <td className="hidden sm:table-cell px-1.5 py-2" style={{ borderBottom: cellBorder }}><span className="rounded px-1.5 py-0.5 text-[9px] font-semibold" style={{ background: isWinning ? "#dcfce7" : isTied ? "#fef3c7" : "#fee2e2", color: isWinning ? "#166534" : isTied ? "#92400e" : "#991b1b" }}>{status}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  2. AVAILABILITY                                                   */
/* ================================================================== */

const stockRows = [
  { sku: "SKU-4821", name: "Aspirador Pro 2000W", r1: "active", r2: "active", r3: "out", r4: "active", days: 0 },
  { sku: "SKU-3392", name: "Micro-ondas Digital 30L", r1: "active", r2: "out", r3: "active", r4: "out", days: 3 },
  { sku: "SKU-7710", name: "Geladeira Frost Free 340L", r1: "out", r2: "out", r3: "active", r4: "active", days: 7 },
  { sku: "SKU-1155", name: "Máquina de Lavar 12kg", r1: "active", r2: "active", r3: "active", r4: "active", days: 0 },
  { sku: "SKU-9063", name: "Forno de Embutir 65L", r1: "out", r2: "active", r3: "out", r4: "out", days: 14 },
];

const availT = {
  title: "Controle de Disponibilidade",
  sub: "820 produtos · 4 varejistas",
  active: "Ativo",
  out: "Esgotado",
  headers: ["SKU", "Produto", "Retail 1", "Retail 2", "Retail 3", "Retail 4", "Dias fora"],
  kpis: [{ l: "Cobertura total", v: "72,4%", c: "#4D4A9D" }, { l: "Produtos ausentes", v: "48", c: "#ef4444" }, { l: "Rupturas (7d)", v: "12", c: "#f59e0b" }, { l: "Recuperados (7d)", v: "8", c: "#22c55e" }],
};

export function AvailabilityMockup() {
  const t = availT;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight">
      <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: headerBg }}>
        <div><p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{t.title}</p><p className="text-[9px] text-white/40">{t.sub}</p></div>
        <div className="flex gap-2.5 items-center">
          <span className="flex items-center gap-1.5 text-[9px] text-white/60"><span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> {t.active}</span>
          <span className="flex items-center gap-1.5 text-[9px] text-white/60"><span className="w-2 h-2 rounded-full bg-red-400 inline-block" /> {t.out}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-px bg-gray-100">
        {t.kpis.map((kpi) => <div key={kpi.l} className="bg-white px-2 py-2.5 text-center"><p className="font-bold tabular-nums" style={{ color: kpi.c, fontSize: "20px" }}>{kpi.v}</p><p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.l}</p></div>)}
      </div>
      <div className="overflow-x-auto">
      <table className="w-full sm:min-w-[420px]">
        <thead><tr className="bg-gray-50">{t.headers.map((h, idx) => {
          const hideMobile = [0, 6].includes(idx);
          return <th key={h} className={`px-1.5 py-2 text-left font-bold text-gray-500 uppercase tracking-wider ${hideMobile ? 'hidden sm:table-cell' : ''}`} style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>;
        })}</tr></thead>
        <tbody>
          {stockRows.map((r) => (
            <tr key={r.sku} className={r.days > 5 ? "bg-red-50/40" : ""}>
              <td className="hidden sm:table-cell px-1.5 py-2 text-gray-400 tabular-nums font-mono" style={{ borderBottom: cellBorder }}>{r.sku}</td>
              <td className="px-1.5 py-2 font-semibold text-gray-700 truncate max-w-[110px] sm:max-w-[90px]" style={{ borderBottom: cellBorder }}>{r.name}</td>
              <td className="px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><StockDot status={r.r1} /></td>
              <td className="px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><StockDot status={r.r2} /></td>
              <td className="px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><StockDot status={r.r3} /></td>
              <td className="px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><StockDot status={r.r4} /></td>
              <td className="hidden sm:table-cell px-1.5 py-2 tabular-nums text-center font-semibold" style={{ borderBottom: cellBorder, color: r.days > 5 ? "#dc2626" : r.days > 0 ? "#f59e0b" : "#22c55e" }}>{r.days === 0 ? "OK" : `${r.days}d`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  3. SHARE OF SEARCH                                                */
/* ================================================================== */

const sosData = [
  { kw: "Celulares", brand: 30.2, comp1: 21.6, comp2: 14.3, comp3: 8.1 },
  { kw: "Aspiradores", brand: 26.8, comp1: 18.9, comp2: 15.2, comp3: 12.4 },
  { kw: "Máquinas de lavar", brand: 7.5, comp1: 32.1, comp2: 19.8, comp3: 14.3 },
  { kw: "Geladeiras", brand: 22.1, comp1: 28.4, comp2: 16.7, comp3: 9.2 },
  { kw: "Notebooks", brand: 14.3, comp1: 19.7, comp2: 11.2, comp3: 9.8 },
];

const sosT = {
  title: "Share of Search por Categoria",
  sub: "Retail 1 · Top 20 resultados · Última semana",
  headers: ["Categoria", "Sua marca", "Conc. A", "Conc. B", "Conc. C"],
  kpis: [{ l: "Sua marca", v: "30,2%", c: "#4D4A9D" }, { l: "Concorrente A", v: "21,6%", c: "#FF177B" }, { l: "Concorrente B", v: "14,3%", c: "#f59e0b" }, { l: "Keywords ativas", v: "87", c: "#6b7280" }],
};

export function ShareOfSearchMockup() {
  const t = sosT;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight">
      <div className="px-3 py-2.5" style={{ background: headerBg }}><p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{t.title}</p><p className="text-[9px] text-white/40">{t.sub}</p></div>
      <div className="grid grid-cols-4 gap-px bg-gray-100">
        {t.kpis.map((kpi) => <div key={kpi.l} className="bg-white px-2 py-2.5 text-center"><p className="font-bold tabular-nums" style={{ color: kpi.c, fontSize: "20px" }}>{kpi.v}</p><p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.l}</p></div>)}
      </div>
      <div className="overflow-x-auto">
      <table className="w-full sm:min-w-[480px]">
        <thead><tr className="bg-gray-50">{t.headers.map((h, idx) => {
          const hideMobile = [3, 4].includes(idx);
          return <th key={h} className={`px-2 py-2 text-left font-bold text-gray-500 uppercase tracking-wider ${hideMobile ? 'hidden sm:table-cell' : ''}`} style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>;
        })}</tr></thead>
        <tbody>
          {sosData.map((r) => (
            <tr key={r.kw}>
              <td className="px-2 py-2 font-semibold text-gray-700" style={{ borderBottom: cellBorder }}>{r.kw}</td>
              <td className="px-2 py-2" style={{ borderBottom: cellBorder }}><MiniBar value={r.brand} max={40} color="#4D4A9D" /></td>
              <td className="px-2 py-2" style={{ borderBottom: cellBorder }}><MiniBar value={r.comp1} max={40} color="#FF177B" /></td>
              <td className="hidden sm:table-cell px-2 py-2" style={{ borderBottom: cellBorder }}><MiniBar value={r.comp2} max={40} color="#f59e0b" /></td>
              <td className="hidden sm:table-cell px-2 py-2" style={{ borderBottom: cellBorder }}><MiniBar value={r.comp3} max={40} color="#6b7280" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  4. CONTENT COMPLIANCE                                             */
/* ================================================================== */

const contentRows = [
  { sku: "SKU-4821", name: "Aspirador Pro 2000W", images: 6, title: true, desc: true, attrs: 12, video: true, rich: true, score: 95 },
  { sku: "SKU-3392", name: "Micro-ondas Digital 30L", images: 4, title: true, desc: true, attrs: 8, video: false, rich: true, score: 78 },
  { sku: "SKU-7710", name: "Geladeira Frost Free 340L", images: 3, title: true, desc: false, attrs: 6, video: false, rich: false, score: 52 },
  { sku: "SKU-1155", name: "Máquina de Lavar 12kg", images: 5, title: true, desc: true, attrs: 10, video: true, rich: false, score: 82 },
  { sku: "SKU-9063", name: "Forno de Embutir 65L", images: 2, title: true, desc: false, attrs: 4, video: false, rich: false, score: 38 },
];

const contentT = {
  title: "Conformidade de Conteúdo",
  sub: "Retail 1 · 820 produtos · Última auditoria",
  headers: ["SKU", "Produto", "Imgs", "Título", "Desc.", "Attrs", "Vídeo", "Rich", "Score"],
  kpis: [{ l: "Score médio", v: "69%", c: "#f59e0b" }, { l: "PDPs completas", v: "42%", c: "#4D4A9D" }, { l: "Sem enriquecido", v: "58%", c: "#ef4444" }],
};

export function ContentComplianceMockup() {
  const t = contentT;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight">
      <div className="px-3 py-2.5" style={{ background: headerBg }}><p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{t.title}</p><p className="text-[9px] text-white/40">{t.sub}</p></div>
      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {t.kpis.map((kpi) => <div key={kpi.l} className="bg-white px-2 py-2.5 text-center"><p className="font-bold tabular-nums" style={{ color: kpi.c, fontSize: "20px" }}>{kpi.v}</p><p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.l}</p></div>)}
      </div>
      <div className="overflow-x-auto">
      <table className="w-full sm:min-w-[520px]">
        <thead><tr className="bg-gray-50">{t.headers.map((h, idx) => {
          const hideMobile = [0, 3, 4, 5, 6].includes(idx);
          return <th key={h} className={`px-1.5 py-2 text-left font-bold text-gray-500 uppercase tracking-wider ${hideMobile ? 'hidden sm:table-cell' : ''}`} style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>;
        })}</tr></thead>
        <tbody>
          {contentRows.map((r) => (
            <tr key={r.sku} className={r.score < 50 ? "bg-red-50/40" : ""}>
              <td className="hidden sm:table-cell px-1.5 py-2 text-gray-400 tabular-nums font-mono" style={{ borderBottom: cellBorder }}>{r.sku}</td>
              <td className="px-1.5 py-2 font-semibold text-gray-700 truncate max-w-[110px] sm:max-w-[90px]" style={{ borderBottom: cellBorder }}>{r.name}</td>
              <td className="px-1.5 py-2 tabular-nums text-center font-semibold" style={{ borderBottom: cellBorder, color: r.images >= 5 ? "#166534" : r.images >= 3 ? "#92400e" : "#dc2626" }}>{r.images}</td>
              <td className="hidden sm:table-cell px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><CheckMark ok={r.title} /></td>
              <td className="hidden sm:table-cell px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><CheckMark ok={r.desc} /></td>
              <td className="hidden sm:table-cell px-1.5 py-2 tabular-nums text-center text-gray-600" style={{ borderBottom: cellBorder }}>{r.attrs}</td>
              <td className="hidden sm:table-cell px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><CheckMark ok={r.video} /></td>
              <td className="px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><CheckMark ok={r.rich} /></td>
              <td className="px-1.5 py-2 text-center" style={{ borderBottom: cellBorder }}><ScoreBadge score={r.score} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  5. AI EXECUTIVE REPORT                                            */
/* ================================================================== */

const reportT = {
  tag: "Análise IA", auto: "Gerado automaticamente",
  headline: "Sua marca reforçou a liderança, mas aumentaram rupturas e perdas-chave",
  summary: "Sua marca mantém 40,6% de participação no melhor preço no Retail 1, superando o Retail 2 e o Retail 3, com 47,3% de win rate. No entanto, as rupturas cresceram para 10,5% e há 120 produtos com perdas superiores a 10%.",
  s1title: "01 Panorama do mercado", s1: ["Sua marca lidera com 40,6% no melhor preço", "Win rate em 47,3%, 2 pontos acima", "Cobertura total do mercado em 72,4%"],
  s2title: "02 Riscos e ações-chave", s2: ["120 produtos com preços >10% acima do melhor", "48 novas rupturas em linha branca", "Perdas de 12,7% e 18,3% em categorias-chave"],
  actions: [{ l: "O que mudou", t: "Win rate subiu para 47,3%, rupturas para 10,5%", c: "#FF177B" }, { l: "Por que importa", t: "Sua marca fica fora da melhor posição em 52,7% do sortimento", c: "#4D4A9D" }, { l: "O que fazer", t: "Repor 48 produtos ausentes, revisar preços de 120 produtos com gap >10%", c: "#10B981" }],
};

export function AiReportMockup() {
  const t = reportT;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-snug">
      <div className="px-4 py-3" style={{ background: headerBg }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold bg-accent/20 text-white border border-accent/30">{t.tag}</span>
          <span className="text-[10px] text-white/40">{t.auto}</span>
        </div>
        <p className="text-sm font-bold text-white leading-snug">{t.headline}</p>
      </div>
      <div className="px-4 py-3 border-b border-gray-100"><p className="text-[11px] text-gray-600 leading-relaxed">{t.summary}</p></div>
      <div className="grid grid-cols-2 gap-px bg-gray-100">
        <div className="bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">{t.s1title}</p>
          <ul className="space-y-1.5 text-[11px] text-gray-600">{t.s1.map((p) => <li key={p} className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{p}</li>)}</ul>
        </div>
        <div className="bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">{t.s2title}</p>
          <ul className="space-y-1.5 text-[11px] text-gray-600">{t.s2.map((p) => <li key={p} className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{p}</li>)}</ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {t.actions.map((a) => (
          <div key={a.l} className="bg-white p-3" style={{ borderLeft: `3px solid ${a.c}` }}>
            <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: a.c }}>{a.l}</p>
            <p className="text-[11px] text-gray-600 leading-relaxed">{a.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
