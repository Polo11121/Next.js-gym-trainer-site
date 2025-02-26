import { Reel } from "@/features/home/components/reel";

export const InstagramReels = () => (
  <section
    className="bg-black mt-[35px] lg:mt-[70px] py-[65px] lg:py-[130px]"
    aria-labelledby="moj-instagram-naglowek"
  >
    <header>
      <h2
        id="moj-instagram-naglowek"
        className="text-white text-[32px] lg:text-[42px] font-bold font-oswald text-center"
      >
        ŚLEDŹ MNIE NA INSTAGRAMIE
      </h2>
      <h2 className="text-primary text-[32px] lg:text-[42px] font-bold font-oswald text-center">
        @monika_habant
      </h2>
    </header>
    <div
      className="mx-auto mt-[25px] lg:mt-[50px] flex flex-col lg:flex-row gap-10 items-center justify-center cursor-pointer"
      aria-label="Reels na Instagramie"
    >
      <Reel
        imageSrc="/images/insta-1.jpg"
        altText="Reel z treningu personalnego"
        href="https://www.instagram.com/p/DCOfA5bMMj6/"
      />
      <Reel
        imageSrc="/images/insta-2.jpg"
        altText="Reel z sesji motywacyjnej"
        href="https://www.instagram.com/p/DB8MSZIM5bU/"
      />
      <Reel
        imageSrc="/images/insta-3.jpg"
        altText="Reel z przygotowywania posiłków"
        href="https://www.instagram.com/p/DDEVW_eMh_b/"
      />
      <Reel
        imageSrc="/images/insta-4.jpg"
        altText="Reel z sesji treningowej na świeżym powietrzu"
        href="https://www.instagram.com/p/DDW8w95sI2E/"
      />
    </div>
  </section>
);
