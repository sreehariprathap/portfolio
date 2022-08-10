/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      // Configure your color palette here
      light: "#EDF2F4",
      dark: "#02040F",
      primaryYellow: "#FCA311",
    },
    screens: {
      'xsm': '0px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/assets/white-bg.png')",
        "hero-pattern-dark": "url('src/assets/dark-bg.png')",
        "pattern-yellow": "url('src/assets/vector.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
