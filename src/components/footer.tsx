import Link from "next/link";

export const Footer = () => (
  <footer className="md:pt-[60px] bg-black text-white max-h-[228px] text-center text-[15px]">
    <nav className="md:py-[40px] py-4">
      <ul className="flex flex-col md:flex-row justify-center md:gap-10 gap-2">
        <li>
          <Link href="/polityka-prywatnosci">POLITYKA PRYWATNOŚCI</Link>
        </li>
        <li>
          <Link href="/regulamin-opinii">REGULAMIN OPINII</Link>
        </li>
      </ul>
    </nav>
    <p>Copyright © 2025 - Monika Habant - Wszystkie prawa zastrzeżone.</p>
  </footer>
);
