/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pizza: "Roboto Mono",
      //sans: ["Graphik", "sans-serif"],
    },

    extend: {
      colors: {
        pizzaColor: "tomato",
      },

      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },

      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
