const kyivDistricts = [
  "Святошинський",
  "Дарницький",
  "Оболонський",
  "Печерський",
  "Шевченківський",
  "Подільський",
  "Голосіївський",
  "Солом'янський",
  "Деснянський",
  "Дніпровський",
];

const oblastCities = [
  "Бровари",
  "Бориспіль",
  "Ірпінь",
  "Буча",
  "Вишгород",
  "Біла Церква",
  "Фастів",
  "Обухів",
  "Васильків",
  "Бородянка",
  "Переяслав",
  "Макарів",
  "Вишневе",
  "Гостомель",
  "Борщагівка",
];

export default function ServiceZones() {
  return (
    <section id="zones" className="bg-[#F0F4F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A5F] mb-3">
            Де працює евакуатор
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Надаємо професійні послуги евакуатора у Києві та Київській області.
            Незалежно від вашого місцезнаходження — евакуатор приїде максимально
            швидко.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* ЛІВА ЧАСТИНА — Райони і міста */}
          <div className="flex flex-col gap-6">
            {/* Райони Києва */}
            <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl bg-[#1E3A5F] flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  🏙
                </div>
                <div>
                  <h3 className="font-black text-[#1E3A5F] text-lg">
                    Райони Києва
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Оперативно виїжджаємо у всі райони
                  </p>
                </div>
              </div>

              {/* Перетворили на список для SEO */}
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Список районів Києва"
              >
                {kyivDistricts.map((district) => (
                  <li
                    key={district}
                    className="px-3 py-1.5 bg-[#F0F4F8] text-[#1E3A5F] text-sm font-semibold rounded-lg border border-gray-100 hover:border-[#F97316]/40 hover:bg-orange-50 transition-colors cursor-default"
                  >
                    {district}
                  </li>
                ))}
              </ul>
            </article>

            {/* Міста Київської області */}
            <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  🗺
                </div>
                <div>
                  <h3 className="font-black text-[#1E3A5F] text-lg">
                    Міста Київської області
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Працюємо по всій Київській області
                  </p>
                </div>
              </div>

              <ul
                className="flex flex-wrap gap-2"
                aria-label="Список міст Київської області"
              >
                {oblastCities.map((city) => (
                  <li
                    key={city}
                    className="px-3 py-1.5 bg-[#F0F4F8] text-[#1E3A5F] text-sm font-semibold rounded-lg border border-gray-100 hover:border-[#F97316]/40 hover:bg-orange-50 transition-colors cursor-default"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </article>

            {/* Банер */}
            <aside className="bg-gradient-to-r from-[#1E3A5F] to-[#2a4f7c] rounded-3xl p-6 text-white">
              <p className="font-black text-lg mb-1">Не знайшли своє місто?</p>
              <p className="text-white/70 text-sm">
                Зателефонуйте — уточнимо можливість виїзду та вартість
              </p>
            </aside>
          </div>

          {/* ПРАВА ЧАСТИНА — Карта */}
          <figure className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden m-0">
            <figcaption className="p-5 border-b border-gray-100">
              <h3 className="font-black text-[#1E3A5F] flex items-center gap-2">
                <span aria-hidden="true">📍</span> Зона покриття
              </h3>
              <p className="text-gray-400 text-sm">Київ та Київська область</p>
            </figcaption>

            <div className="relative w-full h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324496.42230400435!2d30.239320000000003!3d50.4020!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4e518462b3%3A0x764931d2170146fe!2z0JrQuNGX0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Інтерактивна карта зони обслуговування евакуатора"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
