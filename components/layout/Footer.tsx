import { Phone, Clock } from "lucide-react";
import Image from "next/image";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  VIBER_LINK,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

const messengers = [
  { href: VIBER_LINK, icon: "/icons/viber.svg", label: "Viber" },
  { href: TELEGRAM_LINK, icon: "/icons/telegram.svg", label: "Telegram" },
  { href: WHATSAPP_LINK, icon: "/icons/whatsapp.svg", label: "WhatsApp" },
];

const navLinks = [
  { name: "Послуги", href: "/#services" },
  { name: "Ціни", href: "/#prices" },
  { name: "Локації", href: "/#zones" },
  { name: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2337] text-white">

      <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <section className="flex flex-col gap-4">
          <div>
            <div className="text-2xl font-black">
              <span className="text-white">Avto</span>
              <span className="text-[#F97316]">Help</span>
            </div>
            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">
              Евакуатор Київ та Київська область
            </p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Професійні послуги евакуатора у Києві та Київській області. Швидко, прозоро, цілодобово.
          </p>
          
          <nav aria-label="Наші месенджери">
            <ul className="flex gap-3 mt-2 list-none p-0">
              {messengers.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:scale-110 transition-transform"
                    aria-label={`Ми у ${m.label}`}
                  >
                    <Image src={m.icon} alt="" width={32} height={32} unoptimized />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <nav className="flex flex-col gap-3" aria-label="Допоміжна навігація">
          <h3 className="font-black text-white text-sm uppercase tracking-wider mb-1">
            Навігація
          </h3>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/60 hover:text-[#F97316] transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="flex flex-col gap-4 not-italic">
          <h3 className="font-black text-white text-sm uppercase tracking-wider">
            Контакти
          </h3>
          
          <a
            href={PHONE_LINK}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="fill-white text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-white/60">Телефон</p>
              <p className="font-black text-white group-hover:text-[#F97316] transition-colors">
                {PHONE_DISPLAY}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-[#F97316]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-white/60">Режим роботи</p>
              <p className="font-bold text-white">Цілодобово, 24/7/365</p>
            </div>
          </div>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <small className="text-white/60 text-sm">
            © 2026 AvtoHelp. Всі права захищені
          </small>
          <p className="text-white/40 text-xs uppercase tracking-tighter">
            Евакуатор Київ та Київська область
          </p>
        </div>
      </div>
    </footer>
  );
}