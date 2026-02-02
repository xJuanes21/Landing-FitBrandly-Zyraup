import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import FloatingActionMenu from "@/components/shared/FloatingActionMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitBrandly ",
  description:
    "La plataforma SaaS que convierte entrenadores en marcas digitales. Gestiona clientes, entrenamientos y nutrición con tu propia app personalizada.",
  keywords: [
    "fitness",
    "entrenador personal",
    "app fitness",
    "gestión de clientes",
    "marca blanca",
    "SaaS fitness",
  ],
  authors: [{ name: "FitBrandly" }],
  openGraph: {
    title: "FitBrandly - Tu marca, tu método, tu imperio fitness",
    description:
      "La plataforma SaaS que convierte entrenadores en marcas digitales.",
    url: "https://fitbrandly.com",
    siteName: "FitBrandly",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitBrandly - Tu marca, tu método, tu imperio fitness",
    description:
      "La plataforma SaaS que convierte entrenadores en marcas digitales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0A0A0A] text-white`}>
        <Navbar />
        {children}
        <FloatingActionMenu />
        <Footer />
      </body>
    </html>
  );
}
