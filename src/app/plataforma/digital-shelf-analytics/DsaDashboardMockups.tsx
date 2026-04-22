/**
 * Bilingual HTML mockups (es/en) replicating the Omnitok DSA dashboard.
 * All data is dummy / illustrative.
 */

type Locale = "es" | "en";

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
  { id: "10241", brand: "Brand A", model: "Vacuum Pro 2000W", cat: "Appliances", r1: "$89,990", r1note: "+4% R2", r2: null, r3: "$84,990", r4: null, gap: "+5.9%", winner: "Retail 3", winTag: "blue", statusEs: "3-20% atrás", statusEn: "3-20% behind" },
  { id: "10382", brand: "Brand A", model: "Microwave Digital 30L", cat: "Kitchen", r1: "$59,990", r1note: null, r2: null, r3: null, r4: null, gap: "Best", winner: "Retail 1", winTag: "purple", statusEs: "Ganando", statusEn: "Winning" },
  { id: "10455", brand: "Brand B", model: "Fridge NF 340L", cat: "Appliances", r1: "$349,990", r1note: "+12% R2", r2: "$389,990", r3: "$312,500", r4: null, gap: "+12.0%", winner: "Retail 3", winTag: "blue", statusEs: "20%+ atrás", statusEn: "20%+ behind" },
  { id: "10523", brand: "Brand A", model: "Washer Auto 12kg", cat: "Laundry", r1: null, r1note: null, r2: "$234,990", r3: "$229,990", r4: "$229,990", gap: "-2.1%", winner: "Retail 2", winTag: "green", statusEs: "3-20% atrás", statusEn: "3-20% behind" },
  { id: "10671", brand: "Brand C", model: "Built-in Oven 65L", cat: "Kitchen", r1: "$169,900", r1note: "+3% R3", r2: "$164,990", r3: null, r4: null, gap: "Best", winner: "Retail 1", winTag: "purple", statusEs: "Empatado", statusEn: "Tied" },
];

const pricingI18n = {
  es: { title: "Matriz de Precios por Producto", sub: "820 productos visibles · Precio efectivo", export: "Exportar", expand: "Expandir", headers: ["ID", "Marca", "Producto", "Cat.", "Retail 1", "Retail 2", "Retail 3", "Retail 4", "Brecha", "Ganador", "Estado"] },
  en: { title: "Product Pricing Matrix", sub: "820 products visible · Effective price", export: "Export", expand: "Expand", headers: ["ID", "Brand", "Product", "Cat.", "Retail 1", "Retail 2", "Retail 3", "Retail 4", "Gap", "Winner", "Status"] },
};

export function PricingMatrixMockup({ locale = "es" }: { locale?: Locale }) {
  const t = pricingI18n[locale];
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
            const status = locale === "en" ? r.statusEn : r.statusEs;
            const isWinning = status === "Ganando" || status === "Winning";
            const isTied = status === "Empatado" || status === "Tied";
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
                <td className="px-1.5 py-2 tabular-nums font-semibold" style={{ borderBottom: cellBorder, color: r.gap === "Best" || r.gap.startsWith("-") ? "#16a34a" : "#dc2626" }}>{r.gap}</td>
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
  { sku: "SKU-4821", name: "Vacuum Pro 2000W", r1: "active", r2: "active", r3: "out", r4: "active", days: 0 },
  { sku: "SKU-3392", name: "Microwave Digital 30L", r1: "active", r2: "out", r3: "active", r4: "out", days: 3 },
  { sku: "SKU-7710", name: "Fridge NF 340L", r1: "out", r2: "out", r3: "active", r4: "active", days: 7 },
  { sku: "SKU-1155", name: "Washer Auto 12kg", r1: "active", r2: "active", r3: "active", r4: "active", days: 0 },
  { sku: "SKU-9063", name: "Built-in Oven 65L", r1: "out", r2: "active", r3: "out", r4: "out", days: 14 },
];

