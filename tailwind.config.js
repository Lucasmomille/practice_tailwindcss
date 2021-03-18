const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brown: {
        btn: '#412314',
      },
      orange: {
        bg: '#F8E7D4',
      },
    },
    borderRadius: {
      section: '400px'
    },
    minHeight: {
      header: '10vh',
      section: '90vh'
    },
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
