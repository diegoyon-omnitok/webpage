import HeroSection from "@/components/markets/brasil/sections/HeroSection";
import ClientsBar from "@/components/markets/brasil/sections/ClientsBar";
import ProblemSection from "@/components/markets/brasil/sections/ProblemSection";
import HowItWorks from "@/components/markets/brasil/sections/HowItWorks";
import Testimonials from "@/components/markets/brasil/sections/Testimonials";
import IntegrationsSection from "@/components/markets/brasil/sections/IntegrationsSection";
import ResourcesHub from "@/components/markets/brasil/sections/ResourcesHub";
import ResultsSection from "@/components/markets/brasil/sections/ResultsSection";
import FinalCTA from "@/components/markets/brasil/sections/FinalCTA";
import LabsSection from "@/components/markets/brasil/sections/LabsSection";

const fullBleed = "min-h-0 lg:min-h-[100dvh] flex flex-col justify-center box-border w-full";
const homeHeroStack = "min-h-0 lg:min-h-[100dvh] flex flex-col box-border w-full";

export default function BrasilHomePage() {
  return (
    <>
      <div className={homeHeroStack}>
        <HeroSection />
        <ClientsBar />
      </div>

      <ProblemSection />

      <div className={`${fullBleed} bg-white flex flex-col`}>
        <HowItWorks />
        <IntegrationsSection />
      </div>

      <div className={`${fullBleed} gradient-hero`}>
        <ResultsSection />
      </div>

      <div className={`${fullBleed} bg-white`}>
        <Testimonials />
      </div>

      <LabsSection />

      <div className={`${fullBleed} bg-gray-50`}>
        <ResourcesHub />
      </div>

      <div className={`${fullBleed} bg-sidebar`}>
        <FinalCTA />
      </div>
    </>
  );
}
