import { CgGym } from "react-icons/cg";
import { BiSolidHappyAlt } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";

export const WhyMe = () => {
  return (
    <section className="mt-[35px] lg:mt-[70px] bg-black text-white py-[65px] lg:py-[130px]">
      <div className="container items-center px-32 flex flex-col lg:flex-row mx-auto gap-[80px]">
        <article
          className="flex flex-col items-center text-center max-w-[450px]"
          aria-labelledby="doswiadczenie-naglowek"
        >
          <header className="flex flex-col items-center justify-center">
            <CgGym size={80} className="text-primary" aria-hidden="true" />
            <h3
              id="doswiadczenie-naglowek"
              className="text-[23px] font-semibold mb-[25px]"
            >
              Doświadczenie
            </h3>
          </header>
          <p className="text-[15px] hidden lg:block">
            Moja nieustanna praca jako trener i ciągły rozwój pozwalają mi
            zdobywać wiedzę, dzięki której skutecznie pomagam zarówno osobom
            początkującym, jak i zaawansowanym w realizacji ich celów.
          </p>
        </article>
        <article
          className="flex flex-col items-center text-center max-w-[450px]"
          aria-labelledby="zadowolenie-naglowek"
        >
          <header className="flex flex-col items-center justify-center">
            <BiSolidHappyAlt
              size={80}
              className="text-primary"
              aria-hidden="true"
            />
            <h3
              id="zadowolenie-naglowek"
              className="text-[23px] font-semibold mb-[25px]"
            >
              Zadowolenie
            </h3>
          </header>
          <p className="text-[15px] hidden lg:block">
            Moim priorytetem jest Twoje zadowolenie – zapewniam indywidualne
            podejście, motywację i wsparcie na każdym etapie treningu, abyś
            czuła się pewnie i spełniona.
          </p>
        </article>
        <article
          className="flex flex-col items-center text-center max-w-[450px]"
          aria-labelledby="szybkie-efekty-naglowek"
        >
          <header className="flex flex-col items-center justify-center">
            <IoIosTime size={80} className="text-primary" aria-hidden="true" />
            <h3
              id="szybkie-efekty-naglowek"
              className="text-[23px] font-semibold mb-[25px]"
            >
              Szybkie efekty
            </h3>
          </header>
          <p className="text-[15px] hidden lg:block">
            Efekty, które zobaczysz szybciej niż się spodziewasz – precyzyjnie
            dobrane plany treningowe pozwolą Ci osiągnąć wymarzoną formę w
            najkrótszym możliwym czasie.
          </p>
        </article>
      </div>
    </section>
  );
};
