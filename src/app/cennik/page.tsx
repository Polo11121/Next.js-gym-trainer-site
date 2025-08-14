import { Contact } from "@/components/contact";
import { ActivityList } from "@/features/pricing/activity-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monika Habant - Cennik",
  description:
    "Sprawdź aktualny cennik usług Moniki Habant, obejmujący treningi indywidualne, grupowe, online oraz doradztwo żywieniowe.",
  keywords:
    "cennik treningów, trener personalny Ostróda, cena treningu personalnego, trening indywidualny, trening grupowy, trening online, doradztwo żywieniowe, analiza składu ciała, konsultacja dietetyczna, siłownia Ostróda, plan treningowy, jadłospis, psychodietetyka, zdrowy styl życia",
};

const PricingPage = () => (
  <main className="pt-[71px] md:pt-[95px] lg:pt-[200px]">
    <header className="bg-tertiaryGray p-[70px] text-center">
      <h1 className="text-primary text-[32px] md:text-[50px] font-bold font-oswald mb-[10px]">
        Cennik
      </h1>
    </header>
    <section
      className="mt-[35px]  md:mt-[70px] flex container  min-[1280px]:px-32 mx-auto flex-col"
      aria-labelledby="cennik-naglowek"
    >
      <h2 id="cennik-naglowek" className="sr-only">
        Lista dostępnych usług i ich ceny
      </h2>
      <ActivityList />
      <Contact showContactForm={false} imageUrl="/images/contact.webp" />
    </section>
  </main>
);

export default PricingPage;
