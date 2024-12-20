import { NavigationButton } from "@/components/navigation-button";
import { SocialMedia } from "@/components/social-media";
import Image from "next/image";

export const AboutMe = () => (
  <section
    id="o-mnie"
    className="container mx-auto px-32 flex flex-col gap-[72px]"
    aria-labelledby="naglowek-o-mnie"
  >
    <div className="flex flex-row gap-20">
      <Image
        alt="Zdjęcie Monika"
        src="/images/monix.jpg"
        width={615}
        height={800}
      />
      <div className="flex flex-col gap-10 py-[120px]">
        <h2
          className="text-primary font-oswald font-semibold text-[36px]"
          id="naglowek-o-mnie"
        >
          Poznaj mnie
        </h2>
        <div className="flex flex-col gap-5 text-[18px] font-normal">
          <p>
            Czesć! Mam na imię Monika. Jestem trenerem personalnym i trenerem
            dzieci i młodzieży w klubie kolarskim Ostróda Sport Team.Ukończyłam
            studia licencjackie na kierunku dietetyka i studia podyplomowe na
            kierunku psychodietetyka. Kurs trenera personalnego, instruktora
            siłowni oraz wiele innych kursów specjalistycznych zrealizowałam
            głównie w szkole ProfiFitness School.
          </p>
          <p>
            Stale poszerzam swoją wiedzę na kursach i szkoleniach, a także
            samodzielnie w domu. Prywatnie lubię przygotowywać makarony i dużo
            jeżdżę na rowerze! Wnoszę do pracy pasję, wiedzę i praktyczne
            doświadczenie. Umiem dostosować treningi do indywidualnych potrzeb
            każdego podopiecznego.
          </p>
          <p>
            To, że jestem pasjonatką zdrowego stylu życia pomaga mi motywować
            innych do osiągania swoich celów. Zawsze dbam o dobrą atmosferę na
            treningu, przez co prędzej czy później zostajemy „gym bestie” :)
          </p>
          <div className="flex items-center gap-2">
            <p>Znajdziesz mnie na:</p>
            <div className="flex gap-2">
              <SocialMedia size={18} color="black" />
            </div>
          </div>
          <NavigationButton href="/oferta" ariaLabel="Zapoznaj się z ofertą">
            Zapoznaj się z ofertą
          </NavigationButton>
        </div>
      </div>
    </div>
  </section>
);
