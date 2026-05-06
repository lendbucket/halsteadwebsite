import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1B2D",
          50: "#E8EAEF",
          100: "#C8CDD7",
          200: "#9BA4B5",
          300: "#6E7A93",
          400: "#3D4D67",
          500: "#0F1B2D",
          600: "#0C1626",
          700: "#091020",
          800: "#060A18",
          900: "#03050C",
        },
        gold: {
          DEFAULT: "#C9A547",
          50: "#FAF5E8",
          100: "#F1E5BD",
          200: "#E5D08C",
          300: "#D9BB5A",
          400: "#CFB04F",
          500: "#C9A547",
          600: "#A98839",
          700: "#806731",
          800: "#574627",
          900: "#2E251D",
        },
        cream: {
          DEFAULT: "#F4F1EA",
          50: "#FCFAF7",
          100: "#F4F1EA",
          200: "#E8E1D2",
          300: "#D4C8AE",
        },
        forest: {
          DEFAULT: "#2F5233",
        },
        burgundy: {
          DEFAULT: "#7A1F1F",
        },
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
