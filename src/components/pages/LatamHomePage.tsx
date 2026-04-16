import HeroSection from "@/components/sections/HeroSection";
import ClientsBar from "@/components/sections/ClientsBar";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import ResourcesHub from "@/components/sections/ResourcesHub";
import ResultsSection from "@/components/sections/ResultsSection";
import FinalCTA from "@/components/sections/FinalCTA";

const fullBleed = "min-h-0 lg:min-h-[100dvh] flex flex-col justify-center box-border w-full";
const homeHeroStack = "min-h-0 lg:min-h-[100dvh] flex flex-col box-border w-full";

export default function LatamHomePage() {
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

      <div className={`${fullBleed} bg-gray-50`}>
        <ResourcesHub />
      </div>

      <div className={`${fullBleed} bg-sidebar`}>
        <FinalCTA />
      </div>
    </>
  );
}
