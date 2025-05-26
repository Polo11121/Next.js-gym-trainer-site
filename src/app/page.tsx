import { Hero } from "@/features/home/components/hero";
import { MyOffer } from "@/features/home/components/my-offer";
import { AboutMe } from "@/features/home/components/about-me";
import { WhyMe } from "@/features/home/components/why-me";
import { Opinions } from "@/features/home/components/opinions";
import { InstagramReels } from "@/features/home/components/isntagram-reels";
import { Contact } from "@/components/contact";
import { Metadata } from "next";
import { ScrollToTopButton } from "@/components/scroll-top-button";

export const metadata: Metadata = {
  title: "Monika Habant – Trener personalny Ostróda",
  description:
    "Trener personalny Monika Habant z Ostródy – profesjonalne treningi personalne, indywidualne podejście, metamorfozy sylwetki i zdrowy styl życia. Umów się na konsultację!",
  keywords: [
    "trener personalny Ostróda",
    "Monika Habant",
    "trening personalny Ostróda",
    "ćwiczenia na odchudzanie",
    "metamorfozy sylwetki",
    "treningi indywidualne Ostróda",
    "zdrowy styl życia",
    "kobieta trener personalny",
    "dieta i trening Ostróda",
  ],
};

const HomePage = () => (
  <main>
    <Hero />
    <AboutMe />
    <MyOffer />
    <WhyMe />
    <Opinions />
    <InstagramReels />
    <Contact />
    <ScrollToTopButton color="#c35379" />
  </main>
);

export default HomePage;
