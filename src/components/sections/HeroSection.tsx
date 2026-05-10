import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Leaf } from "lucide-react";

const PROTOTYPE_IMAGES = [
  "/images/products/prototype-1.jpg",
  "/images/products/prototype-2.jpg",
  "/images/products/prototype-3.jpg",
  "/images/products/prototype-4.jpg",
];

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
      <div className="flex w-full lg:w-1/2 items-center justify-center relative mt-12 lg:mt-0">
        <div className="relative w-full max-w-lg md:max-w-xl mx-auto">
          <div className="absolute -inset-4 bg-brand-green rounded-full filter blur-3xl opacity-10 animate-pulse pointer-events-none"></div>
          <div className="relative z-10 aspect-[4/3] w-full rounded-card shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 ease-out overflow-hidden">
            <Carousel images={PROTOTYPE_IMAGES} />
          </div>
        </div>
      </div>
    </section>
  );
}
