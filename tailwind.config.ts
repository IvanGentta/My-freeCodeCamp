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
        freeCodeCampBackground: "#1B1B32",
        freeCodeCampSecondary: "#0A0A23",
        freeCodeCampButton: "#FFBE41",
      },
    },
  },
  plugins: [],
};
export default config;
