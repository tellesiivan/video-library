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
      light: {
        purple: "#7a66ff",
      },
      dark: {
        primary: "#222831;",
        secondary: "#393E46",
        primaryText: "#EEEEEE",
        altLight: "#282d36",
        yellow: "#FFD369",
        navHover: "#424850",
      },
    },
    extend: {},
  },
  plugins: [],
};
