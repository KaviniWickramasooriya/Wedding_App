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
        // A soft, elegant, dusty lavender palette (not harsh purple)
        lavender: {
          50: '#f8f7fb',
          100: '#efebf4',
          200: '#ded5e8',
          300: '#c6b5d8',
          400: '#a98ec2',
          500: '#916db1', // Base accent
          600: '#785396', // Deeper shade for high contrast
          700: '#62427a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}