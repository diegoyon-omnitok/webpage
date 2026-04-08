"use client";

import { Network, TrendingUp, MessageSquare } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";

const labels = ["", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: MessageSquare,
    title: "Centraliza todas tus conversaciones en un solo lugar.",
    desc: "Gestiona WhatsApp, tu sitio web, redes sociales y canales de retail desde una única plataforma. Coordina agentes humanos y Chatbot sin perder el contexto de cada conversación.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    imageSrc: "/plataforma/assistant/page-4ta-rev-img_assistant_1-4-1024x922.png",
    imageAlt: "Centraliza conversaciones de WhatsApp, web y redes sociales en una sola plataforma",
  },
  {
    icon: Network,
    title: "Recomienda el producto que tus clientes realmente necesitan.",
    desc: "Nuestro agente conversa con el cliente, entiende sus necesidades y se conecta al catálogo de productos en tiempo real (propio o de retailers) para entregar recomendaciones relevantes y precisas.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: "/plataforma/assistant/page-img_assistant_1-2-1024x922.png",
    imageAlt: "Agente que recomienda productos conectado al catálogo en tiempo real",
  },
  {
    icon: TrendingUp,
    title: "Entrega respuestas precisas en todo tu proceso de postventa.",
    desc: "Nuestro asistente virtual se conecta a tus sistemas internos para resolver dudas y ejecutar acciones relacionadas con entregas, devoluciones y garantías. Al operar como un agente de IA conversacional, responde con información actualizada y automatiza procesos sin intervención manual.",
    accent: "from-[#FF177B] to-[#EC4899]",
    dot: "#FF177B",
    imageSrc: "/plataforma/assistant/page-4ta-rev-img_assistant_1-3-1024x922.png",
    imageAlt: "Asistente virtual de postventa para entregas, devoluciones y garantías",
  },
];

export default function AssistantFeatures() {
  return (
    <ProductFeatureCarousel
      sectionTitle="¿Por qué elegir Omnitok Assistant?"
      sectionSubtitle="Activa un asistente en el PDP y en tus canales: Omnitok Assistant conecta catálogo, sistemas y retailers para responder con precisión y ejecutar acciones en tiempo real."
      labels={labels}
      features={features}
    />
  );
}
