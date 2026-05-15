"use client";

import { Plane, GraduationCap, Music, Trees } from "lucide-react";

const MARKETS = [
  {
    title: "Airports & Hubs",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    desc: "Capturing massive passenger traffic during waiting times.",
    cText: "An engaging, green experience during tedious wait times.",
    bText: "Alleviates ESG compliance pressure.",
  },
  {
    title: "Educational Institutions",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    desc: "Deploying in high-density university walkways and study hubs.",
    cText: "Combines physical activity with timely, on-the-go device charging.",
    bText: "Creates innovative 'green spaces' to attract prospective students.",
  },
  {
    title: "Events & Festivals",
    icon: Music,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    desc: "Lighting up festival grounds through pedestrian crowd kinetic steps.",
    cText: "The harder fans dance, the brighter the lights.",
    bText: "Cuts temporary wiring costs and delivers a memorable experience.",
  },
  {
    title: "Public Parks",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80",
    desc: "Transforming park walkways into active charging grids.",
    cText: "Solves the lack of accessible power and public utilities.",
    bText: "Transforms traditional parks into modern, safe 'Energy Playgrounds'.",
  }
];

export function TargetMarkets() {
  return (
    <section className="w-full bg-surface py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-accent-green/10 text-accent-green font-bold uppercase tracking-widest text-[11px] px-3 py-1 rounded-full mb-3">
            <span>Target Locations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight-brand text-house-green mb-4">Target Verticals & Value</h2>
          <p className="text-house-green/70">
            Strategically targeting high-traffic ecosystems to create an interactive energy loop for citizens and operators alike.
          </p>
        </div>

        {/* Symmetrical 2x2 "Menu" Style Grid with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MARKETS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div 
                key={i}
                className="bg-canvas border border-black/5 rounded-[24px] overflow-hidden hover:shadow-xl group transition-all duration-300 flex flex-col sm:flex-row h-auto min-h-[240px] shadow-sm"
              >
                {/* Visual Portion */}
                <div className="sm:w-2/5 relative min-h-[180px] sm:min-h-full overflow-hidden bg-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={m.image} 
                    alt={m.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-brand-green">
                    <Icon size={16} />
                  </div>
                </div>

                {/* Content Portion */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-house-green mb-2 tracking-tight">{m.title}</h3>
                  
                  {/* Bullet points matching Slide 16 'C' and 'B' format */}
                  <div className="space-y-3.5 mt-2">
                    <div className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded bg-brand-green/10 text-brand-green font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">C</div>
                      <p className="text-[13px] md:text-sm text-house-green/80 italic leading-relaxed">
                        {m.cText}
                      </p>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded bg-accent-green/10 text-accent-green font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">B</div>
                      <p className="text-[13px] md:text-sm text-house-green/80 italic leading-relaxed">
                        {m.bText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
