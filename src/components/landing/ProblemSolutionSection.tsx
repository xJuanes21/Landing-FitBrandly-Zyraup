"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  DollarSign,
  Sparkles,
  Smartphone,
  Banknote,
  Crown,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import MobileCarousel from "@/components/ui/MobileCarousel";

const problemSolutions = [
  {
    id: "1",
    problem: "Pierdes clientes por apps impersonales",
    solution: "Tu propia app con TU identidad visual",
    problemIcon: Users,
    solutionIcon: Smartphone,
  },
  {
    id: "2",
    problem: "Pagas comisiones abusivas a terceros",
    solution: "0% comisiones, 100% ingresos para ti",
    problemIcon: DollarSign,
    solutionIcon: Banknote,
  },
  {
    id: "3",
    problem: "Tu marca se diluye en plataformas ajenas",
    solution: "Tu marca, tu dominio, tu imperio",
    problemIcon: Sparkles,
    solutionIcon: Crown,
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A] flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              ¿Cansado de depender de{" "}
              <span className="gradient-text glow-text block mt-2">
                plataformas genéricas?
              </span>
            </h2>
          </motion.div>

          <MobileCarousel className="grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
            {problemSolutions.map((item, index) => {
              const ProblemIcon = item.problemIcon;
              const SolutionIcon = item.solutionIcon;

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="flex flex-col gap-6 w-full max-w-md h-full"
                >
                  {/* Problem Card - Red Neon */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative"
                  >
                    {/* Intense outer glow */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-red-500/40 via-red-600/30 to-red-700/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Extra glow layer */}
                    <div className="absolute -inset-2 bg-red-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a0505] via-[#200808] to-[#150404] backdrop-blur-xl border-2 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_50px_rgba(239,68,68,0.6)] transition-all duration-500">
                      {/* Enhanced Corner glows - Top Left */}
                      <div className="absolute top-0 left-0 w-32 h-32">
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-red-400 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-red-500 via-red-400 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <div className="absolute top-0 left-0 w-16 h-16 bg-red-500/50 blur-2xl rounded-full animate-pulse" />
                      </div>

                      {/* Enhanced Corner glows - Bottom Right */}
                      <div className="absolute bottom-0 right-0 w-32 h-32">
                        <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-red-500 via-red-400 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <div className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-red-500 via-red-400 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-500/50 blur-2xl rounded-full animate-pulse" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none" />

                      <div className="relative p-8 min-h-[200px] flex flex-col items-center justify-center text-center space-y-4">
                        {/* Enhanced icon with multiple glow layers */}
                        <div className="relative p-4 rounded-2xl">
                          <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-2xl" />
                          <ProblemIcon
                            className="relative w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.9)] filter brightness-125"
                            strokeWidth={2}
                          />
                        </div>

                        <p className="text-white/95 font-medium text-base md:text-lg leading-relaxed drop-shadow-lg">
                          {item.problem}
                        </p>
                      </div>

                      {/* Enhanced shine effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(110deg, transparent 25%, rgba(239, 68, 68, 0.3) 50%, transparent 75%)",
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

                  {/* Enhanced Arrow - White Neon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex justify-center"
                  >
                    <motion.div
                      animate={{ y: [0, 12, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Multiple glow layers for intense effect */}
                      <div className="absolute inset-0 blur-xl bg-white/60 rounded-full scale-150" />
                      <div className="absolute inset-0 blur-2xl bg-white/40 rounded-full scale-200" />

                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="relative text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] filter brightness-150"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Solution Card - Cyan Neon */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative"
                  >
                    {/* Intense outer glow */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-[#00E5FF]/50 via-[#00B8D4]/40 to-[#0088A0]/30 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Extra glow layer */}
                    <div className="absolute -inset-2 bg-[#00E5FF]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#051a20] via-[#082530] to-[#041519] backdrop-blur-xl border-2 border-[#00E5FF]/40 shadow-[0_0_40px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_60px_rgba(0,229,255,0.7)] transition-all duration-500">
                      {/* Enhanced Corner glows - Top Left */}
                      <div className="absolute top-0 left-0 w-32 h-32">
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00E5FF] via-[#00B8D4] to-transparent shadow-[0_0_20px_rgba(0,229,255,1)]" />
                        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#00E5FF] via-[#00B8D4] to-transparent shadow-[0_0_20px_rgba(0,229,255,1)]" />
                        <div className="absolute top-0 left-0 w-16 h-16 bg-[#00E5FF]/60 blur-2xl rounded-full animate-pulse" />
                      </div>

                      {/* Enhanced Corner glows - Bottom Right */}
                      <div className="absolute bottom-0 right-0 w-32 h-32">
                        <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-[#00E5FF] via-[#00B8D4] to-transparent shadow-[0_0_20px_rgba(0,229,255,1)]" />
                        <div className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-[#00E5FF] via-[#00B8D4] to-transparent shadow-[0_0_20px_rgba(0,229,255,1)]" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#00E5FF]/60 blur-2xl rounded-full animate-pulse" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/15 to-transparent pointer-events-none" />

                      <div className="relative p-8 min-h-[200px] flex flex-col items-center justify-center text-center space-y-4">
                        {/* Enhanced icon with multiple glow layers */}
                        <div className="relative p-4 rounded-2xl">
                          <div className="absolute inset-0 bg-[#00E5FF]/30 blur-xl rounded-2xl" />
                          <SolutionIcon
                            className="relative w-12 h-12 text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,1)] filter brightness-125"
                            strokeWidth={2}
                          />
                        </div>

                        <p className="text-white font-semibold text-base md:text-lg leading-relaxed drop-shadow-lg">
                          {item.solution}
                        </p>
                      </div>

                      {/* Enhanced shine effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(110deg, transparent 25%, rgba(0, 229, 255, 0.35) 50%, transparent 75%)",
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
                </motion.div>
              );
            })}
          </MobileCarousel>
        </motion.div>
      </div>
    </section>
  );
}
