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
        primary: {
          DEFAULT: "#4D4A9D",
          dark: "#3B3880",
          light: "rgba(77, 74, 157, 0.1)",
        },
        accent: {
          DEFAULT: "#FF177B",
          dark: "#E0156E",
          light: "rgba(255, 23, 123, 0.1)",
        },
        sidebar: "#211f4b",
        success: { DEFAULT: "#10B981", dark: "#059669" },
        warning: { DEFAULT: "#F59E0B", dark: "#D97706" },
        error: { DEFAULT: "#EF4444", dark: "#DC2626" },
        info: { DEFAULT: "#3B82F6", dark: "#2563EB" },
        violet: { DEFAULT: "#8B5CF6", dark: "#7C3AED", light: "#A78BFA" },
        rose: { DEFAULT: "#EC4899", dark: "#DB2777", light: "#F472B6" },
        teal: { DEFAULT: "#14B8A6", dark: "#0D9488", light: "#2DD4BF" },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito Sans", "system-ui", "sans-serif"],
        content: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)",
        "gradient-primary": "linear-gradient(90deg, #4D4A9D 0%, #3B3880 100%)",
        "gradient-hero": "linear-gradient(135deg, #211f4b 0%, #2d2a6e 50%, #1a1838 100%)",
        "gradient-card": "linear-gradient(135deg, #4D4A9D 0%, #3B3880 100%)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 30px rgba(77, 74, 157, 0.15)",
        modal: "0 20px 60px rgba(0,0,0,0.2)",
        nav: "0 1px 0 rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
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
      },
    },
  },
  plugins: [],
};

export default config;
