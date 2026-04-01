import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Prices from "@/components/sections/Prices";
import Services from "@/components/sections/Services";
import ServiceZones from "@/components/sections/ServiceZones";
import HowToOrder from "@/components/sections/HowToOrder";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import FloatingCall from "@/components/ui/FloatingCall";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AvtoHelp",
  "description": "Евакуатор Київ та Київська область — виклик 24/7. Подача від 1500 грн, 70 грн/км.",
  "url": "https://avtohelp.ua",
  "telephone": "+380930951282",
  "priceRange": "від 1500 грн",
  "openingHours": "Mo-Su 00:00-24:00",
  "areaServed": [
    "Київ",
    "Київська область",
    "Бровари", "Бориспіль", "Ірпінь", "Буча",
    "Вишгород", "Біла Церква", "Фастів", "Обухів",
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Київ",
    "addressCountry": "UA",
  },
  "sameAs": [
    "https://t.me/+380930951282",
    "viber://chat?number=%2B380930951282",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="pt-20">
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
