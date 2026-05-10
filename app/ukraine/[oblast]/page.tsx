import { ukraineRegions } from "@/lib/data/ukraine-regions";
import { generateLocationMeta } from "@/lib/generateMeta";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCall from "@/components/ui/FloatingCall";
import TrustBadges from "@/components/sections/TrustBadges";
import Prices from "@/components/sections/Prices";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import { Phone } from "lucide-react";
import {
  PHONE_LINK,
  PHONE_DISPLAY,
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";
import Image from "next/image";
import HowToOrder from "@/components/sections/HowToOrder";
import FinalCTA from "@/components/sections/FinalCTA";

type Props = {
  params: Promise<{ oblast: string }>;
};

export async function generateStaticParams() {
  return ukraineRegions
    .filter((r) => r.active)
    .map((r) => ({ oblast: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { oblast: slug } = await params;
  const region = ukraineRegions.find((r) => r.slug === slug);
  if (!region) return {};
  return generateLocationMeta(region.center.name, region.nameLoc);
}

export default async function OblastPage({ params }: Props) {
  const { oblast: slug } = await params;
  const region = ukraineRegions.find((r) => r.slug === slug);
  if (!region)
    return <div className="py-20 text-center">Область не знайдено</div>;

  const allCities = [region.center, ...region.cities];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AvtoHelp",
    description: `Евакуатор у ${region.nameLoc} — виклик 24/7`,
    telephone: "+380930951282",
    areaServed: {
      "@type": "AdministrativeArea",
      name: region.name,
    },
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "UAH",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden min-h-[100svh] flex items-center bg-[#1E3A5F]">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/1.webp"
      alt={`Евакуатор ${region.name}`}
      fill
      priority
      quality={60}
      className="object-cover object-[35%_80%] sm:object-[center_60%] lg:object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/95 via-[#1E3A5F]/75 to-[#1E3A5F]/40 sm:hidden" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 via-[#1E3A5F]/65 to-[#1E3A5F]/20 hidden sm:block" />
  </div>
  <div className="max-w-7xl mx-auto px-4 py-24 sm:py-20 w-full relative z-10">
    <div className="max-w-2xl flex flex-col gap-5 text-center sm:text-left items-center sm:items-start">
      <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full px-4 py-1.5 w-fit">
        <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" aria-hidden="true" />
        <span className="text-[#F97316] text-sm font-bold tracking-wide">
          Україна · {region.name}
        </span>
      </div>
      <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.1]">
        Евакуатор {region.center.name} та {region.name} —{" "}
        <span className="text-[#F97316]">швидкий виклик</span> 24/7
      </h1>
      <p className="text-base sm:text-xl text-white/80 font-medium">
        Подача від{" "}
        <strong className="text-white font-black">1000 грн</strong> ·{" "}
        <strong className="text-white font-black">50 грн/км</strong> · Без вихідних
      </p>
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xl px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
          >
            <Phone size={24} className="fill-white" />
            {PHONE_DISPLAY}
          </a>
      <div className="flex gap-4 items-center">
        <a href={VIBER_LINK} target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-90 transition-transform" aria-label="Viber">
          <Image src="/icons/viber.svg" alt="" width={44} height={44} unoptimized />
        </a>
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-90 transition-transform" aria-label="Telegram">
          <Image src="/icons/telegram.svg" alt="" width={44} height={44} unoptimized />
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-90 transition-transform" aria-label="WhatsApp">
          <Image src="/icons/whatsapp.svg" alt="" width={44} height={44} unoptimized />
        </a>
      </div>
    </div>
  </div>
</section>

        <TrustBadges />
        <Prices />
        <Services />
        <HowToOrder />

        <section id="zones" className="bg-[#F0F4F8] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <header className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] mb-3">
                Де працює евакуатор
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Працюємо по всій {region.nameLoc} — виїжджаємо до будь-якого
                населеного пункту. Нижче вказані основні міста, але якщо вашого
                міста немає у списку — телефонуйте, уточнимо можливість виїзду.
              </p>
            </header>
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-xl flex-shrink-0">
                  🗺
                </div>
                <div>
                  <h3 className="font-black text-[#1E3A5F] text-lg">
                    {region.name}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Обласний центр та основні міста
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {allCities.map((city) => (
                  <li
                    key={city.slug}
                    className="px-3 py-1.5 bg-[#F0F4F8] text-[#1E3A5F] text-sm font-semibold rounded-lg border border-gray-100 hover:border-[#F97316]/40 hover:bg-orange-50 transition-colors"
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="bg-gradient-to-r from-[#1E3A5F] to-[#2a4f7c] rounded-3xl p-6 text-white mt-6 max-w-3xl mx-auto">
              <p className="font-black text-lg mb-1">Не знайшли своє місто?</p>
              <p className="text-white/70 text-sm">
                Зателефонуйте — уточнимо можливість виїзду та вартість
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
            <article>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A5F] mb-4">
                Евакуатор у {region.nameLoc}
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Компанія <strong>AvtoHelp</strong> надає професійні послуги
                  евакуатора у <strong>{region.nameLoc}</strong> — цілодобово,
                  без вихідних. Працюємо в {region.center.name} та виїжджаємо до
                  будь-якого населеного пункту.
                </p>
                <p>
                  Евакуюємо легкові авто, позашляховики, мотоцикли та
                  мікроавтобуси до 3.5 тонн. Після ДТП, заблоковані колеса,
                  несправна КПП — маємо все необхідне обладнання для безпечного
                  завантаження. Оплата <strong>тільки після доставки</strong>.
                </p>
              </div>
            </article>

            <aside className="p-8 bg-[#1E3A5F] rounded-3xl text-white text-center flex flex-col items-center gap-4 shadow-xl">
              <h3 className="font-black text-xl sm:text-2xl text-white">
                Потрібен евакуатор у {region.nameLoc}?
              </h3>
              <p>
                Оплата виключно <strong>після доставки автомобіля</strong> до
                місця призначення. Вартість погоджується до виїзду — ніяких
                прихованих платежів.
              </p>
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-6 py-4 rounded-2xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto whitespace-nowrap text-[clamp(1.1rem,5vw,1.75rem)] shadow-lg"
              >
                <Phone size={24} className="fill-white shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </aside>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
