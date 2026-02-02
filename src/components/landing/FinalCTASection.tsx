"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Button } from "../ui/Button";
import CountDown from "../ui/CountDown";
import SubscribeModal from "../shared/SubscribeModal";

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Countdown target: February 15, 2026
  const targetDate = new Date("2026-02-15T00:00:00");

  return (
    <section
      id="contact"
      className="py-24 md:py-40 relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Central Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0ea5e9] rounded-full filter blur-[180px] opacity-5 pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative z-10 text-center space-y-12"
        >
          {/* Headline */}
          <div className="space-y-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl uppercase font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Construye tu{" "}
              <span className="glow-text bg-gradient-to-r from-[#0ea5e9] via-[#06b6d4] to-[#3b82f6] bg-clip-text text-transparent">
                imperio fitness
              </span>{" "}
              HOY
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#94a3b8] max-w-xl mx-auto leading-relaxed"
            >
              Sé el primero en obtenerlo. Suscríbete ahora para recibir
              novedades exclusivas y ser parte del lanzamiento oficial.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Button
                variant="primary"
                size="lg"
                className="relative py-6 px-8 sm:px-12 text-xl font-bold rounded-2xl"
                onClick={() => setIsModalOpen(true)}
              >
                Acceso Anticipado
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={fadeInUp} className="pt-8 space-y-6">
            <p className="text-[#94a3b8] font-medium uppercase tracking-[0.2em] text-sm">
              Lanzamiento Oficial en:
            </p>
            <div className="flex justify-center">
              <CountDown targetDate={targetDate} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
