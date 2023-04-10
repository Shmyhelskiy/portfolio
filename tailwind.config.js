/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        80: "80vh",
        700: "700px",
      },
    },
  },
  plugins: [],
};
