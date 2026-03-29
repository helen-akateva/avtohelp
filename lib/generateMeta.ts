import { Metadata } from 'next';

export function generateLocationMeta(location: string, locationGen: string): Metadata {
  return {
    title: `Евакуатор ${location} — виклик 24/7 | AvtoHelp`,
    description: `Евакуатор у ${locationGen} від 1500 грн. Подача 15-40 хв, цілодобово. ☎ +38 (093) 095-12-82`,
    openGraph: {
      title: `Евакуатор ${location} | AvtoHelp`,
      description: `Виклик евакуатора у ${locationGen}. Швидко, прозора ціна, 24/7.`,
      images: ['/images/og-image.jpg'],
    },
  };
}