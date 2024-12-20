import Link from "next/link";

export const Footer = () => (
  <footer className=" pt-[60px] bg-black text-white h-[228px] text-center">
    <nav className="py-[40px]">
      <ul className="flex justify-center gap-10">
        <li>
          <Link href="/polityka-prywatnosci">POLITYKA PRYWATNOŚCI</Link>
        </li>
        <li>
          <Link href="/polityka-plikow-cookies">POLITYKA PRYWATNOŚCI</Link>
        </li>
        <li>
          <Link href="/regulamin-opinii">REGULAMIN OPINII</Link>
        </li>
      </ul>
    </nav>
    <p>Copyright © 2024 - Monika Habant - Wszystkie prawa zastrzeżone.</p>
  </footer>
);
