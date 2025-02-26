import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Monika Habant - Regulamin opinii",
  description:
    "Zasady dotyczące zamieszczania opinii na stronie Moniki Habant. Dowiedz się, jak moderujemy recenzje i jakie są nasze standardy publikacji.",
};

const ReviewPolicyPage = () => (
  <main className="pt-[85px] lg:pt-[200px] mb-[35px] md:mb-[70px]" lang="pl">
    <header className="bg-tertiaryGray p-[35px] md:p-[70px] text-center">
      <h1
        id="review-policy-heading"
        className="text-primary text-[32px] md:text-[50px] font-bold font-oswald mb-[10px]"
      >
        Regulamin opinii
      </h1>
      <p className="text-[15px] max-w-[800px] mx-auto">
        Sprawdź, jakie zasady obowiązują przy zamieszczaniu opinii na stronie{" "}
        <strong className="text-primary font-semibold">monikahabant.pl</strong>
      </p>
    </header>

    <section
      className="mt-[35px] md:mt-[70px] container px-6 md:px-16 lg:px-32 mx-auto"
      aria-labelledby="review-policy-heading"
      role="region"
    >
      <article className="flex flex-col gap-6 text-[15px] md:text-[16px] leading-relaxed">
        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          1. Postanowienia ogólne
        </h2>
        <p>
          Regulamin określa zasady zamieszczania opinii na stronie{" "}
          <Link
            href="https://monikahabant.pl"
            className="text-primary underline font-bold"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Przejdź do strony głównej"
          >
            monikahabant.pl
          </Link>{" "}
          dotyczących usług świadczonych przez Monikę Habant – Trenerkę
          Personalną i Dietetyczkę.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          2. Cel opinii
        </h2>
        <p>
          Opinie publikowane na stronie mają na celu dzielenie się
          doświadczeniami klientów oraz dostarczanie rzetelnych informacji dla
          potencjalnych użytkowników usług.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          3. Zasady publikacji opinii
        </h2>
        <ul className="list-disc pl-5 marker:text-primary">
          <li>
            Opinie powinny być zgodne z rzeczywistością i odnosić się do usług
            Moniki Habant.
          </li>
          <li>
            Niedozwolone jest zamieszczanie treści obraźliwych, wulgarnych lub
            naruszających prawa osób trzecich.
          </li>
          <li>
            Administrator zastrzega sobie prawo do moderowania, skracania lub
            usuwania opinii, które naruszają niniejszy regulamin.
          </li>
          <li>
            Nie są publikowane opinie, które zawierają reklamy innych usług,
            linki zewnętrzne lub dane osobowe osób trzecich.
          </li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          4. Odpowiedzialność
        </h2>
        <p>
          Administrator nie ponosi odpowiedzialności za treść opinii
          zamieszczanych przez użytkowników, ale dokłada wszelkich starań, aby
          były one zgodne z regulaminem i prawem obowiązującym w Polsce.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          5. Sposób moderacji
        </h2>
        <ul className="list-disc pl-5 marker:text-primary">
          <li>Każda opinia jest weryfikowana przed publikacją.</li>
          <li>
            Administrator może poprosić autora opinii o dodatkowe informacje
            dotyczące jego doświadczeń.
          </li>
          <li>
            Użytkownik może zgłosić naruszenie regulaminu poprzez kontakt na
            adres e-mail:{" "}
            <a
              href="mailto:habantmonika@gmail.com"
              className="text-primary underline"
            >
              habantmonika@gmail.com
            </a>
            .
          </li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          6. Zmiany w Regulaminie
        </h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w
          regulaminie. Aktualna wersja obowiązuje od <strong>25.02.2025</strong>
          .
        </p>
      </article>
    </section>
  </main>
);

export default ReviewPolicyPage;
