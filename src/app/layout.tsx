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
    logo: `${SITE_URL}/omnitok-logo.svg`,
    sameAs: [
      "https://www.linkedin.com/company/omnitoksolutions/",
    ],
    description:
      "Omnitok is a B2B SaaS platform for brands that sell through retailers and marketplaces, helping them improve digital execution, product content and commercial visibility.",
  };

  return (
    <html lang={htmlLang} className={`${nunitoSans.variable} ${openSans.variable}`}>
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
