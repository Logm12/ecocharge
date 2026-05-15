import { BarChart3, Globe, Leaf, BatteryCharging, Zap } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="w-full bg-house-green text-canvas py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-canvas/10 px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              <Globe size={14} className="text-accent-green" />
              <span>ESG Global Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight-brand mb-6">
              Massive energy scale.<br/>Measurable reduction.
            </h2>
            <p className="text-lg text-canvas/80">
              EcoCharge is strictly engineered to support sustainable cities, delivering massive scale carbon offsetting per installed city block.
            </p>
          </div>
          
          <div className="hidden lg:block text-right pb-4">
             <Leaf size={64} className="text-accent-green opacity-40 ml-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Single Step Yield */}
          <div className="bg-canvas/5 border border-canvas/10 rounded-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/15 rounded-full filter blur-[50px] group-hover:bg-accent-green/25 transition-colors duration-500"></div>
            <div className="relative z-10">
              <Zap size={28} className="text-accent-green mb-6" />
              <div className="text-4xl lg:text-5xl font-black tracking-tighter text-canvas mb-2">5–7 <span className="text-lg lg:text-xl font-medium text-canvas/60 tracking-normal">mW / Step</span></div>
              <p className="text-canvas/70 max-w-xs text-sm lg:text-base">Instantaneous kinetic energy yield harvested and stored from a single average footstep.</p>
            </div>
          </div>

          {/* Conversions to Charge */}
          <div className="bg-canvas/5 border border-canvas/10 rounded-card p-8 relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-green/15 rounded-full filter blur-[50px] group-hover:bg-brand-green/25 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <BatteryCharging size={28} className="text-accent-green" />
                <span className="text-[10px] font-black tracking-widest uppercase bg-accent-green/10 border border-accent-green/20 text-accent-green px-2 py-1 rounded-full animate-pulse">+1% Active</span>
              </div>
              <div className="text-4xl lg:text-5xl font-black tracking-tighter text-canvas mb-2">1.7 <span className="text-lg lg:text-xl font-medium text-canvas/60 tracking-normal">Mins Walk</span></div>
              <p className="text-canvas/70 max-w-xs text-sm lg:text-base">Average duration of dense pedestrian footfall needed to supply +1% charge directly to user smartphones.</p>
            </div>
          </div>

          {/* Monthly Harvest / Net-Zero Grid */}
          <div className="bg-canvas/5 border border-canvas/10 rounded-card p-8 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-green/15 rounded-full filter blur-[50px] group-hover:bg-accent-green/25 transition-colors duration-500"></div>
            <div className="relative z-10">
              <BarChart3 size={28} className="text-accent-green mb-6" />
              <div className="text-4xl lg:text-5xl font-black tracking-tighter text-canvas mb-2">1.7 <span className="text-lg lg:text-xl font-medium text-canvas/60 tracking-normal">kWh / mo</span></div>
              <p className="text-canvas/70 max-w-xs text-sm lg:text-base">Clean power captured monthly per installation station (based on 2000 daily users). Supports localized grid offsets.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
