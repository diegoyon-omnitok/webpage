"use client";

import { Database, Share2, ShieldCheck } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/markets/brasil/sections/ProductFeatureCarousel";

const labels = ["", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: Database,
    title: "Unifique seu catálogo em uma única fonte de informação.",
    desc: "Todas as informações dos seus produtos ficam unificadas, atualizadas e sempre disponíveis em uma única plataforma.",
    accent: "from-[#6EC1E4] to-[#1F87B5]",
    dot: "#1F87B5",
    imageSrc: "/plataforma/connect/page-4ta-rev-img-connect-1-2.png",
    imageAlt: "Omnitok PIM — catálogo unificado em uma única fonte de informação",
  },
  {
    icon: Share2,
    title: "Adapte automaticamente o conteúdo a cada canal.",
    descLead: "Um conteúdo, muitos formatos de publicação.",
    desc: "Publique sem complicações: o Omnitok PIM ajusta seu conteúdo ao formato correto para cada varejista e evita erros e/ou rejeições desnecessárias.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: "/plataforma/connect/page-4ta-rev-img-connect-1-3.png",
    imageAlt: "Omnitok PIM — conteúdo adaptado ao formato de cada varejista",
  },
  {
    icon: ShieldCheck,
    title: "Garanta a consistência da sua marca em todos os canais digitais.",
    descLead: "Controle e validação antes de ir ao ar.",
    desc: "Publique exatamente o que você quer mostrar, com conteúdo validado e unificado, sem depender de edições de terceiros.",
    accent: "from-[#1F87B5] to-[#6EC1E4]",
    dot: "#1F87B5",
    imageSrc: "/plataforma/connect/page-4ta-rev-img-connect-1-4.png",
    imageAlt: "Omnitok PIM — validação e consistência de marca em todos os canais",
  },
];

export default function ConnectCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="Por que escolher o Omnitok PIM?"
      sectionSubtitle="Gerencie e distribua o conteúdo dos seus produtos a partir de um só lugar. O Omnitok PIM centraliza todas as informações do seu catálogo digital e as adapta automaticamente aos formatos exigidos por cada varejista ou canal de venda."
      labels={labels}
      features={features}
    />
  );
}
