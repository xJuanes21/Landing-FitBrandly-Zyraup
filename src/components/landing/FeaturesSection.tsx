"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Apple,
  MessageCircle,
  Palette,
  BarChart3,
  Sparkles,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import { Feature } from "@/types";
import UnifiedCarousel from "@/components/ui/UnifiedCarousel";

const features: Feature[] = [
  {
    id: "1",
    icon: "users",
    title: "Gestión de Clientes",
    description:
      "Administra todos tus clientes desde un solo lugar con herramientas intuitivas.",
    size: "normal",
  },
  {
    id: "2",
    icon: "calendar",
    title: "Planes de Entrenamiento",
    description:
      "Crea y asigna rutinas personalizadas con nuestra biblioteca de ejercicios.",
    size: "normal",
  },
  {
    id: "3",
    icon: "apple",
    title: "Nutrición Personalizada",
    description:
      "Diseña planes nutricionales adaptados a los objetivos de cada cliente.",
    size: "normal",
  },
  {
    id: "4",
    icon: "message",
    title: "Mensajería Integrada",
    description:
      "Comunicación en tiempo real con tus clientes desde la plataforma.",
    size: "normal",
  },
  {
    id: "5",
    icon: "palette",
    title: "Marca Blanca Total",
    description: "Tu logo, tus colores, tu dominio. 100% personalizable.",
    size: "normal",
  },
  {
    id: "6",
    icon: "chart",
    title: "Analytics Avanzado",
    description: "Métricas de negocio y progreso de clientes en tiempo real.",
    size: "normal",
  },
];

const IconComponent = ({ icon }: { icon: string }) => {
  const iconClass = "w-10 h-10";
  switch (icon) {
    case "users":
      return <Users className={iconClass} />;
    case "calendar":
      return <Calendar className={iconClass} />;
    case "apple":
      return <Apple className={iconClass} />;
    case "message":
      return <MessageCircle className={iconClass} />;
    case "palette":
      return <Palette className={iconClass} />;
    case "chart":
      return <BarChart3 className={iconClass} />;
    default:
      return null;
  }
};

const FeatureCard = ({
  feature,
  isHighlighted = false,
}: {
  feature: Feature;
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
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full w-full"
    >
      {/* Outer glow */}
      <div
        className={`absolute inset-0 rounded-[28px] blur-2xl transition-all duration-700 ${
          active ? "bg-[#00E5FF]/40 opacity-80" : "bg-white/5 opacity-30"
        }`}
      />

      {/* Card principal */}
      <div
        className={`relative h-full min-h-[240px] rounded-[28px] overflow-hidden transition-all duration-700 p-8 ${
          active
            ? "from-[#051a20] via-[#082530] to-[#041519]"
            : "from-[#1a1a1a] via-[#151515] to-[#0f0f0f]"
        } bg-gradient-to-b`}
        style={{
          boxShadow: active ? activeShadow : normalShadow,
        }}
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
        <div className="relative h-full flex flex-col gap-4 z-10">
          {/* Icon container */}
          <div
            className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 relative overflow-hidden ${
              active
                ? "bg-[#00E5FF]/20 text-[#00E5FF]"
                : "bg-white/5 text-white/60"
            }`}
          >
            {/* Icon glow */}
            <div
              className={`absolute inset-0 blur-xl transition-all duration-500 ${
                active ? "bg-[#00E5FF]/10" : "bg-[#00E5FF]/0"
              }`}
            />
            <IconComponent icon={feature.icon} />
          </div>

          {/* Title */}
          <h3
            className={`text-xl font-semibold transition-colors duration-300 ${
              active ? "text-white" : "text-white/90"
            }`}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p
            className={`leading-relaxed transition-colors duration-300 ${
              active ? "text-white/80" : "text-white/60"
            }`}
          >
            {feature.description}
          </p>
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

export default function FeaturesSection() {
  return (
    <section
      id="caracteristicas"
      className="py-24 md:py-40 relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-4 flex flex-col items-center"
          >
            <span className="text-[#00E5FF] font-semibold uppercase tracking-wider">
              CARACTERÍSTICAS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Potencia tu marca con{" "}
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#00b8d4] to-[#00e5ff] bg-clip-text text-transparent">
                tecnología profesional
              </span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Todo lo que necesitas para gestionar tu negocio fitness en una
              sola plataforma, diseñado para escalar contigo.
            </p>
          </motion.div>

          {/* Features Grid / Carousel */}
          <UnifiedCarousel autoPlay={true} autoPlayInterval={1500}>
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </UnifiedCarousel>

          {/* New CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center pt-22"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-12 py-6 rounded-2xl font-black text-lg tracking-widest uppercase overflow-hidden"
              style={{
                border: "2px solid rgba(0, 229, 255, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-[#00E5FF]/5 group-hover:bg-[#00E5FF]/10 transition-colors" />
              <div className="relative z-10 flex items-center gap-3 text-[#00E5FF] group-hover:text-white transition-colors duration-300">
                <span>Explora todas las funciones</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
