import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-sidebar relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-white/80">Plataforma para marcas no Brasil e na América Latina</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Conecte conteúdo, monitoramento e{" "}
          <span className="text-gradient-brand">conversão</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Fale com a Omnitok para centralizar conteúdo de produto, melhorar páginas de produto e ganhar visibilidade sobre sua execução digital em varejistas e marketplaces.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
          <Link
            href={canonicalRoutes.brasil.contacto}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg"
          >
            <Calendar size={18} />
            Fale com nossa equipe
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://lab.omnitok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/15 transition-colors"
          >
            Diagnóstico gratuito
          </a>
        </div>

        <p className="mt-6 text-sm text-white/40">
          Sem compromisso · Resposta em menos de 24 horas · Suporte para equipes no Brasil e na América Latina
        </p>
      </div>
    </section>
  );
}
