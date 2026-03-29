const services = [
  {
    icon: "🚗",
    title: "Легкові авто та позашляховики",
    text: "Седани, хетчбеки, SUV будь-якої марки та комплектації",
  },
  {
    icon: "💥",
    title: "Евакуатор після ДТП",
    text: "Термінова евакуація з місця аварії по Києву та області",
  },
  {
    icon: "🔒",
    title: "Заблоковані колеса або КПП",
    text: "Спецобладнання для евакуації без пошкодження трансмісії",
  },
  {
    icon: "🏍",
    title: "Мотоцикли та спецтехніка",
    text: "Мотоцикли, скутери, квадроцикли будь-якого розміру",
  },
  {
    icon: "⛽",
    title: "Доставка пального",
    text: "Закінчилось пальне на дорозі — привеземо швидко",
  },
  {
    icon: "🚐",
    title: "Евакуація мікроавтобусів",
    text: "Перевезення мікроавтобусів та мінівенів до 3.5 тонн",
  },
];

const galleryPlaceholders = [1, 2, 3, 4, 5];

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Заголовок */}
        <header className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1E3A5F] mb-3 leading-tight px-2">
            Які авто та ситуації ми обслуговуємо
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-xl mx-auto">
            Евакуюємо будь-яке авто у будь-якій ситуації — цілодобово
          </p>
        </header>

        {/* Картки послуг — на мобільних grid-cols-1 */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col gap-4 p-6 rounded-[24px] border border-gray-100 bg-[#F0F4F8] hover:border-[#F97316]/40 hover:shadow-lg transition-all group"
            >
              <span className="text-5xl" aria-hidden="true">{service.icon}</span>
              <article>
                <h3 className="font-black text-[#1E3A5F] text-lg sm:text-xl mb-2 leading-tight group-hover:text-[#F97316] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {service.text}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* Галерея */}
        <article className="mt-10">
          <h3 className="text-xl font-black text-[#1E3A5F] mb-6 text-center">
            Фото наших робіт
          </h3>

          <div 
            className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-2"
          >
            {galleryPlaceholders.map((n) => (
              <div
                key={n}
                className="flex-shrink-0 w-[85%] sm:w-80 h-56 rounded-[24px] bg-[#F0F4F8] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-300 snap-center"
              >
                <span className="text-5xl" aria-hidden="true">📷</span>
                <span className="text-sm font-bold uppercase tracking-wider">Приклад роботи {n}</span>
              </div>
            ))}
          </div>

          <footer className="text-center mt-4">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              * Галерея в процесі наповнення
            </p>
          </footer>
        </article>

      </div>
    </section>
  );
}