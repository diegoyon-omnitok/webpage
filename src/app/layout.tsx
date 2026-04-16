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
    default: "Omnitok",
    template: "%s | Omnitok",
  },
  description:
    "Omnitok is a multi-market SaaS platform for brands selling through retailers and marketplaces.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
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
    description:
      "Omnitok is a B2B SaaS platform for brands that sell through retailers and marketplaces, helping them improve digital execution, product content and commercial visibility.",
  };

  const GA_ID = "G-Z26M7SM2Z7";

  return (
    <html lang={htmlLang} className={`${nunitoSans.variable} ${openSans.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
