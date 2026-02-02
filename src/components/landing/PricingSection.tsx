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
import MobileCarousel from "@/components/ui/MobileCarousel";

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Básico",
    price: 100000,
    currency: "COP",
    period: "/mes",
    description: "Lo mínimo para empezar",
    features: [
      "Hasta 10 usuarios",
      "Módulo de Ejercicios",
      "App personalizada",
      "Soporte email",
    ],
    badge: "IDEAL PARA INICIAR",
  },
  {
    id: "standard",
    name: "Standard",
    price: 160000,
    currency: "COP",
    period: "/mes",
    description: "Lo más popular",
    features: [
      "Hasta 20 usuarios",
      "Módulo de Ejercicios",
      "Módulo de Alimentación",
      "Soporte integrado",
      "Mensajería integrada",
    ],
    badge: "★ MÁS POPULAR",
    featured: true,
  },
  {
    id: "advance",
    name: "Advance",
    price: 250000,
    currency: "COP",
    period: "/mes",
    description: "Máximo poder para tu marca",
    features: [
      "Hasta 25 usuarios",
      "Módulo de Ejercicios",
      "Módulo de Alimentación",
      "Chat privado",
      "Calendario de actividades",
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
    <section id="precios" className="relative overflow-hidden py-24 md:py-32">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black glow-text text-white tracking-tight">
              Explora nuestros planes
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto text-center">
              Descubre los beneficios de cada plan y elige el que mejor se
              ajuste a tus necesidades.
            </p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <MobileCarousel className="grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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
                {/* Outer glow */}
                {plan.featured ? (
                  // Glow CYAN para el destacado
                  <div className="absolute inset-0 bg-[#00E5FF]/40 rounded-[28px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                ) : (
                  // Glow blanco sutil para los demás
                  <div className="absolute inset-0 bg-white/10 rounded-[28px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                )}

                {/* Card principal con borde neon */}
                <div
                  className={`relative h-full rounded-[28px] overflow-hidden flex flex-col ${
                    plan.featured
                      ? "bg-gradient-to-b from-[#051a20] via-[#082530] to-[#041519]"
                      : "bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0f0f0f]"
                  } backdrop-blur-xl`}
                  style={
                    plan.featured
                      ? {
                          boxShadow: `
                            0 0 0 2px rgba(0, 229, 255, 0.9),
                            0 0 25px rgba(0, 229, 255, 0.7),
                            0 0 50px rgba(0, 229, 255, 0.4),
                            inset 0 0 70px rgba(0, 229, 255, 0.25),
                            inset 0 0 40px rgba(0, 229, 255, 0.2)
                          `,
                        }
                      : {
                          boxShadow: `
                            0 0 0 1px rgba(255, 255, 255, 0.15),
                            0 0 15px rgba(255, 255, 255, 0.1),
                            0 0 30px rgba(255, 255, 255, 0.05),
                            inset 0 0 40px rgba(255, 255, 255, 0.03)
                          `,
                        }
                  }
                >
                  {/* Difuminado interno en los bordes */}
                  {plan.featured ? (
                    // Difuminado CYAN para el destacado
                    <div className="absolute inset-0 rounded-[28px] pointer-events-none">
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
                      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
                      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
                    </div>
                  ) : (
                    // Difuminado blanco sutil para los demás
                    <div className="absolute inset-0 rounded-[28px] pointer-events-none">
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/8 via-white/4 to-transparent" />
                      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white/8 via-white/4 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/8 via-white/4 to-transparent" />
                      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white/8 via-white/4 to-transparent" />
                    </div>
                  )}

                  {/* Badge superior */}
                  <div className="relative pt-8 pb-6 text-center border-b border-white/5">
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
                  <div className="relative p-10 lg:p-12 space-y-10 flex-1 flex flex-col">
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
                    <ul className="space-y-6 flex-1">
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
                    <div className="pt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-5 rounded-xl font-semibold text-base transition-all duration-300 ${
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
                    className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: plan.featured
                        ? "linear-gradient(110deg, transparent 30%, rgba(0,229,255,0.2) 50%, transparent 70%)"
                        : "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
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
            ))}
          </MobileCarousel>

          {/* Guarantee text & Custom Plan */}
          <motion.div variants={fadeInUp} className="space-y-8 text-center">
            <p className="text-white/40 text-sm font-medium pt-8">
              ✓ 14 días gratis &nbsp;•&nbsp; ✓ Sin tarjeta de crédito
              &nbsp;•&nbsp; ✓ Cancela cuando quieras
            </p>

            <div className="pt-4">
              <Button
                variant="ghost"
                size="lg"
                className="glow-text tracking-wider text-sm uppercase rounded-full border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all duration-300"
                onClick={() => {
                  const whatsappLink =
                    process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
                    "https://wa.me/573013488759";
                  window.open(
                    `${whatsappLink}?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20un%20plan%20personalizado`,
                    "_blank",
                  );
                }}
              >
                ¿Necesitas un plan a tu medida? Contáctanos
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
