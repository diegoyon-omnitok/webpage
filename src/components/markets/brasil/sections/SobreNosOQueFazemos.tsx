"use client";

import {
  TrendingUp,
  FileWarning,
  LayoutTemplate,
  Store,
  MessageCircle,
  Sparkles,
  Layers,
} from "lucide-react";

const pasos = [
  {
    icon: TrendingUp,
    titulo: "Da análise à ação",
    desc: "Passamos de medir o ecommerce a permitir que as marcas atuem diretamente sobre ele, fechando a lacuna entre dado e impacto.",
    year: "O início",
  },
  {
    icon: FileWarning,
    titulo: "O problema do conteúdo",
    desc: "As marcas perdiam vendas por páginas de produto desatualizadas, inconsistentes ou incompletas nos varejistas. Esse foi o ponto de partida.",
    year: "O diagnóstico",
  },
  {
    icon: LayoutTemplate,
    titulo: "Omnitok Content como núcleo",
    desc: "Construímos uma solução para gerenciar, enriquecer e sincronizar o conteúdo de produto em múltiplas plataformas a partir de um só lugar.",
    year: "A solução",
  },
  {
    icon: Store,
    titulo: "Execução no canal",
    desc: "Integramos diretamente com os sistemas dos varejistas para garantir que o conteúdo certo chegue ao lugar certo, sempre.",
    year: "A integração",
  },
  {
    icon: MessageCircle,
    titulo: "Interação com o consumidor",
    desc: "Adicionamos assistência ao vivo e IA conversacional dentro da PDP para acompanhar o shopper no momento da decisão.",
    year: "A conexão",
  },
  {
    icon: Sparkles,
    titulo: "Evolução para IA",
    desc: "Incorporamos inteligência artificial para automatizar tarefas, personalizar experiências e escalar a execução sem aumentar a equipe.",
    year: "A evolução",
  },
  {
    icon: Layers,
    titulo: "Plataforma integrada",
    desc: "Hoje a Omnitok é um ecossistema completo: conteúdo, análise, conexão com varejistas e IA, tudo em uma única plataforma.",
    year: "Hoje",
  },
];

export default function SobreNosOQueFazemos() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg,#FF177B 0%,#4D4A9D 100%)" }}
          >
            <span className="text-xs font-semibold text-white">Nossa evolução</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Isto é o que fazemos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Construímos um sistema que permite às marcas passar de entender o ecommerce a controlá-lo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical central */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 md:left-1/2 md:-translate-x-px"
            style={{ background: "linear-gradient(180deg,#FF177B 0%,#4D4A9D 100%)" }}
          />

          <div className="space-y-10">
            {pasos.map((paso, i) => {
              const Icon = paso.icon;
              const isRight = i % 2 === 0;

              return (
                <div
                  key={paso.titulo}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Nodo central */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-50"
                      style={{ background: "linear-gradient(135deg,#FF177B 0%,#4D4A9D 100%)" }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Tarjeta — alterna izquierda/derecha en desktop, siempre a la derecha en mobile */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isRight ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 group">
                      {/* Etiqueta de etapa */}
                      <span
                        className="inline-block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "#FF177B" }}
                      >
                        {paso.year}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                        {paso.titulo}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {paso.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
