/**
 * HTML mockups for the MAP monitoring page (English only).
 * All data is dummy / illustrative.
 */

const headerBg = "linear-gradient(135deg, #211f4b 0%, #2d2a6e 100%)";
const cellBorder = "1px solid #e5e7eb";

/* ================================================================== */
/*  1. MAP VIOLATIONS MATRIX                                          */
/* ================================================================== */

const violationRows = [
  { sku: "SKU-2041", product: "Wireless Earbuds Pro", map: "$79.99", seller: "ElectroDeals", price: "$62.99", gap: "-21.3%", channel: "Amazon", status: "Violation" },
  { sku: "SKU-3188", product: "Smart Watch Series 5", map: "$249.99", seller: "TechBargains", price: "$199.99", gap: "-20.0%", channel: "Walmart", status: "Violation" },
  { sku: "SKU-1455", product: "Bluetooth Speaker 40W", map: "$129.99", seller: "SoundOutlet", price: "$109.99", gap: "-15.4%", channel: "Amazon", status: "Violation" },
  { sku: "SKU-5523", product: "Robot Vacuum X200", map: "$399.99", seller: "HomeDeals Pro", price: "$349.99", gap: "-12.5%", channel: "eBay", status: "Pending" },
  { sku: "SKU-7891", product: "Air Purifier HEPA 3", map: "$199.99", seller: "CleanAir Store", price: "$189.99", gap: "-5.0%", channel: "Amazon", status: "Resolved" },
];

