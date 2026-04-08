"use client";

import { LayoutGrid, SlidersHorizontal, BellRing, FileText } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";

const labels = ["", "", "", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: SlidersHorizontal,
    title: "Control y monitoreo de precios en retail digital",
    desc: "Supervisa cómo se presentan tus precios en cada retailer y mantén visibilidad sobre la evolución de promociones en el tiempo. Detecta variaciones o descuentos no planificados de forma oportuna, permitiéndote tomar decisiones más informadas, proteger tu estrategia de pricing y mantener coherencia en todos tus canales digitales.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    imageSrc: "/plataforma/digital-shelf-analytics/ODS-web3.png",
    imageAlt: "Monitoreo de precios por retailer en tiempo real",
  },
  {
    icon: LayoutGrid,
    title: "Visibilidad y control de disponibilidad en retailers",
    desc: "Mantén el control total sobre la disponibilidad de tus productos en cada retailer, identificando en tiempo real si están activos o agotados. Accede a históricos para entender patrones de quiebres de stock y recibe alertas automáticas que te permiten reaccionar a tiempo, evitando pérdidas de venta y mejorando tu ejecución en el canal digital.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: "/plataforma/digital-shelf-analytics/ODS-web2.png",
    imageAlt: "Vista unificada del shelf digital con disponibilidad y alertas de stock por retailer",
  },
  {
    icon: BellRing,
    title: "Posicionamiento y visibilidad en buscadores de retail",
    desc: "Analiza cómo se posicionan tus productos dentro de los resultados de búsqueda y categorías clave en cada retailer. Compara la presencia de tu marca frente a la competencia en las primeras posiciones y entiende si tu visibilidad proviene de resultados orgánicos o de inversión en anuncios. Esto te permite optimizar tu estrategia digital y ganar mayor protagonismo en el punto de decisión del shopper.",
    accent: "from-[#FF177B] to-[#EC4899]",
    dot: "#FF177B",
    imageSrc: "/plataforma/digital-shelf-analytics/ODS-web4.png",
    imageAlt: "Dashboard de Share of Shelf con posicionamiento por retailer y keyword",
  },
  {
    icon: FileText,
    title: "Optimización de contenido en fichas de producto",
    desc: "Asegura que tus PDP estén completas y optimizadas, verificando la presencia de todos los elementos clave como imágenes, títulos, descripciones, atributos, videos y contenido enriquecido. Evalúa el uso correcto de palabras clave y la estructura SEO dentro de cada retailer, y controla que los lineamientos de marca se apliquen de forma consistente, fortaleciendo la experiencia y la conversión.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: "/plataforma/digital-shelf-analytics/ODS-web5.png",
    imageAlt: "Dashboard de cumplimiento de contenido en fichas de producto por retailer",
  },
];

export default function AnalyticsCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="¿Por qué elegir Digital Shelf Analytics?"
      sectionSubtitle="Monitorea la ejecución digital desde un solo lugar. Digital Shelf Analytics centraliza señales por SKU y retailer y las traduce en acciones concretas para tu equipo."
      labels={labels}
      features={features}
    />
  );
}
