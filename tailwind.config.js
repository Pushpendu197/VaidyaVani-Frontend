/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D70040',
        'linear': 'bg-gradient-to-r from-slate-700 to-zinc-300',
        'yellow': '#FED700',
        'pup': '#9F6075',
        'blue': '#00B4D8',
        'secondary': '#303030',
        'second': '#292929',
        'secondBody': '#E6E6E6'

      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}