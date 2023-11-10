/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ccidade' : "url('/src/img/bg_cidade.jpg')",
        'tailwind' : "url('/src/img/tailwind.png')"
      })
    },
  },
  plugins: [],
}

