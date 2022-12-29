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
      fontSize: {
        base: ['15px', '1.6'],
      },
      backgroundImage: {
        'gradient-radial-footer':
          'radial-gradient(var(--tw-gradient-from) 1px, var(--tw-gradient-to) 1px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
