import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "2rem",
          sm: "1rem",
        },
      },
      animation: {
        message: "message 1s ease-in",
      },

      keyframes: {
        message: {
          "0%": { transform: "translateX(300px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
