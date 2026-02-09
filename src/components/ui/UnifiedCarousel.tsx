"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface UnifiedCarouselProps {
  children: React.ReactNode[];
  className?: string;
  itemsVisibleDesktop?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

export default function UnifiedCarousel({
  children,
  className = "",
  itemsVisibleDesktop = 3,
  autoPlay = false,
  autoPlayInterval = 3000,
  pauseOnHover = true,
}: UnifiedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = React.Children.count(children);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      setActiveHighlightIndex((prev) => {
        const nextHighlight = (prev + 1) % totalItems;

        // Logical scroll: if the next highlight is out of view, move the carousel
        // View range is [currentIndex, currentIndex + itemsVisibleDesktop - 1]
        if (!isMobile) {
          if (nextHighlight >= currentIndex + itemsVisibleDesktop) {
            setCurrentIndex(
              Math.min(nextHighlight, totalItems - itemsVisibleDesktop),
            );
          } else if (nextHighlight < currentIndex) {
            setCurrentIndex(nextHighlight);
          } else if (nextHighlight === 0) {
            setCurrentIndex(0);
          }
        }

        return nextHighlight;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [
    autoPlay,
    isPaused,
    totalItems,
    currentIndex,
    itemsVisibleDesktop,
    isMobile,
    autoPlayInterval,
  ]);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 > totalItems - itemsVisibleDesktop ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalItems - itemsVisibleDesktop : prev - 1,
    );
  };

  if (!mounted) return null;

  const childrenWithHighlight = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        isHighlighted: activeHighlightIndex === index && !isPaused,
      });
    }
    return child;
  });

  if (isMobile) {
    return (
      <div
        className="overflow-visible"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={`
            flex overflow-x-auto snap-x snap-mandatory 
            py-[120px] -my-[120px] px-4 scrollbar-hide
            ${className}
          `}
          style={{ gap: "24px" }}
        >
          {childrenWithHighlight &&
            childrenWithHighlight.map((child, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[85vw] px-4 first:ml-0 last:mr-0"
              >
                <div className="py-16">{child}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  const gap = 56;

  return (
    <div
      className="relative px-16 group/carousel"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        <button
          onClick={prev}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all duration-300 backdrop-blur-xl group/btn"
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8 group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        <button
          onClick={next}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all duration-300 backdrop-blur-xl group/btn"
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8 group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>

      {/* Carousel Track */}
      <div className="overflow-visible">
        <div className="overflow-hidden p-[150px] -m-[150px]">
          <motion.div
            className="flex items-stretch"
            style={{ gap: `${gap}px` }}
            animate={{
              x: `calc(-${currentIndex} * (100% + ${gap}px) / ${itemsVisibleDesktop})`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {childrenWithHighlight &&
              childrenWithHighlight.map((child, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsVisibleDesktop - 1) * gap}px) / ${itemsVisibleDesktop})`,
                  }}
                >
                  {child}
                </div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-3 mt-12">
        {Array.from({
          length: Math.max(0, totalItems - itemsVisibleDesktop + 1),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentIndex === i
                ? "w-10 bg-[#00E5FF]"
                : "w-2 bg-white/10 hover:bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
