"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const NAV_ITEMS = [
  { label: "STRONA GŁÓWNA", href: "/" },
  { label: "O MNIE", href: "/o-mnie" },
  { label: "OFERTA", href: "/oferta" },
  { label: "CENNIK", href: "/cennik" },
  { label: "KONTAKT", href: "/kontakt" },
];

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="absolute top-0 font-oswald py-5 px-24 flex items-center justify-between w-full">
      <div className="sr-only">Główna nawigacja</div>
      <Link
        href="/"
        className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        <Logo isWhite={isHomePage} />
      </Link>
      <nav aria-label="Główna nawigacja">
        <ul
          className={cn(
            "text-[20px] font-[500]  flex gap-[40px] flex-row items-center justify-center",
            isHomePage ? "text-white" : "text-black"
          )}
        >
          {NAV_ITEMS.map(({ label, href }, index) => (
            <li key={index}>
              <Link
                className={cn(
                  "hover:text-primary transition duration-300 delay-75 focus:text-primary",
                  pathname === href && !isHomePage ? "text-primary" : ""
                )}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
