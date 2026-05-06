import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1B2D",
          50: "#F0F2F5",
          100: "#D9DEE6",
          200: "#A8B2C2",
          300: "#76849D",
          400: "#445679",
          500: "#0F1B2D",
          600: "#0C1626",
          700: "#091020",
          800: "#060A18",
          900: "#03050C",
          950: "#020308",
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
        forest: { DEFAULT: "#2F5233" },
        burgundy: { DEFAULT: "#7A1F1F" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "subtle-bounce": "subtleBounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtleBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
