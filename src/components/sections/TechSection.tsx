"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TechSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation mapping for layers separation vertically
  // Negative goes up, positive goes down or different velocity
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -200]); // Top
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 0]);    // Mid stays center
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Bottom

  // Fading in information text based on distance
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  
  // Scale and rotate effects for overall container entrance
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-surface w-full">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-12">
        
        {/* Information Area (Left Side on Desktop) */}
        <motion.div 
          style={{ opacity: textOpacity }} 
          className="w-full lg:w-1/3 flex flex-col space-y-12 z-20 mb-12 lg:mb-0"
        >
          <div>
            <div className="text-accent-green font-bold text-sm tracking-widest uppercase mb-2">Inside EcoCharge</div>
            <h2 className="text-4xl font-bold text-house-green tracking-tight-brand">Layered Technology</h2>
          </div>

          <div className="space-y-8 text-sm md:text-base text-house-green/80">
            <div className="relative pl-6 border-l-2 border-brand-green/30">
              <h3 className="font-bold text-house-green uppercase tracking-wider">01. Rugged Cover & OLED Hub</h3>
              <p>High-tensile polycarbonate that captures kinetic footfalls, integrated with live USB ports and OLED status displays.</p>
            </div>
            <div className="relative pl-6 border-l-2 border-accent-green">
              <h3 className="font-bold text-house-green uppercase tracking-wider text-accent-green">02. Kinetic Piezoelectric Matrix</h3>
              <p>Durable piezoelectric discs converting vibrational compression into electrical potential via precise bridge rectifiers.</p>
            </div>
            <div className="relative pl-6 border-l-2 border-house-green/30">
              <h3 className="font-bold text-house-green uppercase tracking-wider">03. ESP32 Core Control Base</h3>
              <p>Aluminum chassis housing the ESP32 IoT node, high-capacity capacitors, and boost converters for stable energy delivery.</p>
            </div>
          </div>
        </motion.div>

        {/* 3D Deconstructed Visual (Right Side) */}
        <motion.div 
          style={{ scale }}
          className="w-full lg:w-2/3 h-full relative flex items-center justify-center perspective-[1000px]"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 transform-style-3d">
            
            {/* LAYER 1 - TOP (Polycarbonate) */}
            <motion.div
              style={{
                y: layer1Y,
                rotateX: "60deg",
                rotateZ: "-25deg",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-2xl z-30 flex items-center justify-center"
            >
              <div className="absolute top-4 right-4 text-xs text-house-green/50 font-bold uppercase">OLED & USB Hub Surface</div>
            </motion.div>

            {/* LAYER 2 - MIDDLE (Piezo discs matrix) */}
            <motion.div
              style={{
                y: layer2Y,
                rotateX: "60deg",
                rotateZ: "-25deg",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 bg-house-green border border-brand-green rounded-xl shadow-lg z-20 flex items-center justify-center overflow-hidden"
            >
              {/* Grid pattern representing piezoelectric nodes */}
              <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-6">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="rounded-full bg-accent-green shadow-[0_0_10px_rgba(0,117,74,0.6)] animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                ))}
              </div>
            </motion.div>

            {/* LAYER 3 - BOTTOM (Aluminum) */}
            <motion.div
              style={{
                y: layer3Y,
                rotateX: "60deg",
                rotateZ: "-25deg",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-500 border border-zinc-400 rounded-xl shadow-md z-10"
            >
              <div className="absolute bottom-4 left-4 text-xs text-zinc-100/80 font-bold uppercase">ESP32 Control Base</div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
