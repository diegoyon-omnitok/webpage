import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import HubSpotFormEmbedPtBr from "@/components/markets/brasil/sections/HubSpotFormEmbedPtBr";
import { hubspotForms } from "@/lib/hubspot-forms";
import { canonicalRoutes } from "@/lib/markets";

export default function BrasilAssinaturaPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-lg mx-auto px-6">

        {/* Migas */}
        <nav className="mb-8">
          <Link
            href={canonicalRoutes.brasil.blog}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao blog
          </Link>
        </nav>

        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-brand shadow-md">
            <Mail size={26} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2 text-balance">
          Assine o blog da Omnitok
        </h1>
        <p className="text-gray-500 text-center mb-8 leading-relaxed">
          Receba conteúdo sobre ecommerce, digital shelf e novidades da Omnitok diretamente no seu email.
        </p>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
          <HubSpotFormEmbedPtBr config={hubspotForms.brasilNewsletter} />
        </div>

        <p className="mt-5 text-xs text-gray-400 text-center leading-relaxed">
          Ao assinar, você aceita receber emails com conteúdo do blog da Omnitok. Você pode cancelar quando quiser.
        </p>
      </div>
    </div>
  );
}
