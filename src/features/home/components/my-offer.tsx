import { OfferCard } from "@/features/home/components/offer-card";

export const MyOffer = () => {
  return (
    <section className="flex flex-col gap-[30px] mt-[70px] container mx-auto px-32">
      <div className="flex flex-row gap-[30px]">
        <OfferCard
          title="Treningi personalne"
          type="Na żywo"
          imgSrc="/images/pobrane (1).png"
          imgAlt="Treningi personalne"
          buttonText="ZOBACZ WIĘCEJ"
          buttonHref="/treningi-personalne"
        />
        <OfferCard
          title="Współpraca online"
          type="Online"
          imgSrc="/images/aaaa.png"
          imgAlt="Współpraca online"
          buttonText="ZOBACZ WIĘCEJ"
          buttonHref="/wspolpraca-online"
        />
      </div>
      <div className="flex flex-row gap-[30px]">
        <OfferCard
          title="Plany treningowe"
          type="Online"
          imgSrc="/images/pobrane.png"
          imgAlt="Plany treningowe"
          buttonText="ZOBACZ WIĘCEJ"
          buttonHref="/plany-treningowe"
        />
        <OfferCard
          title="Treningi w parze"
          type="Na żywo"
          imgSrc="/images/monix-jedras.png"
          imgAlt="Treningi w parze"
          buttonText="ZOBACZ WIĘCEJ"
          buttonHref="/treningi-w-parze"
        />
      </div>
    </section>
  );
};
