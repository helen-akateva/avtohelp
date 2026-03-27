import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
           <TrustBadges />
      </main>
    </>
  );
}