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
        ink: "#071a32",
        muted: "#4f6078",
        canvas: "#f6f8fc",
        primary: {
          DEFAULT: "#17c1ec",
          soft: "#55d7ff",
        },
        accent: "#38e2b6",
        navy: {
          900: "#0a1728",
          800: "#0d2c4e",
          700: "#102743",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 28px rgba(7, 26, 50, 0.12)",
        lift: "0 8px 22px rgba(7, 26, 50, 0.06)",
        glass: "0 8px 20px rgba(9, 30, 55, 0.2)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(130deg, rgba(7, 18, 33, 0.72), rgba(8, 33, 56, 0.62))",
        "gradient-primary": "linear-gradient(120deg, #17c1ec, #38e2b6)",
      },
      animation: {
        "pulse-dot": "pulseDot 2.1s ease-in-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
