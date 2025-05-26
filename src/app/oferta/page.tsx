import { Contact } from "@/components/contact";
import { InfoSection } from "@/features/offer/components/info-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monika Habant - Oferta",
  description:
    "Sprawdź ofertę Moniki Habant: treningi personalne, współpraca online, doradztwo żywieniowe i dodatkowe usługi. Znajdź idealne rozwiązanie dla siebie!",
};

const OfferPage = () => (
  <main className="pt-[71px] md:pt-[95px] lg:pt-[200px]">
    <header className="bg-tertiaryGray p-[35px] md:p-[70px] text-center">
      <h1 className="text-primary text-[32px] md:text-[50px] font-bold font-oswald mb-[10px]">
        Oferta
      </h1>
      <p className="text-[15px] max-w-[800px] mx-auto">
        Oferuję kompleksowe wsparcie w zakresie treningów i diety – zarówno
        stacjonarnie, jak i online.{" "}
        <span className="text-primary font-semibold">
          Niezależnie od tego jaki jest Twój cel - znajdziesz tu idealną ofertę
          dopasowaną do Twoich potrzeb.
        </span>{" "}
        Wybierz opcję, która najbardziej Ci odpowiada, a ja pomogę Ci osiągnąć
        sukces.
      </p>
    </header>
    <section className="flex flex-col">
      <InfoSection
        title="Treningi personalne"
        description="Wybór treningów personalnych to inwestycja w Twoje zdrowie, formę i samopoczucie. Dzięki indywidualnemu podejściu, każda sesja jest dostosowana do Twoich celów, poziomu zaawansowania i możliwości. Współpracując ze mną, masz pewność, że otrzymasz pełne wsparcie – od motywacji po poprawną technikę i skuteczne planowanie treningów. To nie tylko ćwiczenia, to droga do trwałych efektów i poprawy jakości życia.
"
        listSections={[
          {
            title: "Miejsce treningów:",
            items: [
              "Siłownia XTREME FITNESS OSTRÓDA (ul. Wojska Polskiego 6).",
              "Prywatne studio treningowe (ul. Czarnieckiego 15A/II).",
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
        rightPanelContent={[
          {
            title: "ZANIM ZACZNIEMY:",
            items: [
              "Wstępna konsultacja",
              "Analiza funkcjonalna",
              "Analiza składu ciała",
            ],
          },
          {
            title: "TRENING PERSONALNY:",
            items: [
              "Czas trwania 60 minut",
              "Indywidualna rozgrzewka i cool down",
              "Plan treningowy dostosowany do Twoich potrzeb",
              "Analiza techniki",
              "Dodatkowe rozpiski treningowe do domu lub na siłownię",
              "Wsparcie żywieniowo-suplementacyjne",
              "Monitorowanie postępów",
              "Możliwość uzupełnienia współpracy o usługe drenażu limfatycznego (informacje w zakładce Dodatkowe usługi)",
            ],
            footer:
              "Treningi personalne mogą odbywać się na siłowni, w prywatnym studiu treningowym, domu lub na świeżym powietrzu. Siłownia, na której prowadzę treningi, to XTREME FITNESS OSTRÓDA.",
          },
        ]}
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
              "Ćwiczenia ustalane według Twoich preferencji, do realizacji w domu lub na siłowni.",
              "Szczegółowy opis ćwiczeń wraz z załącznikami video, ilością serii i powtórzeń, skalą RIR oraz czasem przerw.",
              "Mini eBook dotyczący odżywiania.",
            ],
          },
          {
            title: "Prowadzenie treningowe  – 200 zł/miesiąc",
            items: [
              "Stała, odnawialna współpraca z indywidualnym planem treningowym (opłata miesięczna).",
              "Analiza techniki i raporty co tydzień.",
              "Podsumowanie postępów w raportach miesięcznych oraz ewentualne modyfikacje planu.",
              "Stały kontakt (pn-pt, godz. 8-20).",
            ],
          },
        ]}
        rightPanelContent={[
          {
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
          },
        ]}
      />
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
        rightPanelContent={[
          {
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
          },
        ]}
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
              " Poprawia elastyczność skóry, wspomaga jej nawilżenie i odżywienie.",
              "Pomaga w rozluźnianiu mięśni i zmniejszeniu bólu spowodowanego napięciem mięśniowym.",
              "Regularny masaż poprawia krążenie, co skutkuje zdrowszym wyglądem skóry.",
              " Ma działanie relaksujące – pomaga zmniejszyć poziom stresu i poprawia jakość snu.",
              "Wspomaga redukcję obrzęków i zatrzymywania wody w organizmie.",
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
        rightPanelContent={[
          {
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
          },
        ]}
      />
    </section>
    <Contact showContactForm={false} imageUrl="/images/oferta.jpeg" />
  </main>
);

export default OfferPage;
