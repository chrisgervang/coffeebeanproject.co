const { replacer } = require('easy-tailwind/transform/react')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: {
    files: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    transform: {
      DEFAULT: replacer,
    },
  },

  theme: {
    extend: {
      spacing: {
        0.25: '2px',
        0.5: '4px',
        1: '8px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '52px',
        8: '64px',
        9: '72px',
        10: '80px',
        12: '96px',
      },

      fontFamily: {
        heading: ['var(--font-montserrat)', ...fontFamily.sans],
        body: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Sugar Milk to Brown Coffee
        // https://hue.tools/mix?mode=lab&colors=fff9f2ff%3Be1cdbaff%3Ba87858ff%3B4c2d24ff&steps=10&view=steps&gamma=0.5&format=hex
        primary: {
          50: '#fff9f2',
          100: '#e1cdba',
          200: '#caa990',
          300: '#b88e71',
          400: '#a87858',
          500: '#91654b',
          600: '#7d5540',
          700: '#6b4636',
          800: '#5b392c',
          900: '#4c2d24',
        },
        // Sugar Milk to Burnt Coffee
        // https://hue.tools/mix?mode=lab&colors=fff9f2ff%3Be1cdbaff%3Ba87858ff%3B4c2d24ff%3B2d1b15ff&steps=10&view=steps&gamma=0.7&format=hex
        // primary: {
        //   50: '#fff9f2',
        //   100: '#e5d3c2',
        //   200: '#cbab92',
        //   300: '#b18466',
        //   400: '#8e6349',
        //   500: '#6b4635',
        //   600: '#4c2d24',
        //   700: '#41261f',
        //   800: '#37211a',
        //   900: '#2d1b15',
        // },
      },

      // TODO: Verify this is kosher (likely not needed if transitioning everything to grid)
      flex: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    },
  },
  plugins: [],
}
