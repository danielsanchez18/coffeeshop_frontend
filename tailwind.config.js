/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Roboto Condensed"', 'sans-serif'],
        secondary: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        primary: {
          '50': '#fdf6ef',
          '100': '#f9eadb',
          '200': '#f2d3b6',
          '300': '#eab587',
          '400': '#df884e',
          '500': '#da7135',
          '600': '#cb5a2b',
          '700': '#a94525',
          '800': '#873825',
          '900': '#6d3021',
          '950': '#3b170f',
        },
        'secondary': '#59483D',
        'background-color': '#F1ECE0'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
