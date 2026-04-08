/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // placeholder
        secondary: "#3b82f6", // placeholder
        tertiary: "#5700B0", // New violet color
        neutral: "#1f2937", // placeholder
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}
