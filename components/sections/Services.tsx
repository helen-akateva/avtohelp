"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/${i + 1}.webp`,
  alt: `Евакуатор AvtoHelp — робота ${i + 1}`,
}));

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1E3A5F] mb-3 leading-tight">
            Які авто та ситуації ми обслуговуємо
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-xl mx-auto">
            Евакуюємо будь-яке авто у будь-якій ситуації — цілодобово
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col gap-4 p-6 rounded-[24px] border border-gray-100 bg-[#F0F4F8] hover:border-[#F97316]/40 hover:shadow-lg transition-all group"
            >
              <span className="text-5xl" aria-hidden="true">
                {service.icon}
              </span>
              <div>
                <h3 className="font-black text-[#1E3A5F] text-lg sm:text-xl mb-2 leading-tight group-hover:text-[#F97316] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {service.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <h3 className="text-2xl font-black text-[#1E3A5F] mb-8 text-center">
            Фото наших робіт
          </h3>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-12"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #1e3a5f !important;
          background: rgba(255, 255, 255, 0.15) !important;
          backdrop-filter: blur(4px);
          width: 42px !important;
          height: 42px !important;
          border-radius: 12px;
         
          box-shadow: none;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: 700;
        }
        .swiper-pagination-bullet-active {
          background: #f97316 !important;
        }
        .swiper-pagination-bullet {
          background: #1e3a5f;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
}
