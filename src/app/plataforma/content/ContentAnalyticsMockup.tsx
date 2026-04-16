"use client";

const headerBg = "linear-gradient(135deg, #211f4b 0%, #2d2a6e 100%)";
const cellBorder = "1px solid #e5e7eb";

const topSkus = [
  { sku: "SKU-1021", name: "Smart TV OLED 55\"", retailer: "Retail 1", views: 12840 },
  { sku: "SKU-1035", name: "Freidora de Aire 6L", retailer: "Retail 2", views: 9650 },
  { sku: "SKU-1042", name: "Refrigerador NF 340L", retailer: "Retail 1", views: 8320 },
  { sku: "SKU-1058", name: "Lavadora Auto 12kg", retailer: "Retail 3", views: 7100 },
  { sku: "SKU-1063", name: "Notebook Pro 15\"", retailer: "Retail 2", views: 5480 },
];

const retailerBreakdown = [
  { name: "Retail 1", skus: 124, views: 48200, pct: 38 },
  { name: "Retail 2", skus: 98, views: 31500, pct: 25 },
  { name: "Retail 3", skus: 87, views: 22800, pct: 18 },
  { name: "Retail 4", skus: 65, views: 14200, pct: 11 },
  { name: "Otros", skus: 42, views: 10100, pct: 8 },
];

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-20 h-2.5 rounded-full bg-gray-100 overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export default function ContentAnalyticsMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight" style={{ fontSize: "11px" }}>
      <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: headerBg }}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Content Analytics</p>
          <p className="text-[9px] text-white/40">416 SKUs con contenido activo · Últimos 30 días</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold bg-white/10 text-white/70">Exportar</span>
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold bg-accent/80 text-white">Filtrar</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {[
          { label: "Visitas totales", value: "126.8K", color: "#4D4A9D" },
          { label: "SKUs activos", value: "416", color: "#FF177B" },
          { label: "Retailers con contenido", value: "12", color: "#22c55e" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white px-2 py-2.5 text-center">
            <p className="font-bold tabular-nums" style={{ color: kpi.color, fontSize: "20px" }}>{kpi.value}</p>
            <p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="px-3 pt-2.5 pb-1">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">SKUs más visitados</p>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            {["SKU", "Producto", "Retailer", "Visitas"].map((h) => (
              <th key={h} className="px-2 py-1.5 text-left font-bold text-gray-500 uppercase tracking-wider" style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topSkus.map((r) => (
            <tr key={r.sku}>
              <td className="px-2 py-1.5 text-gray-400 tabular-nums font-mono" style={{ borderBottom: cellBorder }}>{r.sku}</td>
              <td className="px-2 py-1.5 font-semibold text-gray-700 truncate max-w-[90px]" style={{ borderBottom: cellBorder }}>{r.name}</td>
              <td className="px-2 py-1.5 text-gray-500" style={{ borderBottom: cellBorder }}>{r.retailer}</td>
              <td className="px-2 py-1.5 tabular-nums font-semibold text-gray-800" style={{ borderBottom: cellBorder }}>{r.views.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-3 pt-3 pb-1 border-t border-gray-100">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Visitas por retailer</p>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            {["Retailer", "SKUs activos", "Visitas", "% del total", ""].map((h) => (
              <th key={h} className="px-2 py-1.5 text-left font-bold text-gray-500 uppercase tracking-wider" style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {retailerBreakdown.map((r) => (
            <tr key={r.name}>
              <td className="px-2 py-1.5 font-semibold text-gray-700" style={{ borderBottom: cellBorder }}>{r.name}</td>
              <td className="px-2 py-1.5 tabular-nums text-gray-600 text-center" style={{ borderBottom: cellBorder }}>{r.skus}</td>
              <td className="px-2 py-1.5 tabular-nums font-semibold text-gray-800" style={{ borderBottom: cellBorder }}>{r.views.toLocaleString()}</td>
              <td className="px-2 py-1.5 tabular-nums text-gray-600" style={{ borderBottom: cellBorder }}>{r.pct}%</td>
              <td className="px-2 py-1.5" style={{ borderBottom: cellBorder }}><Bar pct={r.pct * 2.5} color={r.pct >= 25 ? "#4D4A9D" : r.pct >= 15 ? "#FF177B" : "#d1d5db"} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
