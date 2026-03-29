import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import HowToOrder from "@/components/sections/HowToOrder";
import Prices from "@/components/sections/Prices";
import Services from "@/components/sections/Services";
import ServiceZones from "@/components/sections/ServiceZones";
import TrustBadges from "@/components/sections/TrustBadges";
import FloatingCall from "@/components/ui/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <TrustBadges />
        <Prices />
        <Services />
        <ServiceZones />
        <HowToOrder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
