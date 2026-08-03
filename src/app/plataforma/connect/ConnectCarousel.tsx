"use client";

import { Database, Share2, ShieldCheck } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";

const labels = ["", "", ""] as const;

const features: ProductFeatureCarouselItem[] = [
  {
    icon: Database,
    title: "Unifica tu catálogo en una única fuente de información.",
    desc: "Toda la información de tus productos queda unificada, actualizada y siempre disponible desde una sola plataforma.",
    accent: "from-[#6EC1E4] to-[#1F87B5]",
    dot: "#1F87B5",
    imageSrc: "/plataforma/connect/page-4ta-rev-img-connect-1-2.png",
    imageAlt: "Omnitok PIM — catálogo unificado en una sola fuente de información",
  },
  {
    icon: Share2,
    title: "Adapta automáticamente el contenido a cada canal.",
    descLead: "Un contenido, muchos formatos de publicación.",
    desc: "Publica sin complicaciones: Omnitok PIM ajusta tu contenido al formato correcto para cada retailer y evita errores y/o rechazos innecesarios.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    imageSrc: "/plataforma/connect/page-4ta-rev-img-connect-1-3.png",
    imageAlt: "Omnitok PIM — contenido adaptado al formato de cada retailer",
  },
  {
    icon: ShieldCheck,
    title: "Asegura la consistencia de tu marca en todos los canales digitales.",
    descLead: "Control y validación antes de salir al aire.",
    desc: "Publica exactamente lo que quieres mostrar, con contenido validado y unificado sin depender de ediciones de terceros.",
    accent: "from-[#1F87B5] to-[#6EC1E4]",
    dot: "#1F87B5",
    imageSrc: "/plataforma/connect/page-4ta-rev-img-connect-1-4.png",
    imageAlt: "Omnitok PIM — validación y consistencia de marca en todos los canales",
  },
];

export default function ConnectCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="¿Por qué elegir Omnitok PIM?"
      sectionSubtitle="Gestiona y distribuye el contenido de tus productos desde un solo lugar. Omnitok PIM centraliza toda la información de tu catálogo digital y la adapta automáticamente a los formatos que exige cada retailer o canal de venta."
      labels={labels}
      features={features}
    />
  );
}
