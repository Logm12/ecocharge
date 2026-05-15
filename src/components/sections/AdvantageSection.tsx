"use client";

import { Check, X, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    name: "Direct User Phone Charging",
    ecocharge: "Integrated High-Speed USB Ports",
    pavegen: "Energy only goes back to grid",
    isWin: true
  },
  {
    name: "Real-time OLED Status Gauges",
    ecocharge: "Live interactive metrics per step",
    pavegen: "Requires external screen hardware",
    isWin: true
  },
  {
    name: "Networked IoT Analytics",
    ecocharge: "ESP32 smart node cloud-sync tracking",
    pavegen: "Basic localized power measurements",
    isWin: true
  },
  {
    name: "Vietnamese Market Cost Tailoring",
    ecocharge: "Optimized local manufacturing / low OPEX",
    pavegen: "Import overhead / costly logistics",
    isWin: true
  }
];

export function AdvantageSection() {
  return (
    <section className="w-full bg-canvas text-house-green py-24 px-6 md:px-12 relative overflow-hidden border-t border-black/5">
      {/* Subtle noise mesh overlay in dark tone */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              <ShieldCheck size={14} />
              <span>Competitive Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight-brand text-house-green">
              Why EcoCharge?
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-house-green/70 leading-relaxed pt-4 lg:pt-12">
              While generic kinetic floors capture power silently, EcoCharge connects energy directly with the human who generated it. Our proprietary utility layer guarantees far higher public engagement and commercial adaptability.
            </p>
          </div>
        </div>

        {/* Technical Advantage Board with clear contrasts */}
        <div className="w-full rounded-card border border-black/10 bg-surface overflow-hidden shadow-xl">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10 bg-black/[0.02] p-6 md:p-8 text-sm font-bold uppercase tracking-wider text-house-green/60">
            <div className="col-span-1 pb-4 md:pb-0">System Attribute</div>
            <div className="col-span-1 text-accent-green">EcoCharge Matrix</div>
            <div className="col-span-1">International Baseline</div>
          </div>

          {/* Feature Rows */}
          <div className="divide-y divide-black/10">
            {FEATURES.map((f, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 group hover:bg-black/[0.01] transition-colors duration-300">
                {/* Feature Name */}
                <div className="col-span-1 pr-6 pb-3 md:pb-0 flex items-center">
                  <span className="font-bold text-house-green text-base md:text-lg">{f.name}</span>
                </div>

                {/* EcoCharge Performance */}
                <div className="col-span-1 pb-3 md:pb-0 flex items-start md:items-center space-x-2.5 text-house-green">
                  <div className="w-5 h-5 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                    <Check size={12} className="text-white stroke-[3]" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{f.ecocharge}</span>
                </div>

                {/* Competitor Performance */}
                <div className="col-span-1 flex items-start md:items-center space-x-2.5 text-house-green/50">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                    <X size={10} className="text-house-green/40" />
                  </div>
                  <span className="text-sm font-normal italic">{f.pavegen}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
