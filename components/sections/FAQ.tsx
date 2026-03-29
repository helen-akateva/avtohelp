"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Скільки коштує евакуатор по Києву?",
    answer:
      "Вартість складається з подачі евакуатора від 1500 до 2500 грн та оплати за кілометраж — 70 грн/км. Для перевезень понад 500 км ціна від 25 грн/км без фіксованої подачі. Фінальна вартість залежить від габаритів авто та складності ситуації.",
  },
  {
    question: "Чи працюєте вночі та у вихідні?",
    answer:
      "Так, ми працюємо цілодобово 24/7/365 — без вихідних, свят та перерв.",
  },
  {
    question: "Які документи потрібні для евакуації?",
    answer:
      "Свідоцтво про реєстрацію транспортного засобу. Без документів евакуацію не проводимо.",
  },
  {
    question: "Чи можна замовити через Viber або Telegram?",
    answer:
      "Так, приймаємо замовлення через телефон, Viber, Telegram та WhatsApp на номер +38 (093) 095-12-82.",
  },
  {
    question: "Як швидко приїде евакуатор?",
    answer:
      "По Києву — в середньому 15–40 хвилин. Точний час залежить від вашого розташування та дорожньої ситуації.",
  },
  {
    question: "Чи є послуга лафети для кількох авто?",
    answer:
      "Так, ми маємо лафету для одночасного перевезення кількох автомобілів. Це вигідно при перегоні авто або замовленні від автосалону. Ціна уточнюється при замовленні.",
  },
];

// JSON-LD схема для SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  const contentId = useId();
  const buttonId = useId();

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all ${isOpen ? "border-[#F97316]/40 shadow-md" : "border-gray-100"}`}
    >
      {/* Питання як заголовок для SEO та навігації */}
      <h3>
        <button
          id={buttonId}
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F0F4F8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316]/20"
        >
          <span
            className={`font-bold text-base leading-snug transition-colors ${isOpen ? "text-[#F97316]" : "text-[#1E3A5F]"}`}
          >
            {question}
          </span>
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={`flex-shrink-0 text-[#F97316] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F0F4F8] py-16 lg:py-24"
      aria-labelledby="faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl font-black text-[#1E3A5F] mb-3"
          >
            Часті запитання
          </h2>
          <p className="text-gray-500 text-lg">
            Відповіді на найпоширеніші питання про евакуатор
          </p>
        </header>

        {/* Контейнер акордеона */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
