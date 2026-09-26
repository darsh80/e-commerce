import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">

      <ContactHero />

      <div className="px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <ContactInfo />

          <ContactForm />

        </div>
      </div>

    </main>
  );
}