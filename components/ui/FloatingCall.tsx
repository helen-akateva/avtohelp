'use client';

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import Image from "next/image";
import {
  PHONE_LINK,
  PHONE_DISPLAY,
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

const messengers = [
  { href: VIBER_LINK, icon: "/icons/viber.svg", label: "Viber", color: "bg-[#7360F2]" },
  { href: TELEGRAM_LINK, icon: "/icons/telegram.svg", label: "Telegram", color: "bg-[#2AABEE]" },
  { href: WHATSAPP_LINK, icon: "/icons/whatsapp.svg", label: "WhatsApp", color: "bg-[#25D366]" },
];

export default function FloatingCall() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed bottom-6 right-4 sm:right-8 lg:right-12 z-50 flex flex-col items-end pointer-events-none">
      
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm pointer-events-auto transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`relative z-50 flex flex-col items-end gap-3 transition-all duration-500 pointer-events-auto ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>

        <nav className={`flex flex-col items-end gap-3 mb-2 transition-all duration-300 origin-bottom ${
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        }`}>
          <a
            href={PHONE_LINK}
            className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-gray-100"
            aria-label={`Зателефонувати ${PHONE_DISPLAY}`}
          >
            <Phone size={20} className="text-[#F97316] fill-[#F97316]" aria-hidden="true" />
          </a>

          {messengers.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Написати у ${m.label}`}
              className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform`}
            >
              <Image src={m.icon} alt="" width={24} height={24} unoptimized />
            </a>
          ))}
        </nav>

        <div className="relative">
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#F97316] animate-ping opacity-40" />
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative z-10 ${
              isOpen ? "bg-gray-800 rotate-90" : "bg-[#F97316]"
            }`}
            aria-label={isOpen ? "Закрити меню" : "Відкрити контакти"}
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Phone size={28} className="text-white fill-white" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}