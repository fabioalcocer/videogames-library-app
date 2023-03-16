/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
      },
      animation: {
        fade: "fade 0.3s linear 1",
      },
      gridTemplateColumns: {
        aside: "220px 1fr",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
