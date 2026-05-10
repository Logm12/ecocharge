"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export function Carousel({ images, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }
  }, [handleNext, autoPlayInterval, isPaused]);

  // Effect for normal interval
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer, currentIndex]); // Reset interval whenever index changes to avoid instant double-jumps

  const onManualNext = () => {
    handleNext();
  };

  const onManualPrev = () => {
    handlePrev();
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative w-full h-full overflow-hidden group rounded-card shadow-sm border border-black/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[currentIndex]} 
            alt={`EcoCharge Prototype ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Only show on group hover */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={onManualPrev}
          className="w-10 h-10 rounded-full bg-white/70 hover:bg-white text-house-green flex items-center justify-center shadow-md backdrop-blur-sm transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={onManualNext}
          className="w-10 h-10 rounded-full bg-white/70 hover:bg-white text-house-green flex items-center justify-center shadow-md backdrop-blur-sm transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-accent-green w-4" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
