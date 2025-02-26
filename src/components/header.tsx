"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";

const NAV_ITEMS = [
  { label: "STRONA GŁÓWNA", href: "/" },
  { label: "O MNIE", href: "/o-mnie" },
  { label: "OFERTA", href: "/oferta" },
  { label: "CENNIK", href: "/cennik" },
  { label: "KONTAKT", href: "/kontakt" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className="absolute top-0 font-oswald py-2 px-4 md:px-12 md:py-5 lg:px-24 flex items-center justify-between w-full"
      lang="pl"
    >
      <Link
        href="/"
        className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary hidden lg:block"
      >
        <Logo isWhite={isHomePage} height={150} width={150} />
      </Link>
      <Link
        href="/"
        className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary lg:hidden"
      >
        <Logo isWhite={isHomePage} height={80} width={80} />
      </Link>
      <nav aria-label="Menu nawigacyjne" className="hidden lg:block">
        <ul
          className={cn(
            "text-[20px] font-[500] flex gap-[40px] flex-row items-center justify-center",
            isHomePage ? "text-white" : "text-black"
          )}
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                className={cn(
                  "hover:text-primary transition duration-300 delay-75 focus:text-primary",
                  pathname === href && !isHomePage ? "text-primary" : ""
                )}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        aria-label="Otwórz menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        className="hover:cursor-pointer hover:text-primary lg:hidden focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        tabIndex={0}
      >
        <Menu color={isHomePage ? "white" : "black"} />
      </button>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
