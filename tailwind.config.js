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
        // A wider and softer blush palette
        blush: {
          50: '#fdf8f9',
          100: '#f9eaee',
          200: '#f3d5df',
          300: '#eab5c7',
          400: '#dd8ba7',
          500: '#d06a8e',
          600: '#b05372', // Deeper shade for accents
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}