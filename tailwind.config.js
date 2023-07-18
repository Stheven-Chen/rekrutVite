/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 'Poppins': 'Poppins, sans-serif' }, 
      colors:{ "primary":"#0177b9"},},
  },
  plugins: [],
}