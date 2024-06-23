import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem",
        },
      },
      animation: {
        message: "message 1s ease-in",
        appear: "appear 0.5s ease-in-out"
      },
      keyframes: {
        message: {
          "0%": { transform: "translateX(300px)" },
          "100%": { transform: "translateX(0)" },
        },
        appear: {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"}
        }
      },
    },
  },
  plugins: [],
};

export default config;
