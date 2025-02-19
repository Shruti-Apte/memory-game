/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#ffffe2",
        dark: "#01082b",
        red: "red",
      },
      boxShadow: {
        light: "10px 20px 50px -12px rgba(255, 255, 204, 0.2)",
        dark: "0px 25px 50px -12px rgba(1, 8, 43, 0.3)",
      },
    },
  },
  plugins: [],
};
