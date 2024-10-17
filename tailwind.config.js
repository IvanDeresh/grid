/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fb2e86",
        secondary: "f9ba00",
        tertiary: "#7E33E0",
        success: "#0cc562",
        hero: "#F2F0FF",

        blue: {
          dark: "#101750",
        },
        gray: {
          3: "#8a8fb9",
          2: "#e5e0fc",
          1: "#F8F8FD",
        },
      },
      keyframes: {
        fromBottom: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0)" },
        },
        fromLeft: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(0)" },
        },
        fromDown: {
          "0%": { transform: "translateY(250%)" },
          "100%": { transform: "translateX(0)" },
        },
        fromTop: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fromBottom: "fromBottom 1s ease-in-out 1",
        fromTop: "fromTop 1s ease-in-out 1",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "custom-pattern": "url('./assets/img/sub.png')",
      },
    },
  },
  plugins: [],
};
