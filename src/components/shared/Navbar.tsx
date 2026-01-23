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
  { label: "Características", href: "#features" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Precios", href: "#pricing" },
  { label: "Clientes", href: "#clients" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 w-full bg-black backdrop-blur-md border-b border-white/10"
        style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="container-custom h-full">
          <div className="relative h-16 md:h-20">
            {/* Grid Layout: 1fr - auto - 1fr guarantees perfect center for the middle element */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full">
              {/* Logo - Left (Aligned Start) */}
              <div className="flex justify-start pl-6 md:pl-10">
                <Link
                  href="/"
                  className="flex items-center gap-2 relative w-48 h-12 md:w-56 md:h-14"
                >
                  <Image
                    src="/fitbrandly-logo.svg"
                    alt="FitBrandly Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation - Center (Aligned Center) */}
              <div className="hidden md:flex items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white/80 hover:text-[#00E5FF] transition-colors text-sm font-medium relative group whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E5FF] group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* CTA Buttons - Right (Aligned End) */}
              <div className="hidden md:flex items-center justify-end gap-4 pr-4">
                <Button
                  variant="primary"
                  size="sm"
                  href="#pricing"
                  className="whitespace-nowrap !py-2 !px-4 !text-sm"
                >
                  Comienza Gratis
                </Button>
                <div className="w-[1px] h-8 bg-white/10 mx-2" />{" "}
                {/* Separator */}
                <Button
                  variant="secondary"
                  size="sm"
                  href="/contact"
                  className="whitespace-nowrap !py-2 !px-4 !text-sm"
                >
                  Contáctanos
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex justify-end col-span-2 pr-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-2"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white/80 hover:text-[#00E5FF] transition-colors py-2 text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button - Mobile */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  href="#pricing"
                >
                  Comienza Gratis
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full mt-2"
                  href="/contact"
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
