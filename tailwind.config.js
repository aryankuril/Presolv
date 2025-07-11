/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  darkMode: "class", // Enables dark mode with a CSS class
};
