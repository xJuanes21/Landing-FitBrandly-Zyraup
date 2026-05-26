"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MonitorPlay } from "lucide-react";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Particles } from "./HeroSection";

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#00E5FF]/5 to-[#0A0A0A] opacity-80" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Dynamic Neon Orbs - Branded Cyan */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,184,212,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <Particles />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {/* Branded Container using PricingSection's Featured Style */}
          <div className="relative group">
            {/* Intense Outer Glow (Pricing Featured Style) */}
            <div className="absolute inset-0 bg-[#00E5FF]/30 rounded-[2.5rem] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

            <div
              className="relative rounded-[2.5rem] p-8 sm:p-12 md:p-20 overflow-hidden text-center transition-all duration-700 bg-gradient-to-b from-[#051a20] via-[#082530] to-[#041519] border border-[#00E5FF]/30 group-hover:border-[#00E5FF]/60"
              style={{
                boxShadow: `
                  0 0 0 2px rgba(0, 229, 255, 0.3),
                  0 0 30px rgba(0, 229, 255, 0.2),
                  inset 0 0 50px rgba(0, 229, 255, 0.1)
                `,
              }}
            >
              {/* Internal Bezel Glows (Pricing Style) */}
              <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#00E5FF]/20 via-[#00E5FF]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00E5FF]/20 via-[#00E5FF]/10 to-transparent" />
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#00E5FF]/20 via-[#00E5FF]/10 to-transparent" />
                <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#00E5FF]/20 via-[#00E5FF]/10 to-transparent" />
              </div>

              <div className="relative z-10 space-y-10">
                {/* Header Icon */}
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all duration-500">
                    <MonitorPlay className="w-8 h-8 md:w-10 md:h-10 text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                  </div>
                </motion.div>

                {/* Headline */}
                <div className="space-y-6">
                  <motion.h2
                    variants={fadeInUp}
                    className="text-4xl sm:text-5xl md:text-6xl uppercase font-black text-white tracking-tight leading-[1.1]"
                  >
                    El futuro del fitness está {" "}
                    <span className="gradient-text relative inline-block mt-2 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                      a un clic.
                    </span>
                  </motion.h2>

                  <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium px-4"
                  >
                    No te lo imagines, vívelo. Accede a nuestra plataforma en
                    tiempo real y descubre por qué somos el aliado estratégico
                    de los líderes en fitness.
                  </motion.p>
                </div>

                {/* CTA Button */}
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-center pt-4"
                >
                  <div className="relative group/btn inline-block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00b8d4] to-[#00e5ff] rounded-2xl blur opacity-30 group-hover/btn:opacity-100 transition duration-1000"></div>
                    <Link
                      href="https://demo.fitbrandly.com"
                      target="_blank"
                      passHref
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        className="relative py-5 px-8 sm:px-10 text-lg md:text-xl font-black italic uppercase rounded-2xl flex items-center justify-center gap-3 w-full sm:w-auto transform transition-all duration-300 group-hover/btn:scale-[1.05] group-hover/btn:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
                      >
                        Explora ahora la Demo
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Shimmer effect on hover (Pricing Style) */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(0,229,255,0.15) 50%, transparent 70%)",
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
