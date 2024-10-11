/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-purple-to-green":
          "linear-gradient(to right, #4731D3 70%, #CBF281 70%)",
          "dark-purple-to-dark-green":
          "linear-gradient(to right, #171043 70%, #1A210B 70%)",
      },
      colors: {
        light: {
          green: " #CBF281",
          purple: "#4731D3",
          gray: " #777777",
          redux: "#764abc",
          vs: "#038fd6",
          silver: "#D9D9D9",
        },
        dark: {
          purple: "#171043",
          lilly: "#BAB2E7",
          green: "#1A210B",
          gray: "#252128",
          silver: "#D9D9D9",
          dbgri:"#2B2727",
          dblila:" #8F88FF",
          pblila:" #8173DA",
          pclil:"#C1BAED"
          
        },
      },
      boxShadow: {
        "card-shadow": "0px 8px 28px -6px",
      },
      fontSize: {
        "5.5xl": "3.375rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      lg: "1440px",
    },
  },
  plugins: [],
};