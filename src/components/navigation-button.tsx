import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  ariaLabel: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "tertiary";
  className?: string;
};

export const NavigationButton = ({
  className,
  children,
  href,
  ariaLabel,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary: `
      text-white font-semibold text-[18px] px-10 py-3 w-fit 
      bg-primary flex items-center justify-center
      hover:bg-white hover:text-primary transition duration-300 delay-75 hover:shadow-md
      focus:text-primary focus:bg-white
    `,
    secondary: `
      text-primary font-bold text-[18px] px-10 py-3 mt-10 rounded-full w-fit m-auto
      bg-white flex items-center justify-center 
      hover:bg-primary hover:text-white transition duration-300 delay-75 
      focus:text-white focus:bg-primary
    `,
    tertiary: `
      text-white font-semibold text-[18px] px-10 py-3 w-fit 
      flex items-center justify-center
      hover:bg-primary hover:text-white transition duration-300 delay-75 hover:shadow-lg
      focus:bg-primary focus:text-white focus:shadow-lg
      mx-auto  bg-white text-primary    
      `,
    outline: `
      text-primary font-semibold text-[18px] px-10 py-3 w-fit
      border border-primary rounded-full
      hover:bg-primary hover:text-white transition duration-300 delay-75 
    `,
    ghost: `px-[25px] py-[16.5px] bg-white text-[14px] font-semibold hover:bg-primary hover:text-white transition duration-300 delay-75 focus:text-white focus:bg-primary`,
  };

  return (
    <Link
      href={href}
      role="button"
      aria-label={ariaLabel}
      className={cn(variantStyles[variant], className)}
    >
      {children}
    </Link>
  );
};
