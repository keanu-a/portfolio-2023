/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
    },
    colors: {
      black: '#0D1321',
      white: '#FFEDDF',
      brown: '#BE7C4D',
      green: '#417B5A',
      gray: '#E5E5E5',
      red: '#9A031E',
    },
  },
  plugins: [],
};
