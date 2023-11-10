const {colors} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-blue':  '#243C5A',
        'gray': {
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50': '20rem'
      }
    },
  },
  plugins: [],
}

