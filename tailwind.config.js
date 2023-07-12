/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        copper: "#e6703d",
      },
      width: {
        8: "2.1rem",
        34: "8.5rem",
        // 28: "6.5rem",
      },
    },
  },
  plugins: [],
};
