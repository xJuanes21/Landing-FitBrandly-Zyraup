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
              <span className="gradient-text block mt-2">
                plataformas genéricas?
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
          >
            {problemSolutions.map((item, index) => {
              const ProblemIcon = item.problemIcon;
              const SolutionIcon = item.solutionIcon;

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="flex flex-col gap-6 w-full max-w-md"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-[2px] bg-gradient-to-b from-[#FF4444]/20 via-[#CC3333]/20 to-[#AA2222]/20 rounded-[26px] blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#2a1a1a] via-[#1f1515] to-[#1a0f0f] backdrop-blur-xl border border-[#FF4444]/10 shadow-2xl">
                      {/* Corner glow - Top Left */}
                      <div className="absolute top-0 left-0 w-24 h-24">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF4444] to-transparent" />
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#FF4444] to-transparent" />
                        <div className="absolute top-0 left-0 w-12 h-12 bg-[#FF4444]/30 blur-xl rounded-full" />
                      </div>

                      {/* Corner glow - Bottom Right */}
                      <div className="absolute bottom-0 right-0 w-24 h-24">
                        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#FF4444] to-transparent" />
                        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#FF4444] to-transparent" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#FF4444]/30 blur-xl rounded-full" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#FF4444]/5 to-transparent pointer-events-none" />

                      <div className="relative p-8 min-h-[200px] flex flex-col items-center justify-center text-center space-y-4">
                        <div className="p-4 rounded-2xl">
                          <ProblemIcon
                            className="w-10 h-10 text-[#FF4444]"
                            strokeWidth={1.5}
                          />
                        </div>

                        <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed">
                          {item.problem}
                        </p>
                      </div>

                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(110deg, transparent 30%, rgba(255, 68, 68, 0.1) 50%, transparent 70%)",
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

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex justify-center"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="text-[#00E5FF]"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-[2px] bg-gradient-to-b from-[#00E5FF]/20 via-[#00B8D4]/20 to-[#0088A0]/20 rounded-[26px] blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a3a42] via-[#0f2832] to-[#0a1f28] backdrop-blur-xl border border-[#00E5FF]/10 shadow-2xl">
                      {/* Corner glow - Top Left */}
                      <div className="absolute top-0 left-0 w-24 h-24">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent" />
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00E5FF] to-transparent" />
                        <div className="absolute top-0 left-0 w-12 h-12 bg-[#00E5FF]/40 blur-xl rounded-full" />
                      </div>

                      {/* Corner glow - Bottom Right */}
                      <div className="absolute bottom-0 right-0 w-24 h-24">
                        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#00E5FF] to-transparent" />
                        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#00E5FF] to-transparent" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#00E5FF]/40 blur-xl rounded-full" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent pointer-events-none" />

                      <div className="relative p-8 min-h-[200px] flex flex-col items-center justify-center text-center space-y-4">
                        <div className="p-4 rounded-2xl">
                          <SolutionIcon
                            className="w-10 h-10 text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
                            strokeWidth={1.5}
                          />
                        </div>

                        <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
                          {item.solution}
                        </p>
                      </div>

                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(110deg, transparent 30%, rgba(0, 229, 255, 0.15) 50%, transparent 70%)",
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
