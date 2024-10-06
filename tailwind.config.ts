import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1440px",
    },
    colors: {
      grayish_blue: "hsl(237, 18%, 59%)",
      soft_red: "hsl(345, 95%, 68%)",
      white: "hsl(0, 0%, 100%)",
      dark_desaturated_blue: "hsl(236, 21%, 26%)",
      very_dark_blue: "hsl(235, 16%, 14%)",
      mostly_black: "hsl(234, 17%, 12%)",
      black: "hsl(0, 0%, 0%)",
      
    },
    // opacity: {
    //   "15": "0.15",
    // },
    fontFamily: {
      sans: ['"Red Hat Text"', "sans-serif"],
    },
    fontSize: {
      "7px": "7px",
    },
  },
  plugins: [],
};
export default config;
