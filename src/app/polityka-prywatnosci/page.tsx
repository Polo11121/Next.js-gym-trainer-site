import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Monika Habant - Polityka Prywatności",
  description:
    "Polityka prywatności serwisu Monika Habant – Trener Personalny i Dietetyk. Dowiedz się, jak przetwarzamy Twoje dane osobowe oraz jakie masz prawa.",
};

const PrivacyPolicyPage = () => (
  <main className="pt-[85px] lg:pt-[200px] mb-[35px] md:mb-[70px]" lang="pl">
    <header className="bg-tertiaryGray p-[35px] md:p-[70px] text-center">
      <h1
        id="privacy-policy-heading"
        className="text-primary text-[32px] md:text-[50px] font-bold font-oswald mb-[10px]"
      >
        Polityka prywatności
      </h1>
      <p className="text-[15px] max-w-[800px] mx-auto">
        Serwisu internetowego{" "}
        <strong className="text-primary font-semibold">monikahabant.pl</strong>
      </p>
    </header>

    <section
      className="mt-[35px] md:mt-[70px] container px-6 md:px-16 lg:px-32 mx-auto"
      aria-labelledby="privacy-policy-heading"
      role="region"
    >
      <article className="flex flex-col gap-6 text-[15px] md:text-[16px] leading-relaxed">
        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          1. Definicje
        </h2>
        <p>
          <strong>Administrator:</strong> Monika Habant prowadząca działalność
          gospodarczą pod nazwą{" "}
          <strong>Monika Habant - Trener Personalny i Dietetyk</strong>, z
          siedzibą <strong>ul. Długa 8, 14-200 Iława</strong>, NIP:{" "}
          <strong>7441839043</strong>, REGON: <strong>540434022</strong>.
        </p>
        <p>
          <strong>Serwis:</strong> strona internetowa dostępna pod adresem{" "}
          <Link
            href="https://monikahabant.pl"
            className="text-primary underline font-bold"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Przejdź do strony głównej"
          >
            monikahabant.pl
          </Link>
        </p>
        <p>
          <strong>Użytkownik:</strong> każda osoba korzystająca z Serwisu.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          2. Przetwarzanie danych osobowych
        </h2>
        <p>
          Dane osobowe są przetwarzane w celu obsługi zapytań przesłanych przez
          formularz kontaktowy oraz w celach statystycznych i analitycznych.
        </p>
        <p>
          Administrator nie przekazuje danych osobowych osobom trzecim bez
          uzasadnionej podstawy prawnej.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          3. Prawa Użytkownika
        </h2>
        <p>Każdy Użytkownik ma prawo do:</p>
        <ul className="list-disc pl-5 marker:text-primary">
          <li>dostępu do swoich danych osobowych,</li>
          <li>
            żądania ich sprostowania, usunięcia lub ograniczenia przetwarzania,
          </li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>wniesienia skargi do organu nadzorczego.</li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          4. Pliki cookie
        </h2>
        <p>
          Serwis wykorzystuje pliki cookie do poprawy funkcjonalności strony.
          Szczegóły dotyczące plików cookie znajdują się w{" "}
          <Link href="/polityka-cookies" className="text-primary underline">
            Polityce Cookies
          </Link>
          .
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          5. Dane kontaktowe
        </h2>
        <p>
          W sprawach dotyczących przetwarzania danych osobowych możesz
          skontaktować się z Administratorem poprzez:
        </p>
        <ul className="list-disc pl-5 marker:text-primary">
          <li>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:habantmonika@gmail.com"
              className="text-primary underline"
            >
              habantmonika@gmail.com
            </a>
          </li>
          <li>
            <strong>Adres korespondencyjny:</strong> ul. Długa 8, 14-200 Iława
          </li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-bold text-primary">
          6. Zmiany w Polityce Prywatności
        </h2>
        <p>
          Administrator zastrzega sobie prawo do aktualizacji Polityki
          Prywatności. Ostatnia aktualizacja: <strong>25.02.2025</strong>.
        </p>
      </article>
    </section>
  </main>
);

export default PrivacyPolicyPage;
