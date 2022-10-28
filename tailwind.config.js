module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: " hsl(209, 23%, 22%)", //dark-blue
        primaryDark: "hsl(207, 26%, 17%)", //very-dark-blue
        primaryLight: "hsl(200, 15%, 8%)", //very-dark-blue-light
        secondary: " hsl(0, 0%, 52%)", //dark-gray
        secondaryLight: "hsl(0, 0%, 98%)", //very-light-gray
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};