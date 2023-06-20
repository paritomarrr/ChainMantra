/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regalblue': '#3EDAD8',
        'black': '#191919',
        'gray': '1E1E1E'
      },
      fontSize: {
        base: '28px',
        sm: '22px',
        md: '100px',
        lg: '52px',
        xl: '36px',
      }
    },
  },
  plugins: [],
}