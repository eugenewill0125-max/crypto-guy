/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFF4C2',
        secondary: '#E5E5E5',
        profit: '#10B981',
        loss: '#EF4444',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      }
    },
  },
  plugins: [],
}
