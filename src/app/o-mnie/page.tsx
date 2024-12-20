import { NavigationButton } from "@/components/navigation-button";
import { SocialMedia } from "@/components/social-media";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monika Habant - O mnie",
};

const AboutMePage = () => (
  <main className="pt-[200px] mb-[70px]">
    <header className="bg-tertiaryGray p-[70px] text-center">
      <h1 className="text-primary text-[50px] font-bold font-oswald mb-[10px]">
        O MNIE
      </h1>
      <p className="font-[15px] w-[800px] mx-auto">
        Cieszę się, że tu jesteś, bo to oznacza, że{" "}
        <span className="text-primary font-semibold">
          właśnie wykonałaś pierwszy krok do swojej zmiany
        </span>{" "}
        i chcesz się oddać w ręce specjalisty, któremu można zaufać.
      </p>
    </header>
    <section
      className="mt-[70px] flex container px-32 mx-auto"
      aria-labelledby="kontakt-naglowek"
    >
      <div className="flex flex-row gap-20">
        <Image
          alt="Zdjęcie Monika"
          src="/images/monix.jpg"
          width={615}
          height={900}
        />{" "}
        <div className="py-[50px] px-[20px]">
          <h2 className="text-[45px] font-bold font-oswald flex flex-col mb-[40px]">
            Nazywam się
            <span className="text-primary"> Monika Habant</span>
          </h2>
          <div className="flex flex-col gap-[21px]">
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
  </main>
);

export default AboutMePage;
