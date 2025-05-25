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
        customPink: "#fae6ec"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #e0f2ff, #f3e8ff, #ffe4f2)',
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
