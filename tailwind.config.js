/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8ff",
          100: "#e8f1ff",
          200: "#cfe2ff",
          300: "#a9c9ff",
          400: "#79a6ff",
          500: "#4f82ff",
          600: "#2e60f2",
          700: "#244cd8",
          800: "#253fad",
          900: "#243987",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
