"use client";

import { LayoutGrid, SlidersHorizontal, BellRing, FileText, Sparkles } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/markets/brasil/sections/ProductFeatureCarousel";
import {
  PricingMatrixMockup,
  AvailabilityMockup,
  ShareOfSearchMockup,
  ContentComplianceMockup,
  AiReportMockup,
} from "./DsaDashboardMockups";

const labels = ["", "", "", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: SlidersHorizontal,
    title: "Monitoramento de preços com contexto, não só números",
    descLead: "Detecte variações de preço antes que elas impactem sua margem.",
    desc: "Visualize como os preços dos seus produtos se movem em cada varejista, compare com a concorrência e detecte descontos não planejados ou mudanças de pricing em tempo real. A IA do DSA analisa padrões e diz quais são os movimentos mais relevantes, sem que você precise revisar cada canal manualmente.",
    accent: "from-[#393689] to-[#4D4A9D]",
    dot: "#393689",
    customVisual: <PricingMatrixMockup />,
  },
  {
    icon: LayoutGrid,
    title: "Disponibilidade e rupturas de estoque sob controle",
    descLead: "Saiba quais produtos estão esgotados antes de perder a venda.",
    desc: "Identifique em tempo real quais SKUs estão ativos, esgotados ou com cobertura parcial em cada varejista. Acesse históricos para entender padrões de ruptura e receba alertas automáticos. O agente de IA prioriza quais ausências atacar primeiro conforme o impacto comercial: ele não só avisa, ele diz onde agir.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <AvailabilityMockup />,
  },
  {
    icon: BellRing,
    title: "Share of Search: visibilidade frente à concorrência",
    descLead: "Entenda quem ganha a atenção do shopper em cada categoria.",
    desc: "Analise a posição dos seus produtos nos resultados de busca de cada varejista. Compare sua presença com a dos concorrentes nas primeiras posições e distinga se sua visibilidade vem de posicionamento orgânico ou de investimento em ads. Com a IA, você pode perguntar diretamente qual concorrente mais cresceu e por quê.",
    accent: "from-[#393689] to-[#6366f1]",
    dot: "#393689",
    customVisual: <ShareOfSearchMockup />,
  },
  {
    icon: FileText,
    title: "Conformidade de conteúdo em cada PDP",
    descLead: "Verifique se suas páginas de produto têm tudo o que é preciso para converter.",
    desc: "Avalie a completude de imagens, títulos, descrições, atributos, vídeos e conteúdo enriquecido em cada varejista. Controle se as diretrizes de marca são aplicadas de forma consistente e detecte quais SKUs têm as PDPs mais fracas. Pergunte à IA quais páginas estão custando mais em conversão.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <ContentComplianceMockup />,
  },
  {
    icon: Sparkles,
    title: "Relatórios executivos gerados por IA",
    descLead: "De milhões de dados a um resumo acionável em segundos.",
    desc: "O agente de IA do DSA gera análises executivas automáticas com o que mudou, por que importa e o que fazer. Ideal para QBRs, reuniões de time ou decisões rápidas. Você não precisa montar relatórios: basta perguntar ou ativar a análise e receber um resumo respaldado por dados verificáveis de todos os seus canais.",
    accent: "from-[#393689] to-[#4D4A9D]",
    dot: "#393689",
    customVisual: <AiReportMockup />,
  },
];

export default function AnalyticsCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="Monitoramento inteligente: dados + IA para agir"
      sectionSubtitle="Cada feature do DSA combina monitoramento contínuo com uma camada de inteligência artificial que transforma sinais em respostas concretas para o seu time."
      labels={labels}
      features={features}
    />
  );
}
