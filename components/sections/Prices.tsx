import { Phone } from "lucide-react";
import { PHONE_LINK, PHONE_DISPLAY } from "@/lib/constants";

const priceRows = [
  {
    type: "По Київу та Київській області",
    base: "від 1500 до 2500 грн",
    perKm: "70 грн/км",
  },
  {
    type: "Перевезення понад 500 км",
    base: "без фіксованої подачі",
    perKm: "від 25 грн/км",
  },
];

const lafetaFeatures = [
  "Одночасне перевезення кількох автомобілів на одному лафеті",
  "Ідеально для автосалонів, перегону авто, перевезення колекційних машин",
  "Ціна — уточнюється індивідуально при замовленні",
];

export default function Prices() {
  return (
    <section id="prices" className="bg-[#F0F4F8] py-12 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        
        <header className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-3">
            Вартість евакуатора
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg">
            Фінальна ціна уточнюється після визначення маршруту
          </p>
        </header>

        <article className="bg-white rounded-3xl md:rounded-[40px] shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed sm:table-auto">
              <thead className="bg-[#1E3A5F] text-white">
                <tr>
                  <th className="px-4 py-4 md:px-8 md:py-6 text-[10px] md:text-sm font-bold uppercase tracking-wider w-[40%]">Тип</th>
                  <th className="px-2 py-4 md:px-6 md:py-6 text-[10px] md:text-sm font-bold uppercase tracking-wider text-center w-[30%]">Подача</th>
                  <th className="px-4 py-4 md:px-8 md:py-6 text-[10px] md:text-sm font-bold uppercase tracking-wider text-right w-[30%]">За км</th>
                </tr>
              </thead>
              <tbody className="text-[#1E3A5F]">
                {priceRows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-5 md:px-8 md:py-8 text-xs sm:text-lg font-bold leading-tight">
                      {row.type}
                    </td>
                    <td className="px-2 py-5 md:px-6 md:py-8 text-center text-[11px] sm:text-lg font-black text-[#F97316]">
                      {row.base}
                    </td>
                    <td className="px-4 py-5 md:px-8 md:py-8 text-right text-[11px] sm:text-lg font-black whitespace-nowrap">
                      {row.perKm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-6 md:px-10 md:py-10 border-t border-gray-50">
            <h3 className="text-[#1E3A5F] font-black text-sm md:text-xl mb-4 flex items-center gap-2">
              <span className="text-[#F97316]">TOP</span> Додаткова послуга — Лафета:
            </h3>
            <ul className="space-y-2 md:space-y-4">
              {lafetaFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-xs sm:text-lg">
                  <span className="text-[#F97316] font-bold">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="px-3 py-8 md:px-12 md:py-12 bg-gray-50/50 border-t border-gray-100 flex flex-col items-center">
            <a
              href={PHONE_LINK}
              className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-black text-[13px] xs:text-[14px] sm:text-xl lg:text-2xl py-4 md:py-6 w-full rounded-2xl md:rounded-3xl shadow-lg shadow-orange-100 whitespace-nowrap px-2"
            >
              <Phone size={20} fill="white" strokeWidth={0} className="shrink-0 w-4 h-4 sm:w-6 sm:h-6" />
              <span>Замовити: {PHONE_DISPLAY}</span>
            </a>
            <p className="text-center text-gray-400 text-[10px] md:text-xs mt-4 uppercase font-bold tracking-widest">
              Працюємо цілодобово 24/7
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}