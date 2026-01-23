"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Database,
  Eye,
  UserCheck,
  Server,
  AlertTriangle,
  Mail,
  ChevronDown,
  CheckCircle,
  FileKey,
  Scale,
  Activity,
} from "lucide-react";
import AuthModal from "@/components/shared/AuthModal";

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const sections = [
    {
      id: 1,
      icon: FileKey,
      title: "Identificación del Responsable",
      content:
        "EASY TECH, con domicilio en Colombia, correo electrónico de contacto soporte@easytech.com, actúa como Responsable del Tratamiento de los datos personales recolectados a través de la plataforma Fitbrandly.",
      highlight: false,
    },
    {
      id: 2,
      icon: Database,
      title: "Finalidad del Tratamiento",
      content:
        "Los datos recolectados (nombres, correos, datos biométricos como peso/estatura, y registros de actividad física) serán utilizados para: La prestación del servicio de software y personalización de la marca blanca, gestión de pagos y facturación, envío de notificaciones de progreso y recordatorios, y análisis estadístico interno para mejorar la experiencia de usuario (UX).",
      highlight: false,
    },
    {
      id: 3,
      icon: Activity,
      title: "Datos Sensibles",
      content:
        "EASY TECH recolecta datos relacionados con la salud y medidas corporales. Estos son considerados Datos Sensibles según la legislación colombiana. El Usuario y el Entrenador manifiestan que el suministro de estos datos es voluntario y autorizan expresamente su tratamiento para los fines exclusivos de seguimiento fitness dentro de la App.",
      highlight: true,
    },
    {
      id: 4,
      icon: Scale,
      title: "Derechos de los Titulares (ARCO)",
      content:
        "De acuerdo con la ley, cualquier usuario de Fitbrandly tiene derecho a: Acceder y conocer sus datos bajo nuestro poder, Rectificar o actualizar información parcial o inexacta, Cancelar o suprimir sus datos cuando no se respeten los principios legales, y Oponerse al uso de sus datos para fines comerciales o de marketing.",
      highlight: false,
    },
    {
      id: 5,
      icon: Server,
      title: "Transferencia y Transmisión de Datos",
      content:
        "EASY TECH podrá transmitir datos a terceros proveedores (como Amazon Web Services para almacenamiento en la nube o pasarelas de pago como PayU/Wompi), asegurando que estos cumplan con estándares internacionales de seguridad. EASY TECH no vende bases de datos a terceros.",
      highlight: false,
    },
    {
      id: 6,
      icon: Lock,
      title: "Seguridad de la Información",
      content:
        "Implementamos medidas técnicas de cifrado (SSL), firewalls y protocolos de acceso restringido para evitar la pérdida, consulta o uso no autorizado de la información almacenada en los servidores de Fitbrandly.",
      highlight: false,
    },
    {
      id: 7,
      icon: Mail,
      title: "Procedimiento para Reclamos",
      content:
        "El titular puede enviar una solicitud al correo soporte@easytech.com. El tiempo de respuesta será de máximo quince (15) días hábiles según lo estipulado por la ley colombiana (Ley 1581 de 2012).",
      highlight: false,
    },
  ];

  const rights = [
    { icon: Eye, title: "Acceder", desc: "Conocer tus datos" },
    { icon: UserCheck, title: "Rectificar", desc: "Actualizar información" },
    { icon: AlertTriangle, title: "Cancelar", desc: "Suprimir datos" },
    { icon: Shield, title: "Oponerse", desc: "Rechazar uso comercial" },
  ];

  const toggleSection = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handleAuthAccept = () => {
    setShowAuthModal(false);
    alert("Autorización aceptada. Puede continuar con el registro.");
  };

  return (
    <div className="min-h-screen animated-gradient-bg grid-pattern py-32 px-4 bg-[#0A0A0A] text-white flex flex-col items-center">
      <div className="container-custom mx-auto max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-liquid mb-6 text-[#00E5FF]"
          >
            <Shield className="w-10 h-10" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            EASY TECH - FITBRANDLY
          </p>
          <p className="text-sm text-gray-500 mt-2">
            En cumplimiento de la Ley 1581 de 2012
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-liquid rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl space-y-12"
        >
          {/* Introduction */}
          <div className="pb-8 border-b border-white/10">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#00E5FF] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Compromiso con tu Privacidad
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  En{" "}
                  <span className="text-[#00E5FF] font-semibold">
                    EASY TECH
                  </span>
                  , respetamos y protegemos la privacidad de nuestros usuarios.
                  Esta política describe cómo recolectamos, usamos y protegemos
                  tus datos personales en la plataforma Fitbrandly.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-liquid rounded-2xl overflow-hidden transition-all duration-300 ${
                    section.highlight
                      ? "border-2 border-[#00E5FF]/40 bg-[#00E5FF]/5"
                      : "hover:border-[#00E5FF]/30 border border-white/5 bg-white/5"
                  }`}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-8 flex items-center justify-between text-left transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl glass-liquid flex items-center justify-center flex-shrink-0 ${
                          section.highlight
                            ? "bg-[#00E5FF]/10 text-[#00E5FF]"
                            : "bg-white/5 text-[#00E5FF]"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {index + 1}. {section.title}
                        </h3>
                        {section.highlight && (
                          <span className="text-xs text-[#00E5FF] font-medium tracking-wider">
                            IMPORTANTE
                          </span>
                        )}
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

          {/* ARCO Rights Visual */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Tus Derechos <span className="gradient-text">(ARCO)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rights.map((right, index) => {
                const Icon = right.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-liquid rounded-xl p-8 text-center hover:border-[#00E5FF]/30 transition-all duration-300 border border-white/5 bg-white/5"
                  >
                    <div className="w-14 h-14 rounded-full glass-liquid flex items-center justify-center mx-auto mb-4 bg-white/5">
                      <Icon className="w-7 h-7 text-[#00E5FF]" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      {right.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{right.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Responsibility Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="p-8 rounded-2xl border-2 border-[#00E5FF]/30 bg-[#00E5FF]/5"
          >
            <div className="flex items-start gap-4">
              <UserCheck className="w-6 h-6 text-[#00E5FF] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-[#00E5FF] mb-2">
                  Roles en el Tratamiento de Datos
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong className="text-white">EASY TECH</strong> actúa como{" "}
                  <strong className="text-[#00E5FF]">
                    Encargado del Tratamiento
                  </strong>
                  , mientras que el{" "}
                  <strong className="text-white">Entrenador</strong> que
                  contrata el servicio actúa como{" "}
                  <strong className="text-[#00E5FF]">
                    Responsable del Tratamiento
                  </strong>{" "}
                  de los datos de sus clientes finales.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  El entrenador debe garantizar que cuenta con la autorización
                  de sus clientes para el tratamiento de sus datos personales y
                  sensibles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="glass-liquid rounded-2xl p-8 border border-white/10 bg-white/5">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#00E5FF] flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  ¿Necesitas ejercer tus derechos?
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Para solicitudes relacionadas con acceso, rectificación,
                  cancelación u oposición de tus datos personales, contáctanos:
                </p>
                <a
                  href="mailto:soporte@easytech.com"
                  className="inline-flex items-center gap-2 text-[#00E5FF] hover:underline transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  soporte@easytech.com
                </a>
                <p className="text-gray-400 text-xs mt-2">
                  Tiempo de respuesta: Máximo 15 días hábiles
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAuthModal(true)}
            className="w-full btn-primary flex items-center justify-center gap-2 py-5 rounded-xl font-bold text-black bg-gradient-to-r from-[#00b8d4] to-[#00E5FF] text-lg shadow-lg shadow-[#00E5FF]/20"
          >
            <Shield className="w-6 h-6" />
            Ver Formulario de Autorización
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-20 text-gray-500 text-sm"
        >
          <p className="mb-2">
            Esta política está sujeta a actualizaciones para cumplir con la
            legislación vigente
          </p>
          <p>Última actualización: Enero 2026</p>
        </motion.div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAccept={handleAuthAccept}
      />
    </div>
  );
}
