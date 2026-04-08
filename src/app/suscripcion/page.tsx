import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import HubSpotFormEmbed from "@/components/ui/HubSpotFormEmbed";
import { hubspotForms } from "@/lib/hubspot-forms";
import { canonicalRoutes } from "@/lib/markets";

export default function SuscripcionPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-lg mx-auto px-6">

        {/* Migas */}
        <nav className="mb-8">
          <Link
            href={canonicalRoutes.latam.blog}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al blog
          </Link>
        </nav>

        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-brand shadow-md">
            <Mail size={26} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2 text-balance">
          Suscríbete al blog de Omnitok
        </h1>
        <p className="text-gray-500 text-center mb-8 leading-relaxed">
          Recibe contenido sobre ecommerce, digital shelf y novedades de Omnitok directamente en tu correo.
        </p>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
          <HubSpotFormEmbed config={hubspotForms.latamNewsletter} />
        </div>

        <p className="mt-5 text-xs text-gray-400 text-center leading-relaxed">
          Al suscribirte aceptas recibir emails con contenido del blog de Omnitok. Puedes darte de baja cuando quieras.
        </p>
      </div>
    </main>
  );
}
