/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Neuton: ["Neuton", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#834098",
        secondary: "#949494",
        background: "#F4F5F7",
        customBlue: "#00bbff",
        button: "#834098",
      },
    },
  },
  plugins: [],
};
