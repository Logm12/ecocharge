import { ZapOff } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="w-full bg-house-green text-white py-24 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Visual noise element subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center space-y-6">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full text-accent-green mb-4">
          <ZapOff size={24} />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight-brand text-canvas">
          Every step you take is <span className="text-accent-green">wasted potential.</span>
        </h2>

        <p className="text-lg md:text-xl text-canvas/80 leading-relaxed">
          Modern cities consume enormous amounts of grid energy, while trillions of kinetic footsteps are lost to the pavement every day. This dissociation fuels carbon emission and puts immense pressure on ageing electrical infrastructures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 w-full">
          <div className="p-6 border border-white/10 rounded-card bg-white/5">
            <div className="text-4xl font-bold text-canvas">75%</div>
            <div className="text-sm text-canvas/60 mt-2 uppercase tracking-wider font-semibold">Urban Power Use</div>
          </div>
          <div className="p-6 border border-white/10 rounded-card bg-white/5">
            <div className="text-4xl font-bold text-canvas">ZERO</div>
            <div className="text-sm text-canvas/60 mt-2 uppercase tracking-wider font-semibold">Kinetic Capture</div>
          </div>
          <div className="p-6 border border-white/10 rounded-card bg-white/5">
            <div className="text-4xl font-bold text-canvas">$$$</div>
            <div className="text-sm text-canvas/60 mt-2 uppercase tracking-wider font-semibold">Lost to Thermal Heat</div>
          </div>
        </div>
      </div>
    </section>
  );
}
