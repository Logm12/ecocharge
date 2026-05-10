import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TechSection } from "@/components/sections/TechSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TeamSection } from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <HeroSection />
        <ProblemSection />
        <TechSection />
        <ImpactSection />
        <TeamSection />
      </main>
    </div>
  );
}
