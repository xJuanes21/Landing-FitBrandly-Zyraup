"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  X,
  Building2,
  Mail,
  User,
  Loader2,
} from "lucide-react";
import { Button } from "../ui/Button";
import { FloatingInput } from "../ui/FloatingInput";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({
  isOpen,
  onClose,
}: SubscribeModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "early_access",
        }),
      });

      if (!response.ok) throw new Error("Error al suscribirse");

      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after 2 seconds on success
      setTimeout(() => {
        onClose();
        // Reset state after closing animation
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", company: "" });
        }, 500);
      }, 2000);
    } catch (error) {
      console.error("Subscription error:", error);
      setIsSubmitting(false);
      alert("Hubo un error al suscribirte. Por favor intenta de nuevo.");
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
            className="relative w-full max-w-lg glass-liquid bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#0ea5e9]/10 to-transparent pointer-events-none" />

            <div className="relative p-8 md:p-10">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-lg glass-liquid flex items-center justify-center hover:bg-white/10 transition-colors text-white z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-10"
                  >
                    <div className="space-y-2">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                        Acceso{" "}
                        <span className="text-[#00E5FF] glow-text">
                          Anticipado
                        </span>
                      </h2>
                      <p className="text-white/70 leading-relaxed text-lg">
                        Únete a la revolución fitness y sé de los primeros en
                        transformar tu negocio con marca propia.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="space-y-8">
                        <FloatingInput
                          id="modal-name"
                          name="name"
                          label="Tu Nombre"
                          type="text"
                          icon={User}
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />

                        <FloatingInput
                          id="modal-email"
                          name="email"
                          label="Correo electrónico"
                          type="email"
                          icon={Mail}
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                        />

                        <FloatingInput
                          id="modal-company"
                          name="company"
                          label="Nombre de tu Gym / Marca"
                          type="text"
                          icon={Building2}
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] to-[#3b82f6] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                        <Button
                          variant="primary"
                          className="relative w-full py-5 text-xl font-black tracking-widest uppercase rounded-2xl bg-gradient-to-r from-[#00b8d4] to-[#00E5FF] text-black"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-8 h-8 animate-spin" />
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              <span>Suscribirme ahora</span>
                              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>

                    <p className="text-center text-[10px] text-white/30 uppercase tracking-widest">
                      Al suscribirte, aceptas nuestra política de privacidad.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-24 h-24 rounded-2xl glass-liquid flex items-center justify-center bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                      <CheckCircle className="w-12 h-12 text-[#00E5FF]" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase">
                        ¡Registro Exitoso!
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        Gracias por tu interés, panita. Te avisaremos pronto con
                        todas las novedades de FitBrandly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
