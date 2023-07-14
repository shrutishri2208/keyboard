/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightcopper: "#ffc4a8",
        lightgreen: "#b8ffbb",
        lightyellow: "#fffcae",
        lightblue: "#b0c6ff",
        lightpurple: "#e1b1ff",
        lightwhite: "ffffff",
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
        82: "19.75rem",
      },
      fontSize: {
        xxs: "0.4rem",
      },
      gap: {
        0.75: "0.2rem",
      },
      spacing: {
        30: "0.75rem",
      },
    },
  },
  plugins: [],
};
