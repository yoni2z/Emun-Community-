/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#cc1631",
        secondary: "#949494",
        background: "#F4F5F7",
        customBlue: "#00bbff",
        button: "#26358a",
      },
    },
  },
  plugins: [],
};
