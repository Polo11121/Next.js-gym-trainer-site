import { Contact } from "@/components/contact";
import { Map } from "@/components/map";

const ContactPage = () => (
  <main className="pt-[200px] ">
    <header className="bg-tertiaryGray p-[70px] text-center">
      <h1 className="text-primary text-[50px] font-bold font-oswald mb-[10px]">
        KONTAKT
      </h1>
      <p className="font-[15px]">
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
