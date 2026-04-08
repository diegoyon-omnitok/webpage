import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const canonicalUrl = "/es/recursos/blog/cyberday-ventas-online-ecommerce";
const siteOrigin = "https://omnitok.com";
const HERO_IMAGE_PATH = "/recursos/blog/cyberday-ventas-online-hero.jpg";
const heroImageAbsolute = `${siteOrigin}${HERO_IMAGE_PATH}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CyberDay: cómo potenciar las ventas online en eventos de alta demanda",
  description:
    "Claves para preparar tu ecommerce antes del CyberDay: contenido de producto, atención al cliente, promociones y anticipación para convertir más en fechas de alta demanda.",
  datePublished: "2024-06-01",
  dateModified: "2024-06-01",
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
  title: "CyberDay: claves para potenciar ventas online en ecommerce",
  description:
    "Cómo preparar tu marca para el CyberDay y otros eventos de alta demanda: contenido emocional, atención al cliente con IA, promociones personalizadas y anticipación logística.",
  alternates: { canonical: `${siteOrigin}${canonicalUrl}` },
  openGraph: {
    title: "CyberDay: claves para potenciar ventas online en ecommerce",
    description:
      "Estrategias probadas para que tu marca convierta más durante el CyberDay: experiencia de producto, IA conversacional y preparación con anticipación.",
    images: [{ url: heroImageAbsolute, alt: "CyberDay — shoppers navegando productos con descuento en evento de ventas online" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberDay: claves para potenciar ventas online en ecommerce",
    description:
      "Estrategias probadas para que tu marca convierta más durante el CyberDay: experiencia de producto, IA conversacional y preparación con anticipación.",
    images: [heroImageAbsolute],
  },
};

export default function CyberdayArticuloPage() {
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
                alt="CyberDay: shoppers navegando una amplia variedad de productos a precios con descuento en un evento de ventas online"
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
                <Clock size={12} /> 8 min de lectura
              </span>
              <span>·</span>
              <time dateTime="2024-06-01">1 jun 2024</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-balance">
              CyberDay: cómo potenciar las ventas online en eventos de alta demanda
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
                El <strong className="text-gray-900">CyberDay</strong> se ha convertido en uno de los eventos
                de ventas online más esperados del año por los consumidores. En los tres días que duró, se
                ofreció una amplia variedad de productos a precios reducidos, atrayendo a miles de{" "}
                <strong className="text-gray-900">shoppers</strong> en todo el país. Este año no fue la
                excepción: el crecimiento superó el{" "}
                <strong className="text-gray-900">20&nbsp;% en la primera hora de ventas</strong> respecto a
                2023, reflejando que los chilenos se sienten cada vez más cómodos con las compras online.
              </p>
              <p>
                De acuerdo con la última información entregada por la{" "}
                <strong className="text-gray-900">Cámara de Comercio de Santiago (CCS)</strong>, las ventas
                acumuladas en las primeras 24 horas alcanzaron los{" "}
                <strong className="text-gray-900">200 millones de dólares</strong> (180 mil millones de pesos),
                un crecimiento del <strong className="text-gray-900">13&nbsp;% nominal</strong> respecto al
                Cyber anterior.
              </p>
              <p>
                El éxito de esta edición puede atribuirse principalmente a una mejora sustantiva en la
                infraestructura tecnológica —servidores y sistemas capaces de soportar el alto tráfico sin
                caídas— y a una mayor oferta de productos, con{" "}
                <strong className="text-gray-900">781 marcas participantes</strong> en 2024.
              </p>
              <blockquote className="border-l-4 border-primary pl-5 italic text-gray-600 my-6">
                &quot;Ha ido construyendo una reputación como el evento más importante tanto para los actores del
                comercio como para los consumidores. Es la fecha que esperan para la compra de bienes y
                servicios. Es un evento que genera en torno a US$500 millones.&quot;
                <footer className="mt-2 text-xs not-italic text-gray-500">
                  — George Lever, gerente de estudios de la CCS
                </footer>
              </blockquote>
            </section>

            {/* Ventas online */}
            <section aria-labelledby="ventas-online">
              <h2 id="ventas-online" className="text-xl font-bold text-gray-900 mb-4">
                Ventas online en Chile: proyección de crecimiento del 8&nbsp;% en 2024
              </h2>
              <p>
                En Chile, el <strong className="text-gray-900">comercio electrónico</strong> se ha convertido
                en un canal de ventas clave para el retail. Hace apenas una década, las plataformas de retail
                no superaban los 1.000 millones de dólares en ventas anuales. Durante la pandemia, ese volumen
                superó los <strong className="text-gray-900">11.000 millones de dólares</strong>.
              </p>
              <p>
                Según Milton Inostroza Muñoz, director de la Escuela de Ingeniería Comercial de la Universidad
                de Talca, la proyección de{" "}
                <strong className="text-gray-900">ventas online puede alcanzar los 11.500 millones de dólares</strong>{" "}
                en 2024. Los datos de la Cámara Nacional del Comercio muestran que, por primera vez en ocho
                trimestres, el comercio electrónico en Chile registró una{" "}
                <strong className="text-gray-900">variación positiva del 0,6&nbsp;%</strong> en el primer
                trimestre del año (sin considerar alimentos), con expectativas de{" "}
                <strong className="text-gray-900">tasas de dos dígitos a partir de 2025</strong>.
              </p>
            </section>

            {/* IA y vínculo emocional */}
            <section aria-labelledby="ia-emocional">
              <h2 id="ia-emocional" className="text-xl font-bold text-gray-900 mb-4">
                Inteligencia Artificial y vínculo emocional: la tendencia que está dando resultados
              </h2>
              <p>
                Suena paradójico, pero es parte de la realidad actual: cada vez más empresas usan{" "}
                <strong className="text-gray-900">Inteligencia Artificial</strong> para generar un vínculo
                emocional con sus potenciales consumidores. Y lo que puede resultar aún más contradictorio es
                que efectivamente es una estrategia que está dando resultados.
              </p>
              <p>
                Los consumidores ya están familiarizados con el uso de IA en plataformas de streaming —como
                Netflix, que sugiere contenido según preferencias anteriores—. Esta misma tendencia se está
                aplicando con más fuerza en eventos de alta demanda y en la{" "}
                <strong className="text-gray-900">experiencia de compra online</strong> en general, para
                personalizar las recomendaciones de producto y aumentar la conversión.
              </p>
            </section>

            {/* Cómo potenciar ventas */}
            <section aria-labelledby="como-potenciar">
              <h2 id="como-potenciar" className="text-xl font-bold text-gray-900 mb-4">
                ¿Cómo potenciar las ventas online en eventos de alta demanda?
              </h2>
              <p>
                Las fechas clave del retail —Día de la Madre, CyberDay, Día del Padre, entre otras— pueden
                ser una gran oportunidad para impulsar las ventas. Pero este crecimiento no ocurre solo: viene
                de una <strong className="text-gray-900">preparación bien estudiada</strong> que incluye
                análisis de mercado, automatización y conocimiento profundo del cliente.
              </p>
              <p>
                La competencia por la atención del comprador será feroz. Desde{" "}
                <strong className="text-gray-900">Omnitok</strong>, plataforma que mejora la{" "}
                <Link
                  href={canonicalRoutes.latam.content}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  experiencia de producto en páginas de retail
                </Link>
                , compartimos cuatro recomendaciones clave:
              </p>

              {/* Recomendaciones */}
              <ol className="list-decimal list-outside pl-5 space-y-6 my-6 text-left">
                <li>
                  <strong className="text-gray-900">El contenido emocional es clave.</strong>{" "}
                  Para marcar la diferencia, el contenido emocional es un aliado indispensable. Nutrir videos,
                  storytelling y descripciones dinámicas con datos del comportamiento de los usuarios permite
                  personalizar las{" "}
                  <Link
                    href={canonicalRoutes.latam.dsa}
                    className="text-primary font-semibold underline-offset-2 hover:underline"
                  >
                    páginas de producto
                  </Link>{" "}
                  con contenido relevante que cautive a los compradores potenciales.
                </li>
                <li>
                  <strong className="text-gray-900">Entrega una atención al cliente de alta calidad.</strong>{" "}
                  Tanto el equipo humano como los{" "}
                  <Link
                    href={canonicalRoutes.latam.assistant}
                    className="text-primary font-semibold underline-offset-2 hover:underline"
                  >
                    asistentes virtuales
                  </Link>{" "}
                  deben estar entrenados para resolver dudas de forma rápida y empática. Si usás IA
                  Conversacional, optimizala para anticipar preguntas frecuentes y derivar casos complejos a
                  un agente humano sin fricciones.
                </li>
                <li>
                  <strong className="text-gray-900">Que tus promociones y ofertas sean realmente especiales.</strong>{" "}
                  Hacé seguimiento del comportamiento de los usuarios con determinados productos y ajustá las
                  promociones en tiempo real. Usá segmentación para personalizar ofertas y, si detectás
                  interés en ciertos ítems, potenciá las ventas adicionales con productos complementarios para
                  aumentar el valor promedio del carrito.
                </li>
                <li>
                  <strong className="text-gray-900">Prepárate con mucha anticipación.</strong>{" "}
                  Diseñá estrategias y promociones con tiempo de antelación para prever contratiempos y
                  ejecutar toda la logística necesaria. Eso incluye contar con suficiente inventario para
                  satisfacer la demanda y garantizar entregas rápidas y eficientes.
                </li>
              </ol>
            </section>

            {/* Cierre */}
            <div className="mt-10 pt-8 border-t border-gray-200 max-w-2xl mx-auto text-center space-y-6">
              <p className="font-medium text-gray-900 !text-center text-balance leading-relaxed">
                El CyberDay trae tráfico masivo.
                <br />
                Solo las marcas que preparan su experiencia digital de producto con anticipación
                lograrán convertir ese tráfico en ventas reales y sostenibles.
              </p>
              <p className="font-medium text-gray-900 !text-center text-balance leading-relaxed">
                Las fechas clave no se improvisan.
                <br />
                Se diseñan desde la experiencia del comprador.
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
                Si tu equipo está evaluando cómo mejorar la{" "}
                <strong className="text-gray-800">experiencia de producto</strong> y la{" "}
                <strong className="text-gray-800">ejecución en plataformas digitales</strong> antes del
                próximo evento de alta demanda, podés revisar cómo Omnitok ayuda a escalar el{" "}
                <Link
                  href={canonicalRoutes.latam.content}
                  className="text-primary font-semibold underline-offset-2 hover:underline"
                >
                  contenido de producto
                </Link>{" "}
                en múltiples retailers, o coordinar una conversación vía{" "}
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
