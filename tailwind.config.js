/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        teal: colors.teal,
        rose: colors.rose,
        orange: colors.orange,
        dcyan: "#3c8067",
        cream: "#f2ebe3",
        vdblue: "#1c232b",
        dgblue: "#6c7289",
        btncol: "#194031",
      },
      fontFamily: {
        fraunces: "Fraunces",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
