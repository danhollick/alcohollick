/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purplish: '#0038FE',
        dark_purplish: '#0029B9',
        light_purplish: '#E7ECFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-basis-mono)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
