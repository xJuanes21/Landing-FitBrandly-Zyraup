"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Características", href: "/#caracteristicas" },
  { label: "Precios", href: "/#precios" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (isMenuOpen) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [isMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[60] w-full bg-black border-b border-white/5"
      >
        <div className="container-custom h-16 md:h-28">
          <div className="relative flex items-center justify-between h-full py-2 gap-4">
            {/* Left: Mobile Toggle & Logo */}
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 text-white hover:text-[#00E5FF] transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-8 h-8" />
              </button>

              <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/icons/icon.png"
                    alt="FitBrandly"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
                <span className="text-lg md:text-2xl font-black tracking-tighter text-white">
                  Fit<span className="text-[#00E5FF]">Brandly</span>
                </span>
              </Link>
            </div>

            {/* Center: Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-base font-bold tracking-tight text-white/70 hover:text-[#00E5FF] transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                </Link>
              ))}
            </nav>

            {/* Right: CTA Buttons */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <Link href="/contact" passHref>
                <Button
                  variant="primary"
                  className="whitespace-nowrap glow-sm px-6 py-3 text-base font-black tracking-tighter italic uppercase rounded-2xl"
                >
                  Contacto Directo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[70] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 h-full w-[80%] max-w-sm bg-black border-r border-white/10 shadow-[20px_0_50px_rgba(0,0,0,0.5)] p-8 flex flex-col pt-20"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-black tracking-tighter text-white">
                  MENÚ
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-[#00E5FF] transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black text-white/80 hover:text-[#00E5FF] hover:translate-x-2 transition-all duration-300 flex items-center justify-between group"
                  >
                    {link.label}
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#00E5FF]" />
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                <Link href="/contact" passHref className="w-full block">
                  <Button
                    variant="primary"
                    className="w-full h-14 text-lg font-bold"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Contacto Directo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
