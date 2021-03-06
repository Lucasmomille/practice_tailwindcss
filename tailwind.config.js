const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      header: '20vh',
      section: '80vh',
      section95: '95vh',
      footer: '15vh'
    },
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'Helvetica', 'Arial', 'sans-serif']
      },
      height: {
        test: '20px'
      },
      width: {
        border: '37%'
      },
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
      boxShadow: {
        custom: '0px 20px 0px red'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
