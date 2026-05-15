"use client";

import { Calendar, CheckCircle2, Activity, Rocket, TrendingUp } from "lucide-react";

const TIMELINE = [
  {
    quarter: "Q1",
    year: "2026",
    status: "Completed",
    title: "Research & Prep",
    icon: Activity,
    bullets: [
      "Competitive landscape mapping",
      "Finalize hardware core designs",
      "Establish IP & legal structure"
    ],
    isCurrent: false,
    isDone: true
  },
  {
    quarter: "Q2",
    year: "2026",
    status: "Active",
    title: "Market Testing",
    icon: CheckCircle2,
    bullets: [
      "Install 10–15 initial pilot stations",
      "Deploy ESP32 live data sync",
      "Refine hardware unit efficiencies"
    ],
    isCurrent: true,
    isDone: false
  },
  {
    quarter: "Q3",
    year: "2026",
    status: "Upcoming",
    title: "Major Rollout",
    icon: Rocket,
    bullets: [
      "Official national B2B launch",
      "Securing pioneer B2B contracts",
      "Targeting 30–40 urban hub sites"
    ],
    isCurrent: false,
    isDone: false
  },
  {
    quarter: "Q4",
    year: "2026",
    status: "Future",
    title: "Fundraise & Scale",
    icon: TrendingUp,
    bullets: [
      "Deliver complete pilot data reports",
      "Trigger Series A capital push",
      "Scale infrastructure for 2027"
    ],
    isCurrent: false,
    isDone: false
  }
];

export function TimelineSection() {
  return (
    <section className="w-full bg-surface text-house-green py-24 px-6 md:px-12 relative overflow-hidden border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-2xl mb-20">
          <div className="inline-flex items-center space-x-2 text-accent-green font-bold uppercase tracking-widest text-sm mb-3">
            <Calendar size={14} />
            <span>Horizon Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight-brand mb-4">Roadmap to Scale</h2>
          <p className="text-lg text-house-green/70">
            Methodical milestones designed to guarantee low deployment risk, maximize data capture, and power urban spaces efficiently.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="w-full relative">
          {/* Connector Line for Desktop (Horizontal) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-house-green/10 z-0 rounded">
            {/* Neon Progress Fill */}
            <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-brand-green to-accent-green rounded shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full relative z-10">
            {TIMELINE.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col group">
                  {/* Node Indicator Wrapper with explicit z-index & masking background */}
                  <div className="flex items-center lg:justify-center mb-6 relative z-10">
                    <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center border transition-all duration-500 ${
                      step.isCurrent 
                        ? "bg-house-green border-accent-green text-accent-green shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-4 ring-accent-green/10 scale-110" 
                        : step.isDone
                        ? "bg-surface border-brand-green text-brand-green"
                        : "bg-surface border-black/10 text-house-green/40 group-hover:border-brand-green/40 transition-colors"
                    }`}>
                      <span className="text-base font-black tracking-tighter leading-none mb-0.5">{step.quarter}</span>
                      <span className="text-[9px] font-bold opacity-70 leading-none">{step.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`bg-canvas p-6 md:p-8 rounded-card border transition-all duration-300 flex-grow ${
                    step.isCurrent 
                      ? "border-accent-green shadow-xl -translate-y-2 bg-white ring-1 ring-accent-green/10" 
                      : "border-black/5 shadow-sm hover:shadow-md"
                  }`}>
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon size={18} className={step.isCurrent ? "text-accent-green" : "text-brand-green"} />
                      <h3 className="font-black text-lg text-house-green tracking-tight">{step.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {step.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start space-x-2.5 text-sm leading-relaxed text-house-green/70">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${step.isCurrent ? "bg-accent-green" : "bg-house-green/20"}`}></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Status Badge */}
                    <div className="mt-6 pt-4 border-t border-black/5 flex items-center">
                      <span className={`text-[10px] font-black tracking-widest uppercase ${
                        step.isCurrent ? "text-accent-green animate-pulse" : "text-house-green/40"
                      }`}>
                        {step.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
