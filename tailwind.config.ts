import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
      },
      fontSize: {
        // Fluid typography scale using clamp(min, preferred, max)
        display: [
          "clamp(2.2rem, 4.5vw + 0.8rem, 3.9rem)", // ~35px - ~62px
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h1: [
          "clamp(1.75rem, 3.5vw + 0.4rem, 2.6rem)", // ~28px - ~42px
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(1.3rem, 2.6vw + 0.4rem, 2rem)", // ~21px - ~32px
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        h3: [
          "clamp(1.1rem, 1.75vw + 0.4rem, 1.5rem)", // ~18px - ~24px
          {
            lineHeight: "1.4",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        h4: [
          "clamp(1rem, 1.3vw + 0.4rem, 1.3rem)", // ~16px - ~21px
          {
            lineHeight: "1.5",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],
        body: [
          "clamp(0.9rem, 0.4vw + 0.75rem, 1rem)", // ~14px - ~16px
          {
            lineHeight: "1.6",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        small: [
          "clamp(0.8rem, 0.2vw + 0.7rem, 0.9rem)", // ~13px - ~14px
          {
            lineHeight: "1.5",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        caption: [
          "clamp(0.7rem, 0.2vw + 0.6rem, 0.8rem)", // ~11px - ~13px
          {
            lineHeight: "1.4",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.8",
          },
          "50%": {
            transform: "scale(2)",
            opacity: "0.4",
          },
          "100%": {
            transform: "scale(2.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

