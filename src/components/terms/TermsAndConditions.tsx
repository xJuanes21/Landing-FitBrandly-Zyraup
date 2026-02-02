"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Shield,
  CreditCard,
  Scale,
  Database,
  AlertCircle,
  ChevronDown,
  CheckCircle,
  X,
} from "lucide-react";

export default function TermsAndConditions() {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      icon: FileText,
      title: "Naturaleza del Servicio",
      content:
        "Fitbrandly es una solución tecnológica de 'Software as a Service' (SaaS) que permite al Entrenador gestionar sus planes de ejercicio, nutrición y salud bajo su propia identidad visual y dominio. EASY TECH no es una entidad de salud, ni gimnasio, ni presta servicios de entrenamiento personal; únicamente provee la infraestructura digital.",
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Planes y Facturación",
      content:
        "El Entrenador se compromete al pago de una suscripción mensual según el plan elegido: Plan Básico (Hasta 5 usuarios), Plan Standard (Hasta 10 usuarios), Plan Advance (Hasta 20 usuarios). El incumplimiento en el pago por un periodo superior a cinco (5) días calendario generará la suspensión automática del acceso a la plataforma.",
    },
    {
      id: 3,
      icon: Shield,
      title: "Responsabilidad Profesional",
      content:
        "El Entrenador reconoce que es el único responsable por la idoneidad de las rutinas de ejercicio y planes nutricionales suministrados, así como contar con las certificaciones legales necesarias. EASY TECH no se hace responsable por lesiones físicas, daños a la salud o reclamaciones de terceros.",
    },
    {
      id: 4,
      icon: Scale,
      title: "Propiedad Intelectual",
      content:
        "Toda la estructura, código, algoritmos y diseño de la App Fitbrandly pertenecen a EASY TECH. Los videos, imágenes y textos cargados por el Entrenador son propiedad de este, otorgando a EASY TECH una licencia limitada para alojar y procesar dicho contenido.",
    },
    {
      id: 5,
      icon: Database,
      title: "Protección de Datos (Habeas Data)",
      content:
        "En cumplimiento de la Ley 1581 de 2012, el Entrenador actúa como 'Responsable' del tratamiento de los datos de sus clientes finales, y EASY TECH actúa como 'Encargado'. El Entrenador garantiza que cuenta con la autorización de sus clientes para cargar sus datos en la plataforma.",
    },
    {
      id: 6,
      icon: AlertCircle,
      title: "Limitación de Responsabilidad",
      content:
        "EASY TECH trabaja para garantizar una disponibilidad del servicio del 99.9%. Sin embargo, no será responsable por interrupciones debidas a mantenimientos programados, fallas en proveedores de internet o fuerza mayor.",
    },
  ];

  const toggleSection = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen py-32 px-4 bg-[#0A0A0A] text-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-liquid mb-6 text-[#00E5FF]"
          >
            <FileText className="w-10 h-10" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            FITBRANDLY by EASY TECH
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Última actualización: 20 de enero de 2026
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-liquid rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto border border-white/10 shadow-2xl"
        >
          {/* Introduction */}
          <div className="mb-12 pb-8 border-b border-white/10">
            <p className="text-gray-300 leading-relaxed text-lg">
              Los presentes Términos y Condiciones regulan la relación entre{" "}
              <span className="text-[#00E5FF] font-semibold">EASY TECH</span>{" "}
              (en adelante, "El Proveedor") y el profesional del fitness (en
              adelante, "El Entrenador") que contrata los servicios de la
              plataforma de marca blanca Fitbrandly.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-liquid rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00E5FF]/30 border border-white/5 bg-white/5"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-8 flex items-center justify-between text-left transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl glass-liquid flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10">
                        <Icon className="w-6 h-6 text-[#00E5FF]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {index + 1}. {section.title}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-[#00E5FF]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-2">
                          <div className="pl-16">
                            <p className="text-gray-300 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Sections */}
          <div className="mt-8 p-6 glass-liquid rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-[#00E5FF]" />
              7. Marca Blanca y Dominios
            </h3>
            <p className="text-gray-300 leading-relaxed">
              EASY TECH garantiza la personalización de la App según la marca
              del Entrenador. El costo del registro de dominios (.com, .co,
              etc.) y las cuentas de desarrollador en tiendas (App Store/Play
              Store) corre por cuenta del Entrenador, a menos que el plan
              contratado especifique lo contrario.
            </p>
          </div>

          <div className="mt-4 p-6 glass-liquid rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#00E5FF]" />
              8. Modificaciones
            </h3>
            <p className="text-gray-300 leading-relaxed">
              EASY TECH se reserva el derecho de modificar estos términos,
              notificando al Entrenador con al menos quince (15) días de
              antelación mediante correo electrónico o notificación push.
            </p>
          </div>

          {/* Disclaimer Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 rounded-2xl border-2 border-[#00E5FF]/30 bg-[#00E5FF]/5"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#00E5FF] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">
                  Deslinde de Responsabilidad
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Consulte a su médico antes de iniciar cualquier actividad
                  física. El uso de esta app es bajo su propio riesgo. El
                  entrenador es responsable de la programación y seguridad de
                  los entrenamientos proporcionados.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Acceptance Checkbox */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <motion.label
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 cursor-pointer group"
            >
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                    accepted
                      ? "bg-[#00E5FF] border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                      : "border-white/30 bg-white/5"
                  }`}
                >
                  {accepted && (
                    <CheckCircle className="w-4 h-4 text-[#0a0a0a]" />
                  )}
                </div>
              </div>
              <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                He leído y acepto los Términos y Condiciones y la Política de
                Privacidad de Fitbrandly (Easy Tech)
              </span>
            </motion.label>

            <motion.button
              whileHover={{ scale: accepted ? 1.05 : 1 }}
              whileTap={{ scale: accepted ? 0.95 : 1 }}
              disabled={!accepted}
              className={`mt-8 w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg text-black bg-gradient-to-r from-[#00b8d4] to-[#00E5FF] ${
                !accepted && "opacity-50 cursor-not-allowed grayscale"
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Aceptar y Continuar
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>
            ¿Tienes preguntas? Contáctanos en{" "}
            <a
              href="mailto:soporte@easytech.com"
              className="text-[#00E5FF] hover:underline"
            >
              soporte@easytech.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
