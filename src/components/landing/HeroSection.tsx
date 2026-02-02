"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import SubscribeModal from "../shared/SubscribeModal";

// Client-side only particles to avoid hydration mismatch
export const Particles = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00E5FF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  const [isSubscribeOpen, setIsSubscribeOpen] = React.useState(false);
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 pb-12 sm:pb-16"
    >
      {/* Animated Background with particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A] z-0" />

      {/* Hero Asset Background - Fixed Parallax */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/bg-hero.svg')" }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0" />

      {/* Glowing Orbs - Más sutiles y estratégicos */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,184,212,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles - Fixed Hydration Mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Particles />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8 lg:space-y-10 flex flex-col items-center w-full"
        >
          {/* Badge superior con efecto de luz */}
          <motion.div variants={fadeInUp} className="inline-block">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 229, 255, 0.3)",
                  "0 0 40px rgba(0, 229, 255, 0.5)",
                  "0 0 20px rgba(0, 229, 255, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-[#00E5FF]/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[#00E5FF]"
            >
              <span className="inline-block text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em]">
                REVOLUCIONANDO LA INDUSTRIA FITNESS
              </span>
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white w-full max-w-6xl mx-auto leading-[1.15] sm:leading-[1.1] tracking-tight drop-shadow-2xl px-4 sm:px-0"
          >
            Tu marca, tu método,{" "}
            <span className="relative inline-block mt-1 sm:mt-2">
              <span className="gradient-text relative z-10 filter drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                tu imperio fitness
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-primary opacity-20 blur-2xl"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5]/80 w-full max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-6"
          >
            La plataforma que convierte entrenadores en{" "}
            <span className="text-[#00E5FF] font-medium drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
              marcas digitales
            </span>
            .
          </motion.p>

          {/* CTAs - Responsive: columna en mobile, fila en desktop */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-8 w-full max-w-2xl mx-auto px-4"
          >
            {/* Primary CTA con animación de glow */}
            <motion.div
              className="relative group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-primary rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <button
                onClick={() => setIsSubscribeOpen(true)}
                className="relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00b8d4] to-[#00e5ff] text-[#0a0a0a] font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300"
              >
                Sé el primero en enterarte
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Secondary CTA 
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl glass-liquid text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 hover:border-[#00e5ff]/50 transition-all duration-300">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Ver Demo
              </button>
            </motion.div>
            */}
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-4xl mx-auto pt-2 sm:pt-4 px-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm text-[#F5F5F5]/50">
              <span className="whitespace-nowrap flex items-center gap-2 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                <span className="text-[#00E5FF]">✓</span> Sin tarjeta de crédito
              </span>
              <span className="hidden sm:inline opacity-30">|</span>
              <span className="whitespace-nowrap flex items-center gap-2 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                <span className="text-[#00E5FF]">✓</span> Cancela cuando quieras
              </span>
              <span className="hidden sm:inline opacity-30">|</span>
              <span className="whitespace-nowrap flex items-center gap-2 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                <span className="text-[#00E5FF]">✓</span> Soporte en español
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </section>
  );
}
