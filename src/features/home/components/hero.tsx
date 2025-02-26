import { NavigationButton } from "@/components/navigation-button";
import { ScrollDownButton } from "@/components/scroll-down-button";
import { SocialMedia } from "@/components/social-media";

export const Hero = () => (
  <section
    id="glowna-sekcja"
    className="bg-hero-pattern h-screen bg-cover bg-center pt-[100px] md:pt-[200px] flex flex-col"
    aria-labelledby="glowna-sekcja-naglowek"
  >
    <div className="flex flex-col md:flex-row justify-between flex-1">
      <aside
        className="flex flex-col px-[30px] md:px-10 gap-16 md:mt-[80px]"
        role="navigation"
        aria-label="Linki do social media"
      >
        <SocialMedia size={48} />
      </aside>
      <div className="flex flex-col justify-center self-center gap-[10px]">
        <h1
          className="flex flex-col text-white text-[28px] md:text-[35px] font-bold px-5 md:px-10 font-oswald drop-shadow-lg text-center"
          id="glowna-sekcja-naglowek"
        >
          <span className="text-primary drop-shadow-lg">
            MAŁE ZMIANY POWTARZANE CODZIENNIE,
          </span>
          <span className="drop-shadow-lg">PRZYNOSZĄ WIELKIE EFEKTY</span>
        </h1>
        <NavigationButton
          ariaLabel="Przejdź do oferty"
          href="/oferta"
          variant="secondary"
        >
          WPROWADŹMY JE RAZEM
        </NavigationButton>
      </div>
    </div>
    <ScrollDownButton targetId="o-mnie" />
  </section>
);
