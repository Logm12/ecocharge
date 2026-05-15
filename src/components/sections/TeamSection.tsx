"use client";

import { Button } from "@/components/ui/Button";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const TEAM = [
  { name: "Ngo Minh Chau", role: "International School - Vietnam National University - Founder", image: "/images/teams/Ngo Minh Chau.jpg" },
  { name: "Doan Thi Phuong Thao", role: "International School - Vietnam National University - Co-Founder", image: "/images/teams/Doan Thi Phuong Thao.jpg" },
  { name: "Nguyen Thi Phuong Thao", role: "International School - Vietnam National University - Co-Founder", image: "/images/teams/Nguyen Thi Phuong Thao.jpg" },
  { name: "To Ngoc Minh", role: "International School - Vietnam National University", image: "/images/teams/To Ngoc Minh.jpg" },
  { name: "Tran Quang Tiep", role: "International School - Vietnam National University", image: "/images/teams/Tran Quang Tiep.jpg" },
  { name: "Mac Pham Thien Long", role: "International School - Vietnam National University", image: "/images/teams/Mac Pham Thien Long.jpg" },
  { name: "Le Dai Thanh", role: "VNU University of Economics and Business", image: "/images/teams/Le Dai Thanh.jpg" },
];

export function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 24 : clientWidth; // 24 is gap-6

      let scrollTo = 0;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 25; // 25px tolerance
      const isAtStart = scrollLeft <= 25;

      if (direction === "left") {
        if (isAtStart) {
          scrollTo = scrollWidth; // Wrap around to the end
        } else {
          scrollTo = scrollLeft - cardWidth;
        }
      } else {
        if (isAtEnd) {
          scrollTo = 0; // Wrap around to the beginning
        } else {
          scrollTo = scrollLeft + cardWidth;
        }
      }

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  }, []);

  // Auto-play effect: every 5 seconds unless paused by hovering
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      scroll("right");
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, scroll]);

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

        {/* Team Carousel Wrapper */}
        <div
          className="relative w-full mb-20 group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Left Nav Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous team members"
            className="absolute -left-2 md:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-black/5 flex items-center justify-center text-house-green transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer opacity-0 md:opacity-60 group-hover/carousel:opacity-100 backdrop-blur-sm hover:text-brand-green"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Row */}
          <div
            ref={scrollContainerRef}
            className="relative flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 w-full scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
          >
            {TEAM.map((member, idx) => {
              const isMentor = member.role.toLowerCase().includes("mentor");
              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-[calc((100%-24px)/2)] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-96px)/5)] snap-start border rounded-card p-6 flex flex-col items-center text-center group hover:shadow-md transition-all duration-300 ${isMentor
                    ? "bg-house-green border-accent-green/30 shadow-xl ring-1 ring-accent-green/20"
                    : "bg-canvas border-black/5 text-house-green"
                    }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-inner border relative ${isMentor ? "bg-white/10 border-accent-green/30 text-accent-green" : "bg-surface border-black/5 text-brand-green"
                    }`}>
                    {member.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center select-none"
                      />
                    ) : (
                      <User size={28} />
                    )}
                  </div>
                  {isMentor && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent-green bg-accent-green/10 px-2 py-0.5 rounded-full mb-2 border border-accent-green/30 animate-pulse">Advisor</span>
                  )}
                  <h3 className={`font-bold mb-1 ${isMentor ? 'text-white' : 'text-house-green'}`}>{member.name}</h3>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${isMentor ? 'text-canvas/60' : 'text-house-green/50'}`}>{member.role}</div>
                </div>
              );
            })}
          </div>

          {/* Right Nav Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next team members"
            className="absolute -right-2 md:-right-6 lg:-right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-black/5 flex items-center justify-center text-house-green transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer opacity-0 md:opacity-60 group-hover/carousel:opacity-100 backdrop-blur-sm hover:text-brand-green"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
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
