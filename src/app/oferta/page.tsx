import { InfoSection } from "@/features/offer/components/info-section";

const AboutMePage = () => {
  return (
    <main className="pt-[200px] ">
      <header className="bg-tertiaryGray p-[70px] text-center">
        <h1 className="text-primary text-[50px] font-bold font-oswald mb-[10px]">
          OFERTA
        </h1>
        <p className="font-[15px] w-[800px] mx-auto">
          Na co dzień prowadzę
          <span className="text-primary font-semibold">
            treningi personalne i zajęcia fitness na terenie Ostródy
          </span>
          , a także współpracuję online z osobami z różnych zakątków Polski.
        </p>
      </header>
      <section className="flex flex-col" aria-labelledby="kontakt-naglowek">
        <InfoSection
          title="Treningi personalne"
          description="Treningi poprzedzone są wstępną konsultacją, celem dobrania planu i ćwiczeń idealnie do Ciebie. Treningi odbywają się albo na siłowni XTREME FITNESS OSTRÓDA (ul. Wojska Polskiego 6) albo z dojazdem do Ciebie. W sezonie letnim istnieje możliwość realizacji treningów na dworze!"
          listSections={[
            {
              title: "Treningi personalne są poprzedzone:",
              items: [
                "Wstępną konsultacją, podczas której dobieram plan treningowy i ćwiczenia dopasowane do Twoich potrzeb.",
                "Oceną Twojej formy oraz celów treningowych.",
              ],
            },
            {
              title: "Miejsce treningów:",
              items: [
                "Siłownia XTREME FITNESS OSTRÓDA (ul. Wojska Polskiego 6).",
                "Trening z dojazdem do Ciebie.",
                "W sezonie letnim istnieje możliwość treningów na świeżym powietrzu.",
              ],
            },
            {
              title: "Cennik:",
              items: [
                "Trening indywidualny: 100 zł",
                "Trening w parze (DUO): 160 zł / 80 zł za osobę",
                "Trening TRIO: 210 zł / 70 zł za osobę",
              ],
            },
            {
              title: "Pakiety treningowe:",
              items: [
                "Pakiet 4 treningów: -5% (do wykorzystania w ciągu 30 dni).",
                "Pakiet 8 treningów: -10% (do wykorzystania w ciągu 60 dni).",
                "Pakiet 12 treningów: -15% (do wykorzystania w ciągu 90 dni).",
              ],
            },
          ]}
          additionalInfo="Przy wyborze pakietów obowiązuje płatność z góry za wszystkie treningi. Rozpocznij swoją drogę do wymarzonej sylwetki już dziś!"
          rightPanelContent={{
            title: "Co obejmuje trening personalny:",
            items: [
              "Czas trwania 55 min",
              "Rozgrzewka i rozciąganie",
              "Indywidualny plan treningowy",
              "Wsparcie motywacyjne",
              "Wsparcie żywieniowo – suplementacyjne",
              "Analiza składu ciała i postępów",
              "Rozpiski treningowe do domu i na siłownię",
              "Interpretacja wyników badań laboratoryjnych",
              "Budowanie zdrowych nawyków, które pozwolą Ci utrzymać efekty",
              "Stały kontakt (od pn-pt w godzinach 8-20)",
            ],
            footer:
              "Zarówno treningi personalne i konsultacje odbywają się w My Fitness Place przy ulicy Zakopiańskiej 62 w Krakowie.",
          }}
        />
        <InfoSection
          isGrayBg
          title="Współpraca online"
          description="Prowadzenie online to idealne rozwiązanie dla osób, które chcą trenować w domu lub na siłowni, niezależnie od miejsca zamieszkania."
          listSections={[
            {
              title: "Opcje współpracy:",
              items: [
                "Plan treningowy – 160 zł",
                "Rozpisany na 12 tygodni, dostosowany do Twoich potrzeb.",
                "Ćwiczenia dopasowane do realizacji w domu lub na siłowni.",
                "Szczegółowy opis ćwiczeń wraz z załącznikami video, ilością serii i powtórzeń, skalą RIR oraz czasem przerw.",
                "Mini eBook dotyczący odżywiania.",
              ],
            },
            {
              title: "Prowadzenie treningowe  – 200 zł/miesiąc",
              items: [
                "Stała współpraca z indywidualnym planem treningowym.",
                "Analiza techniki i raporty co tydzień.",
                "Podsumowanie postępów w raportach miesięcznych oraz ewentualne modyfikacje planu.",
                "Stały kontakt na WhatsApp (pn-pt, godz. 8-20).",
              ],
            },
          ]}
          rightPanelContent={{
            title: "Dlaczego warto wybrać współpracę online?",
            items: [
              "Elastyczność – trenujesz, gdzie chcesz i kiedy chcesz.",
              "Indywidualne podejście – plan dostosowany do Twoich potrzeb.",
              "Stałe wsparcie trenera – pytania i wątpliwości rozwiązujemy razem.",
              "Skuteczność – regularne raporty i modyfikacje planu.",
              "Oszczędność czasu – wszystko, czego potrzebujesz, masz w jednym miejscu.",
            ],
            footer:
              "Współpraca online to wygodne i efektywne rozwiązanie dla każdego, kto chce osiągnąć swoje cele niezależnie od lokalizacji. Zrób pierwszy krok już dziś!",
          }}
        />{" "}
        <InfoSection
          title="Współpraca żywieniowa"
          description="Oferuję jadłospisy dopasowane do Twoich indywidualnych potrzeb, które pozwolą Ci zdrowo i skutecznie osiągnąć Twoje cele."
          listSections={[
            {
              title: "Jadłospis MINI – 140 zł/miesiąc",
              items: [
                "4 zestawy menu na miesiąc, dostosowane do Twoich preferencji i potrzeb.",
                "Wymienniki produktów, lista zakupów i mini eBook o odżywianiu.",
                "Kontrola postępów co 2 tygodnie.",
              ],
            },
            {
              title: "Jadłospis MAXI – 210 zł/miesiąc",
              items: [
                "7 zestawów menu na miesiąc.",
                "Dodatkowe materiały i raporty kontrolne.",
              ],
            },
          ]}
          additionalInfo="Zamów jadłospis dopasowany do Twoich potrzeb i rozpocznij swoją podróż do zdrowszego stylu życia!"
          rightPanelContent={{
            title: "Dlaczego warto wybrać współpracę żywieniową?",
            items: [
              "Zbilansowane menu – idealne dla Twojego stylu życia.",
              "Proste przepisy – smaczne, zdrowe i łatwe do przygotowania.",
              "Elastyczność – wymienniki produktów dla większej swobody.",
              "Wsparcie w każdej chwili – kontakt i kontrola postępów.",
              "Efekty – zdrowe nawyki, które zostaną z Tobą na dłużej.",
            ],
            footer:
              "Dzięki indywidualnie przygotowanym jadłospisom masz pewność, że Twoja dieta jest dopasowana do Twoich celów i potrzeb. Zacznij już dziś i zobacz, jak smaczna może być zmiana!",
          }}
        />
        <InfoSection
          isGrayBg
          title="Dodatkowe usługi"
          description="Uzupełnij swoją współpracę o dodatkowe usługi, które wspomogą Twoje postępy i poprawią samopoczucie."
          listSections={[
            {
              title: "Drenaż limfatyczny",
              items: [
                "Profesjonalny masaż urządzeniem najwyższej klasy.",
                "Wspomaga regenerację mięśni, redukcję obrzęków i cellulitu.",
              ],
            },
            {
              title: "Analiza składu ciała",
              items: [
                "Wykonana za pomocą analizatora TANITA.",
                "Pozwala szczegółowo określić skład Twojego ciała.",
              ],
            },
            {
              title: "BONUS",
              items: [
                "Dla podopiecznych, którzy współpracują ze mną przez co najmniej 3 miesiące – zniżka -20% na wybrane masaże u mgr fizjoterapii Jędrzeja Żebrowskiego.",
              ],
            },
          ]}
          additionalInfo="Rozpocznij swoją drogę do zdrowia i wymarzonej sylwetki już dziś! 💪"
          rightPanelContent={{
            title: "Korzyści z dodatkowych usług:",
            items: [
              "Poprawa regeneracji – idealne wsparcie po intensywnych treningach.",
              "Zdrowy wygląd – redukcja cellulitu i obrzęków dzięki drenażowi limfatycznemu.",
              "Precyzyjna analiza – szczegółowy skład ciała dzięki analizatorowi TANITA.",
              "Zniżki dla stałych podopiecznych – dodatkowe korzyści dla lojalnych klientów.",
              "Kompleksowe podejście – wspomaganie zdrowia i samopoczucia w każdej sytuacji.",
            ],
            footer:
              "Dodaj te usługi do swojej współpracy i zadbaj o swoje ciało na najwyższym poziomie. To małe kroki, które robią wielką różnicę! Zacznij już dziś!",
          }}
        />
      </section>
    </main>
  );
};

export default AboutMePage;
