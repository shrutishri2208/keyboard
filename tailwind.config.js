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
        18: "4.7rem",
        22: "5.3rem",
        26: "6.8rem",
        34: "8.5rem",
        57: "14.3rem",
        66: "17rem",
        68: "17.5rem",
        82: "20.75rem",
      },
      fontSize: {
        xxs: "0.4rem",
      },
      gap: {
        0.75: "0.2rem",
      },
    },
  },
  plugins: [],
};
