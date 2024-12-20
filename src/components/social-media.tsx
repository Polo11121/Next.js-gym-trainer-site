import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

type SocialMediaProps = {
  size: number;
  color?: "white" | "black";
};

export const SocialMedia = ({ color = "white", size }: SocialMediaProps) => (
  <>
    <Link
      href="https://www.instagram.com/monika_habant"
      passHref
      aria-label="Link do Instagrama"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <FaInstagram
        size={size}
        className={`text-${color} hover:text-primary transition duration-300 delay-75 cursor-pointer group-focus:text-primary`}
      />
    </Link>
    <Link
      href="https://www.facebook.com/monika.habant"
      passHref
      aria-label="Link do Facebooka"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <FaFacebook
        size={size}
        className={`text-${color} hover:text-primary transition duration-300 delay-75 cursor-pointer group-focus:text-primary`}
      />
    </Link>
    <Link
      href="https://www.tiktok.com/@monika.habant"
      passHref
      aria-label="Link do TikToka"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <FaTiktok
        size={size}
        className={`text-${color} hover:text-primary transition duration-300 delay-75 cursor-pointer group-focus:text-primary`}
      />
    </Link>
  </>
);
