import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Spacing - section
    'mb-12', 'md:mb-16', 'scroll-mt-24', 'space-y-6', 'space-y-4',
    // Spacing - card
    'p-4', 'md:p-5', 'p-5', 'md:p-6', 'p-6', 'md:p-8', 'lg:p-10',
    // Spacing - timeline
    'pl-6', 'md:pl-8', '-left-[26px]', 'md:-left-[34px]',
    // Border radius
    'rounded-xl', 'rounded-3xl', 'rounded-full', 'rounded-lg',
    // Background colors
    'bg-white', 'bg-gray-50/50', 'bg-white/50', 'bg-white/80',
    'bg-gradient-to-br', 'from-white', 'to-gray-50/50', 'to-gray-50/30',
    'bg-blue-50', 'bg-blue-100',
    // Border colors
    'border-gray-200', 'border-gray-300', 'border-gray-100', 'border-gray-200/60',
    'border-l-blue-500', 'border-l-green-500', 'border-l-purple-500', 'border-l-indigo-500', 'border-l-gray-500',
    // Text colors
    'text-gray-900', 'text-gray-700', 'text-gray-600', 'text-gray-500', 'text-gray-400',
    'text-blue-600', 'text-blue-700',
    // Hover states
    'hover:bg-white/80', 'hover:border-gray-300', 'hover:border-gray-200', 'hover:shadow-md', 'hover:shadow-sm', 'hover:-translate-y-0.5', 'hover:-translate-y-1',
    // Interactive
    'cursor-pointer',
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

