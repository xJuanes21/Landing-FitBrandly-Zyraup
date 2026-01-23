import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import FAQSection from "@/components/landing/FAQSection";
import PricingSection from "@/components/landing/PricingSection";
import BenefitsTimeline from "@/components/landing/BenefitsTimeline";
import ContactForm from "@/components/shared/ContactForm";
import FinalCTASection from "@/components/landing/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden flex flex-col gap-32 md:gap-48 pb-32">
      <HeroSection />
      <ProblemSolutionSection />
      <SocialProofSection />
      <TestimonialsSection />
      <PricingSection />
      <BenefitsTimeline />
      <FAQSection />
      <FinalCTASection />
      <ContactForm />
    </main>
  );
}
