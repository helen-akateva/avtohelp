"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

const navLinks = [
  { name: "Послуги", href: "/#services" },
  { name: "Ціни", href: "/#prices" },
  { name: "Локації", href: "/#zones" },
  { name: "FAQ", href: "/#faq" },
];

const messengers = [
  { href: VIBER_LINK, icon: "/icons/viber.svg", label: "Viber" },
  { href: WHATSAPP_LINK, icon: "/icons/whatsapp.svg", label: "WhatsApp" },
  { href: TELEGRAM_LINK, icon: "/icons/telegram.svg", label: "Telegram" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A5F] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:py-0 lg:h-20 flex flex-col lg:flex-row lg:items-center justify-between gap-3 relative">
        <div className="flex items-center justify-between w-full lg:w-auto gap-4">
          <Link
            href="/"
            className="flex flex-col leading-tight z-[60] flex-shrink-0"
          >
            <div className="text-xl sm:text-2xl font-black tracking-tight">
              <span className="text-white">Avto</span>
              <span className="text-[#F97316]">Help</span>
            </div>
            <span className="text-[10px] text-[#F97316] uppercase tracking-tighter font-bold">
              Евакуатор Київ та область
            </span>
          </Link>

          <div className="hidden md:flex lg:hidden items-center gap-4 z-[60]">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 font-black text-white"
            >
              <div className="bg-[#F97316] p-1.5 rounded-full">
                <Phone size={16} className="text-white fill-current" />
              </div>
              <span className="text-base whitespace-nowrap">
                {PHONE_DISPLAY}
              </span>
            </a>
            <div className="flex items-center gap-2">
              {messengers.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg`}
                >
                  <Image
                    src={m.icon}
                    alt={m.label}
                    width={32}
                    height={32}
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex md:hidden items-center gap-3 z-[60]">
            <a
              href={PHONE_LINK}
              className="bg-[#F97316] p-2.5 rounded-full shadow-lg"
              aria-label={`Зателефонувати ${PHONE_DISPLAY}`}
            >
              <Phone size={20} className="text-white fill-current" aria-hidden="true" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white border border-white/20 rounded-lg"
              aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:block lg:hidden p-2 text-white border border-white/20 rounded-lg z-[60]"
            aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-bold text-white/90 hover:text-[#F97316] transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ДЕСКТОП ПРАВА ЧАСТИНА (Номер + Месенджери) */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 font-black text-white hover:text-[#F97316] group transition-all"
          >
            <div className="bg-[#F97316] p-1.5 rounded-lg group-hover:bg-white transition-colors">
              <Phone
                size={18}
                className="text-white group-hover:text-[#F97316] fill-current"
              />
            </div>
            <span className="text-lg whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>
          <div className="flex items-center gap-2.5">
            {messengers.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md`}
              >
                <Image
                  src={m.icon}
                  alt={m.label}
                  width={32}
                  height={32}
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>

        {/* МЕСЕНДЖЕРИ ДЛЯ МОБІЛОК (другий ряд, тільки до md) */}
        <div
          className={`flex md:hidden items-center justify-center gap-6 mt-1 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
        >
          {messengers.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform`}
            >
              <Image
                src={m.icon}
                alt={m.label}
                width={30}
                height={30}
                unoptimized
              />
            </a>
          ))}
        </div>

        {/* MOB MENU OVERLAY */}
        <div
          className={`fixed inset-0 bg-[#1E3A5F] z-[50] pt-28 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col`}
        >
          <div className="flex flex-col h-full px-8 overflow-y-auto">
            <nav className="flex flex-col mb-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold py-5 border-b border-white/10 text-white active:text-[#F97316]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-12">
              <a
                href={PHONE_LINK}
                className="w-full flex items-center justify-center gap-4 py-5 rounded-2xl bg-[#F97316] text-white font-black text-2xl shadow-xl"
              >
                <Phone size={28} className="fill-white" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
