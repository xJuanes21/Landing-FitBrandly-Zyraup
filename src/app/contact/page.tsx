import ContactForm from "@/components/shared/ContactForm";
import ContactInfo from "@/components/shared/ContactInfo";

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <ContactForm />
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}
