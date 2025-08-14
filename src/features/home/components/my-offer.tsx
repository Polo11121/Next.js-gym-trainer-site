import { OfferCard } from "@/features/home/components/offer-card";

export const MyOffer = () => {
  return (
    <section className="flex flex-col gap-[30px] mt-[60px] xl:mt-[70px] container mx-auto xl:px-32">
      <div className="flex flex-col items-center lg:flex-row gap-[30px]">
        <OfferCard
          title="Treningi personalne"
          type="Na żywo"
          imgSrc="/images/treningi-personalne.webp"
          imgAlt="Treningi personalne"
        />
        <OfferCard
          title="Współpraca online"
          type="Online"
          imgSrc="/images/wspolpraca-online.webp"
          imgAlt="Współpraca online"
        />
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-[30px]">
        <OfferCard
          title="Współpraca żywieniowa"
          type="Online"
          imgSrc="/images/wspolpraca-zywieniowa.webp"
          imgAlt="Współpraca żywieniowa"
        />
        <OfferCard
          title="Dodatkowe usługi"
          type="Na żywo"
          imgSrc="/images/dodatkowe-uslugi.webp"
          imgAlt="Dodatkowe usługi"
        />
      </div>
    </section>
  );
};
