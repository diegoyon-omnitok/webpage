"use client";

import { BarChart3, LayoutTemplate, Share2 } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/markets/brasil/sections/ProductFeatureCarousel";
import ContentPdpMockup from "./ContentPdpMockup";
import ContentDistributionMockup from "./ContentDistributionMockup";
import ContentAnalyticsMockup from "./ContentAnalyticsMockup";

const labels = ["", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: LayoutTemplate,
    title: "Conteúdo enriquecido para melhorar a experiência de compra nos canais digitais",
    descLead: "Entregamos às marcas as ferramentas para comunicar seus benefícios diretamente na página de produto de cada varejista.",
    desc: "Banners de marca, imagens lifestyle, vídeos, tabelas comparativas, pontos interativos sobre as fotos e conteúdo que se adapta a cada campanha. O Omnitok Content dá ao seu time os formatos para contar a história de cada produto onde o shopper toma a decisão de compra. Alterne entre as duas visualizações para ver a diferença.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <ContentPdpMockup />,
    disableHoverScale: true,
  },
  {
    icon: Share2,
    title: "Distribua seu conteúdo para cada varejista, automaticamente",
    descLead: "Publique uma vez e seu conteúdo enriquecido chega a todos os seus canais ao mesmo tempo.",
    desc: "Nossa tecnologia conecta seu conteúdo diretamente com cada varejista. Você não precisa subir arquivos manualmente nem coordenar com cada canal. Você atualiza na Omnitok e a mudança se reflete em todos os pontos de venda digitais. Atualmente contamos com mais de 150 varejistas conectados no Brasil e na América Latina.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <ContentDistributionMockup />,
  },
  {
    icon: BarChart3,
    title: "Meça quantas pessoas veem seu conteúdo enriquecido",
    descLead: "Saiba exatamente quais SKUs recebem mais visitas, em quais varejistas você concentra mais tráfego e quais são seus produtos mais vistos.",
    desc: "Dashboard de análise que mostra as visitas aos inpages por SKU, a distribuição de tráfego por varejista e os produtos com conteúdo ativo em cada canal. Identifique onde seu conteúdo está gerando mais exposição e quais varejistas precisam de atenção.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <ContentAnalyticsMockup />,
  },
];

export default function ContentCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="Tudo o que sua página de produto precisa para converter melhor"
      sectionSubtitle="Conteúdo enriquecido, distribuição automática e análise de desempenho em uma única plataforma."
      labels={labels}
      features={features}
    />
  );
}
