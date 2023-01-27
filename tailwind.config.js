/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      prose: '600px',
    },
    extend: {
      colors: {
        purplish: '#0038FE',
        dark_purplish: '#0029B9',
        light_purplish: '#E7ECFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-basis-mono)'],
        serif: ['var(--font-erode)'],
      },
      fontSize: {
        base: ['15px', '1.6'],
      },
      backgroundImage: {
        'gradient-radial-footer':
          'radial-gradient(var(--tw-gradient-from) 1px, var(--tw-gradient-to) 1px)',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
