"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { OpinionCard } from "./opinion-card";
import { useGetCurrentWidth } from "@/utils/use-get-current-width";
import "swiper/css";
import "swiper/css/pagination";

const OPINIONS = [
  {
    name: "Marta",
    opinion:
      "Monika to trenerka, która zmieniła moje podejście do treningów. Dzięki niej zrozumiałam, że regularność i odpowiednie wskazówki mogą prowadzić do szybkich efektów. Jej treningi są zróżnicowane, a każde ćwiczenie dokładnie wyjaśnione. Zawsze znajdzie sposób, aby zmotywować i wesprzeć mnie w chwilach zwątpienia. Dzięki niej odzyskałam radość z aktywności fizycznej.",
  },
  {
    name: "Ewa",
    opinion:
      "Treningi z Moniką to coś więcej niż tylko aktywność fizyczna – to cała filozofia zdrowego życia. Monika nie tylko pokazuje, jak prawidłowo wykonywać ćwiczenia, ale także edukuje na temat zdrowego stylu życia. Dzięki niej poprawiłam swoją kondycję i sylwetkę, a przy okazji nauczyłam się, jak dbać o siebie na co dzień. Jej podejście jest wyjątkowo holistyczne, co sprawia, że czuję się zaopiekowana na każdej płaszczyźnie.",
  },
  {
    name: "Justyna",
    opinion:
      "Jeśli szukasz trenerki, która zmotywuje Cię do działania i wesprze na każdym kroku – Monika jest idealnym wyborem. Jej wskazówki są zawsze trafne, a treningi efektywne. Dzięki niej osiągnęłam swoje cele szybciej, niż się spodziewałam. Monika to osoba, która nie tylko dba o formę fizyczną, ale także inspiruje do wprowadzania pozytywnych zmian w codziennym życiu.",
  },
  {
    name: "Natalia",
    opinion:
      "Monika to trenerka z prawdziwą pasją. Jej pozytywne nastawienie i energia są zaraźliwe! Dzięki niej zyskałam nie tylko lepszą formę, ale też ogromną dawkę motywacji. Każdy trening jest dostosowany do moich potrzeb i pełen profesjonalizmu. Dzięki niej pokochałam treningi, które wcześniej wydawały się trudne i nudne.",
  },
  {
    name: "Paulina",
    opinion:
      "Współpraca z Moniką to czysta przyjemność. Jestem pod ogromnym wrażeniem jej zaangażowania i wiedzy. Dzięki niej nie tylko poprawiłam swoją sylwetkę, ale także odzyskałam pewność siebie. Jej optymizm sprawia, że każdy trening staje się przyjemnością, a nie obowiązkiem.",
  },
  {
    name: "Zofia",
    opinion:
      "Monika to trenerka, która naprawdę rozumie swoich podopiecznych. Jej profesjonalizm, wiedza i zaangażowanie są na najwyższym poziomie. Dzięki niej osiągnęłam formę, o której marzyłam, i nauczyłam się, jak dbać o swoje zdrowie. Polecam ją z całego serca każdemu, kto szuka wsparcia w treningach. Jej empatia i troska o detale to cechy, które wyróżniają ją na tle innych.",
  },

  {
    name: "Katarzyna",
    opinion:
      "Z pełną świadomością polecam treningi Moniki, które są różnorodne i dostosowane do moich potrzeb – od treningów wydolnościowych typu cardio, przez wzmacniające typu HIIT, aż po ćwiczenia z obciążeniem. Monika potrafi świetnie zmotywować do działania i przyciąga swoją pozytywną energią. Jej cierpliwość i zaangażowanie sprawiają, że każdy trening to krok bliżej do wymarzonej formy.",
  },
  {
    name: "Anna",
    opinion:
      "Sama jestem trenerem personalnym i z czystym sumieniem przyznaję, że czerpię inspirację od Moniki. Ujmuje mnie jej ogromny zakres wiedzy i stale monitorowanie techniki ćwiczeń. W treningach Moniki nie ma miejsca na kontuzje, ponieważ każde ćwiczenie jest przez nią technicznie omówione i dostosowane do moich potrzeb. Dzięki jej wskazówkom czuję się pewnie i bezpiecznie na każdym etapie współpracy.",
  },
  {
    name: "Agnieszka",
    opinion:
      "Od kiedy zaczęłam ćwiczyć z Moniką, czuję się silniejsza i bardziej zmotywowana niż kiedykolwiek wcześniej. Jej plany treningowe są zawsze precyzyjnie dopasowane do moich potrzeb i możliwości. Dzięki Monice odkryłam, jak wiele radości może dawać regularny ruch. To trenerka, która naprawdę dba o swoich podopiecznych i zawsze służy pomocą. Jej pozytywne nastawienie działa jak dodatkowa motywacja.",
  },
  {
    name: "Oliwia",
    opinion:
      "Monika to trenerka, która potrafi wyciągnąć z każdego to, co najlepsze. Jej treningi są dobrze przemyślane i dostosowane do indywidualnych potrzeb. Dzięki niej nie tylko poprawiłam swoją formę, ale także zmieniłam swoje podejście do zdrowego stylu życia. Polecam ją każdemu, kto chce osiągnąć swoje cele w miłej atmosferze.",
  },
];

export const Opinions = () => {
  const currentWidth = useGetCurrentWidth();

  const getSlidesPerView = () => {
    if (currentWidth < 1030) {
      return 1;
    }
    if (currentWidth < 1540) {
      return 2;
    }
    return 3;
  };

  return (
    <section
      className="mt-[35px] md:mt-[70px]"
      aria-labelledby="opinie-naglowek"
    >
      <header className="text-center flex flex-col gap-[10px]">
        <h3
          id="opinie-naglowek"
          className="text-primary text-[42px] font-bold font-oswald"
        >
          OPINIE
        </h3>
        <p className="font-[15px]">Sprawdź, co mówią o mnie moi klienci</p>
      </header>
      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container mt-[50px] h-[450px]"
      >
        {OPINIONS.map(({ opinion, name }, index) => (
          <SwiperSlide className="w-full h-full" key={index}>
            <OpinionCard
              opinion={opinion}
              name={name}
              isDarkBackground={index % 2 !== 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
