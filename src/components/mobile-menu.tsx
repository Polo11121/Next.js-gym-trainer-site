import { useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Logo } from "@/components/logo";
import Link from "next/link";

type MobileMenuProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const NAV_ITEMS = [
  { label: "Strona główna", href: "/" },
  { label: "O mnie", href: "/o-mnie" },
  { label: "Oferta", href: "/oferta" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kontakt", href: "/kontakt" },
];

export const MobileMenu = ({ toggleMenu, isOpen }: MobileMenuProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggleMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggleMenu]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50 transition-opacity duration-300"
          lang="pl"
          role="dialog"
          aria-labelledby="mobile-menu-heading"
          aria-modal="true"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-3xl focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            aria-label="Zamknij menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
          >
            <IoClose />
          </button>
          <Logo isWhite className="mb-12" />
          <nav aria-labelledby="mobile-menu-heading">
            <h2 id="mobile-menu-heading" className="sr-only">
              Nawigacja mobilna
            </h2>
            <ul className="text-center space-y-4 text-xl font-semibold">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors duration-300 hover:text-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                    onClick={toggleMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-10 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              aria-label="Facebook - otworzy się w nowym oknie"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-primary focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              aria-label="Instagram - otworzy się w nowym oknie"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
