import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const canonicalUrl = "/es/recursos/blog/cross-selling-up-selling-ecommerce";
const siteOrigin = "https://omnitok.com";
const HERO_IMAGE_PATH = "/recursos/blog/cross-selling-up-selling-hero.webp";
const heroImageAbsolute = `${siteOrigin}${HERO_IMAGE_PATH}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cross-selling y up-selling en ecommerce: cómo aumentar el valor de cada venta",
  description:
    "Qué son el cross-selling y el up-selling, cómo implementarlos en plataformas digitales de retail y cómo Omnitok potencia ambas estrategias para maximizar el ticket de venta.",
  datePublished: "2024-07-01",
  dateModified: "2024-07-01",
  image: heroImageAbsolute,
  author: { "@type": "Organization", name: "Omnitok" },
  publisher: { "@type": "Organization", name: "Omnitok" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin}${canonicalUrl}`,
  },
};

/** SEO: ~58 caracteres */
export const metadata: Metadata = {
  title: "Cross-selling y up-selling en ecommerce: guía práctica",
  description:
    "Aprende qué son el cross-selling y el up-selling, cómo implementarlos en retail digital y cómo Omnitok ayuda a aumentar el valor del carrito con contenido de producto personalizado.",
  alternates: { canonical: `${siteOrigin}${canonicalUrl}` },
  openGraph: {
    title: "Cross-selling y up-selling en ecommerce: guía práctica",
    description:
      "Estrategias de venta cruzada y venta adicional para ecommerce: claves de implementación y cómo Omnitok potencia cada oportunidad en el PDP.",
    images: [{ url: heroImageAbsolute, alt: "Estrategias de cross-selling y up-selling en la era digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-selling y up-selling en ecommerce: guía práctica",
    description:
      "Estrategias de venta cruzada y venta adicional para ecommerce: claves de implementación y cómo Omnitok potencia cada oportunidad en el PDP.",
    images: [heroImageAbsolute],
  },
};

export default function CrossSellingUpSellingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-28 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-left">

          {/* Migas de pan */}
          <nav className="mb-8 flex justify-start" aria-label="Migas de pan">
            <Link
              href={canonicalRoutes.latam.blog}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              <ArrowLeft size={16} />
              Blog
            </Link>
          </nav>

          {/* Cabecera */}
          <header className="mb-10">
            <div className="relative w-full aspect-video max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden bg-gray-100 shadow-md ring-1 ring-gray-200/80">
              <Image
                src={HERO_IMAGE_PATH}
                alt="Implementación de estrategias de cross-selling y up-selling en la era digital: guía para ecommerce"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
              <span className="font-bold uppercase tracking-wider text-primary">Ecommerce</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> 7 min de lectura
              </span>
              <span>·</span>
              <time dateTime="2024-07-01">1 jul 2024</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-balance">
              Cross-selling y up-selling en ecommerce: cómo aumentar el valor de cada venta
            </h1>
          </header>

          {/* Cuerpo */}
          <div
            className="prose-article space-y-8 text-gray-700 leading-relaxed text-left
              [&_p]:text-justify [&_p]:hyphens-auto
              [&_h2]:text-left [&_h2]:text-balance"
          >

            {/* Intro */}
            <section aria-labelledby="intro">
              <p>
                En un mundo altamente conectado, el{" "}
                <strong className="text-gray-900">e-commerce</strong> se ha convertido en un modelo de negocio
                de crecimiento continuo gracias a la confianza de los consumidores. Sin embargo, su éxito no
                solo depende del tipo de productos que ofrece, sino de la habilidad de los equipos de ventas
                para <strong className="text-gray-900">aumentar el valor de cada compra</strong>.
              </p>
              <p>
                Dos de las estrategias más efectivas para lograrlo son el{" "}
                <strong className="text-gray-900">cross-selling</strong> y el{" "}
                <strong className="text-gray-900">up-selling</strong>: técnicas complementarias que impulsan
                las ventas y fortalecen la relación con los clientes en plataformas digitales de retail.
              </p>
            </section>

            {/* Cross-selling */}
            <section aria-labelledby="cross-selling">
              <h2 id="cross-selling" className="text-xl font-bold text-gray-900 mb-4">
                Cross-selling: el sutil arte de &quot;¿sabías que lo necesitabas?&quot;
              </h2>
              <p>
                También conocido como <strong className="text-gray-900">venta cruzada</strong>, el
                cross-selling es una estrategia que busca despertar el interés del consumidor para que adquiera
                productos adicionales a los de su compra original, aumentando así el{" "}
                <strong className="text-gray-900">valor del ticket de venta</strong>.
              </p>
              <p>
                Entre sus principales ventajas está la posibilidad de promocionar otros artículos de tu marca,
                promoviendo la inclusión de todo tu ecosistema de productos y dándole mayor visibilidad a
                aquellos que no son tan populares. Además, permite conocer de forma más sutil los{" "}
                <strong className="text-gray-900">comportamientos de compra</strong> de quienes visitan el
                sitio.
              </p>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-3">
                Claves para implementar el cross-selling con éxito
              </h3>
              <ol className="list-decimal list-outside pl-5 space-y-4 text-left">
                <li>
                  <strong className="text-gray-900">Conocer al consumidor.</strong>{" "}
                  Es el punto de partida de toda la estrategia. Al entender sus gustos y hábitos de consumo,
                  las recomendaciones serán más acertadas y la posibilidad de que terminen en el carrito será
                  mucho mayor.
                </li>
                <li>
                  <strong className="text-gray-900">Que haya relación entre la compra y lo que se ofrece.</strong>{" "}
                  Si alguien está comprando un notebook, lo lógico es sugerirle una impresora o un mouse, no
                  un producto sin conexión con su intención de compra.
                </li>
                <li>
                  <strong className="text-gray-900">Mostrar la venta cruzada como una solución.</strong>{" "}
                  Comunicar de manera efectiva cómo los productos complementarios pueden mejorar la experiencia
                  o resolver las necesidades del cliente.
                </li>
                <li>
                  <strong className="text-gray-900">Esperar el momento preciso.</strong>{" "}
                  La recomendación debe aparecer en el instante justo y de forma no invasiva, para que el
                  shopper pueda verla sin sentir presión para comprar algo más.
                </li>
              </ol>
            </section>

            {/* Up-selling */}
            <section aria-labelledby="up-selling">
              <h2 id="up-selling" className="text-xl font-bold text-gray-900 mb-4">
                Up-selling: transformando una compra ordinaria en una experiencia excepcional
              </h2>
              <p>
                También llamado <strong className="text-gray-900">venta adicional</strong>, el up-selling
                motiva al consumidor a comprar un producto que mejora u optimiza su intención inicial. Esto
                implica un ticket de venta mayor, pero también una{" "}
                <strong className="text-gray-900">experiencia de compra más satisfactoria</strong>.
              </p>
              <p>
                Entre sus ventajas destaca la optimización de la experiencia de compra, que eleva la
                satisfacción del cliente y genera fidelización a largo plazo, reduciendo los costos de
                adquisición de nuevos clientes y bajando el{" "}
                <strong className="text-gray-900">costo por conversión</strong>. Además, ayuda a diseñar una
                red de productos o servicios complementarios que potencian la marca y generan más ingresos por
                venta concretada.
              </p>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-3">
                Cómo aplicar el up-selling de manera efectiva
              </h3>
              <ol className="list-decimal list-outside pl-5 space-y-4 text-left">
                <li>
                  <strong className="text-gray-900">Comprender al cliente.</strong>{" "}
                  Al igual que en el cross-selling, entender lo que busca el cliente es fundamental para que
                  el up-selling sea percibido como un paso natural en su recorrido de compra.
                </li>
                <li>
                  <strong className="text-gray-900">Dominar tu catálogo.</strong>{" "}
                  Es clave tener claridad absoluta sobre los productos que lo componen, para poder promocionar
                  las versiones superiores que entreguen mayor valor al consumidor.
                </li>
                <li>
                  <strong className="text-gray-900">Destacar los beneficios.</strong>{" "}
                  La mejor forma de convencer al shopper es enfatizar las características adicionales o mejoras
                  que ofrece el producto de mayor valor, para que sienta que está ganando con su elección.
                </li>
                <li>
                  <strong className="text-gray-900">El poder de las promociones.</strong>{" "}
                  Las promociones especiales o descuentos exclusivos son un recurso eficaz para que el producto
                  de mayor valor se convierta en una alternativa real para el cliente.
                </li>
              </ol>
            </section>

            {/* Omnitok */}
            <section aria-labelledby="omnitok">
              <h2 id="omnitok" className="text-xl font-bold text-gray-900 mb-4">
                Omnitok: el aliado tecnológico que potencia el cross-selling y el up-selling
              </h2>
              <p>
                Tanto el cross-selling como el up-selling son estrategias realmente efectivas para impulsar las
                ventas y maximizar el valor de cada cliente. Sin embargo, en el caso del primero, actualmente
                los retailers controlan estas herramientas y suelen recomendar productos de otras marcas o
                artículos sin relación con lo que busca el consumidor.
              </p>
              <p>
                Contar con un aliado tecnológico como{" "}
                <strong className="text-gray-900">Omnitok</strong> puede marcar la diferencia: la plataforma
                recomienda los productos de la propia marca del cliente, asegurando relevancia con lo que está
                viendo el consumidor en ese momento y mejorando la{" "}
                <Link
                  href={canonicalRoutes.latam.content}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  experiencia en las páginas de producto en retail
                </Link>
                . Sus herramientas están diseñadas para aprovechar cada oportunidad de venta de forma efectiva:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-4 my-4 text-left">
                <li>
                  <strong className="text-gray-900">Ficha de producto.</strong>{" "}
                  Permite destacar los productos con fichas cargadas de contenido emocional y actualizadas en
                  tiempo real. Gracias a las descripciones detalladas e imágenes de alta calidad, los productos
                  se vuelven más atractivos para los shoppers, incrementando las posibilidades de que agreguen
                  más artículos a sus carritos.
                </li>
                <li>
                  <strong className="text-gray-900">Contenido variable.</strong>{" "}
                  A través de banners dinámicos, permite comunicar promociones y campañas de forma personalizada
                  según la página en la que se encuentre el shopper. Esta característica es especialmente eficaz
                  para el up-selling, ya que las personas se inclinan a comprar productos de mayor valor cuando
                  las ofertas están alineadas con sus intereses.
                </li>
                <li>
                  <strong className="text-gray-900">Hotspot.</strong>{" "}
                  Agrega puntos interactivos a las imágenes estáticas en las páginas de retail, revelando
                  contenido adicional al seleccionarlos. Proporciona una comprensión más profunda de los
                  productos, enriqueciendo la experiencia y facilitando tanto la venta cruzada como el
                  up-selling.
                </li>
                <li>
                  <strong className="text-gray-900">Cross-selling integrado.</strong>{" "}
                  Vital para aumentar el{" "}
                  <strong className="text-gray-900">valor promedio del carrito</strong>: al recomendar
                  productos complementarios relevantes de la propia marca, los clientes descubren artículos que
                  podrían no haber considerado inicialmente.
                </li>
              </ul>
              <p>
                En otras palabras, cada funcionalidad de{" "}
                <Link
                  href={canonicalRoutes.latam.content}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  Omnitok Content
                </Link>{" "}
                le entrega a tu marca el poder y la versatilidad para implementar estrategias de cross-selling
                y up-selling de manera efectiva, ayudando a{" "}
                <strong className="text-gray-900">maximizar las ventas</strong> y ofreciendo una experiencia
                de compra enriquecida y personalizada.
              </p>
            </section>

            {/* Cierre */}
            <div className="mt-10 pt-8 border-t border-gray-200 max-w-2xl mx-auto text-center space-y-6">
              <p className="font-medium text-gray-900 !text-center text-balance leading-relaxed">
                El cross-selling y el up-selling no son trucos de venta.
                <br />
                Son la diferencia entre una compra y una experiencia que fideliza.
              </p>
              <p className="font-medium text-gray-900 !text-center text-balance leading-relaxed">
                Con la tecnología adecuada, cada visita al PDP es una oportunidad.
                <br />
                Omnitok te ayuda a aprovecharla.
              </p>
              <div className="flex justify-center pt-2">
                <Link
                  href={canonicalRoutes.latam.contacto}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-sm"
                >
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* Siguiente paso */}
            <section
              aria-labelledby="siguiente-paso"
              className="border-t border-gray-200 pt-8 text-sm text-gray-600 max-w-2xl mx-auto"
            >
              <h2 id="siguiente-paso" className="text-lg font-bold text-gray-900 mb-3 text-left">
                Siguiente paso
              </h2>
              <p>
                Si tu equipo quiere implementar estrategias de{" "}
                <strong className="text-gray-800">cross-selling y up-selling</strong> en plataformas de retail
                digital, podés explorar cómo Omnitok mejora la{" "}
                <Link
                  href={canonicalRoutes.latam.content}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  experiencia de producto en el PDP
                </Link>
                , o conocer más sobre el{" "}
                <Link
                  href="/es/recursos/blog/cyberday-ventas-online-ecommerce"
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  impacto en eventos de alta demanda como el CyberDay
                </Link>
                . También podés coordinar una conversación directamente vía{" "}
                <Link
                  href={canonicalRoutes.latam.contacto}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  contacto
                </Link>
                .
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
