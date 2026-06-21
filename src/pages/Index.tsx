import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Services from "@/components/Services";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Services />
      <Promo />
      <Team />
      <ContactForm />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;
