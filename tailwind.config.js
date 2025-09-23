/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#bfa14d", // ✅ Fixed: removed semicolon
          dark: "#B8860B",
          light: "#FFECB3",
          black: "#000000",
          white: "#FFFFFF",
        },
        elegant: {
          50: "#fefdf8",
          100: "#fdf9e8",
          200: "#fbf0c5",
          300: "#f7e198",
          400: "#f1cd69",
          500: "#bfa14d", // Primary brand color
          600: "#a68642",
          700: "#8b6c37",
          800: "#72572c",
          900: "#5d4724",
          950: "#352812",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel Decorative", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
