/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      colors: {
        aqua: '#4FA4F4',
        dark: '#303030',
        light: '#5C5C5C',
        transparent: '#FCFCFC',
      },
    },
  },
  plugins: [],
};
