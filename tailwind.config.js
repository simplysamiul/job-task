/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: "#14314E",
        secondary: "#F7F7F7", 
        textPrimary: "#8C8C8C",
        border:"#DEDEDE",
        red: "#FD413B",
        golden: "#856404",
        green: "#155724",
        darkGreen: "#0C5460",
        darkRed: "#721C24",
      },
    },
  },
   plugins: [require("daisyui")],
}
