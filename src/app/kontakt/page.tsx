import { Contact } from "@/components/contact";
import { Metadata } from "next";
import Map from "@/components/map-client";

export const metadata: Metadata = {
  title: "Monika Habant - Kontakt",
  description:
    "Skontaktuj się z Moniką Habant - numer telefonu, e-mail oraz media społecznościowe.",
};

const ContactPage = () => (
  <main className="pt-[71px] md:pt-[95px] lg:pt-[200px]">
    <header className="bg-tertiaryGray p-[35px] text-center">
      <h1 className="text-primary text-[32px] md:text-[50px] font-bold font-oswald mb-[10px]">
        Kontakt
      </h1>
      <p className="text-[15px]">
        <span className="text-primary font-semibold">
          Potrzebujesz pomocy?{" "}
        </span>
        Chętnie odpowiem na Twoje wszystkie pytania.
      </p>
    </header>
    <Contact />
    <Map />
  </main>
);

export default ContactPage;
