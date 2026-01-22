"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
} from "@/lib/animations";

// Client-side only particles to avoid hydration mismatch
const Particles = () => {
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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Animated Background with particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glowing Orbs - Más sutiles y estratégicos */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full"
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
        className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] rounded-full"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8 flex flex-col items-center"
        >
          {/* Badge superior */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00E5FF]/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-sm font-medium text-[#F5F5F5]">
              Revolucionando la industria fitness
            </span>
          </motion.div>

          {/* Main Headline - Más impactante */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white max-w-6xl mx-auto leading-[1.1] tracking-tight"
          >
            Tu marca, tu método,{" "}
            <span className="relative inline-block mt-2">
              <span className="gradient-text relative z-10">
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
            className="text-lg sm:text-xl lg:text-2xl text-[#F5F5F5]/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            La plataforma SaaS que convierte entrenadores en{" "}
            <span className="text-[#00E5FF] font-medium">marcas digitales</span>
            .
          </motion.p>

          {/* CTAs - Más destacados */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 w-full max-w-lg mx-auto"
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
              <Button
                variant="primary"
                size="lg"
                href="#pricing"
                className="relative w-full sm:w-auto justify-center"
              >
                Comienza Gratis 14 Días
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                href="#video"
                className="w-full sm:w-auto justify-center"
              >
                <Play className="w-5 h-5" />
                Ver Demo en Vivo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust line - Fixed Wrapping */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-[#F5F5F5]/50 max-w-2xl mx-auto flex flex-wrap justify-center gap-4"
          >
            <span className="whitespace-nowrap">✓ Sin tarjeta de crédito</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ Cancela cuando quieras</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ Soporte en español</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator - Más sutil */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-[#F5F5F5]/30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#00E5FF]/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
