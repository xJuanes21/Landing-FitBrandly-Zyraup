import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import FAQSection from "@/components/landing/FAQSection";
import PricingSection from "@/components/landing/PricingSection";
import BenefitsTimeline from "@/components/landing/BenefitsTimeline";
import ContactForm from "@/components/shared/ContactForm";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FeaturesSection from "@/components/landing/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden flex flex-col gap-6 mb-6">
      <HeroSection />
      <SocialProofSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <BenefitsTimeline />
      <FinalCTASection />
      <ContactForm />
      <FAQSection />
    </main>
  );
}
