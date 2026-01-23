"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Button } from "../ui/Button";
import CountDown from "../ui/CountDown";

export default function FinalCTASection() {
  // Countdown target: 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Glow Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF] rounded-full filter blur-[200px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative z-10 text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-block"></motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="heading-xl text-white max-w-3xl mx-auto"
          >
            Construye tu{" "}
            <span className="gradient-text glow-text">imperio fitness</span> HOY
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-[#F5F5F5] opacity-80 max-w-xl mx-auto"
          >
            Únete a los 500+ entrenadores que ya eligieron la libertad
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(0, 229, 255, 0.5)",
                  "0 0 60px rgba(0, 229, 255, 0.8)",
                  "0 0 30px rgba(0, 229, 255, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block rounded-xl"
            >
              <Button variant="primary" size="lg" href="#pricing">
                Comienza gratis ahora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-[#F5F5F5] opacity-60 text-sm">
              Oferta de lanzamiento termina en:
            </p>
            <div className="flex justify-center">
              <CountDown targetDate={targetDate} />
            </div>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            variants={fadeInUp}
            className="text-[#F5F5F5] opacity-50 text-sm"
          >
            Sin tarjeta de crédito • Cancela cuando quieras
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
