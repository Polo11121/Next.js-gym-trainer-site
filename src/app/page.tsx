import { Hero } from "@/features/home/components/hero";
import { MyOffer } from "@/features/home/components/my-offer";
import { AboutMe } from "@/features/home/components/about-me";
import { WhyMe } from "@/features/home/components/why-me";
import { Opinions } from "@/features/home/components/opinions";
import { InstagramReels } from "@/features/home/components/isntagram-reels";
import { Contact } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monika Habant - Strona Główna",
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
  </main>
);

export default HomePage;
