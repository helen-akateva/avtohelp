import { kyivDistricts } from "@/lib/data/kyiv-districts";
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
  params: Promise<{ district: string }>;
};

export async function generateStaticParams() {
  return kyivDistricts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { district: slug } = await params;
  const district = kyivDistricts.find((d) => d.slug === slug);
  if (!district) return {};
  return generateLocationMeta(district.name, district.nameGen);
}

export default async function DistrictPage({ params }: Props) {
  const { district: slug } = await params;
  const district = kyivDistricts.find((d) => d.slug === slug);
  if (!district)
    return <div className="py-20 text-center">Район не знайдено</div>;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AvtoHelp",
    description: `Евакуатор у ${district.nameGen} районі Києва — виклик 24/7`,
    telephone: "+380930951282",
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${district.name} район, Київ`,
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
        <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-[#1E3A5F]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1.webp"
              alt={`Послуги евакуатора у ${district.nameGen} районі`}
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
                  Київ · {district.name} район
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Евакуатор{" "}
                <span className="text-[#F97316]">{district.name} район</span> —
                виклик 24/7
              </h1>
              <p className="text-lg text-white/80">
                Подача від <strong className="text-white">1500 грн</strong> ·{" "}
                <strong className="text-white">70 грн/км</strong> · Цілодобово
                без вихідних
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black text-xl px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
                >
                  <Phone size={22} className="fill-white" />
                  {PHONE_DISPLAY}
                </a>

                <nav
                  className="flex gap-3"
                  aria-label="Зв'язок через месенджери"
                >
                  <a
                    href={VIBER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="Написати у Viber"
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
                    className="hover:scale-110 transition-transform"
                    aria-label="Написати у Telegram"
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
                    className="hover:scale-110 transition-transform"
                    aria-label="Написати у WhatsApp"
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

        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <article className="flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A5F]">
                Евакуатор у {district.nameGen} районі Києва
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Компанія <strong>AvtoHelp</strong> надає професійні послуги
                  евакуатора у <strong>{district.name} районі Києва</strong>{" "}
                  цілодобово — без вихідних та перерв. Середній час подачі у
                  цьому районі становить <strong>15–40 хвилин</strong>.
                </p>
                <p>
                  Ми евакуюємо легкові авто, позашляховики, мотоцикли та
                  мікроавтобуси до 3.5 тонн. Наші спеціалісти готові допомогти
                  після ДТП, при заблокованих колесах або несправній КПП. Оплата
                  здійснюється <strong>тільки після доставки автомобіля</strong>{" "}
                  — готівкою або карткою.
                </p>
              </div>
            </article>

            <aside
              className="p-6 bg-[#1E3A5F] rounded-3xl text-white text-center flex flex-col items-center gap-4 mt-10"
              aria-labelledby="cta-heading"
            >
              <p id="cta-heading" className="font-black text-xl">
                Потрібен евакуатор у {district.name} районі?
              </p>
            <p>
          Оплата виключно <strong>після доставки автомобіля</strong> до місця призначення.
          Вартість евакуатора погоджується до виїзду — ніяких прихованих платежів.
        </p>
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-black rounded-2xl transition-all active:scale-95 shadow-lg w-full py-4 px-2 text-lg xs:text-xl whitespace-nowrap sm:w-auto sm:px-8 sm:text-2xl"
              >
                <Phone size={20} className="fill-white shrink-0" />
                <span className="tabular-nums tracking-tight">
                  {PHONE_DISPLAY}
                </span>
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
