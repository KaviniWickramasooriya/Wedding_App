/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        lavender: {
          50: '#f8f7fb',
          100: '#efebf4',
          200: '#ded5e8',
          300: '#c6b5d8',
          400: '#a98ec2',
          500: '#916db1', 
          600: '#785396', 
          700: '#62427a',
        },
        // Adding the elegant dark green from the video
        forest: {
          900: '#3a4a40',
          800: '#4a5d52'
        }
      },
    },
  },
  plugins: [],
}