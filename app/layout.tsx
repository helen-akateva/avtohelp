import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, PHONE_DISPLAY } from "@/lib/constants";

const geist = Geist({ subsets: ["latin"], display: "optional", preload: true });

export const metadata: Metadata = {
  title: `Евакуатор Київ — виклик 24/7 | ${SITE_NAME}`,
  description: `${SITE_DESCRIPTION}. Подача від 1500 грн · 70 грн/км. Телефон: ${PHONE_DISPLAY}`,
  metadataBase: new URL("https://evakuator-avtohelp.com.ua"),
  verification: {
    google: "vhIu89eOLQKGIzZKFWyFS55xcVgq4d9hMUs6bfMrJtU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9TD9DPM');`,
          }}
        />
      </head>
      <body className={geist.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9TD9DPM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
