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
    <section
      id="problema-solucion"
      className="py-32 md:py-40 relative overflow-hidden bg-[#0A0A0A] flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-20 md:space-y-24"
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
                    className="group relative h-[240px]"
                  >
                    {/* Outer glow - suave y difuso */}
                    <div className="absolute inset-0 bg-red-500/30 rounded-[28px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                    {/* Card principal con borde neon ÚNICO */}
                    <div
                      className="relative h-full rounded-[28px] bg-gradient-to-b from-[#1a0505] via-[#200808] to-[#150404] p-8 overflow-hidden"
                      style={{
                        boxShadow: `
                          0 0 0 2px rgba(239, 68, 68, 0.8),
                          0 0 20px rgba(239, 68, 68, 0.6),
                          0 0 40px rgba(239, 68, 68, 0.3),
                          inset 0 0 60px rgba(239, 68, 68, 0.2),
                          inset 0 0 30px rgba(239, 68, 68, 0.15)
                        `,
                      }}
                    >
                      {/* Difuminado interno en los bordes - efecto de luz interior */}
                      <div className="absolute inset-0 rounded-[28px] pointer-events-none">
                        {/* Top glow interno */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-red-500/20 via-red-500/10 to-transparent" />

                        {/* Right glow interno */}
                        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-red-500/20 via-red-500/10 to-transparent" />

                        {/* Bottom glow interno */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-500/20 via-red-500/10 to-transparent" />

                        {/* Left glow interno */}
                        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4">
                        {/* Icon with glow */}
                        <div className="relative p-4 rounded-2xl">
                          <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-2xl" />
                          <ProblemIcon
                            className="relative w-12 h-12 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]"
                            strokeWidth={2}
                          />
                        </div>

                        <p className="text-white/95 font-medium text-base md:text-lg leading-relaxed">
                          {item.problem}
                        </p>
                      </div>

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(110deg, transparent 30%, rgba(239, 68, 68, 0.15) 50%, transparent 70%)",
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

                  {/* Arrow - White Neon */}
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
                    className="group relative h-[240px]"
                  >
                    {/* Outer glow - suave y difuso */}
                    <div className="absolute inset-0 bg-[#00E5FF]/40 rounded-[28px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

                    {/* Card principal con borde neon ÚNICO */}
                    <div
                      className="relative h-full rounded-[28px] bg-gradient-to-b from-[#051a20] via-[#082530] to-[#041519] p-8 overflow-hidden"
                      style={{
                        boxShadow: `
                          0 0 0 2px rgba(0, 229, 255, 0.9),
                          0 0 25px rgba(0, 229, 255, 0.7),
                          0 0 50px rgba(0, 229, 255, 0.4),
                          inset 0 0 70px rgba(0, 229, 255, 0.25),
                          inset 0 0 40px rgba(0, 229, 255, 0.2)
                        `,
                      }}
                    >
                      {/* Difuminado interno en los bordes - efecto de luz interior CYAN */}
                      <div className="absolute inset-0 rounded-[28px] pointer-events-none">
                        {/* Top glow interno */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />

                        {/* Right glow interno */}
                        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />

                        {/* Bottom glow interno */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />

                        {/* Left glow interno */}
                        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4">
                        {/* Icon with glow */}
                        <div className="relative p-4 rounded-2xl">
                          <div className="absolute inset-0 bg-[#00E5FF]/30 blur-xl rounded-2xl" />
                          <SolutionIcon
                            className="relative w-12 h-12 text-[#00E5FF] drop-shadow-[0_0_25px_rgba(0,229,255,1)]"
                            strokeWidth={2}
                          />
                        </div>

                        <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
                          {item.solution}
                        </p>
                      </div>

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
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
                </motion.div>
              );
            })}
          </MobileCarousel>

          {/* New CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center pt-22"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-10 py-5 rounded-full font-black text-lg tracking-widest uppercase overflow-hidden"
              style={{
                boxShadow: `
                  0 0 0 2px rgba(0, 229, 255, 0.4),
                  0 0 20px rgba(0, 229, 255, 0.2)
                `,
              }}
            >
              <div className="absolute inset-0 bg-[#00E5FF]/10 group-hover:bg-[#00E5FF]/20 transition-colors" />
              <span className="relative z-10 text-[#00E5FF] group-hover:text-white transition-colors duration-300">
                ¿Necesitas algo más? Contáctanos
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,1)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