export function MapViolationsMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight" style={{ fontSize: "11px" }}>
      <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: headerBg }}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">MAP Violations Dashboard</p>
          <p className="text-[9px] text-white/40">342 products monitored · 12 active violations</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold bg-white/10 text-white/70">Export</span>
          <span className="rounded px-2 py-0.5 text-[9px] font-semibold bg-accent/80 text-white">Send alerts</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-px bg-gray-100">
        {[
          { label: "Active violations", value: "12", color: "#ef4444" },
          { label: "Pending review", value: "5", color: "#f59e0b" },
          { label: "Resolved (30d)", value: "38", color: "#22c55e" },
          { label: "Detection accuracy", value: "99.5%", color: "#4D4A9D" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white px-2 py-2.5 text-center">
            <p className="font-bold tabular-nums" style={{ color: kpi.color, fontSize: "20px" }}>{kpi.value}</p>
            <p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            {["SKU", "Product", "MAP Price", "Seller", "Listed Price", "Gap", "Channel", "Status"].map((h) => (
              <th key={h} className="px-1.5 py-2 text-left font-bold text-gray-500 uppercase tracking-wider" style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {violationRows.map((r) => (
            <tr key={r.sku} className={r.status === "Violation" ? "bg-red-50/40" : ""}>
              <td className="px-1.5 py-2 text-gray-400 tabular-nums font-mono" style={{ borderBottom: cellBorder }}>{r.sku}</td>
              <td className="px-1.5 py-2 font-semibold text-gray-700 truncate max-w-[90px]" style={{ borderBottom: cellBorder }}>{r.product}</td>
              <td className="px-1.5 py-2 tabular-nums text-gray-600" style={{ borderBottom: cellBorder }}>{r.map}</td>
              <td className="px-1.5 py-2 text-gray-600 truncate max-w-[70px]" style={{ borderBottom: cellBorder }}>{r.seller}</td>
              <td className="px-1.5 py-2 tabular-nums font-semibold" style={{ borderBottom: cellBorder, color: "#dc2626" }}>{r.price}</td>
              <td className="px-1.5 py-2 tabular-nums font-semibold" style={{ borderBottom: cellBorder, color: "#dc2626" }}>{r.gap}</td>
              <td className="px-1.5 py-2 text-gray-500" style={{ borderBottom: cellBorder }}>{r.channel}</td>
              <td className="px-1.5 py-2" style={{ borderBottom: cellBorder }}>
                <span className="rounded px-1.5 py-0.5 text-[9px] font-semibold" style={{
                  background: r.status === "Violation" ? "#fee2e2" : r.status === "Pending" ? "#fef3c7" : "#dcfce7",
                  color: r.status === "Violation" ? "#991b1b" : r.status === "Pending" ? "#92400e" : "#166534",
                }}>{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================================================================== */
/*  2. UNAUTHORIZED SELLERS                                           */
/* ================================================================== */

const sellerRows = [
  { seller: "ElectroDeals", channel: "Amazon", listings: 24, violations: 18, firstSeen: "Mar 2026", status: "Unauthorized" },
  { seller: "TechBargains", channel: "Walmart", listings: 12, violations: 8, firstSeen: "Jan 2026", status: "Unauthorized" },
  { seller: "SoundOutlet", channel: "Amazon", listings: 9, violations: 6, firstSeen: "Feb 2026", status: "Under review" },
  { seller: "HomeDeals Pro", channel: "eBay", listings: 31, violations: 3, firstSeen: "Dec 2025", status: "Unauthorized" },
  { seller: "PrimeGoods", channel: "Amazon", listings: 7, violations: 0, firstSeen: "Apr 2026", status: "Authorized" },
];

export function UnauthorizedSellersMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight">
      <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: headerBg }}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Seller Authorization Tracker</p>
          <p className="text-[9px] text-white/40">83 sellers identified · 3 channels</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {[
          { label: "Unauthorized sellers", value: "14", color: "#ef4444" },
          { label: "Under review", value: "3", color: "#f59e0b" },
          { label: "Authorized sellers", value: "66", color: "#22c55e" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white px-2 py-2.5 text-center">
            <p className="font-bold tabular-nums" style={{ color: kpi.color, fontSize: "20px" }}>{kpi.value}</p>
            <p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            {["Seller", "Channel", "Listings", "Violations", "First seen", "Status"].map((h) => (
              <th key={h} className="px-1.5 py-2 text-left font-bold text-gray-500 uppercase tracking-wider" style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sellerRows.map((r) => (
            <tr key={r.seller} className={r.status === "Unauthorized" ? "bg-red-50/40" : ""}>
              <td className="px-1.5 py-2 font-semibold text-gray-700" style={{ borderBottom: cellBorder }}>{r.seller}</td>
              <td className="px-1.5 py-2 text-gray-500" style={{ borderBottom: cellBorder }}>{r.channel}</td>
              <td className="px-1.5 py-2 tabular-nums text-center text-gray-600" style={{ borderBottom: cellBorder }}>{r.listings}</td>
              <td className="px-1.5 py-2 tabular-nums text-center font-semibold" style={{ borderBottom: cellBorder, color: r.violations > 5 ? "#dc2626" : r.violations > 0 ? "#f59e0b" : "#22c55e" }}>{r.violations}</td>
              <td className="px-1.5 py-2 text-gray-400" style={{ borderBottom: cellBorder }}>{r.firstSeen}</td>
              <td className="px-1.5 py-2" style={{ borderBottom: cellBorder }}>
                <span className="rounded px-1.5 py-0.5 text-[9px] font-semibold" style={{
                  background: r.status === "Unauthorized" ? "#fee2e2" : r.status === "Under review" ? "#fef3c7" : "#dcfce7",
                  color: r.status === "Unauthorized" ? "#991b1b" : r.status === "Under review" ? "#92400e" : "#166534",
                }}>{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================================================================== */
/*  3. MAP ENFORCEMENT TRACKER                                        */
/* ================================================================== */

const enforcementRows = [
  { seller: "ElectroDeals", product: "Wireless Earbuds Pro", alert: "Apr 10", response: "Apr 11", resolved: true, daysOpen: 1 },
  { seller: "TechBargains", product: "Smart Watch Series 5", alert: "Apr 8", response: "Pending", resolved: false, daysOpen: 7 },
  { seller: "SoundOutlet", product: "Bluetooth Speaker 40W", alert: "Apr 5", response: "Apr 7", resolved: true, daysOpen: 2 },
  { seller: "HomeDeals Pro", product: "Robot Vacuum X200", alert: "Apr 3", response: "Apr 12", resolved: false, daysOpen: 12 },
  { seller: "QuickSell Inc", product: "Air Purifier HEPA 3", alert: "Mar 28", response: "Mar 29", resolved: true, daysOpen: 1 },
];

export function MapEnforcementMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-tight">
      <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: headerBg }}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Enforcement Action Tracker</p>
          <p className="text-[9px] text-white/40">38 alerts sent · Last 30 days</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-px bg-gray-100">
        {[
          { label: "Alerts sent", value: "38", color: "#4D4A9D" },
          { label: "Avg. resolution", value: "2.4d", color: "#22c55e" },
          { label: "Still open", value: "5", color: "#f59e0b" },
          { label: "Resolution rate", value: "87%", color: "#FF177B" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white px-2 py-2.5 text-center">
            <p className="font-bold tabular-nums" style={{ color: kpi.color, fontSize: "20px" }}>{kpi.value}</p>
            <p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            {["Seller", "Product", "Alert sent", "Response", "Days open", "Status"].map((h) => (
              <th key={h} className="px-1.5 py-2 text-left font-bold text-gray-500 uppercase tracking-wider" style={{ borderBottom: cellBorder, fontSize: "8px" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enforcementRows.map((r) => (
            <tr key={`${r.seller}-${r.product}`} className={!r.resolved && r.daysOpen > 5 ? "bg-red-50/40" : ""}>
              <td className="px-1.5 py-2 font-semibold text-gray-700" style={{ borderBottom: cellBorder }}>{r.seller}</td>
              <td className="px-1.5 py-2 text-gray-600 truncate max-w-[90px]" style={{ borderBottom: cellBorder }}>{r.product}</td>
              <td className="px-1.5 py-2 text-gray-500" style={{ borderBottom: cellBorder }}>{r.alert}</td>
              <td className="px-1.5 py-2" style={{ borderBottom: cellBorder, color: r.response === "Pending" ? "#f59e0b" : "#6b7280" }}>{r.response}</td>
              <td className="px-1.5 py-2 tabular-nums text-center font-semibold" style={{ borderBottom: cellBorder, color: r.daysOpen > 5 ? "#dc2626" : r.daysOpen > 2 ? "#f59e0b" : "#22c55e" }}>{r.daysOpen}d</td>
              <td className="px-1.5 py-2" style={{ borderBottom: cellBorder }}>
                <span className="rounded px-1.5 py-0.5 text-[9px] font-semibold" style={{
                  background: r.resolved ? "#dcfce7" : "#fef3c7",
                  color: r.resolved ? "#166534" : "#92400e",
                }}>{r.resolved ? "Resolved" : "Open"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================================================================== */
/*  4. MAP AI REPORT                                                  */
/* ================================================================== */

export function MapAiReportMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white text-[11px] leading-snug">
      <div className="px-4 py-3" style={{ background: headerBg }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold bg-accent/20 text-white border border-accent/30">AI Analysis</span>
          <span className="text-[10px] text-white/40">Auto-generated</span>
        </div>
        <p className="text-sm font-bold text-white leading-snug">MAP compliance improved, but 3 repeat offenders require escalation</p>
      </div>
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-[11px] text-gray-600 leading-relaxed">
          Overall MAP compliance reached 94.2% this month, up from 91.8%. However, 3 unauthorized sellers account for 67% of active violations. ElectroDeals and TechBargains have been non-compliant for 60+ days despite repeated alerts.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-gray-100">
        <div className="bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">01 Compliance overview</p>
          <ul className="space-y-1.5 text-[11px] text-gray-600">
            <li className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />94.2% overall MAP compliance rate</li>
            <li className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />38 violations resolved in last 30 days</li>
            <li className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Average resolution time improved to 2.4 days</li>
          </ul>
        </div>
        <div className="bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">02 Risks requiring action</p>
          <ul className="space-y-1.5 text-[11px] text-gray-600">
            <li className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />3 repeat offenders with 60+ days non-compliant</li>
            <li className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />eBay channel showing 2x more violations than Amazon</li>
            <li className="flex items-start gap-1.5"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />Wireless Earbuds Pro is most violated product (18 cases)</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {[
          { label: "What changed", text: "Compliance up to 94.2%, but repeat offenders persist", color: "#FF177B" },
          { label: "Why it matters", text: "3 sellers account for 67% of violations, eroding margin across channels", color: "#4D4A9D" },
          { label: "What to do", text: "Escalate ElectroDeals and TechBargains, increase eBay monitoring frequency", color: "#10B981" },
        ].map((a) => (
          <div key={a.label} className="bg-white p-3" style={{ borderLeft: `3px solid ${a.color}` }}>
            <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: a.color }}>{a.label}</p>
            <p className="text-[11px] text-gray-600 leading-relaxed">{a.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
