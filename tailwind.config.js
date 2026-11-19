/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f4fc',
          100: '#ede2f7',
          200: '#dbc5ee',
          500: '#7a24b7',
          600: '#5700B0',
          700: '#43008a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}
