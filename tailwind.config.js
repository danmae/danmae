/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      { 'WorkSansLight': ['WorkSansLight', 'sans-serif'],
        'WorkSansRegular': ['WorkSansRegular', 'sans-serif'],
        'WorkSansxLight': ['WorkSansxLight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}