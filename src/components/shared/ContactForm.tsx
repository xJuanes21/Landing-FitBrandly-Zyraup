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

import { FloatingInput, FloatingTextArea } from "../ui/FloatingInput";

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
    }

    if (!formData.company.trim()) {
      newErrors.company = "Nombre del gym es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "contact",
        }),
      });

      if (!response.ok) throw new Error("Error al enviar el mensaje");

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
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  const inputFields: InputField[] = [
    {
      name: "name",
      label: "Tu Nombre",
      type: "text",
      placeholder: "Ej: Juan Pérez",
      icon: User,
    },
    {
      name: "email",
      label: "Correo Electrónico",
      type: "email",
      placeholder: "Ej: juan@gym.com",
      icon: Mail,
    },
    {
      name: "whatsapp",
      label: "WhatsApp de Contacto",
      type: "tel",
      placeholder: "+57 300 000 0000",
      icon: Phone,
    },
    {
      name: "company",
      label: "Nombre de tu Gimnasio",
      type: "text",
      placeholder: "Escribe el nombre aquí",
      icon: Building2,
    },
  ];

  return (
    <div
      id="contacto"
      className="min-h-screen relative overflow-hidden bg-[#0A0A0A] py-32 px-4"
    >
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

          <h1 className="text-4xl md:text-7xl font-extrabold glow-text mb-6 tracking-widest uppercase">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl font-bold gradient-text max-w-3xl mx-auto uppercase">
            Eleva tu marca personal al siguiente nivel
          </p>
        </motion.div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto glass-liquid rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/5 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] pointer-events-none" />

          <div className="space-y-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {inputFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <FloatingInput
                    id={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    icon={field.icon}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FloatingTextArea
                id="message"
                name="message"
                label="¿En qué podemos ayudarte?"
                icon={MessageSquare}
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
            </motion.div>

            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting || isSuccess}
              whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
              className={`w-full relative group py-5 px-8 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300
                ${isSuccess ? "bg-green-500/20 text-green-400 border border-green-500/50" : "text-white"}
                ${isSubmitting && "opacity-80 cursor-not-allowed"}
              `}
            >
              {/* Button Gradient / Background */}
              {!isSuccess && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#3b82f6] opacity-90 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>¡Enviado con éxito!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="uppercase tracking-widest">
                      Enviar Solicitud
                    </span>
                  </>
                )}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-white/40">
            <Zap className="w-4 h-4 text-[#00e5ff]" />
            <p>Atención prioritaria para nuevos registros</p>
          </div>
          <p className="text-white/20">
            O si prefieres:{" "}
            <a
              href="mailto:hola@fitbrandly.com"
              className="text-[#00e5ff]/60 hover:text-[#00e5ff] transition-colors"
            >
              fitbrandly@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
