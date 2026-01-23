"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Users, TrendingUp, Crown } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";

export interface TimelineStep {
  id: string;
  period: string;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    id: "1",
    period: "DÍA 1",
    title: "Configura tu marca",
    description: "Personaliza tu app con tu logo, colores y dominio propio.",
  },
  {
    id: "2",
    period: "SEMANA 1",
    title: "Migra tus clientes",
    description: "Importa tus clientes actuales y configura sus planes.",
  },
  {
    id: "3",
    period: "MES 1",
    title: "Duplica tu capacidad",
    description: "Automatiza tareas y atiende más clientes sin esfuerzo extra.",
  },
  {
    id: "4",
    period: "MES 3",
    title: "Escala tu Imperio",
    description: "Expande tu negocio y maximiza tus ingresos.",
  },
];

const IconComponent = ({ index }: { index: number }) => {
  const icons = [Settings, Users, TrendingUp, Crown];
  const Icon = icons[index];
  return <Icon className="w-6 h-6" strokeWidth={2.5} />;
};

export default function BenefitsTimeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col items-center gap-20"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-4 flex flex-col items-center max-w-3xl"
          >
            <h2 className="heading-xl text-white">
              Tu camino al{" "}
              <span className="gradient-text glow-text">Éxito</span>
            </h2>
          </motion.div>

          {/* Timeline Container - Centered */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Centered Neon Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00E5FF] via-[#00B8D4] to-[#7B00FF] rounded-full shadow-[0_0_20px_rgba(0,229,255,0.8),0_0_40px_rgba(0,229,255,0.4)]" />

            {/* Timeline Items */}
            <motion.div variants={staggerContainer} className="space-y-20">
              {timelineSteps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={step.id}
                    variants={staggerItem}
                    className="relative grid grid-cols-2 gap-12 items-center"
                  >
                    {/* Left Content */}
                    <div
                      className={`${isLeft ? "block" : "invisible"} text-right pr-8`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-end gap-3"
                      >
                        <span className="text-[#00E5FF] font-bold text-base tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
                          {step.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Right Content */}
                    <div
                      className={`${!isLeft ? "block" : "invisible"} text-left pl-8`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-start gap-3"
                      >
                        <span className="text-[#00E5FF] font-bold text-base tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
                          {step.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Node */}
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        boxShadow:
                          "0 0 40px rgba(0, 229, 255, 1), 0 0 60px rgba(0, 229, 255, 0.5)",
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#00E5FF] border-1 border-white shadow-[0_0_25px_rgba(0,229,255,0.8),0_0_50px_rgba(0,229,255,0.4)] flex items-center justify-center z-20 transition-all duration-300"
                    >
                      <IconComponent index={index} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
