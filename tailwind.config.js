/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald", "sans-serif"],
        chelsea: ["Chelsea Market", "sans-serif"],
        // calistoga: ["Calistoga", "sans-serif"],
        // crimson: ["Crimson Text", "serif"],
        // lato: ["Lato", "sans-serif"],
        // nunito: ["Nunito", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
        // outfit: ["Outfit", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
