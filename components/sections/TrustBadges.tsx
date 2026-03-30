const badges = [
  {
    icon: "⏱",
    label: "Час подачі",
    title: "15–40 хв",
    text: "Середній час подачі евакуатора по Києву",
  },
  {
    icon: "✅",
    label: "Оплата",
    title: "Прозора оплата",
    text: "Готівка або картка — тільки після доставки авто",
  },
  {
    icon: "🔧",
    label: "Стан авто",
    title: "Будь-який стан",
    text: "Після ДТП, з несправною КПП, із заблокованими або відсутніми колесами",
  },
  {
    icon: "🌙",
    label: "Графік",
    title: "Графік 24/7/365",
    text: "Працюємо без вихідних, свят та перерв",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Використовуємо список для кращої семантики */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <li
              key={badge.title}
              className="flex flex-col gap-4 p-6 rounded-3xl bg-[#F0F4F8] border border-transparent hover:border-[#F97316]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <span 
                role="img" 
                aria-label={badge.label} 
                className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300 w-fit"
              >
                {badge.icon}
              </span>
              
              <div>
                <h3 className="font-black text-[#1E3A5F] text-lg lg:text-xl group-hover:text-[#F97316] transition-colors leading-tight">
                  {badge.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {badge.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}