import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TechSection } from "@/components/sections/TechSection";
import { TargetMarkets } from "@/components/sections/TargetMarkets";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { AdvantageSection } from "@/components/sections/AdvantageSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TeamSection } from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <HeroSection />
        <ProblemSection />
        <TechSection />
        <TargetMarkets />
        <ImpactSection />
        <AdvantageSection />
        <TimelineSection />
        <TeamSection />
      </main>
    </div>
  );
}
