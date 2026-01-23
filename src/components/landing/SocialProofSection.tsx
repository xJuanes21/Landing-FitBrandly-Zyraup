"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Check,
  Zap,
  Users,
  Dumbbell,
  TrendingUp,
  Award,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

const brandLogos = [
  { id: "1", icon: Users },
  { id: "2", icon: Dumbbell },
  { id: "3", icon: Award },
  { id: "4", icon: TrendingUp },
  { id: "5", icon: Shield },
  { id: "6", icon: Zap },
];

const trustBadges = [
  { id: "1", icon: Shield, label: "Seguro SSL" },
  { id: "2", icon: Check, label: "GDPR Compliant" },
  { id: "3", icon: Zap, label: "99.9% Uptime" },
];

export default function SocialProofSection() {
  const { formattedCount, ref } = useCountUp({
    end: 50,
    suffix: "+",
    duration: 2000,
  });

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#0A0A0A] flex flex-col justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative z-10 container-custom max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Side: big number text */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 space-y-4 text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative inline-block">
                <div
                  ref={ref}
                  className="text-7xl sm:text-8xl lg:text-[10rem] font-black gradient-text relative z-10 tracking-tighter leading-none filter drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                >
                  {formattedCount}
                </div>
              </div>
            </motion.div>

            <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-tight">
              entrenadores ya
              <br />
              <span className="text-gray-400 font-normal">
                construyendo su imperio
              </span>
            </p>
          </motion.div>

          {/* Right Side: Grid */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {brandLogos.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <motion.div
                  key={brand.id}
                  variants={staggerItem}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="group cursor-default"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-300 h-[140px] flex items-center justify-center">
                    {/* Top-left white glow spot */}
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/10 blur-[30px] rounded-full group-hover:bg-[#00E5FF]/20 group-hover:blur-[40px] transition-all duration-500" />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

                    <div className="relative z-10 p-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        className="w-10 h-10 text-white/70 group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Trust Badges - Closer spacing */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 pt-4 border-t border-white/5"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                variants={staggerItem}
                className="group relative"
              >
                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#00E5FF]/30 transition-all duration-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00E5FF]/10 text-[#00E5FF]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {badge.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
