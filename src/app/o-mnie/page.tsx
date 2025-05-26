import { NavigationButton } from "@/components/navigation-button";
import { SocialMedia } from "@/components/social-media";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monika Habant - O mnie",
  description:
    "Poznaj Monikę Habant – trenerkę personalną i dietetyczkę. Dowiedz się więcej o jej pasji do sportu, zdrowego stylu życia i podejściu do treningów.",
};

const AboutMePage = () => (
  <main
    className="pt-[71px] md:pt-[95px] lg:pt-[200px] mb-[35px] md:mb-[70px]"
    lang="pl"
  >
    <header className="bg-tertiaryGray p-[35px] md:p-[70px] text-center">
      <h1 className="text-primary text-[32px] md:text-[50px] font-bold font-oswald mb-[10px]">
        O mnie
      </h1>
      <p className="text-[15px] max-w-[800px] mx-auto">
        Cieszę się, że tu jesteś!{" "}
        <strong className="text-primary font-semibold">
          To oznacza, że masz zamiar wziąć zdrowie w swoje ręce.
        </strong>{" "}
        Wierzę, że każda mała zmiana to krok ku lepszemu, a ja będę z Tobą na
        każdym etapie tej drogi, wspierając i motywując Cię do działania.
      </p>
    </header>
    <section
      className="mt-[35px] xl:mt-[70px]  flex container  mx-auto"
      aria-labelledby="about-me-heading"
      role="region"
    >
      <h2 id="about-me-heading" className="sr-only">
        Informacje o Monice Habant
      </h2>
      <div className="flex flex-col-reverse xl:flex-row gap-10">
        <div className="relative w-full h-[600px] md:h-[900px] xl:h-auto ">
          <Image
            alt="Monika Habant - trener personalny"
            src="/images/about-me.jpeg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="px-6 md:px-0 md:py-[50px] w-full">
          <h2 className="text-[32px] md:text-[45px] font-bold font-oswald flex flex-col mb-[21px]">
            Nazywam się
            <span className="text-primary"> Monika Habant</span>
          </h2>
          <div className="flex flex-col gap-[21px] text-[15px]">
            <p>
              <strong>
                Jestem trenerem personalnym oraz trenerem dzieci i młodzieży w
                klubie kolarskim Ostróda Sport Team.
              </strong>{" "}
              Ukończyłam studia licencjackie na kierunku dietetyka oraz studia
              podyplomowe z psychodietetyki.{" "}
              <strong>
                Kurs trenera personalnego, instruktora siłowni i wiele innych
                specjalistycznych szkoleń zrealizowałam w ProfiFitness School.
              </strong>{" "}
              Stale poszerzam swoją wiedzę, uczestnicząc w kursach i
              szkoleniach, a także ucząc się samodzielnie w domu.
            </p>
            <p>
              <strong>Sport zawsze był obecny w moim życiu.</strong> Moje
              początki sięgają czasów, gdy razem z siostrą ćwiczyłyśmy z
              filmikami z YouTube, a potem eksperymentowałyśmy z dietą, jedząc
              np. lody z kalafiora i odżywki białkowej, bo takie były modne.{" "}
              <strong>
                Siłownia to miejsce, do którego nie musiałam się przekonywać –
                to była miłość od pierwszego ćwiczenia.
              </strong>
            </p>
            <p>
              W pracy trenera <strong>stawiam na indywidualne podejście</strong>{" "}
              do każdego podopiecznego. Dopasowuję treningi do ich potrzeb i
              możliwości.{" "}
              <strong>
                Moja pasja do zdrowego stylu życia pomaga mi motywować innych
              </strong>{" "}
              do osiągania swoich celów. Dbam również o dobrą atmosferę na
              treningach – prędzej czy później zostajemy „gym bestie”!
            </p>
            <p>
              Z czasem moja miłość do treningów przerodziła się w{" "}
              <strong>chęć dzielenia się wiedzą z innymi.</strong> Potrafiłam
              spędzać po kilka godzin na sali treningowej, ucząc się ćwiczeń z
              instruktaży w telefonie. Kiedy pojawił się pomysł, by zostać
              trenerką, zaangażowałam się w to całkowicie. Na kursie trenerskim{" "}
              <strong>byłam jedną z tych największych prymusek</strong> – zawsze
              przygotowana i pełna zapału do nauki.
            </p>
            <p>
              Poza treningami <strong>uwielbiam przygotowywać makarony</strong>{" "}
              i spędzać czas na rowerze. Moje podejście łączy wiedzę, praktykę i
              pasję,{" "}
              <strong>
                dzięki czemu mogę skutecznie wspierać swoich podopiecznych w ich
                drodze do celu.
              </strong>
            </p>
            <div className="flex items-center gap-2">
              <p id="social-media-heading">Znajdziesz mnie na:</p>
              <div
                className="flex gap-2"
                aria-labelledby="social-media-heading"
              >
                <SocialMedia size={18} color="black" />
              </div>
            </div>
            <NavigationButton
              href="/oferta"
              ariaLabel="Przejdź do oferty Moniki Habant"
              className="text-[16px] mx-auto md:mx-0"
            >
              Zapoznaj się z ofertą
            </NavigationButton>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default AboutMePage;
