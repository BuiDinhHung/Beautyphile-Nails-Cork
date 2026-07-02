import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        cream: {
          50: "#fffdf8",
          100: "#fbf6ec",
          200: "#f5ead9",
        },
        blush: {
          50: "#fff5f7",
          100: "#fde8ee",
          200: "#f7d4dd",
          300: "#eeb9c7",
        },
        mint: {
          50: "#f4fbf9",
          100: "#e5f4f0",
          200: "#cfe8e3",
        },
        gold: {
          100: "#efe4cc",
          200: "#dcc799",
          300: "#c6a968",
        },
        rose: {
          300: "#c98d82",
          400: "#ad7168",
        },
        ink: {
          700: "#4d4741",
          800: "#332f2b",
          900: "#221f1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        "soft-line": "0 1px 0 rgba(198, 169, 104, 0.22)",
        "lift": "0 18px 55px rgba(97, 78, 61, 0.12)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.28s ease-out",
        "accordion-up": "accordion-up 0.28s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
