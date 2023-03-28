/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.Errorbtn': {
          border:'1px solid #D86161',
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ]

}
