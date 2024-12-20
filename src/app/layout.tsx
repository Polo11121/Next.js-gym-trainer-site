import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monika Habant - Trener Personalny",
  description:
    "Profesjonalne treningi personalne w Ostródzie. Zbuduj formę z Moniką Habant!",
  keywords:
    "trener personalny Ostróda, personal trainer Ostróda, trening personalny Ostróda, trening siłowy Ostróda, trener fitness Ostróda, odchudzanie Ostróda, dieta Ostróda, trening odchudzający Ostróda, trening siłowy dla kobiet Ostróda, ćwiczenia na siłowni Ostróda, zdrowy styl życia Ostróda, trening personalny dla początkujących Ostróda, budowanie masy mięśniowej Ostróda, poprawa kondycji Ostróda, trener odchudzania Ostróda, indywidualny plan treningowy Ostróda, trening w Ostródzie, motywacja do treningu Ostróda, fitness Ostróda, trening dla seniorów Ostróda",
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
      <link rel="icon" href="/images/logo-white.png" sizes="any" />
      <body className={`${roboto.className} ${oswald.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
