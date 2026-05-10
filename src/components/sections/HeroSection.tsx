import { Button } from "@/components/ui/Button";
import { Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center bg-canvas px-6 py-16 md:px-12 lg:px-24 overflow-hidden">
      {/* Left Content / Typography Focus */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 z-10">
        <div className="flex items-center space-x-2 text-brand-green font-bold uppercase tracking-widest text-sm bg-brand-green/10 px-3 py-1 rounded-full">
          <Leaf size={16} />
          <span>Green Future</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-house-green max-w-xl tracking-tight-brand">
          Powering the Smart City with Every Step.
        </h1>

        <p className="text-lg md:text-xl text-house-green/80 max-w-md leading-relaxed">
          Harnessing advanced piezoelectric technology to convert foot traffic into usable clean energy. Aiming for local Net-Zero grids.
        </p>

        <div className="pt-4">
          <Button className="text-lg px-8 py-4">
            Download Pitch Deck
          </Button>
        </div>
      </div>

      {/* Right Content / Abstract Shape visual anchor */}
      <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative mt-12 lg:mt-0">
        <div className="relative w-96 h-96 bg-brand-green rounded-full filter blur-3xl opacity-10 animate-pulse absolute"></div>
        <div className="relative z-10 aspect-square w-[80%] rounded-card bg-surface shadow-xl border border-black/5 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden">
          {/* Placeholder visual representation of tech */}
          <div className="text-center px-8 space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green">
              <Leaf size={32} />
            </div>
            <h3 className="text-house-green font-bold text-xl">EcoCharge Mat v1</h3>
            <div className="h-1 w-12 bg-accent-green mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
