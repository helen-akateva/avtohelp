import { ukraineRegions } from "@/lib/data/ukraine-regions";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCall from "@/components/ui/FloatingCall";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import {
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
  PHONE_LINK,
  PHONE_DISPLAY,
} from "@/lib/constants";
import type { Metadata } from "next";
import HowToOrder from "@/components/sections/HowToOrder";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import TrustBadges from "@/components/sections/TrustBadges";
import Prices from "@/components/sections/Prices";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Евакуатор по всій Україні — виклик 24/7 | AvtoHelp",
  description:
    "Евакуатор по всій Україні від 1000 грн. Працюємо у всіх областях цілодобово. ☎ +38 (093) 095-12-82",
};

const activeRegions = ukraineRegions.filter((r) => r.active);

export default function UkrainePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden min-h-[100svh] flex items-center bg-[#1E3A5F]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/1.webp"
              alt="Евакуатор по всій Україні"
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
                <span
                  className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[#F97316] text-sm font-bold tracking-wide">
                  Працюємо 24/7 · 365 днів
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.1]">
                Евакуатор{" "}
                <span className="text-[#F97316]">по всій Україні</span> —
                швидкий виклик 24/7
              </h1>
              <p className="text-base sm:text-xl text-white/80 font-medium">
                Подача від{" "}
                <strong className="text-white font-black">1000 грн</strong> ·{" "}
                <strong className="text-white font-black">50 грн/км</strong> ·
                Без вихідних
              </p>

              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xl px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
              >
                <Phone size={24} className="fill-white" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex gap-4 items-center">
                <a
                  href={VIBER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 active:scale-90 transition-transform"
                  aria-label="Viber"
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
                  className="hover:scale-110 active:scale-90 transition-transform"
                  aria-label="Telegram"
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
                  className="hover:scale-110 active:scale-90 transition-transform"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt=""
                    width={44}
                    height={44}
                    unoptimized
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <TrustBadges />
        <section id="zones" className="bg-[#F0F4F8] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A5F] mb-8 text-center">
              Оберіть вашу область
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/"
                className="bg-white rounded-2xl p-6 border-2 border-[#F97316]/60 shadow-sm hover:border-[#F97316] hover:shadow-md transition-all group relative"
              >
                <span className="absolute top-3 right-3 text-xs font-bold bg-[#F97316] text-white px-2 py-0.5 rounded-full">
                  Столиця
                </span>
                <h3 className="font-black text-[#1E3A5F] text-lg group-hover:text-[#F97316] transition-colors">
                  Київ та Київська область
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Київ, Бровари, Біла Церква, Бориспіль...
                </p>
              </Link>
              {activeRegions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/ukraine/${region.slug}`}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-[#F97316]/40 hover:shadow-md transition-all group"
                >
                  <h3 className="font-black text-[#1E3A5F] text-lg group-hover:text-[#F97316] transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {region.center.name},{" "}
                    {region.cities
                      .slice(0, 3)
                      .map((c) => c.name)
                      .join(", ")}
                    ...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Prices />
        <Services />
        <HowToOrder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
