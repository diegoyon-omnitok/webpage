"use client";

import { ShieldCheck, Users, Zap, Sparkles } from "lucide-react";
import ProductFeatureCarousel, {
  type ProductFeatureCarouselItem,
} from "@/components/sections/ProductFeatureCarousel";
import {
  MapViolationsMockup,
  UnauthorizedSellersMockup,
  MapEnforcementMockup,
  MapAiReportMockup,
} from "./MapDashboardMockups";

const features: ProductFeatureCarouselItem[] = [
  {
    icon: ShieldCheck,
    title: "Detect price violations with unmatched accuracy",
    descLead: "See every MAP violation across every channel in real time.",
    desc: "Our MAP monitoring software captures pricing data across all retailers and marketplaces without being blocked. Combined with AI-driven product matching and human verification, we detect at least 4x more listings than traditional tools, with 99.5% accuracy.",
    accent: "from-[#FF177B] to-[#c0136a]",
    dot: "#FF177B",
    customVisual: <MapViolationsMockup />,
  },
  {
    icon: Users,
    title: "Identify unauthorized sellers with precision",
    descLead: "Know exactly who is selling your products and who shouldn't be.",
    desc: "Our system compares real-time listings against your authorized seller list to uncover violators across marketplaces. Track seller history, violation patterns and first-seen dates so your team can take informed enforcement action.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <UnauthorizedSellersMockup />,
  },
  {
    icon: Zap,
    title: "Enforce MAP policies at scale",
    descLead: "Automated alerts, timestamped evidence, traceable actions.",
    desc: "Send branded violation alerts directly from the platform with timestamped screenshots as evidence. Track resolution times, follow up on open cases and measure your enforcement effectiveness across every channel.",
    accent: "from-[#FF177B] to-[#EC4899]",
    dot: "#FF177B",
    customVisual: <MapEnforcementMockup />,
  },
  {
    icon: Sparkles,
    title: "AI-powered compliance reports",
    descLead: "From raw violation data to executive insights in seconds.",
    desc: "The MAP AI agent generates automatic compliance analyses covering what changed, which sellers are repeat offenders, and where to escalate. Built for weekly reviews, QBRs or fast decisions without manual report building.",
    accent: "from-[#4D4A9D] to-[#6366f1]",
    dot: "#4D4A9D",
    customVisual: <MapAiReportMockup />,
  },
];

export default function MapCarousel() {
  return (
    <ProductFeatureCarousel
      sectionTitle="MAP monitoring powered by AI"
      sectionSubtitle="Every feature combines automated detection with an AI layer that prioritizes violations and generates actionable compliance reports."
      labels={["", "", "", ""]}
      features={features}
    />
  );
}
