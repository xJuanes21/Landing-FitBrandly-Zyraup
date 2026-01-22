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
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]  rounded-full blur-[250px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative z-10 container-custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative inline-block">
                <div
                  ref={ref}
                  className="text-7xl sm:text-8xl lg:text-9xl font-black gradient-text relative z-10 tracking-tighter leading-none"
                >
                  {formattedCount}
                </div>
                <motion.div
                  className="absolute -inset-8 bg-gradient-primary opacity-10 blur-[80px] -z-10"
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed max-w-md">
              entrenadores ya
              <br />
              construyendo su imperio
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          >
            {brandLogos.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <motion.div
                  key={brand.id}
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="group cursor-pointer"
                >
                  <div className="glass-liquid rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 hover:border-white/20 relative overflow-hidden flex items-center justify-center min-h-[140px] md:min-h-[160px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/0 via-[#00E5FF]/0 to-[#00B8D4]/0 group-hover:from-[#00E5FF]/8 group-hover:to-[#00B8D4]/8 transition-all duration-500 rounded-2xl md:rounded-3xl" />

                    <div className="relative z-10">
                      <div className="p-3 md:p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                        <Icon
                          className="w-10 h-10 md:w-12 md:h-12 text-[#00E5FF]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <motion.div
                      className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(110deg, transparent 40%, rgba(0, 229, 255, 0.15) 50%, transparent 60%)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{
                        backgroundPosition: ["200% 0", "-200% 0"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                variants={staggerItem}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/30 via-[#00B8D4]/30 to-[#00E5FF]/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />

                <div className="relative glass-liquid flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full transition-all duration-300 hover:border-[#00E5FF]/50 overflow-hidden">
                  <div className="absolute inset-0 bg-[#00E5FF]/0 group-hover:bg-[#00E5FF]/10 transition-all duration-300 rounded-full" />

                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#00B8D4]/20 group-hover:from-[#00E5FF]/30 group-hover:to-[#00B8D4]/30 transition-all duration-300">
                    <Icon
                      className="w-5 h-5 text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                      strokeWidth={2.5}
                    />
                  </div>

                  <span className="relative z-10 text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
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
