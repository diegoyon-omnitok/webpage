/**
 * Native SVG/CSS charts for the Cyber Day 2026 blog post.
 * Self-contained, responsive, no external chart library.
 * Omnitok palette: primary #4D4A9D, accent #FF177B, violet #6C63FF, lavender #c084fc.
 */

const PURPLE = "#4D4A9D";
const PINK = "#FF177B";
const VIOLET = "#6C63FF";
const LAVENDER = "#c084fc";

const SEGMENTS = ["Video", "Audio", "Línea Blanca", "Electrodomésticos"] as const;
const SEG_COLORS = [VIOLET, PINK, PURPLE, LAVENDER];

const DAY_LABELS = [
  "01 may", "", "03", "", "05", "", "07", "", "09", "", "11", "", "13", "", "15", "",
  "17", "", "19", "", "21", "", "23", "", "25", "", "27", "", "29", "", "31 may", "", "2 jun",
];

const DISCOUNT_DAILY = [
  1.56, 1.43, 1.5, 1.31, 1.99, 0.62, 0.71, 2.79, 4.23, 4.02, 2.03, -0.3, -0.61, -0.64,
  -0.06, 0.2, 0.13, 0.0, -0.37, -0.45, -0.77, -0.69, 0.4, 0.43, 0.48, -1.05, -0.68, -0.63,
  -0.88, -0.88, -0.63, 9.19, 9.52,
];

const DISPERSION: Record<string, number[]> = {
  Video: [7.4, 7.1, 7.0, 7.0, 8.6, 6.3, 5.9, 6.4, 8.5, 8.6, 8.6, 9.1, 7.4, 8.9, 10.0, 10.9, 10.8, 10.8, 11.0, 8.6, 8.5, 8.5, 9.0, 8.9, 9.0, 10.8, 7.7, 7.7, 8.4, 6.7, 6.8, 30.8, 17.2],
  Audio: [17.7, 19.5, 17.0, 16.7, 15.8, 15.4, 14.0, 14.3, 16.7, 16.7, 17.9, 14.3, 16.7, 15.8, 15.8, 15.8, 17.0, 15.8, 13.8, 13.1, 12.3, 12.0, 12.5, 12.8, 16.7, 13.3, 14.3, 14.0, 13.6, 13.6, 14.3, 17.2, 15.8],
  "Línea Blanca": [8.3, 7.9, 8.0, 8.0, 8.0, 9.4, 9.2, 14.0, 13.8, 11.1, 11.1, 10.7, 9.3, 9.3, 9.6, 10.0, 10.0, 10.0, 8.3, 8.6, 8.0, 6.7, 8.5, 8.6, 8.6, 10.0, 8.3, 8.6, 8.0, 7.8, 7.5, 9.5, 11.1],
  Electrodomésticos: [20.0, 20.0, 20.0, 20.0, 20.0, 20.0, 18.8, 20.0, 21.4, 22.2, 20.0, 20.0, 17.7, 18.2, 16.7, 16.7, 16.7, 16.7, 16.7, 18.9, 17.5, 18.6, 18.6, 18.8, 18.8, 17.7, 17.7, 17.7, 17.2, 17.4, 17.2, 25.0, 23.2],
};

const SEG_DISCOUNT = [
  { name: "Video", value: 6.5, color: VIOLET },
  { name: "Audio", value: 8.4, color: PINK },
  { name: "Línea Blanca", value: 7.5, color: PURPLE },
  { name: "Electrodomésticos", value: 10.5, color: LAVENDER },
];

const DISPERSION_COMPARE = [
  { name: "Video", habitual: 8.4, cyber: 24.0 },
  { name: "Audio", habitual: 15.1, cyber: 16.5 },
  { name: "Línea Blanca", habitual: 9.2, cyber: 10.3 },
  { name: "Electrodomésticos", habitual: 18.6, cyber: 24.1 },
];

const fmt = (v: number) => `${v.toFixed(1).replace(".", ",")}%`;

function ChartFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-card sm:p-6">
      <figcaption className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">{title}</figcaption>
      {children}
    </figure>
  );
}

