/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: `class`,
  theme: {
    extend: {
      backgroundImage: {
        circularLightXl:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 8px,#ffffff 100px)",
        circularDarkXl:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #082F49 8px,#082F49 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 8px,#ffffff 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #082F49 8px,#082F49 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 6px,#ffffff 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #082F49 6px,#082F49 60px)",
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 4px,#ffffff 40px)",
        circularDark:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #082F49 4px,#082F49 40px)",
      },
    },
  },
  plugins: [],
};
