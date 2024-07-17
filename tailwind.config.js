/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1E1E1E',
        'primary-text': '#EAEAEA',
        'secondary-text': '#B0B0B0',
        'accent': '#E3C6D1',
        'highlight': '#F5A623',
        // Add more colors as needed
      },
      fontWeight: {
        'light': 200,
        'normal': 400,
        'bold': 700,
      },
      fontSize: {
        'subtitle': '24px',
      },
    },
  },
  plugins: [],
}


