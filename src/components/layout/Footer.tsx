import Link from "next/link";
import Image from "next/image";
import { canonicalRoutes } from "@/lib/markets";

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Plataforma: [
    { label: "Omnitok Content", href: canonicalRoutes.latam.content },
    { label: "Omnitok Connect", href: canonicalRoutes.latam.connect },
    { label: "Omnitok Assistant", href: canonicalRoutes.latam.assistant },
    { label: "Digital Shelf Analytics", href: canonicalRoutes.latam.dsa },
  ],
  Recursos: [
    { label: "Recursos", href: canonicalRoutes.latam.recursos },
    { label: "Blog", href: canonicalRoutes.latam.blog },
    { label: "Quiénes somos", href: canonicalRoutes.latam.nosotros },
    { label: "Omnitok LABS", href: "https://lab.omnitok.com/", external: true },
  ],
  Empresa: [
    { label: "Nosotros", href: canonicalRoutes.latam.nosotros },
    { label: "Contacto", href: canonicalRoutes.latam.contacto },
    { label: "Conversemos", href: canonicalRoutes.latam.contacto },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-sidebar text-white relative z-10">
      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/omnitok-logo.svg"
                alt="Omnitok"
                width={180}
                height={47}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              La plataforma de ejecución digital en retail para marcas que venden en LATAM.
            </p>
            <p className="mt-4 text-xs font-medium leading-relaxed text-white/35">
              Omnitok, formerly Pervasive Mind.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Omnitok. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href={canonicalRoutes.latam.privacyPolicy} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Política de Privacidad
            </Link>
            <Link href={canonicalRoutes.latam.privacyPolicy} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
