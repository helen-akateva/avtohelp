import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] sm:min-h-[90vh] flex items-center">
      {/* ФОН */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1.webp"
          alt=""
          fill
          priority
          className="object-cover object-[35%_80%] sm:object-[center_60%] lg:object-center"
        />
        {/* Мобільний — темніший оверлей знизу вгору */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/95 via-[#1E3A5F]/75 to-[#1E3A5F]/40 sm:hidden" />
        {/* Планшет і десктоп — оверлей зліва */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 via-[#1E3A5F]/65 to-[#1E3A5F]/20 hidden sm:block" />
      </div>

      {/* КОНТЕНТ */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-20 w-full relative z-10">
        <div className="max-w-2xl flex flex-col gap-5 text-center sm:text-left items-center sm:items-start">
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-[#F97316] text-sm font-bold tracking-wide">
              Працюємо 24/7 · 365 днів
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.1]">
            Евакуатор Київ —{" "}
            <span className="text-[#F97316]">швидкий виклик</span> 24/7 по Києву
            та області
          </h1>

          {/* Підзаголовок */}
          <p className="text-base sm:text-xl text-white/80 font-medium">
            Подача від{" "}
            <strong className="text-white font-black">1500 грн</strong> ·{" "}
            <strong className="text-white font-black">70 грн/км</strong> · Без
            вихідних
          </p>

          {/* Кнопка телефону */}
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xl px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
          >
            <Phone size={24} className="fill-white" />
            {PHONE_DISPLAY}
          </a>

          {/* Іконки месенджерів */}
          <div className="flex gap-4 items-center">
            <a
              href={VIBER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-90 transition-transform"
            >
              <Image
                src="/icons/viber.svg"
                alt="Viber"
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
            >
              <Image
                src="/icons/telegram.svg"
                alt="Telegram"
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
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={44}
                height={44}
                unoptimized
              />
            </a>
          </div>

          {/* Дрібний текст */}
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Clock size={16} className="text-[#F97316]" />
            <span>
              Подача евакуатора по Києву:{" "}
              <strong className="text-white">15–40 хв</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
