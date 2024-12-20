import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#c35379",
        primaryGray: "#696969",
        secondaryGray: "#E8E8E8",
        tertiaryGray: "#F3F3F3",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
