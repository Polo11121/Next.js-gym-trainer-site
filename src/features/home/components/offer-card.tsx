"use client";

import { NavigationButton } from "@/components/navigation-button";
import { useGetCurrentWidth } from "@/utils/use-get-current-width";
import Image from "next/image";

type OfferCardProps = {
  title: string;
  type: string;
  imgSrc: string;
  imgAlt: string;
};

export const OfferCard = ({ title, type, imgSrc, imgAlt }: OfferCardProps) => {
  const currentWidth = useGetCurrentWidth();
  return (
    <article
      className="bg-secondaryGray w-full max-w-[640px] h-[310px] rounded-sm drop-shadow-sm p-[35px] md:p-[70px] group overflow-hidden relative"
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
    >
      <header>
        <p className="text-[15px] mb-[10px] text-primaryGray">{type}</p>
        <h3
          className=" text-[20px] md:text-[30px] font-semibold mb-[40px] z-50"
          id={title.replace(/\s+/g, "-").toLowerCase()}
        >
          {title}
        </h3>
      </header>
      <NavigationButton
        href={`/oferta#${title.replace(/\s+/g, "-").toLowerCase()}`}
        ariaLabel={`Przejdź do strony: ${title}`}
        variant="ghost"
      >
        ZOBACZ WIĘCEJ
      </NavigationButton>
      <Image
        className="absolute bottom-0 right-0 group-hover:scale-110 transition duration-300 delay-75  -z-50"
        alt={imgAlt}
        width={currentWidth < 768 ? 180 : 200}
        height={currentWidth < 768 ? 180 : 200}
        src={imgSrc}
        priority
      />
    </article>
  );
};
