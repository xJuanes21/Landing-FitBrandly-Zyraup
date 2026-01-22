"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import type { FAQItem } from "@/types";

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "¿Necesito conocimientos técnicos para usar FitBrandly?",
    answer:
      "No necesitas ningún conocimiento técnico. Nuestra plataforma es completamente intuitiva y te guiamos paso a paso en todo el proceso de configuración. Además, cuentas con soporte dedicado en español para cualquier duda que tengas.",
  },
  {
    id: "2",
    question: "¿Puedo migrar mis clientes actuales a la plataforma?",
    answer:
      "Sí, ofrecemos herramientas de migración que te permiten importar tu base de clientes actual de forma sencilla y segura. También puedes invitar a tus clientes directamente desde la plataforma mediante enlaces personalizados.",
  },
  {
    id: "3",
    question: "¿Qué pasa después del período de prueba de 14 días?",
    answer:
      "Después del período de prueba gratuito de 14 días, puedes elegir el plan que mejor se adapte a tus necesidades. Si decides no continuar, simplemente no se te cobrará nada y conservarás acceso a tus datos por 30 días adicionales.",
  },
  {
    id: "4",
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Absolutamente. Puedes cambiar de plan (upgrade o downgrade) en cualquier momento desde tu panel de administración. Los cambios se reflejan de inmediato y solo pagas la diferencia proporcional del mes en curso.",
  },
  {
    id: "5",
    question: "¿Ofrecen soporte en español?",
    answer:
      "Sí, todo nuestro equipo de soporte habla español de forma nativa. Ofrecemos soporte por email en todos los planes, soporte prioritario en el plan Standard, y soporte 24/7 en el plan Advance.",
  },
  {
    id: "6",
    question: "¿Es segura la plataforma para los datos de mis clientes?",
    answer:
      "Completamente. Utilizamos encriptación SSL de grado bancario, cumplimos con GDPR y todas las regulaciones de protección de datos. Tus datos y los de tus clientes están respaldados diariamente y almacenados en servidores certificados.",
  },
];

// Componente Accordion interno
function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="glass-liquid rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
      whileHover={{ y: -2 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-15 px-8 py-10 flex items-center justify-between gap-6 text-left group"
      >
        <span className="text-lg md:text-xl font-semibold text-white group-hover:text-[#00E5FF] transition-colors flex-1 leading-relaxed">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 bg-white/5 p-2 rounded-full group-hover:bg-white/10 transition-colors"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#00E5FF]" strokeWidth={2.5} />
          ) : (
            <Plus
              className="w-5 h-5 text-white/60 group-hover:text-[#00E5FF] transition-colors"
              strokeWidth={2.5}
            />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 border-t border-white/5">
              <p className="text-sm md:text-base text-white/70 leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className=" py-20 md:py-32 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col items-center gap-16 w-full"
        >
          {/* Section Header - Centrado */}
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-4 flex flex-col items-center max-w-4xl mx-auto w-full mt-10"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-[#00E5FF] mb-2">
              Preguntas Frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              ¿Tienes dudas?{" "}
              <span className="gradient-text block mt-2">
                Te las resolvemos
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto pt-2 text-center">
              Encuentra respuestas a las preguntas más comunes sobre FitBrandly
            </p>
          </motion.div>

          {/* FAQ Items - Centrados y con glass-liquid */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-6 max-w-5xl mx-auto w-full"
          >
            {faqItems.map((item) => (
              <motion.div key={item.id} variants={staggerItem}>
                <FAQAccordion item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA al final */}
          <motion.div variants={fadeInUp} className="text-center pt-8">
            <p className="text-white/60 mb-6">¿No encuentras lo que buscas?</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-[#00E5FF]/30 transition-all duration-300"
            >
              Contáctanos directamente
              <span className="text-[#00E5FF]">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