const availI18n = {
  es: { title: "Control de Disponibilidad", sub: "820 productos · 4 retailers", active: "Activo", out: "Agotado", headers: ["SKU", "Producto", "Retail 1", "Retail 2", "Retail 3", "Retail 4", "Días out"], kpis: [{ l: "Cobertura total", v: "72.4%", c: "#4D4A9D" }, { l: "Productos ausentes", v: "48", c: "#ef4444" }, { l: "Quiebres (7d)", v: "12", c: "#f59e0b" }, { l: "Recuperados (7d)", v: "8", c: "#22c55e" }] },
  en: { title: "Availability Control", sub: "820 products · 4 retailers", active: "Active", out: "Out of stock", headers: ["SKU", "Product", "Retail 1", "Retail 2", "Retail 3", "Retail 4", "Days out"], kpis: [{ l: "Total coverage", v: "72.4%", c: "#4D4A9D" }, { l: "Absent products", v: "48", c: "#ef4444" }, { l: "Stockouts (7d)", v: "12", c: "#f59e0b" }, { l: "Recovered (7d)", v: "8", c: "#22c55e" }] },
};

export function AvailabilityMockup({ locale = "es" }: { locale?: Locale }) {
  const t = availI18n[locale];
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
  { kwEs: "Celulares", kwEn: "Smartphones", brand: 30.2, comp1: 21.6, comp2: 14.3, comp3: 8.1 },
  { kwEs: "Aspiradoras", kwEn: "Vacuums", brand: 26.8, comp1: 18.9, comp2: 15.2, comp3: 12.4 },
  { kwEs: "Lavadoras", kwEn: "Washers", brand: 7.5, comp1: 32.1, comp2: 19.8, comp3: 14.3 },
  { kwEs: "Refrigeradores", kwEn: "Refrigerators", brand: 22.1, comp1: 28.4, comp2: 16.7, comp3: 9.2 },
  { kwEs: "Notebooks", kwEn: "Laptops", brand: 14.3, comp1: 19.7, comp2: 11.2, comp3: 9.8 },
];

const sosI18n = {
  es: { title: "Share of Search por Categoría", sub: "Retail 1 · Top 20 resultados · Última semana", headers: ["Categoría", "Tu marca", "Comp. A", "Comp. B", "Comp. C"], kpis: [{ l: "Tu marca", v: "30.2%", c: "#4D4A9D" }, { l: "Competidor A", v: "21.6%", c: "#FF177B" }, { l: "Competidor B", v: "14.3%", c: "#f59e0b" }, { l: "Keywords activas", v: "87", c: "#6b7280" }] },
  en: { title: "Share of Search by Category", sub: "Retail 1 · Top 20 results · Last week", headers: ["Category", "Your brand", "Comp. A", "Comp. B", "Comp. C"], kpis: [{ l: "Your brand", v: "30.2%", c: "#4D4A9D" }, { l: "Competitor A", v: "21.6%", c: "#FF177B" }, { l: "Competitor B", v: "14.3%", c: "#f59e0b" }, { l: "Active keywords", v: "87", c: "#6b7280" }] },
};

export function ShareOfSearchMockup({ locale = "es" }: { locale?: Locale }) {
  const t = sosI18n[locale];
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
            <tr key={r.kwEs}>
              <td className="px-2 py-2 font-semibold text-gray-700" style={{ borderBottom: cellBorder }}>{locale === "en" ? r.kwEn : r.kwEs}</td>
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
  { sku: "SKU-4821", name: "Vacuum Pro 2000W", images: 6, title: true, desc: true, attrs: 12, video: true, rich: true, score: 95 },
  { sku: "SKU-3392", name: "Microwave Digital 30L", images: 4, title: true, desc: true, attrs: 8, video: false, rich: true, score: 78 },
  { sku: "SKU-7710", name: "Fridge NF 340L", images: 3, title: true, desc: false, attrs: 6, video: false, rich: false, score: 52 },
  { sku: "SKU-1155", name: "Washer Auto 12kg", images: 5, title: true, desc: true, attrs: 10, video: true, rich: false, score: 82 },
  { sku: "SKU-9063", name: "Built-in Oven 65L", images: 2, title: true, desc: false, attrs: 4, video: false, rich: false, score: 38 },
];

