import { BiFontSize } from "react-icons/bi";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        medium: ["SpaceGrotesk-Medium", "sans-serif"],
        regular: ["SpaceGrotesk-Regular", "sans-serif"],
      },
      colors: {
        green: "#B9FF66",
        black: "#191A23",
        gray: "#F3F3F3",
        dark: "#292A32",
      },
    },
  },
  plugins: [],
};
