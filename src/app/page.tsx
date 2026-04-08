import { HeroSection } from "@/sections/HeroSection";
import { WhatYouGetSection } from "@/sections/WhatYouGetSection";
import { AutomationSection } from "@/sections/AutomationSection";
import { ContentProductionSection } from "@/sections/ContentProductionSection";
import { MemeMarketingSection } from "@/sections/MemeMarketingSection";
import { InfluencerTeaseSection } from "@/sections/InfluencerTeaseSection";
import { DesignStrategySection } from "@/sections/DesignStrategySection";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen relative overflow-hidden bg-background md:pl-[72px]">
      <HeroSection />
      <WhatYouGetSection />
      <AutomationSection />
      <ContentProductionSection />
      <MemeMarketingSection />
      <InfluencerTeaseSection />
      <DesignStrategySection />
      <FinalCTASection />
    </main>
  );
}
