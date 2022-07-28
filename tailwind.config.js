/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./style.css -o ./dist/main.css --watch
