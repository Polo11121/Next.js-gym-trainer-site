import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trener Personalny Ostróda – Monika Habant | Treningi i Dieta",
  description:
    "Profesjonalne treningi personalne w Ostródzie! Indywidualne plany treningowe i skuteczna dieta dopasowana do Twoich celów. Zadbaj o swoją formę z Moniką Habant!",
  keywords:
    "trener personalny Ostróda, trening personalny Ostróda, siłownia Ostróda, odchudzanie Ostróda, plan treningowy Ostróda, dieta Ostróda, zdrowy styl życia Ostróda, trening siłowy Ostróda, fitness Ostróda, ćwiczenia Ostróda, trening dla kobiet Ostróda, trener Ostróda, personal trainer Ostróda",
  authors: [
    {
      name: "Monika Habant",
      url: "https://www.instagram.com/monika_habant",
    },
    {
      name: "Monika Habant",
      url: "https://www.facebook.com/monika.habant",
    },
    {
      name: "Monika Habant",
      url: "https://www.tiktok.com/@monika.habant",
    },
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo-white.webp" sizes="any" />
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Monika Habant - Trener Personalny i Dietetyk",
            description:
              "Profesjonalne treningi personalne i doradztwo dietetyczne. Pomagam w osiąganiu celów zdrowotnych i sylwetkowych.",
            url: "https://monikahabant.pl",
            sameAs: [
              "https://www.instagram.com/monika_habant",
              "https://www.facebook.com/monika.habant",
              "https://www.tiktok.com/@monika.habant",
            ],
          }),
        }}
      />

      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