const contentI18n = {
  es: { title: "Cumplimiento de Contenido", sub: "Retail 1 · 820 productos · Última auditoría", headers: ["SKU", "Producto", "Imgs", "Título", "Desc.", "Attrs", "Video", "Rich", "Score"], kpis: [{ l: "Score promedio", v: "69%", c: "#f59e0b" }, { l: "PDPs completas", v: "42%", c: "#4D4A9D" }, { l: "Sin enriquecido", v: "58%", c: "#ef4444" }] },
  en: { title: "Content Compliance", sub: "Retail 1 · 820 products · Last audit", headers: ["SKU", "Product", "Imgs", "Title", "Desc.", "Attrs", "Video", "Rich", "Score"], kpis: [{ l: "Avg. score", v: "69%", c: "#f59e0b" }, { l: "Complete PDPs", v: "42%", c: "#4D4A9D" }, { l: "No rich content", v: "58%", c: "#ef4444" }] },
};

export function ContentComplianceMockup({ locale = "es" }: { locale?: Locale }) {
  const t = contentI18n[locale];
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

const reportI18n = {
  es: {
    tag: "Análisis IA", auto: "Generado automáticamente",
    headline: "Tu marca reforzó liderazgo, pero aumentaron ausencias y pérdidas clave",
    summary: "Tu marca mantiene el 40.6% de participación al mejor precio en Retail 1, superando a Retail 2 y Retail 3, con 47.3% de tasa de ganancia. Sin embargo, las ausencias crecieron a 10.5% y hay 120 productos con pérdidas superiores al 10%.",
    s1title: "01 Panorama del mercado", s1: ["Tu marca lidera con 40.6% al mejor precio", "Tasa de victoria a 47.3%, 2 puntos arriba", "Cobertura total del mercado en 72.4%"],
    s2title: "02 Riesgos y acciones clave", s2: ["120 productos con precios >10% sobre el mejor", "48 ausencias nuevas en línea blanca", "Pérdidas de 12.7% y 18.3% en categorías clave"],
    actions: [{ l: "Qué cambió", t: "Victoria subió a 47.3%, ausencias a 10.5%", c: "#FF177B" }, { l: "Por qué importa", t: "Tu marca queda fuera de la mejor posición en 52.7% del surtido", c: "#4D4A9D" }, { l: "Qué hacer", t: "Reponer 48 ausentes, revisar precios de 120 productos con brecha >10%", c: "#10B981" }],
  },
  en: {
    tag: "AI Analysis", auto: "Auto-generated",
    headline: "Your brand strengthened leadership, but stockouts and losses increased",
    summary: "Your brand holds 40.6% share at the best price in Retail 1, ahead of Retail 2 and Retail 3, with a 47.3% win rate. However, stockouts grew to 10.5% and 120 products show losses above 10%.",
    s1title: "01 Market overview", s1: ["Your brand leads with 40.6% at the best price", "Win rate at 47.3%, 2 points above average", "Total market coverage at 72.4%"],
    s2title: "02 Risks and key actions", s2: ["120 products priced >10% above the best", "48 new stockouts in home appliances", "Losses of 12.7% and 18.3% in key categories"],
    actions: [{ l: "What changed", t: "Win rate rose to 47.3%, stockouts grew to 10.5%", c: "#FF177B" }, { l: "Why it matters", t: "Your brand is out of the best position in 52.7% of the assortment", c: "#4D4A9D" }, { l: "What to do", t: "Restock 48 absent products, review pricing on 120 items with >10% gap", c: "#10B981" }],
  },
};

export function AiReportMockup({ locale = "es" }: { locale?: Locale }) {
  const t = reportI18n[locale];
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

