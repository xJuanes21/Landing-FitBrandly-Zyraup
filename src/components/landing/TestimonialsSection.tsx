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
import UnifiedCarousel from "@/components/ui/UnifiedCarousel";

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
  {
    id: 4,
    name: "Martha Lucía",
    role: "Instructora de Yoga",
    image: "https://i.pravatar.cc/150?img=9",
    quote:
      "La mejor inversión para mi estudio. La facilidad de uso es inigualable.",
  },
  {
    id: 5,
    name: "Roberto Gómez",
    role: "Dueño de Gimnasio",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "Escalar mi gimnasio fue posible gracias a la automatización de FitBrandly.",
  },
  {
    id: 6,
    name: "Elena Rivas",
    role: "Especialista en HIIT",
    image: "https://i.pravatar.cc/150?img=20",
    quote:
      "A mis alumnos les encanta tener sus rutinas a mano en la aplicación.",
  },
  {
    id: 7,
    name: "Jorge Mario",
    role: "Entrenador de Natación",
    image: "https://i.pravatar.cc/150?img=17",
    quote:
      "Excelente soporte y una interfaz muy profesional. 100% recomendado.",
  },
  {
    id: 8,
    name: "Claudia Pérez",
    role: "Pilates Instructor",
    image: "https://i.pravatar.cc/150?img=26",
    quote:
      "He simplificado mis cobros y la gestión de mis clases de una forma increíble.",
  },
  {
    id: 9,
    name: "Andrés Felipe",
    role: "Entrenamiento Funcional",
    image: "https://i.pravatar.cc/150?img=33",
    quote:
      "La marca propia me ha dado un estatus superior frente a la competencia.",
  },
];

const TestimonialCard = ({
  person,
  isHighlighted = false,
}: {
  person: (typeof testimonials)[0];
  isHighlighted?: boolean;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const active = isHighlighted || isHovered;

  const activeShadow = `
    0 0 0 2px rgba(0, 229, 255, 0.9),
    0 0 25px rgba(0, 229, 255, 0.7),
    0 0 50px rgba(0, 229, 255, 0.4),
    inset 0 0 70px rgba(0, 229, 255, 0.25),
    inset 0 0 40px rgba(0, 229, 255, 0.2)
  `;

  const normalShadow = `
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 15px rgba(255, 255, 255, 0.1),
    0 0 30px rgba(255, 255, 255, 0.05),
    inset 0 0 40px rgba(255, 255, 255, 0.03)
  `;

  return (
    <motion.div variants={staggerItem} className="relative h-full">
      {/* Outer glow */}
      <div
        className={`absolute inset-0 rounded-[28px] blur-2xl transition-all duration-700 ${
          active ? "bg-[#00E5FF]/40 opacity-80" : "bg-white/5 opacity-30"
        }`}
      />

      {/* Card principal */}
      <div
        className={`relative h-full min-h-[380px] rounded-[28px] overflow-hidden transition-all duration-700 ${
          active
            ? "from-[#051a20] via-[#082530] to-[#041519]"
            : "from-[#1a1a1a] via-[#151515] to-[#0f0f0f]"
        } bg-gradient-to-b`}
        style={{
          boxShadow: active ? activeShadow : normalShadow,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Difuminado interno - Neutral */}
        <div
          className={`absolute inset-0 rounded-[28px] pointer-events-none transition-opacity duration-700 ${
            active ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/8 via-white/4 to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white/8 via-white/4 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/8 via-white/4 to-transparent" />
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white/8 via-white/4 to-transparent" />
        </div>

        {/* Difuminado interno - Cyan */}
        <div
          className={`absolute inset-0 rounded-[28px] pointer-events-none transition-opacity duration-700 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#00E5FF]/25 via-[#00E5FF]/12 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-10 flex flex-col gap-6 md:gap-8 h-full z-10">
          {/* Stars */}
          <div
            className={`flex justify-center gap-1.5 transition-all duration-500 ${
              active ? "text-[#fbbf24] scale-110" : "text-[#fbbf24]/60"
            }`}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 md:w-5 md:h-5 fill-current drop-shadow-[0_2px_8px_rgba(251,191,36,0.6)]"
              />
            ))}
          </div>

          {/* Quote */}
          <p
            className={`text-center italic flex-1 transition-colors duration-500 text-base md:text-lg leading-relaxed ${
              active ? "text-white" : "text-white/70"
            }`}
          >
            &quot;{person.quote}&quot;
          </p>

          {/* Author */}
          <div
            className={`flex items-center gap-4 pt-6 border-t transition-colors duration-500 w-full ${
              active ? "border-[#00E5FF]/30" : "border-white/10"
            }`}
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <div
                className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${
                  active
                    ? "bg-gradient-to-br from-[#00e5ff] to-[#00b8d4] opacity-80"
                    : "bg-white/20 opacity-30"
                }`}
              />
              <Image
                src={person.image}
                alt={person.name}
                fill
                className={`rounded-full object-cover border-2 transition-all duration-500 relative z-10 ${
                  active ? "border-[#00e5ff] scale-110" : "border-white/20"
                }`}
              />
            </div>
            <div className="flex flex-col text-left">
              <h4
                className={`font-bold text-base md:text-lg leading-tight tracking-tight transition-colors duration-300 ${
                  active ? "text-[#00e5ff]" : "text-white/90"
                }`}
              >
                {person.name}
              </h4>
              <p
                className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                  active ? "text-[#00b8d4]" : "text-white/50"
                }`}
              >
                {person.role}
              </p>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <motion.div
          className={`absolute inset-0 rounded-[28px] transition-opacity duration-700 pointer-events-none ${
            active ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(110deg, transparent 30%, rgba(0, 229, 255, 0.2) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
          animate={active ? { backgroundPosition: ["200% 0", "-200% 0"] } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="relative z-10 mx-auto max-w-[1400px] px-6"
      >
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Ellos escalaron su{" "}
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#00b8d4] to-[#00e5ff] bg-clip-text text-transparent">
              Negocio
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-xl leading-relaxed">
            Únete a los entrenadores que ya están facturando más con su propia
            plataforma.
          </p>
        </div>

        <UnifiedCarousel autoPlay={true} autoPlayInterval={1500}>
          {testimonials.map((person) => (
            <TestimonialCard key={person.id} person={person} />
          ))}
        </UnifiedCarousel>
      </motion.div>
    </section>
  );
}
