"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  Building2,
  Phone,
  Send,
  CheckCircle,
  Loader2,
  Zap,
} from "lucide-react";
import { Particles } from "../landing/HeroSection";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  whatsapp?: string;
  company?: string;
  message?: string;
}

interface InputField {
  name: keyof FormData;
  label: string;
  type: string;
  placeholder: string;
  icon: LucideIcon;
}

type LucideIcon = typeof User;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo inválido";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp es requerido";
    } else if (!/^\+?[\d\s-]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Número inválido";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Nombre del gym/empresa es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  const inputFields: InputField[] = [
    {
      name: "name",
      label: "Nombre Completo",
      type: "text",
      placeholder: "Juan Pérez",
      icon: User,
    },
    {
      name: "email",
      label: "Correo Electrónico",
      type: "email",
      placeholder: "juan@ejemplo.com",
      icon: Mail,
    },
    {
      name: "whatsapp",
      label: "WhatsApp",
      type: "tel",
      placeholder: "+57 300 123 4567",
      icon: Phone,
    },
    {
      name: "company",
      label: "Nombre del Gym / Empresa",
      type: "text",
      placeholder: "FitGym Pro",
      icon: Building2,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A] py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F1E] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 container-custom max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Particles />

          <h1 className="text-4xl font-bold gradient-text glow-text mb-6 tracking-[0.2em] uppercase">
            Contáctanos
          </h1>
          <p className="text-2xl font-semibold text-gray-300 max-w-3xl mx-auto uppercase">
            Transforma tu negocio fitness con tu propia plataforma de marca
            blanca
          </p>
        </motion.div>

        {/* Form Section - Más ancho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto glass-liquid rounded-3xl p-10 lg:p-16"
        >
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {inputFields.map((field: InputField, index: number) => {
                const Icon = field.icon;
                return (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <label className="block text-[#00e5ff] font-semibold mb-3 text-lg">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`w-full px-6 py-4 rounded-xl glass text-white placeholder:text-gray-500 
                        focus:outline-none focus:border-[#00e5ff] focus:glow-sm transition-all duration-300 text-lg
                        ${errors[field.name] ? "border-2 border-red-500" : "border border-white/10"}`}
                    />
                    {errors[field.name] && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 ml-1"
                      >
                        {errors[field.name]}
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Message Field - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <label className="block text-[#00e5ff] font-semibold mb-3 text-lg">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu gym y qué te gustaría lograr..."
                rows={6}
                className={`w-full px-6 py-4 rounded-xl glass text-white placeholder:text-gray-500 
                  focus:outline-none focus:border-[#00e5ff] focus:glow-sm transition-all duration-300 resize-none text-lg
                  ${errors.message ? "border-2 border-red-500" : "border border-white/10"}`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 ml-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="p-6 rounded-2xl border-2 border-[#00e5ff]/30 bg-[#00e5ff]/5"
            >
              <p className="text-gray-300 text-center leading-relaxed">
                <span className="text-[#00e5ff] font-bold text-lg">
                  ⚡ Respuesta en menos de 24 horas
                </span>
                <br />
                Te contactaremos vía WhatsApp con toda la información
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting || isSuccess}
              whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
              className={`w-full btn-primary py-5 text-xl ${
                (isSubmitting || isSuccess) && "opacity-80 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Enviando...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  ¡Mensaje Enviado!
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 rounded-2xl bg-[#00e5ff]/10 border-2 border-[#00e5ff]/50 glow-md"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-[#00e5ff] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-xl mb-2">
                    ¡Gracias por contactarnos!
                  </p>
                  <p className="text-gray-300 text-lg">
                    Te responderemos por WhatsApp en las próximas 24 horas.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            También puedes escribirnos directamente a{" "}
            <a
              href="mailto:fitbrandly@gmail.com"
              className="text-[#00e5ff] hover:underline font-semibold glow-text"
            >
              fitbrandly@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
