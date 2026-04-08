"use client";

import { BarChart3, CalendarDays, Layers, MousePointerClick } from "lucide-react";
import contentDashboardImage from "../../../../omnitok content dashboard.png";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";

const labels = ["", "", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: Layers,
    title: "Transforma tu página de producto en una experiencia visual completa.",
    desc: "Crea contenido enriquecido dentro de la PDP para destacar los beneficios de tu marca con textos, imágenes y videos que fortalecen la experiencia de producto en los principales retailers.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    imageSrc: "/plataforma/content/omnitok-omnitok-content.png",
    imageAlt: "Inpage — experiencia visual en la página de producto",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Analítica",
    descLead: "Monitorea el rendimiento de tu contenido enriquecido en cada retailer.",
    desc: "Visualiza qué SKUs reciben más visitas en los inpages, qué retailers concentran mayor tráfico y cómo interactúan los usuarios con tu contenido. Obtén una vista clara del desempeño de cada implementación para detectar oportunidades de optimización y tomar mejores decisiones.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: contentDashboardImage,
    imageAlt: "Dashboard de analítica de Omnitok Content con métricas de rendimiento por SKU y retailer",
  },
  {
    icon: MousePointerClick,
    title: "Hotspots Interactivos",
    descLead: "Convierte cada imagen en un punto de interacción.",
    desc: "Destaca los beneficios de tus productos con puntos clicables en el carrusel de imágenes, guiando al usuario hacia lo que realmente importa y elevando la experiencia de producto en cada PDP.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: "/plataforma/content/hotspots-interactivos.png",
    imageAlt: "Hotspots interactivos en el carrusel de imágenes del PDP",
  },
  {
    icon: CalendarDays,
    title: "Contenido Variable",
    descLead: "Adáptate a cada temporada y momento del año, automáticamente.",
    desc: "Personaliza banners y módulos visuales según fechas clave, promociones o campañas específicas en retailers, manteniendo tu contenido enriquecido siempre actualizado.",
    accent: "from-[#FF177B] to-[#EC4899]",
    dot: "#FF177B",
    imageSrc: "/plataforma/content/page-4ta-rev-img-content-1-4.png",
    imageAlt: "Contenido variable por temporada y campañas en el PDP",
  },
];

export default function ContentCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="¿Por qué elegir Omnitok Content?"
      sectionSubtitle="Gestiona y distribuye el contenido de tus PDPs desde un solo lugar. Omnitok Content centraliza la experiencia de producto y la adapta a lo que exige cada retailer o canal de venta."
      labels={labels}
      features={features}
    />
  );
}
