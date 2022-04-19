const { red } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      alert: "#ff7b72",
      light: {
        purple: "#7a66ff",
        gray: "#d8d8d8",
      },
      dark: {
        primary: "#222831;",
        secondary: "#393E46",
        primaryText: "#EEEEEE",
        altLight: "#282d36",
        yellow: "#FFD369",
        green: "#00ffac",
        navHover: "#424850",
      },
    },
    extend: {},
  },
  plugins: [],
};
