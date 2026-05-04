import type { Metadata } from "next";
import { headers } from "next/headers";
import { Nunito_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/markets";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Omnitok | Digital Shelf Execution Platform",
    template: "%s | Omnitok",
  },
  description:
    "Omnitok ayuda a marcas a mejorar su ejecucion digital en retailers y marketplaces. Contenido enriquecido, gestion de producto, digital shelf analytics y MAP monitoring.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  alternates: {
    languages: {
      es: "/es",
      "en-US": "/en-us",
      "x-default": "/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Omnitok",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const htmlLang = headerStore.get("x-omni-lang") ?? "en";
  const isUSA = htmlLang === "en" || htmlLang === "en-US";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Omnitok",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/omnitok-logo.svg`,
      width: 180,
      height: 47,
    },
    sameAs: [
      "https://www.linkedin.com/company/omnitoksolutions/",
    ],
    description: isUSA
      ? "Omnitok helps brands monitor MAP violations, detect unauthorized sellers and gain digital shelf visibility across retailers and marketplaces."
      : "Omnitok ayuda a marcas a mejorar su ejecucion digital en retailers y marketplaces. Contenido enriquecido, gestion de producto y digital shelf analytics.",
  };

  const siteNavSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isUSA ? "Omnitok USA Navigation" : "Omnitok LATAM Navigation",
    itemListElement: isUSA
      ? [
          { "@type": "SiteNavigationElement", position: 1, name: "Home", url: `${SITE_URL}/en-us` },
          { "@type": "SiteNavigationElement", position: 2, name: "MAP Monitoring", url: `${SITE_URL}/en-us/map-monitoring` },
          { "@type": "SiteNavigationElement", position: 3, name: "Digital Shelf Analytics", url: `${SITE_URL}/en-us/digital-shelf-analytics` },
          { "@type": "SiteNavigationElement", position: 4, name: "Contact", url: `${SITE_URL}/en-us/contact` },
          { "@type": "SiteNavigationElement", position: 5, name: "Blog", url: `${SITE_URL}/en-us/blog` },
        ]
      : [
          { "@type": "SiteNavigationElement", position: 1, name: "Inicio", url: `${SITE_URL}/es` },
          { "@type": "SiteNavigationElement", position: 2, name: "Contenido Enriquecido", url: `${SITE_URL}/es/contenido-enriquecido` },
          { "@type": "SiteNavigationElement", position: 3, name: "Digital Shelf Analytics", url: `${SITE_URL}/es/digital-shelf-analytics` },
          { "@type": "SiteNavigationElement", position: 4, name: "Gestion de Contenido", url: `${SITE_URL}/es/gestion-de-contenido-de-producto` },
          { "@type": "SiteNavigationElement", position: 5, name: "Contacto", url: `${SITE_URL}/es/contacto` },
          { "@type": "SiteNavigationElement", position: 6, name: "Blog", url: `${SITE_URL}/es/blog` },
        ],
  };

  const GA_ID = "G-Z26M7SM2Z7";
  const CLARITY_ID = "wm0g4yuvc7";

  return (
    <html lang={htmlLang} className={`${nunitoSans.variable} ${openSans.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
