"use client";

const stats = [
  {
    value: "+1m",
    label: "PUBLICACIONES AUDITADAS\nDIARIAMENTE",
  },
  {
    value: "+1,000",
    label: "SITIOS ANALIZADOS\nDIARIAMENTE",
  },
  {
    value: "99.5%",
    label: "ACCURACY\nDE DATOS",
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex min-h-[172px] flex-col items-center justify-center rounded-[1.75rem] px-8 py-10 text-center"
      style={{
        background: "rgba(255,255,255,0.3)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 16px 40px rgba(34, 24, 94, 0.14)",
        backdropFilter: "blur(4px)",
      }}
    >
      <p className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-4 whitespace-pre-line text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
        {label}
      </p>
    </div>
  );
}

export default function AnalyticsStats() {
  return (
    <section className="relative overflow-hidden box-border w-full gradient-hero py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold uppercase text-white tracking-[0.06em]">
            Nuestra tecnología en números
          </h2>
          <p className="mt-5 text-sm leading-relaxed max-w-3xl mx-auto text-white/80 lg:text-base">
            Las principales marcas de tecnología, electrodomésticos, belleza y consumo masivo ya
            confían en Omnitok Digital Shelf Analytics para monitorear su ejecución, detectar
            oportunidades y mejorar su desempeño en retailers y marketplaces.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
