/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brogetta': ['BROGETTA-Regular', 'serif'],
        'mirage': ['MADE-Mirage', 'sans-serif'],
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
        '128': '32rem',
        '144': '36rem',
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'fadeInLeft': 'fadeInLeft 0.6s ease-out',
        'fadeInRight': 'fadeInRight 0.6s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'glitch': 'glitch 0.5s ease-in-out',
        'loading': 'loading 1.5s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#000000',
              textDecoration: 'none',
              '&:hover': {
                color: '#6b7280',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography, require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
