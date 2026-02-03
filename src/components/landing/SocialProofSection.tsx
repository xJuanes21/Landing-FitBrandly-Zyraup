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
import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

const coaches = [
  { id: "1", image: "/models/fitness-8 copy.jpg", name: "Coach Mike" },
  { id: "2", image: "/models/fitness-2.png", name: "Coach Sarah" },
  { id: "3", image: "/models/fitness-3.png", name: "Coach David" },
  { id: "4", image: "/models/fitness-12.png", name: "Coach Elena" },
  { id: "5", image: "/models/fitness-5.png", name: "Coach Marc" },
  { id: "6", image: "/models/fitness-13.jpg", name: "Coach Elena" },
];

const trustBadges = [
  { id: "1", icon: Shield, label: "Seguridad Nivel Bancario" },
  { id: "2", icon: Check, label: "100% Privado" },
  { id: "3", icon: Zap, label: "Alto Rendimiento 24/7" },
];

export default function SocialProofSection() {
  const { formattedCount, ref } = useCountUp({
    end: 50,
    suffix: "+",
    duration: 2000,
  });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#0A0A0A] flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative z-10 container-custom max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side: big number text */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 space-y-6 text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative inline-block"
            >
              <div
                ref={ref}
                className="text-8xl sm:text-9xl lg:text-[11rem] font-black gradient-text tracking-tighter leading-none filter drop-shadow-[0_0_50px_rgba(0,229,255,0.4)]"
              >
                {formattedCount}
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00E5FF] rounded-full blur-3xl opacity-50" />
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-black leading-none tracking-tighter uppercase italic">
                Entrenadores que ya están
                <br />
                <span className="text-[#00E5FF] drop-shadow-[0_0_10px_#00E5FF]">
                  construyendo su imperio
                </span>
              </h2>
              <p className="text-gray-400 text-lg font-medium max-w-md mx-auto lg:mx-0">
                Líderes de la industria confían en FitBrandly para escalar su
                metodología al siguiente nivel.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Coach Grid */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {coaches.map((coach) => (
              <motion.div
                key={coach.id}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="group relative"
              >
                {/* Outer glow - CYAN permanente, más fuerte en hover */}
                <div className="absolute inset-0 bg-[#00E5FF]/20 group-hover:bg-[#00E5FF]/40 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />

                <div
                  className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#051a20] via-[#082530] to-[#041519] aspect-[4/5] flex flex-col pt-4 transition-all duration-700"
                  style={{
                    boxShadow: `
                      0 0 0 2px rgba(0, 229, 255, 0.8),
                      0 0 20px rgba(0, 229, 255, 0.4),
                      inset 0 0 30px rgba(0, 229, 255, 0.1)
                    `,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 0 0 3px rgba(0, 229, 255, 1),
                      0 0 40px rgba(0, 229, 255, 0.7),
                      inset 0 0 50px rgba(0, 229, 255, 0.2)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 0 0 2px rgba(0, 229, 255, 0.8),
                      0 0 20px rgba(0, 229, 255, 0.4),
                      inset 0 0 30px rgba(0, 229, 255, 0.1)
                    `;
                  }}
                >
                  {/* Top Glossy Reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                  <div className="absolute top-2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />

                  {/* Coach Image */}
                  <div className="relative flex-1 w-full px-4 overflow-hidden">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-contain object-bottom transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Shadow at the bottom of the image for better blending */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  </div>

                  {/* Overlay Text */}
                  <div className="relative z-20 pb-4 text-center">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-white/50 uppercase group-hover:text-[#00E5FF] transition-colors duration-300">
                      FITNESS COACH
                    </span>
                  </div>

                  {/* Shine effect - solo visible en hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 30%, rgba(0, 229, 255, 0.2) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges - Closer spacing */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center lg:justify-center items-center gap-4 md:gap-6 pt-4 border-t border-white/5"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                variants={staggerItem}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#00E5FF]/20 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 px-6 py-3 rounded-full border border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.1)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:border-[#00E5FF] transition-all duration-300 bg-black/40 backdrop-blur-sm group-hover:bg-[#00E5FF]/10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.5)] group-hover:bg-[#00E5FF] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(0,229,255,1)] transition-all duration-300">
                    <Icon className="w-4 h-4 text-[#00E5FF] group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] transition-all">
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
