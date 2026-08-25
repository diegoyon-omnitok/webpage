import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import BrasilHomePage from "@/components/markets/brasil/pages/BrasilHomePage";
import BrasilContentPage from "@/components/markets/brasil/pages/BrasilContentPage";
import BrasilConnectPage from "@/components/markets/brasil/pages/BrasilConnectPage";
import BrasilDsaPage from "@/components/markets/brasil/pages/BrasilDsaPage";
import BrasilSobreNosPage from "@/components/markets/brasil/pages/BrasilSobreNosPage";
import BrasilContatoPage from "@/components/markets/brasil/pages/BrasilContatoPage";
import BrasilAssinaturaPage from "@/components/markets/brasil/pages/BrasilAssinaturaPage";
import BrasilPrivacyPolicyPage from "@/components/markets/brasil/pages/BrasilPrivacyPolicyPage";
import BrasilTermsOfUsePage from "@/components/markets/brasil/pages/BrasilTermsOfUsePage";
import {
  buildMetadata,
  marketAlternates,
  type MarketKey,
} from "@/lib/markets";

type PageDefinition = {
  component: ComponentType;
  manualTitle: string;
  manualDescription: string;
  keywords?: string[];
  alternates?: Partial<Record<MarketKey, string>>;
};

const brasilPages: Record<string, PageDefinition> = {
  "": {
    component: BrasilHomePage,
    manualTitle: "Omnitok | Execução Digital em Varejistas",
    manualDescription:
      "Melhore a execução digital da sua marca em varejistas e marketplaces: monitore sua presença, otimize páginas de produto e centralize conteúdo.",
    keywords: [
      "execução digital para marcas",
      "digital shelf para varejistas e marketplaces",
      "digital shelf analytics",
      "conteúdo de produto para varejistas",
      "gestão de conteúdo de produto",
      "melhorar conversão em páginas de produto",
      "execução digital no ecommerce",
      "marcas em varejistas e marketplaces",
    ],
    alternates: marketAlternates.home,
  },
  "conteudo-enriquecido": {
    component: BrasilContentPage,
    manualTitle: "Conteúdo Enriquecido para Ecommerce | Omnitok",
    manualDescription:
      "Crie e distribua conteúdo enriquecido para suas páginas de produto. Melhore páginas de produto, destaque benefícios e aumente a conversão em varejistas e marketplaces.",
    keywords: [
      "conteúdo enriquecido para ecommerce",
      "conteúdo enriquecido para varejistas",
      "páginas de produto enriquecidas",
      "melhorar páginas de produto",
      "conteúdo para páginas de produto",
      "otimização de páginas de produto",
      "rich content para ecommerce",
      "conteúdo enriquecido na PDP",
    ],
    alternates: marketAlternates.content,
  },
  "gestao-de-conteudo-de-produto": {
    component: BrasilConnectPage,
    manualTitle: "Gestão de Conteúdo de Produto | Omnitok",
    manualDescription:
      "Centralize, adapte e distribua o conteúdo de produto para varejistas e marketplaces. Reduza trabalho manual e melhore a consistência entre canais.",
    keywords: [
      "gestão de conteúdo de produto",
      "centralização de informações de produto",
      "distribuição de conteúdo de produto",
      "sindicação de conteúdo de produto",
      "automação de cadastro de produtos",
      "publicação de produtos em varejistas",
      "gestão de páginas de produto",
      "atualização de conteúdo em múltiplos canais",
    ],
    alternates: marketAlternates.connect,
  },
  "digital-shelf-analytics": {
    component: BrasilDsaPage,
    manualTitle: "Digital Shelf Analytics e Monitoramento de Preços | Omnitok",
    manualDescription:
      "Monitore preços próprios e da concorrência, estoque e conteúdo em cada varejista e marketplace. Analise e priorize ações com um agente de IA.",
    keywords: [
      "monitoramento de preços",
      "software de monitoramento de preços",
      "monitoramento de preços da concorrência",
      "monitoramento de preços, estoque e conteúdo",
      "monitoramento de preços e promoções",
      "monitoramento de produtos em marketplaces",
      "digital shelf analytics",
      "visibilidade digital em varejistas",
      "share of search ecommerce",
    ],
    alternates: marketAlternates.dsa,
  },
  contato: {
    component: BrasilContatoPage,
    manualTitle: "Contato | Fale com Vendas da Omnitok",
    manualDescription:
      "Fale com o time da Omnitok e melhore a execução digital da sua marca em varejistas e marketplaces.",
    keywords: [
      "contato Omnitok",
      "solicitar demo Omnitok",
      "falar com vendas Omnitok",
      "contato plataforma digital shelf",
      "agende uma demo Omnitok",
    ],
    alternates: marketAlternates.contact,
  },
  assinatura: {
    component: BrasilAssinaturaPage,
    manualTitle: "Assine o Blog da Omnitok | Newsletter de Ecommerce",
    manualDescription:
      "Assine para receber conteúdo atualizado sobre ecommerce, digital shelf e novidades da Omnitok.",
  },
  "politica-de-privacidade": {
    component: BrasilPrivacyPolicyPage,
    manualTitle: "Política de Privacidade | Omnitok",
    manualDescription:
      "Saiba como a Omnitok coleta, usa e protege as informações compartilhadas no site. Inclui direitos do titular, cookies e cibersegurança.",
    alternates: marketAlternates.privacy,
  },
  "termos-de-uso": {
    component: BrasilTermsOfUsePage,
    manualTitle: "Termos de Uso | Omnitok",
    manualDescription:
      "Condições que regulam o acesso e o uso do site da Omnitok para usuários no Brasil.",
    alternates: marketAlternates.terms,
  },
  "sobre-nos": {
    component: BrasilSobreNosPage,
    manualTitle: "Sobre Nós | Equipe e Missão da Omnitok",
    manualDescription:
      "Conheça a Omnitok, a plataforma que ajuda marcas a melhorar sua execução digital em varejistas e marketplaces.",
    alternates: marketAlternates.about,
    keywords: [
      "Omnitok",
      "quem somos Omnitok",
      "empresa de digital shelf",
      "plataforma para marcas em varejistas",
      "sobre a Omnitok",
    ],
  },
};

function buildAlternates(entry?: Partial<Record<MarketKey, string>>) {
  if (!entry) return undefined;
  return {
    ...(entry.latam ? { es: entry.latam, "x-default": entry.latam } : {}),
    ...(entry.usa ? { "en-US": entry.usa } : {}),
    ...(entry.brasil ? { "pt-BR": entry.brasil } : {}),
  };
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const key = slug?.join("/") ?? "";

  const entry = brasilPages[key];
  if (!entry) return {};

  return buildMetadata({
    title: entry.manualTitle,
    description: entry.manualDescription,
    path: key ? `/br/${key}` : "/br",
    locale: "pt-BR",
    alternates: buildAlternates(entry.alternates),
    keywords: entry.keywords,
  });
}

export default async function BrasilCatchAllPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;
  const key = slug?.join("/") ?? "";

  const entry = brasilPages[key];
  if (!entry) {
    notFound();
  }

  const PageComponent = entry.component;
  return <PageComponent />;
}
