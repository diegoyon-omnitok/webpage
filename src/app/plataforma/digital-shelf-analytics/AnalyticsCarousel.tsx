"use client";

import { LayoutGrid, SlidersHorizontal, BellRing, FileText, Sparkles } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";
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
    title: "Monitoreo de precios con contexto, no solo números",
    descLead: "Detecta variaciones de precio antes de que impacten tu margen.",
    desc: "Visualiza cómo se mueven los precios de tus productos en cada retailer, compara contra competencia y detecta descuentos no planificados o cambios de pricing en tiempo real. La IA de DSA analiza patrones y te dice cuáles son los movimientos más relevantes.sin que tengas que revisar cada canal manualmente.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <PricingMatrixMockup />,
  },
  {
    icon: LayoutGrid,
    title: "Disponibilidad y quiebres de stock bajo control",
    descLead: "Conoce qué productos están agotados antes de que pierdas la venta.",
    desc: "Identifica en tiempo real qué SKUs están activos, agotados o con cobertura parcial en cada retailer. Accede a históricos para entender patrones de quiebre y recibe alertas automáticas. El agente de IA prioriza qué ausencias atacar primero según impacto comercial.no solo te avisa, te dice dónde actuar.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <AvailabilityMockup />,
  },
  {
    icon: BellRing,
    title: "Share of Search: visibilidad frente a la competencia",
    descLead: "Entiende quién gana la atención del shopper en cada categoría.",
    desc: "Analiza la posición de tus productos en los resultados de búsqueda de cada retailer. Compara tu presencia contra competidores en las primeras posiciones y distingue si tu visibilidad viene de posicionamiento orgánico o inversión en ads. Con la IA puedes preguntar directamente qué competidor creció más y por qué.",
    accent: "from-[#FF177B] to-[#EC4899]",
    dot: "#FF177B",
    customVisual: <ShareOfSearchMockup />,
  },
  {
    icon: FileText,
    title: "Cumplimiento de contenido en cada PDP",
    descLead: "Verifica que tus fichas de producto tengan todo lo necesario para convertir.",
    desc: "Evalúa la completitud de imágenes, títulos, descripciones, atributos, videos y contenido enriquecido en cada retailer. Controla que los lineamientos de marca se apliquen de forma consistente y detecta qué SKUs tienen las PDPs más débiles. Pregúntale a la IA cuáles son las fichas que más te están costando en conversión.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <ContentComplianceMockup />,
  },
  {
    icon: Sparkles,
    title: "Reportes ejecutivos generados por IA",
    descLead: "De millones de datos a un resumen accionable en segundos.",
    desc: "El agente de IA de DSA genera análisis ejecutivos automáticos con lo que cambió, por qué importa y qué hacer. Ideal para QBRs, reuniones de equipo o decisiones rápidas. No necesitas armar reportes, solo pregunta o activa el análisis y obtén un resumen respaldado por datos verificables de todos tus canales.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <AiReportMockup />,
  },
];

export default function AnalyticsCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="Monitoreo inteligente: datos + IA para actuar"
      sectionSubtitle="Cada feature de DSA combina monitoreo continuo con una capa de inteligencia artificial que transforma señales en respuestas concretas para tu equipo."
      labels={labels}
      features={features}
    />
  );
}
