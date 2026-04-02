import { Phone } from "lucide-react";
import { PHONE_LINK, PHONE_DISPLAY } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Зателефонуйте або напишіть у месенджер",
    text: "Приймаємо замовлення цілодобово — телефон, Viber, Telegram, WhatsApp",
    icon: "📞",
  },
  {
    number: "02",
    title: "Назвіть адресу та стан авто",
    text: "Оператор уточнить маршрут та назве точну вартість",
    icon: "📍",
  },
  {
    number: "03",
    title: "Евакуатор вже їде",
    text: "Середній час подачі 15–40 хвилин. Оплата тільки після доставки",
    icon: "🚛",
  },
];

export default function HowToOrder() {
  return (
    <section id="how" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        <header className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] mb-3">
            Як викликати евакуатор — 3 кроки
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Просто і швидко — від дзвінка до подачі евакуатора
          </p>
        </header>

        <div className="relative">
          <div 
            className="hidden lg:block absolute top-16 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-0.5 bg-[#F97316] opacity-20 z-0" 
            aria-hidden="true" 
          />

          <ol className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 list-none p-0">
            {steps.map((step, i) => (
              <li key={step.number} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#1E3A5F] flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-[#F97316]">{step.number}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 text-xl" aria-hidden="true">
                      {step.icon}
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="lg:hidden text-2xl text-gray-200" aria-hidden="true">→</div>
                  )}
                </div>

                <article>
                  <h3 className="font-black text-[#1E3A5F] text-lg leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black text-xl px-10 py-5 rounded-2xl shadow-lg shadow-orange-200 transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
          >
            <Phone size={22} className="fill-white" />
            {PHONE_DISPLAY}
          </a>
          <p className="text-gray-400 text-sm text-center">
            Або напишіть у Viber / Telegram / WhatsApp
          </p>
        </div>

      </div>
    </section>
  );
}