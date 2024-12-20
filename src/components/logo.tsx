import Image from "next/image";
import { cn } from "../utils/cn";

type LogoProps = {
  height?: number;
  width?: number;
  className?: string;
  isWhite?: boolean;
};

export const Logo = ({
  height = 200,
  width = 200,
  className,
  isWhite,
}: LogoProps) => (
  <Image
    alt="Logo firmy"
    src={`/images/${isWhite ? "logo-white.png" : "logo-black.png"}`}
    width={width}
    height={height}
    className={cn("bg-blend-multiply", className)}
  />
);