/* ── Chart 1: Discount by segment (vertical bars) ── */
function DiscountSegment() {
  const max = 12;
  return (
    <ChartFrame title="Descuento real por segmento">
      <div className="flex h-56 items-end justify-around gap-3 sm:gap-6">
        {SEG_DISCOUNT.map((s) => (
          <div key={s.name} className="flex h-full flex-1 flex-col items-center justify-end">
            <span className="mb-2 text-lg font-extrabold text-gray-900">{fmt(s.value)}</span>
            <div
              className="w-full max-w-[64px] rounded-t-lg transition-all"
              style={{ height: `${(s.value / max) * 100}%`, background: `linear-gradient(180deg, ${s.color}, ${s.color}cc)` }}
            />
            <span className="mt-2 text-center text-xs font-semibold text-gray-500">{s.name}</span>
          </div>
        ))}
      </div>
    </ChartFrame>
  );
}

/* ── Chart: Dispersion habitual vs Cyber (grouped bars) ── */
function DispersionCompare() {
  const max = 26;
  return (
    <ChartFrame title="Dispersión de precios: días normales vs Cyber Day">
      <div className="flex h-60 items-end justify-around gap-4">
        {DISPERSION_COMPARE.map((s) => (
          <div key={s.name} className="flex h-full flex-1 flex-col items-center justify-end">
            <div className="flex h-full w-full items-end justify-center gap-1.5">
              <div className="flex h-full flex-col justify-end" style={{ width: "42%" }}>
                <span className="mb-1 text-center text-[11px] font-bold text-primary">{fmt(s.habitual)}</span>
                <div className="rounded-t-md" style={{ height: `${(s.habitual / max) * 100}%`, background: `${VIOLET}99` }} />
              </div>
              <div className="flex h-full flex-col justify-end" style={{ width: "42%" }}>
                <span className="mb-1 text-center text-[11px] font-bold text-accent">{fmt(s.cyber)}</span>
                <div className="rounded-t-md" style={{ height: `${(s.cyber / max) * 100}%`, background: `linear-gradient(180deg, ${PINK}, ${PINK}cc)` }} />
              </div>
            </div>
            <span className="mt-2 text-center text-xs font-semibold text-gray-500">{s.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
        <span className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded" style={{ background: `${VIOLET}99` }} /> Habitual</span>
        <span className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded" style={{ background: PINK }} /> Cyber Day</span>
      </div>
    </ChartFrame>
  );
}

/* ── Line chart helpers (SVG) ── */
const W = 800;
const H = 340;
const PAD = { l: 44, r: 16, t: 16, b: 36 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

function xPos(i: number, n: number) {
  return PAD.l + (n <= 1 ? 0 : (i / (n - 1)) * plotW);
}
function yPos(v: number, yMin: number, yMax: number) {
  return PAD.t + ((yMax - v) / (yMax - yMin)) * plotH;
}
function linePath(data: number[], yMin: number, yMax: number) {
  return data.map((v, i) => `${i === 0 ? "M" : "L"}${xPos(i, data.length).toFixed(1)},${yPos(v, yMin, yMax).toFixed(1)}`).join(" ");
}

/* ── Chart 2: Daily price index, base 100 (curve drops on discount) ── */
function DiscountDaily() {
  // Price indexed to the product's own habitual level: 100 = precio habitual.
  // A real discount pushes the price below 100, so the curve dips down.
  const PRICE_INDEX = DISCOUNT_DAILY.map((d) => 100 - d);
  const yMin = 88;
  const yMax = 103;
  const n = PRICE_INDEX.length;
  const ticks = [90, 92, 94, 96, 98, 100, 102];
  const cyberStart = 31;
  const baseY = yPos(100, yMin, yMax);
  // area between the line and the 100 baseline (the deviation from habitual)
  const area = `${linePath(PRICE_INDEX, yMin, yMax)} L${xPos(n - 1, n).toFixed(1)},${baseY.toFixed(1)} L${xPos(0, n).toFixed(1)},${baseY.toFixed(1)} Z`;

  return (
    <ChartFrame title="Evolución diaria del precio (base 100 = precio habitual)">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Evolución diaria del precio indexado a base 100 durante el período">
        <defs>
          <linearGradient id="discFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={VIOLET} stopOpacity="0.04" />
            <stop offset="100%" stopColor={VIOLET} stopOpacity="0.22" />
          </linearGradient>
        </defs>
        {/* cyber band */}
        <rect x={xPos(cyberStart, n)} y={PAD.t} width={W - PAD.r - xPos(cyberStart, n)} height={plotH} fill={PINK} opacity="0.06" />
        {/* gridlines + y labels */}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={PAD.l} y1={yPos(t, yMin, yMax)} x2={W - PAD.r} y2={yPos(t, yMin, yMax)} stroke="#F0EEF8" strokeWidth="1" />
            <text x={PAD.l - 8} y={yPos(t, yMin, yMax) + 4} textAnchor="end" fontSize="12" fill="#9CA3AF">{t}</text>
          </g>
        ))}
        {/* deviation area + line */}
        <path d={area} fill="url(#discFill)" />
        <path d={linePath(PRICE_INDEX, yMin, yMax)} fill="none" stroke={VIOLET} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {/* base 100 reference line */}
        <line x1={PAD.l} y1={baseY} x2={W - PAD.r} y2={baseY} stroke="#6B7280" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x={PAD.l + 6} y={baseY - 8} textAnchor="start" fontSize="11" fontWeight="700" fill="#6B7280">Precio habitual = 100</text>
        {/* cyber points (the drop) */}
        {PRICE_INDEX.map((v, i) =>
          i >= cyberStart ? <circle key={i} cx={xPos(i, n)} cy={yPos(v, yMin, yMax)} r="5" fill={PINK} /> : null
        )}
        {/* x labels */}
        {DAY_LABELS.map((lbl, i) =>
          lbl ? <text key={i} x={xPos(i, n)} y={H - 12} textAnchor="middle" fontSize="10" fill="#9CA3AF">{lbl}</text> : null
        )}
      </svg>
      <p className="mt-1 text-center text-xs italic text-gray-400">Metodología: el precio de cada producto se llevó a base 100 sobre su nivel habitual (la mediana de sus precios en el período). Así, 100 = precio habitual y bajo 100 = más barato de lo normal. El tramo sombreado marca los días del Cyber Day.</p>
    </ChartFrame>
  );
}

/* ── Chart 4: Dispersion daily per segment (multi-line) ── */
function DispersionDaily() {
  const yMin = 5;
  const yMax = 32;
  const n = DISPERSION.Video.length;
  const ticks = [5, 10, 15, 20, 25, 30];
  const cyberStart = 31;

  return (
    <ChartFrame title="Dispersión entre retailers, día a día por segmento">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Dispersión de precios entre retailers por segmento">
        <rect x={xPos(cyberStart, n)} y={PAD.t} width={W - PAD.r - xPos(cyberStart, n)} height={plotH} fill={PINK} opacity="0.06" />
        {ticks.map((t) => (
          <g key={t}>
            <line x1={PAD.l} y1={yPos(t, yMin, yMax)} x2={W - PAD.r} y2={yPos(t, yMin, yMax)} stroke="#F0EEF8" strokeWidth="1" />
            <text x={PAD.l - 8} y={yPos(t, yMin, yMax) + 4} textAnchor="end" fontSize="12" fill="#9CA3AF">{t}%</text>
          </g>
        ))}
        {SEGMENTS.map((seg, si) => (
          <path key={seg} d={linePath(DISPERSION[seg], yMin, yMax)} fill="none" stroke={SEG_COLORS[si]} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        ))}
        {DAY_LABELS.map((lbl, i) =>
          lbl ? <text key={i} x={xPos(i, n)} y={H - 12} textAnchor="middle" fontSize="10" fill="#9CA3AF">{lbl}</text> : null
        )}
      </svg>
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
        {SEGMENTS.map((seg, si) => (
          <span key={seg} className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded" style={{ background: SEG_COLORS[si] }} />
            {seg}
          </span>
        ))}
      </div>
    </ChartFrame>
  );
}

export const cyberDayCharts: Record<string, React.ReactNode> = {
  "chart-discount-segment": <DiscountSegment />,
  "chart-discount-daily": <DiscountDaily />,
  "chart-dispersion-daily": <DispersionDaily />,
  "chart-dispersion-compare": <DispersionCompare />,
};
