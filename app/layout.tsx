import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, PHONE_DISPLAY } from '@/lib/constants';

const geist = Geist({ subsets: ['latin'], display: 'optional', preload: true });

export const metadata: Metadata = {
  title: `Евакуатор Київ — виклик 24/7 | ${SITE_NAME}`,
  description: `${SITE_DESCRIPTION}. Подача від 1500 грн · 70 грн/км. Телефон: ${PHONE_DISPLAY}`,
  metadataBase: new URL('https://avtohelp-three.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
