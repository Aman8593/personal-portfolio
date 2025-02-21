/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Important! Ensures Tailwind listens for 'dark' class
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
