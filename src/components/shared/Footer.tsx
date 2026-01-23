"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Instagram,
  Shield,
  FileText,
  Heart,
  Zap,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Características", href: "#features" },
      { name: "Planes y Precios", href: "#pricing" },
      { name: "Demo", href: "#demo" },
      { name: "Testimonios", href: "#testimonials" },
    ],
    legal: [
      { name: "Términos y Condiciones", href: "/terms", icon: FileText },
      { name: "Política de Privacidad", href: "/privacy", icon: Shield },
    ],
    support: [
      { name: "Centro de Ayuda", href: "#help" },
      { name: "Documentación", href: "#docs" },
      { name: "API", href: "#api" },
      { name: "Contacto", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/fitbrandly",
      label: "@fitbrandly",
    },
    {
      name: "TikTok",
      icon: "TikTok",
      href: "https://tiktok.com/@fitbrandly.com",
      label: "@fitbrandly.com",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "fitbrandly@gmail.com",
      href: "mailto:fitbrandly@gmail.com",
    },
    { icon: MapPin, text: "Cali, Valle del Cauca, Colombia" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-50" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1: Brand (Logo + Description) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/fitbrandly-logo.svg"
                  alt="Fitbrandly Logo"
                  width={150}
                  height={1500}
                  className="h-30 w-auto"
                />
              </div>

              <p className="text-gray-400 leading-relaxed tracking-wide uppercase">
                La plataforma de marca blanca definitiva para entrenadores
                fitness. Gestiona tus clientes, planes y entrenamientos con tu
                propia identidad.
              </p>
            </motion.div>

            {/* Column 2: Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 space-y-8"
            >
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00e5ff]" />
                  Contacto
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-3 text-gray-400 hover:text-[#00e5ff] transition-colors">
                        <div className="w-8 h-8 rounded-lg glass-liquid flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#00e5ff]" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    );

                    return item.href ? (
                      <a key={index} href={item.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#00e5ff]" />
                  Síguenos
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                      aria-label={social.name}
                    >
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-liquid hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 transition-all duration-300">
                        {social.icon === "TikTok" ? (
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-[#00e5ff] transition-colors"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                          </svg>
                        ) : (
                          <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[#00e5ff] transition-colors" />
                        )}
                        <span className="text-sm text-gray-400 group-hover:text-[#00e5ff] transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Column 3: Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00e5ff]" />
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00e5ff] transition-colors text-sm flex items-center gap-2 group"
                      >
                        <div className="w-6 h-6 rounded glass-liquid flex items-center justify-center group-hover:border-[#00e5ff]/50 transition-all">
                          <Icon className="w-3 h-3 text-[#00e5ff]" />
                        </div>
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm text-center md:text-left"
            >
              © {currentYear}{" "}
              <span className="text-[#00e5ff] font-semibold">EASY TECH</span>.
              Todos los derechos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <span>Hecho con</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-4 h-4 text-[#00e5ff] fill-[#00e5ff]" />
              </motion.div>
              <span>por Zyraup Team</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-liquid flex items-center justify-center hover:border-[#00e5ff]/50 hover:glow-md transition-all duration-300 group z-50"
          aria-label="Volver arriba"
        >
          <svg
            className="w-6 h-6 text-[#00e5ff] group-hover:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
