const { fontFamily } = require('tailwindcss/defaultTheme')
const { replacer } = require('easy-tailwind/transform/react')

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
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      },

      colors: {
        background: '#f7f7f7',
        'on-background': '#fff',
        white: '#f7f7f7',
        border: '#f0ecea',
        medium: '#f0ecea',
        'medium-hover': '#dad1ce',
        brown: {
          600: '#513932',
          800: '#2d150e',
        },
      },

      // TODO: Verify this is kosher (likely not needed if transitioning everything to grid)
      flex: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    },
  },
  plugins: [],
}
