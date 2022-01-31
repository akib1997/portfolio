// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        mainColor: "#ccff00",
        mainColorLight: "#326400",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
