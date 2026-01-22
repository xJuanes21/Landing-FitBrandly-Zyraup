"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import type { PricingPlan } from "@/types";

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 50000,
    currency: "COP",
    period: "/mes",
    description: "Ideal para comenzar",
    features: [
      "Hasta 10 usuarios",
      "App personalizada",
      "Nutrición personalizada",
      "Soporte email",
    ],
    badge: "IDEAL PARA INICIAR",
  },
  {
    id: "standard",
    name: "Standard",
    price: 70000,
    currency: "COP",
    period: "/mes",
    description: "Lo más popular",
    features: [
      "Hasta 18 usuarios",
      "Nutrición personalizada",
      "Soporte integrado",
      "Mensajería integrada",
    ],
    badge: "★ MÁS POPULAR",
    featured: true,
  },
  {
    id: "advance",
    name: "Advance",
    price: 120000,
    currency: "COP",
    period: "/mes",
    description: "Máximo poder",
    features: [
      "Hasta 30 usuarios",
      "Nutrición personalizada",
      "Soporte integrado",
      "Mensajería integrada",
    ],
    badge: "SIN LÍMITES",
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price: number) => {
    const finalPrice = isAnnual ? Math.round(price * 0.85) : price;
    return `$${(finalPrice / 1000).toFixed(0)},${(finalPrice % 1000).toString().padStart(3, "0")}`;
  };

  return (
    <section id="pricing" className="py-24 md:py-40 relative overflow-hidden">
      <div className="relative z-10 container-custom">
        {/* Background gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-[#00E5FF]/10 via-[#00E5FF]/5 to-transparent blur-3xl pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative z-10 space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Explora nuestros planes
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto text-center">
              Descubre los beneficios de cada plan y elige el que mejor se
              ajuste a tus necesidades.
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative group h-full"
              >
                {/* Glow effect solo para featured */}
                {plan.featured && (
                  <>
                    <div className="absolute -inset-[2px] bg-gradient-to-b from-[#00E5FF] via-[#00B8D4] to-[#0088A0] rounded-[28px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-[#00E5FF] via-[#00B8D4] to-[#0088A0] rounded-[26px] opacity-80" />
                  </>
                )}

                {/* Card principal */}
                <div
                  className={`relative rounded-3xl overflow-hidden h-full flex flex-col ${
                    plan.featured
                      ? "bg-gradient-to-b from-[#1a3a42] via-[#0f2832] to-[#0a1f28]"
                      : "bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0f0f0f]"
                  } backdrop-blur-xl border ${
                    plan.featured ? "border-[#00E5FF]/30" : "border-white/10"
                  } shadow-2xl`}
                >
                  {/* Subtle inner glow */}
                  <div
                    className={`absolute inset-0 ${
                      plan.featured
                        ? "bg-gradient-to-b from-[#00E5FF]/5 to-transparent"
                        : "bg-gradient-to-b from-white/[0.02] to-transparent"
                    } pointer-events-none`}
                  />

                  {/* Badge superior */}
                  <div className="relative pt-6 pb-4 text-center border-b border-white/5">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest ${
                        plan.featured
                          ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30"
                          : "bg-white/5 text-white/50 border border-white/10"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 space-y-8 flex-1 flex flex-col">
                    {/* Plan name */}
                    <div className="text-center">
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          plan.featured ? "text-white" : "text-white/90"
                        }`}
                      >
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span
                          className={`text-5xl font-black tracking-tight ${
                            plan.featured
                              ? "text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                              : "text-white/90"
                          }`}
                        >
                          {formatPrice(plan.price)}
                        </span>
                        <span className="text-sm text-white/50 font-medium">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 flex-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.featured ? "bg-[#00E5FF]/20" : "bg-white/5"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                plan.featured
                                  ? "text-[#00E5FF]"
                                  : "text-white/60"
                              }`}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-sm text-white/70 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                          plan.featured
                            ? "bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black shadow-lg shadow-[#00E5FF]/30 hover:shadow-[#00E5FF]/50"
                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        Comenzar ahora
                      </motion.button>
                    </div>
                  </div>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: plan.featured
                        ? "linear-gradient(110deg, transparent 30%, rgba(0,229,255,0.1) 50%, transparent 70%)"
                        : "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)",
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
            ))}
          </motion.div>

          {/* Guarantee text */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-white/40 text-sm font-medium"
          >
            ✓ 14 días gratis &nbsp;•&nbsp; ✓ Sin tarjeta de crédito
            &nbsp;•&nbsp; ✓ Cancela cuando quieras
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
