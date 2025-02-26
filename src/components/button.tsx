import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  ariaLabel: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  type?: "submit" | "reset" | "button";
};

export const Button = ({
  children,
  ariaLabel,
  type = "button",
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
    outline: `
      text-primary font-semibold text-[18px] px-10 py-3 w-fit
      border border-primary rounded-full
      hover:bg-primary hover:text-white transition duration-300 delay-75 
    `,
    ghost: `px-[25px] py-[16.5px] bg-white text-[14px] font-semibold hover:bg-primary hover:text-white transition duration-300 delay-75 focus:text-white focus:bg-primary`,
  };

  return (
    <button
      role="button"
      aria-label={ariaLabel}
      className={variantStyles[variant]}
      type={type}
    >
      {children}
    </button>
  );
};
