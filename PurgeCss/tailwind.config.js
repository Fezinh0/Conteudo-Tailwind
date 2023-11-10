/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enable: true,
    content: ['./src/**/*.html'],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

