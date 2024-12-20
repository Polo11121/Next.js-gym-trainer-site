import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/button";
import { cn } from "@/utils/cn";
import Link from "next/link";

type ContactProps = {
  showContactForm?: boolean;
};

export const Contact = ({ showContactForm = true }: ContactProps) => (
  <section
    className="my-[70px] flex container mx-auto"
    aria-labelledby="kontakt-naglowek"
  >
    <div
      className={cn(
        "flex flex-col flex-[0.5] gap-[50px]",
        showContactForm && "py-[15px] px-[20px] flex-1"
      )}
    >
      <header className="flex flex-col gap-[40px] ">
        <h3
          id="kontakt-naglowek"
          className="text-primary text-[42px] font-bold font-oswald"
        >
          Skontaktuj się ze mną
        </h3>
        <p className="font-[15px]">
          Masz jakieś pytania? Napisz lub zadzwoń do mnie! Chętnie odpowiem na
          Twoje wszystkie pytania. Znajdziesz mnie też na Instagramie i
          Facebooku pod nickiem: Monika Habant.
        </p>
      </header>
      <div className="flex flex-col gap-[20px] text-[18px] font-oswald cursor-pointer">
        <div className="flex gap-[20px] items-center">
          <BsTelephone size={40} className="text-primary" />
          <span>+48 123 456 789</span>
        </div>
        <Link
          href="/"
          className="flex gap-[20px] items-center cursor-pointer group"
        >
          <MdOutlineMailOutline size={42} className="text-primary" />
          <span className="group-hover:text-primary group-focus:text-primary">
            twojastara123@gmail.com
          </span>
        </Link>
        <Link
          href="https://www.instagram.com/monika_habant"
          className="flex gap-[20px] items-center font-bold cursor-pointer group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={42} className="text-primary" />
          <span className="group-hover:text-primary group-focus:text-primary">
            INSTAGRAM
          </span>
        </Link>
        <Link
          href="https://www.facebook.com/monika.habant"
          className="flex gap-[20px] items-center font-bold cursor-pointer group	"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={42} className="text-primary" />
          <span className="group-hover:text-primary group-focus:text-primary">
            FACEBOOK
          </span>
        </Link>
      </div>
    </div>
    {showContactForm && (
      <form className="flex flex-col flex-1 py-[15px] px-[20px] font-oswald gap-[22.5px]">
        <label htmlFor="">
          Imię i nazwisko
          <input
            type="text"
            className="w-full h-[50px] px-[15px]  border-2 border-secondaryGray focus:outline-primary"
          />
        </label>
        <label htmlFor="">
          Adres e-mail
          <input
            type="text"
            className="w-full h-[50px] px-[15px]  border-2 border-secondaryGray focus:outline-primary"
          />
        </label>
        <label htmlFor="">
          Numer telefonu
          <input
            type="text"
            className="w-full h-[50px] px-[15px]  border-2 border-secondaryGray focus:outline-primary"
          />
        </label>
        <label htmlFor="">
          Twoja wiadomość (opcjonalnie)
          <textarea
            cols={50}
            rows={10}
            className="w-full p-[15px]  border-2 border-secondaryGray focus:outline-primary resize-none"
          />
        </label>
        <Button ariaLabel="Wyślij wiadomość">Wyślij wiadomość</Button>
      </form>
    )}
  </section>
);
