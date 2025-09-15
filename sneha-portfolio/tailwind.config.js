/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brogetta: ['BROGETTA-Regular', 'serif'],
        mirage: ['MADE-Mirage', 'sans-serif'],
      },
      colors: {
        beige: {
          50: '#fdfcf8',
          100: '#faf8f0',
          200: '#f5f0e1',
          300: '#ebe2c8',
          400: '#ddd0a7',
          500: '#d0be87',
          600: '#c4ad6f',
          700: '#a4915d',
          800: '#877550',
          900: '#6d5f44',
        },
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
