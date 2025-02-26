import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaInstagram } from "react-icons/fa";

type ReelProps = {
  imageSrc: string;
  altText: string;
  href: string;
};

export const Reel = ({ imageSrc, altText, href }: ReelProps) => (
  <Link
    href={href}
    className="size-[300px] md:max-w-[400px] md:max-h-[400px] rounded-[35px] bg-teal-100 relative group block overflow-hidden focus:outline focus:outline-2 focus:outline-primary "
    aria-label={altText}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={imageSrc} fill className="object-cover" alt={altText} />
    <FaPlay
      size={48}
      className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md"
      aria-hidden="true"
    />
    <FaInstagram
      size={42}
      className="absolute bottom-5 right-5 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-opacity duration-300 delay-75 pointer-events-none group-hover:pointer-events-auto"
      aria-hidden="true"
    />
  </Link>
);
