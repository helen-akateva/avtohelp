import { Phone } from "lucide-react";
import Image from "next/image";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

const messengers = [
  { href: VIBER_LINK, icon: "/icons/viber.svg", color: "bg-[#7360F2]" },
  { href: TELEGRAM_LINK, icon: "/icons/telegram.svg", color: "bg-[#2AABEE]" },
  { href: WHATSAPP_LINK, icon: "/icons/whatsapp.svg", color: "bg-[#25D366]" },
];

export default function FinalCTA() {
  return (
    <section id="contacts" className="bg-gradient-to-br from-[#1E3A5F] via-[#1a3356] to-[#152A47] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-6 sm:gap-8">

        {/* Бейдж */}
        <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
          <span className="text-[#F97316] text-[12px] sm:text-sm font-bold uppercase tracking-wider">Працюємо 24/7 · 365 днів</span>
        </div>

        {/* Заголовок */}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Потрібен евакуатор <br className="sm:hidden" />
            <span className="text-[#F97316]">прямо зараз?</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-lg max-w-xl mx-auto">
            Приймаємо замовлення цілодобово — телефонуйте або пишіть
          </p>
        </div>

        {/* Номер телефону — Адаптований під мобільний */}
        <a
          href={PHONE_LINK}
          className="flex items-center justify-center gap-3 bg-[#F97316] text-white font-black text-[18px] xs:text-[22px] sm:text-3xl px-4 sm:px-10 py-5 sm:py-7 rounded-[24px] sm:rounded-3xl shadow-2xl shadow-orange-500/40 transition-all active:scale-95 w-full sm:w-auto whitespace-nowrap"
        >
          <Phone size={24} fill="white" strokeWidth={0} className="shrink-0 w-5 h-5 sm:w-8 sm:h-8" />
          {PHONE_DISPLAY}
        </a>

        {/* Розділювач */}
        <div className="flex items-center gap-4 w-full max-w-[280px] sm:max-w-sm">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/40 text-[10px] sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap">або напишіть</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Месенджери іконками в ряд */}
        <nav className="flex gap-4">
          {messengers.map((m, idx) => (
            <a
              key={idx}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl sm:rounded-[24px] shadow-lg hover:scale-110 active:scale-90 transition-transform`}
            >
              <Image src={m.icon} alt="messenger" width={28} height={28} className="w-7 h-7 sm:w-8 sm:h-8" unoptimized />
            </a>
          ))}
        </nav>

        <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.2em] mt-2">
          Ми на зв&apos;язку 24/7
        </p>

      </div>
    </section>
  );
}