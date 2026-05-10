import { Button } from "@/components/ui/Button";
import { User } from "lucide-react";

const TEAM = [
  { role: "Chief Executive Officer", name: "Founding Leader" },
  { role: "Chief Technology Officer", name: "Hardware Architect" },
  { role: "Chief Operations Officer", name: "Strategy Executive" },
  { role: "Chief Marketing Officer", name: "Brand Director" },
  { role: "Chief Strategy Officer", name: "Partnership Lead" },
];

export function TeamSection() {
  return (
    <section className="w-full bg-surface text-house-green py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
          <div className="text-accent-green font-bold uppercase tracking-widest text-sm mb-3">Leadership</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight-brand mb-4">Expert Founding Team</h2>
          <p className="text-lg text-house-green/70">
            Formed and bred at <strong>VNU (Vietnam National University, Hanoi)</strong>, our engineering council pairs material sciences with urban scalability.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full mb-20">
          {TEAM.map((member, idx) => (
            <div key={idx} className="bg-canvas border border-black/5 rounded-card p-6 flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform duration-300">
                <User size={24} />
              </div>
              <h3 className="font-bold text-house-green mb-1">{member.name}</h3>
              <div className="text-xs font-semibold uppercase text-house-green/50 tracking-wider">{member.role}</div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="w-full max-w-3xl bg-brand-green text-white rounded-card p-8 md:p-12 text-center flex flex-col items-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight relative z-10">Ready to power the smarter city?</h3>
          <p className="text-white/80 relative z-10 max-w-lg">Join our pilot program. Get early deployment mapping for your municipalities or real estate developments.</p>
          <div className="relative z-10 pt-4">
            <Button variant="inverted" className="text-lg px-8 py-4 active:scale-95 transition-all">
              Partner with Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
