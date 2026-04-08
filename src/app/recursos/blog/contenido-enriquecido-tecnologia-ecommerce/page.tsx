import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const canonicalUrl = "/es/recursos/blog/contenido-enriquecido-tecnologia-ecommerce";
const siteOrigin = "https://omnitok.com";
const HERO_IMAGE_PATH = "/recursos/blog/contenido-enriquecido-tecnologia-hero.webp";
const heroImageAbsolute = `${siteOrigin}${HERO_IMAGE_PATH}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Contenido enriquecido en tecnología: cómo mejorar la experiencia de compra online",
  description:
    "Qué es el contenido enriquecido, por qué es clave en páginas de producto de tecnología y cómo Omnitok ayuda a las marcas a implementarlo en plataformas de retail en LATAM.",
  datePublished: "2024-08-01",
  dateModified: "2024-08-01",
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
  title: "Contenido enriquecido en tecnología: guía para ecommerce",
  description:
    "Cómo el contenido enriquecido —imágenes interactivas, videos, 3D y AR— mejora la conversión en páginas de producto de tecnología y por qué las grandes marcas ya lo usan.",
  alternates: { canonical: `${siteOrigin}${canonicalUrl}` },
  openGraph: {
    title: "Contenido enriquecido en tecnología: guía para ecommerce",
    description:
      "Imágenes interactivas, videos, realidad aumentada y chatbots: cómo el contenido enriquecido aumenta hasta un 30 % la conversión en PDPs de tecnología.",
    images: [{ url: heroImageAbsolute, alt: "Contenido enriquecido en páginas de producto de tecnología — Omnitok" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contenido enriquecido en tecnología: guía para ecommerce",
    description:
      "Imágenes interactivas, videos, realidad aumentada y chatbots: cómo el contenido enriquecido aumenta hasta un 30 % la conversión en PDPs de tecnología.",
    images: [heroImageAbsolute],
  },
};

export default function ContenidoEnriquecidoTecnologiaPage() {
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
                alt="Contenido enriquecido en páginas de producto de tecnología: experiencias interactivas para mejorar la conversión en ecommerce"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
              <span className="font-bold uppercase tracking-wider text-primary">PDPs</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> 8 min de lectura
              </span>
              <span>·</span>
              <time dateTime="2024-08-01">1 ago 2024</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-balance">
              Contenido enriquecido en tecnología: cómo mejorar la experiencia de compra online
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
                La tecnología es un sector de transformación acelerada donde los consumidores esperan que las
                marcas sean innovadoras, tanto en sus productos como en la manera en que los presentan. Los
                clientes actuales —especialmente{" "}
                <strong className="text-gray-900">millennials y Gen Z</strong>— prefieren interactuar con{" "}
                <strong className="text-gray-900">contenido dinámico</strong> que les permita explorar y
                experimentar, dándole mayor valor a la experiencia de compra.
              </p>
              <p>
                Un reporte de <strong className="text-gray-900">Adobe</strong> señaló que el{" "}
                <strong className="text-gray-900">37&nbsp;% de los consumidores</strong> encuestados están
                abiertos a experiencias de realidad aumentada, el 28&nbsp;% está interesado en compras
                inmersivas e interactivas (como el metaverso) y el 26&nbsp;% ha participado en eventos de
                compras en vivo.
              </p>
              <p>
                Una investigación de <strong className="text-gray-900">Deloitte</strong> encontró que las
                marcas que implementan experiencias interactivas —como la realidad aumentada— tienen un{" "}
                <strong className="text-gray-900">41&nbsp;% más de probabilidades</strong> de captar la
                atención del consumidor, mientras que el{" "}
                <strong className="text-gray-900">66&nbsp;% de los consumidores</strong> está interesado en
                usar este tipo de tecnologías mientras compra.
              </p>
              <p>
                En este contexto, el <strong className="text-gray-900">contenido enriquecido</strong> se
                posiciona como un diferenciador clave, permitiendo a las marcas ofrecer experiencias
                memorables y atractivas que convierten visitas en ventas.
              </p>
            </section>

            {/* Qué es contenido enriquecido */}
            <section aria-labelledby="que-es">
              <h2 id="que-es" className="text-xl font-bold text-gray-900 mb-4">
                Contenido enriquecido: marcando la diferencia en las páginas de producto
              </h2>
              <p>
                Hoy no basta con ofrecer especificaciones técnicas y una imagen: los compradores buscan
                experiencias que les proporcionen información clara, visualmente atractiva y significativa
                para sus necesidades. Cuando hablamos de{" "}
                <strong className="text-gray-900">contenido enriquecido</strong>, nos referimos a cualquier
                forma de contenido digital que ofrezca más que información estática: imágenes interactivas,
                videos, animaciones, realidad aumentada o realidad virtual.
              </p>
              <p>
                En las páginas de productos de tecnología, este tipo de contenido permite que los usuarios no
                solo accedan a información, sino que también{" "}
                <strong className="text-gray-900">interactúen con ella de manera personalizada y en tiempo real</strong>,
                generando experiencias visuales y sensoriales que conectan emocionalmente y aumentan el
                engagement.
              </p>
              <p>
                Entre sus ventajas destaca que permite a los clientes visualizar y comprender mejor las
                características de dispositivos complejos como smartphones, notebooks y electrodomésticos
                inteligentes. Por ejemplo, una visualización en 3D de un teléfono permite inspeccionar cada
                ángulo del dispositivo, dando una idea mucho más precisa de su diseño y tamaño.
              </p>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-3">
                Impacto directo en la conversión
              </h3>
              <p>
                El contenido enriquecido ha demostrado ser eficaz en cada etapa del viaje del comprador, desde
                el descubrimiento hasta la decisión de compra. Según investigaciones recientes:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2 my-4 text-left">
                <li>
                  El <strong className="text-gray-900">88&nbsp;% de los consumidores</strong> afirma que el
                  contenido detallado y completo influye en su decisión de compra online.
                </li>
                <li>
                  Las páginas de producto con contenido enriquecido registran una{" "}
                  <strong className="text-gray-900">tasa de conversión hasta un 30&nbsp;% superior</strong>{" "}
                  en comparación con las que tienen contenido estándar.
                </li>
              </ul>
            </section>

            {/* Grandes marcas */}
            <section aria-labelledby="grandes-marcas">
              <h2 id="grandes-marcas" className="text-xl font-bold text-gray-900 mb-4">
                La estrategia favorita de las grandes marcas de tecnología
              </h2>
              <p>
                Para las empresas que venden tecnología, ofrecer contenido enriquecido no solo es una
                estrategia de diferenciación, sino también una forma de mostrar sus capacidades de manera
                tangible. Por eso se ha convertido en una de las estrategias más utilizadas por los líderes
                del sector:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-4 my-4 text-left">
                <li>
                  <strong className="text-gray-900">Apple</strong> utiliza visualización en 3D en su sitio web,
                  permitiendo ver los últimos modelos de iPhone o iPad desde todos los ángulos y probar
                  distintas configuraciones de colores y almacenamiento, brindando una experiencia más
                  inmersiva.
                </li>
                <li>
                  <strong className="text-gray-900">Samsung</strong> usa videos que destacan las
                  funcionalidades clave de sus productos. Un video que muestra las capacidades de cámara de un
                  teléfono —con ejemplos de fotos en distintas condiciones de luz— da vida a características
                  técnicas complejas de forma concreta.
                </li>
                <li>
                  <strong className="text-gray-900">HP</strong> integra un asistente virtual basado en
                  inteligencia artificial que ofrece recomendaciones personalizadas en tiempo real, resolviendo
                  dudas en el momento y aumentando la satisfacción del cliente.
                </li>
              </ul>
            </section>

            {/* Omnitok */}
            <section aria-labelledby="omnitok">
              <h2 id="omnitok" className="text-xl font-bold text-gray-900 mb-4">
                Enriquece el contenido de tus páginas de producto con Omnitok
              </h2>
              <p>
                La era del contenido estático está quedando atrás. El contenido enriquecido se está
                convirtiendo rápidamente en el estándar para las marcas que desean diferenciarse en un mercado
                cada vez más competitivo, especialmente en el segmento tecnológico.
              </p>
              <p>
                Una de las soluciones líderes en América Latina es{" "}
                <strong className="text-gray-900">Omnitok</strong>, que a través de dos herramientas clave
                ayuda a las marcas a gestionar y enriquecer su presencia en el retail online:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-4 my-4 text-left">
                <li>
                  <strong className="text-gray-900">
                    <Link
                      href={canonicalRoutes.latam.content}
                      className="text-primary font-semibold underline-offset-2 hover:underline"
                    >
                      Omnitok Content
                    </Link>
                  </strong>{" "}
                  mejora la experiencia de compra en línea con{" "}
                  <strong className="text-gray-900">fichas de contenido enriquecido</strong>, permitiendo a
                  las marcas gestionar de forma eficiente la información de sus productos en múltiples
                  plataformas de retail: imágenes interactivas, hotspots, banners dinámicos, contenido
                  variable y cross-selling integrado.
                </li>
                <li>
                  <strong className="text-gray-900">
                    <Link
                      href={canonicalRoutes.latam.assistant}
                      className="text-primary font-semibold underline-offset-2 hover:underline"
                    >
                      Omnitok Assistant
                    </Link>
                  </strong>{" "}
                  ofrece asistencia en vivo y personalizada directamente en las páginas de producto de los
                  retailers, integrando chat en vivo, videollamadas y un{" "}
                  <strong className="text-gray-900">bot de IA conversacional</strong> que resuelve dudas en
                  tiempo real y acompaña al comprador hasta la decisión final.
                </li>
              </ul>
              <p>
                Al permitir que los consumidores interactúen de forma más detallada con el producto, se
                reducen las dudas, se potencian las{" "}
                <strong className="text-gray-900">decisiones de compra informadas</strong> y se mejora la
                tasa de conversión. Con Omnitok, las marcas ofrecen un viaje de compra más completo, con el
                enfoque en la personalización y la inmediatez que exige el retail online actual.
              </p>
            </section>

            {/* Cierre */}
            <div className="mt-10 pt-8 border-t border-gray-200 max-w-2xl mx-auto text-center space-y-6">
              <p className="font-medium text-gray-900 !text-center text-balance leading-relaxed">
                El contenido estático ya no alcanza.
                <br />
                Las marcas que lideran en tecnología lo saben: la experiencia de producto es el nuevo
                diferencial competitivo.
              </p>
              <p className="font-medium text-gray-900 !text-center text-balance leading-relaxed">
                El contenido enriquecido no es una tendencia futura.
                <br />
                Es el estándar de hoy.
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
                Si tu equipo quiere implementar{" "}
                <strong className="text-gray-800">contenido enriquecido</strong> en las páginas de producto de
                tus retailers, podés explorar cómo{" "}
                <Link
                  href={canonicalRoutes.latam.content}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  Omnitok Content
                </Link>{" "}
                gestiona fichas y experiencias interactivas, o cómo{" "}
                <Link
                  href={canonicalRoutes.latam.assistant}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  Omnitok Assistant
                </Link>{" "}
                acompaña al comprador en tiempo real. También podés leer sobre{" "}
                <Link
                  href="/es/recursos/blog/cross-selling-up-selling-ecommerce"
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  cross-selling y up-selling en ecommerce
                </Link>{" "}
                o coordinar una conversación vía{" "}
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
