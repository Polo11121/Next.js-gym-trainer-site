"use client";

import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/button";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from "@/actions/sendEmail"; // Import Server Action

type ContactProps = {
  showContactForm?: boolean;
  imageUrl?: string;
};

export const Contact = ({ showContactForm = true, imageUrl }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Wysyłanie...");

    const response = await sendEmail(formData);

    if (response.success) {
      setStatus("Wiadomość wysłana pomyślnie!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset formularza
    } else {
      setStatus("Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <section
      className="my-[35px] md:my-[70px] flex container mx-auto md:flex-row flex-col gap-12 px-6"
      aria-labelledby="contact-heading"
    >
      <article
        className={cn(
          "flex flex-col gap-[50px] flex-1",
          showContactForm && "py-[15px] px-[20px] flex-1"
        )}
      >
        <header className="flex flex-col gap-[40px]">
          <h1
            id="contact-heading"
            className="text-primary text-[30px] md:text-[40px] font-bold font-oswald"
          >
            Skontaktuj się ze mną
          </h1>
          <p className="text-[15px]">
            Masz jakieś pytania? Napisz lub zadzwoń do mnie! Chętnie odpowiem na
            Twoje wszystkie pytania. Znajdziesz mnie też na Instagramie i
            Facebooku pod nickiem: <strong>Monika Habant</strong>.
          </p>
        </header>
        <div className="flex flex-col gap-[20px] text-[18px] font-oswald">
          <div className="flex gap-[20px] items-center">
            <BsTelephone
              size={40}
              className="text-primary"
              aria-hidden="true"
            />
            <a
              href="tel:+48783618532"
              className="hover:underline focus:underline"
              aria-label="Zadzwoń do mnie na numer +48 783 618 532"
            >
              +48 783 618 532
            </a>
          </div>
          <div className="flex gap-[20px] items-center">
            <MdOutlineMailOutline
              size={42}
              className="text-primary"
              aria-hidden="true"
            />
            <a
              href="mailto:habantmonika@gmail.com"
              className="hover:underline focus:underline"
              aria-label="Wyślij e-mail na adres habantmonika@gmail.com"
            >
              habantmonika@gmail.com
            </a>
          </div>
          <Link
            href="https://www.instagram.com/monika_habant"
            className="flex gap-[20px] items-center font-bold cursor-pointer group w-fit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Przejdź do mojego profilu na Instagramie"
          >
            <FaInstagram
              size={42}
              className="text-primary"
              aria-hidden="true"
            />
            <span className="group-hover:text-primary group-focus:text-primary">
              INSTAGRAM
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/monika.habant"
            className="flex gap-[20px] items-center font-bold cursor-pointer group w-fit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Przejdź do mojego profilu na Facebooku"
          >
            <FaFacebook size={42} className="text-primary" aria-hidden="true" />
            <span className="group-hover:text-primary group-focus:text-primary">
              FACEBOOK
            </span>
          </Link>
        </div>
      </article>
      {imageUrl && (
        <div className="relative w-[90%] sm:w-3/4 h-[600px] sm:h-[700px] md:w-[40%] mx-auto">
          <Image
            alt="Monika Habant - trener personalny"
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}
      {showContactForm && (
        <form
          className="flex flex-col flex-1 py-[15px] px-[20px] font-oswald gap-[22.5px]"
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-heading"
        >
          <fieldset className="border-none">
            <legend id="contact-form-heading" className="sr-only">
              Formularz kontaktowy
            </legend>
            <label htmlFor="name">
              Imię i nazwisko
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full h-[50px] px-[15px] border-2 border-secondaryGray focus:outline-primary mb-3"
              />
            </label>
            <label htmlFor="email">
              Adres e-mail
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full h-[50px] px-[15px] border-2 border-secondaryGray focus:outline-primary mb-3"
              />
            </label>
            <label htmlFor="message">
              Twoja wiadomość (opcjonalnie)
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-[15px] border-2 border-secondaryGray focus:outline-primary resize-none"
              />
            </label>
            <label
              htmlFor="privacy-policy"
              className="text-[13px] flex items-start gap-2 mb-6"
            >
              <input
                id="privacy-policy"
                type="checkbox"
                required
                className="mt-1 hover:cursor-pointer"
              />
              <span>
                Administratorem danych osobowych jest Monika Habant prowadząca
                działalność gospodarczą pod nazwą Monika Habant - Trener
                Personalny i Dietetyk, z siedzibą ul. Długa 8, 14-200 Iława,
                NIP: 7441839043, REGON: 540434022. Dane osobowe będą
                przetwarzane w celu obsługi zapytania przesłanego przez
                formularz kontaktowy. Więcej informacji o przetwarzaniu danych
                osobowych, w tym o przysługujących Państwu prawach, znajduje się
                w{" "}
                <a
                  href="/polityka-prywatnosci"
                  className="underline text-primary font-bold"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Przejdź do Polityki Prywatności"
                >
                  Polityce Prywatności
                </a>
                .
              </span>
            </label>
            <div className="flex justify-center md:justify-start">
              <Button ariaLabel="Wyślij wiadomość" type="submit">
                Wyślij wiadomość
              </Button>
            </div>
            {status && <p className="mt-2 text-center">{status}</p>}
          </fieldset>
        </form>
      )}
    </section>
  );
};
