import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#2a476e",
        customPink: "#fae6ec",
        portfolioBg: "#13151A",
        portfolioCard: "#1B1E25",
        portfolioHeading: "#F4F4F6",
        portfolioBody: "#9C9FA8",
        portfolioMuted: "#65686F",
        portfolioAccent: "#FF5C4D",
      },
    },
    fontFamily: {
      imperial: ["Imperial Script", "cursive"],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
