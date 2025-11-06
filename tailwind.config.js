/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfcfb',
          100: '#f7f5f0',
          200: '#eee9df',
          300: '#e5ddd0',
          400: '#d4c4b0',
          500: '#c4ad94',
        },
      },
    },
  },
  plugins: [],
}
