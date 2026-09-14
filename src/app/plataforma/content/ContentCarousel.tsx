"use client";

import { BarChart3, LayoutTemplate, Share2 } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";
import ContentPdpMockup from "./ContentPdpMockup";
import ContentDistributionMockup from "./ContentDistributionMockup";
import ContentAnalyticsMockup from "./ContentAnalyticsMockup";

const labels = ["", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: LayoutTemplate,
    title: "Contenido enriquecido para mejorar la experiencia de compra en los canales digitales",
    descLead: "Entregamos a las marcas las herramientas para comunicar sus beneficios directamente en la página de producto de cada retailer.",
    desc: "Banners de marca, imágenes lifestyle, videos, tablas comparativas, puntos interactivos sobre las fotos y contenido que se adapta a cada campaña. Omnitok Content le da a tu equipo los formatos para contar la historia de cada producto donde el shopper toma la decision de compra. Alterna entre las dos vistas para ver la diferencia.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <ContentPdpMockup />,
    disableHoverScale: true,
  },
  {
    icon: Share2,
    title: "Distribuye tu contenido de forma simple a cada retailer",
    descLead: "Crea y administra tu contenido en Omnitok y entrégalo mediante un script estándar.",
    desc: "Cada retailer implementa el script en sus PDPs y, una vez activo, las actualizaciones realizadas en Omnitok se reflejan automáticamente en el contenido publicado. Más de 150 retailers en LATAM ya utilizan esta tecnología.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <ContentDistributionMockup />,
  },
  {
    icon: BarChart3,
    title: "Mide cuántas personas ven tu contenido enriquecido",
    descLead: "Conoce exactamente qué SKUs reciben más visitas, en qué retailers concentras más tráfico y cuáles son tus productos más vistos.",
    desc: "Dashboard de analítica que te muestra visitas a los inpages por SKU, distribución de tráfico por retailer y los productos con contenido activo en cada canal. Identifica dónde tu contenido está generando más exposición y qué retailers necesitan atención.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <ContentAnalyticsMockup />,
  },
];

export default function ContentCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="Todo lo que tu página de producto necesita para convertir mejor"
      sectionSubtitle="Contenido enriquecido, distribución automática y analítica de rendimiento en una sola plataforma."
      labels={labels}
      features={features}
    />
  );
}
