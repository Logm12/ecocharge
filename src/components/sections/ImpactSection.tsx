import { BarChart3, Globe, Leaf } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Stat */}
          <div className="bg-canvas/5 border border-canvas/10 rounded-card p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-green/20 rounded-full filter blur-[80px] group-hover:bg-accent-green/30 transition-colors duration-500"></div>
            <div className="relative z-10">
              <BarChart3 size={32} className="text-accent-green mb-6" />
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-canvas mb-2">60,000 <span className="text-xl md:text-2xl font-medium text-canvas/60 tracking-normal">kWh / yr</span></div>
              <p className="text-canvas/70 max-w-sm text-lg">Estimated energy density generation per 100 meter urban installation strip.</p>
            </div>
          </div>

          {/* Secondary Stat */}
          <div className="bg-canvas/5 border border-canvas/10 rounded-card p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/20 rounded-full filter blur-[80px] group-hover:bg-brand-green/30 transition-colors duration-500"></div>
            <div className="relative z-10">
              <Leaf size={32} className="text-accent-green mb-6" />
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-canvas mb-2">-60 <span className="text-xl md:text-2xl font-medium text-canvas/60 tracking-normal">Tons CO2</span></div>
              <p className="text-canvas/70 max-w-sm text-lg">Direct footprint reduction per system per year. Aiming for localized Net Zero target grids.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
