"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import MobileCarousel from "@/components/ui/MobileCarousel";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "CrossFit Coach",
    image: "https://i.pravatar.cc/150?img=11",
    quote:
      "FitBrandly transformó completamente la manera en que gestiono mi negocio. ¡Mis clientes aman la app!",
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Nutricionista Deportiva",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "La personalización es increíble. Ahora tengo mi propia plataforma sin haber escrito una línea de código.",
  },
  {
    id: 3,
    name: "David Torres",
    role: "Entrenador Personal",
    image: "https://i.pravatar.cc/150?img=3",
    quote:
      "Mis ingresos aumentaron un 40% desde que automaticé mis planes con FitBrandly.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative z-10 container-custom max-w-7xl px-6 lg:px-8"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ellos escalaron su{" "}
            <span className="gradient-text glow-text">Negocio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Únete a los entrenadores que ya están facturando más con su propia
            plataforma.
          </p>
        </div>

        <MobileCarousel className="grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((person) => (
            <motion.div
              key={person.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="glass-liquid p-8 rounded-3xl border border-white/10 hover:border-[#00E5FF]/30 transition-all duration-300 relative group h-full"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="rounded-full object-cover border-2 border-[#00E5FF]/20 group-hover:border-[#00E5FF] transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {person.name}
                    </h4>
                    <p className="text-[#00E5FF] text-sm font-medium">
                      {person.role}
                    </p>
                  </div>
                </div>

                <div className="flex text-[#00E5FF] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  &quot;{person.quote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </MobileCarousel>
      </motion.div>
    </section>
  );
}
