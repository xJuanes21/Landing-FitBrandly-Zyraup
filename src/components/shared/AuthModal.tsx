"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onAccept,
}: AuthModalProps) {
  const [authAccepted, setAuthAccepted] = useState(false);

  const handleAccept = () => {
    if (authAccepted) {
      onAccept();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="glass-liquid rounded-3xl p-6 md:p-8 max-w-2xl w-full border border-white/20 bg-[#0A0A0A] max-h-[90vh] overflow-y-auto mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl glass-liquid flex items-center justify-center bg-white/5 border border-white/10">
                  <Shield className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Autorización de Tratamiento de Datos
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-lg glass-liquid flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-[#00E5FF]/5 border border-[#00E5FF]/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Al continuar con el registro, declaro que he leído y
                  comprendido la{" "}
                  <strong className="text-white">
                    Política de Tratamiento de Datos Personales
                  </strong>{" "}
                  de EASY TECH.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-red-400">Datos Sensibles:</strong>{" "}
                    Autorizo expresamente el tratamiento de datos relacionados
                    con mi salud, medidas corporales y actividad física.
                  </p>
                </div>
              </div>
            </div>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 cursor-pointer group mb-6"
            >
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={authAccepted}
                  onChange={(e) => setAuthAccepted(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                    authAccepted
                      ? "bg-[#00E5FF] border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                      : "border-white/30 bg-white/5"
                  }`}
                >
                  {authAccepted && (
                    <CheckCircle className="w-4 h-4 text-[#0a0a0a]" />
                  )}
                </div>
              </div>
              <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                <strong className="text-white">Autorizo a EASY TECH</strong>{" "}
                para tratar mis datos personales y sensibles según la Política
                de Privacidad. Entiendo que puedo ejercer mis derechos ARCO en
                cualquier momento.
              </span>
            </motion.label>

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 btn-ghost border border-white/20 py-3 rounded-lg text-white hover:bg-white/5"
              >
                Cancelar
              </button>
              <motion.button
                whileHover={{ scale: authAccepted ? 1.05 : 1 }}
                whileTap={{ scale: authAccepted ? 0.95 : 1 }}
                disabled={!authAccepted}
                onClick={handleAccept}
                className={`flex-1 btn-primary py-3 rounded-lg text-black font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-[#00b8d4] to-[#00E5FF] ${
                  !authAccepted && "opacity-50 cursor-not-allowed grayscale"
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                Aceptar y Continuar
              </motion.button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-4">
              Sin esta autorización no podemos procesar tu registro
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
