/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d1c28',
        gray1: '#fdfcf7',
        accent: '#bce7b7',
        accent2: '#bfb5ff',
      },
      fontFamily: {
        primary: ['Montserrat'],
        secondary: ['Inter'],
      },
    },
  },
  plugins: [],
};
