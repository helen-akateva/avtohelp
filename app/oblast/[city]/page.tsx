import { oblastCities } from "@/lib/data/oblast-cities";
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

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return oblastCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city: slug } = await params;
  const city = oblastCities.find((c) => c.slug === slug);
  if (!city) return {};
  return generateLocationMeta(city.name, city.nameGen);
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = oblastCities.find((c) => c.slug === slug);
  if (!city) return <div className="py-20 text-center">Місто не знайдено</div>;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AvtoHelp",
    description: `Евакуатор у ${city.nameGen} — виклик 24/7 по Київській області`,
    telephone: "+380930951282",
    areaServed: {
      "@type": "City",
      name: city.name,
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
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-[#1E3A5F]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1.webp"
              alt={`Евакуатор ${city.name}`}
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/80 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-4 py-16 w-full relative z-10">
            <div className="max-w-2xl flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full px-4 py-1.5 w-fit">
                <span
                  className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[#F97316] text-sm font-bold">
                  Київська область · {city.name}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Евакуатор <span className="text-[#F97316]">{city.name}</span> —
                виклик 24/7
              </h1>
              <p className="text-lg text-white/80">
                Подача від <strong className="text-white">1500 грн</strong> ·{" "}
                <strong className="text-white">70 грн/км</strong> · Працюємо по
                всій області
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-6 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto whitespace-nowrap text-[clamp(1.1rem,5vw,1.5rem)]"
                >
                  <Phone size={24} className="fill-white shrink-0" />
                  {PHONE_DISPLAY}
                </a>
                <nav className="flex gap-3" aria-label="Месенджери">
                  <a
                    href={VIBER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Viber"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/icons/viber.svg"
                      alt=""
                      width={44}
                      height={44}
                      unoptimized
                    />
                  </a>
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/icons/telegram.svg"
                      alt=""
                      width={44}
                      height={44}
                      unoptimized
                    />
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src="/icons/whatsapp.svg"
                      alt=""
                      width={44}
                      height={44}
                      unoptimized
                    />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />
        <Prices />
        <Services />

        {/* SEO текст */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
            <article className="prose prose-slate max-w-none">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A5F] mb-4">
                Евакуатор у {city.nameGen} та області
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Компанія <strong>AvtoHelp</strong> надає професійні послуги
                  евакуатора у <strong>{city.name}</strong> та по всій Київській
                  області — цілодобово. Ми забезпечуємо швидкий виїзд
                  спецтехніки навіть у віддалені населені пункти області.
                </p>
                <p>
                  Евакуюємо легкові авто, позашляховики, мотоцикли та
                  мікроавтобуси до 3.5 тонн. Після ДТП, заблоковані колеса,
                  несправна КПП — ми маємо все необхідне обладнання для
                  безпечного завантаження. Оплата{" "}
                  <strong>тільки після доставки</strong>.
                </p>
              </div>
            </article>

            {/* CTA */}
            <aside className="p-8 bg-[#1E3A5F] rounded-3xl text-white text-center flex flex-col items-center gap-4 shadow-xl">
              <h3 className="font-black text-xl sm:text-2xl text-white">
                Потрібен евакуатор у {city.name}?
              </h3>
              <p>
                Оплата виключно <strong>після доставки автомобіля</strong> до
                місця призначення. Вартість евакуатора у {city.nameGen}{" "}
                погоджується до виїзду — ніяких прихованих платежів.
              </p>
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-6 py-4 rounded-2xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto whitespace-nowrap text-[clamp(1.1rem,5vw,1.75rem)] shadow-lg shadow-orange-500/20"
              >
                <Phone size={24} className="fill-white shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </aside>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
