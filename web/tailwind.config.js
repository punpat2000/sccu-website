module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'pink': '#FA98A5',
      'lightgray': '#C4C4C4',
    }),
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'mitr': ['"Mitr"', 'sans-serif']
      }
    },
    textColor: theme => theme('colors'),
     textColor: {
      'brown': '#685E5F',
      'white': '#FFFFFF'
     },
     borderColor: theme => ({
      ...theme('colors'),
      'pink': '#FA98A5',
      'lightgray': '#C4C4C4',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
