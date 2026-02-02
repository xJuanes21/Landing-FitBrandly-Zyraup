"use client";

import React from "react";
import { motion } from "framer-motion";

interface MobileCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileCarousel({
  children,
  className = "",
}: MobileCarouselProps) {
  return (
    <motion.div
      className={`
        /* Mobile: Horizontal Scroll */
        flex overflow-x-auto snap-x snap-mandatory 
        pb-12 pt-12 -my-12 px-6 scrollbar-hide
        items-stretch
        
        /* Desktop: Standard Grid or Flex (controlled by parent/className) */
        md:grid md:overflow-visible md:pb-0 md:pt-0 md:my-0 md:px-0
        
        ${className}
      `}
    >
      {React.Children.map(children, (child) => (
        <div className="snap-center shrink-0 w-[88vw] md:w-auto md:shrink-1 flex flex-col items-stretch">
          {child}
        </div>
      ))}
    </motion.div>
  );
}
