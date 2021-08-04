module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#58A5FF',
        purple: '#8E4CE2',
        green: '#26CFA7',
        blue: '#0A97E8',
        'blue-100': '#5C80FF',
        red: '#F40000',
        'red-500': '#E35454',
        'grey-100': '#F7F8FB',
        'grey-200': '#FAFBFD',
        'grey-300': '#B6B7C4',
        'grey-400': '#B6B7C3',
        'grey-500': '#5D607A',
        'grey-600': '#1D1D52',
        'grey-700': '#0C0E1B',
        'grey-800': '#161731'
      },
      fontFamily: {
        'manrope-light': ['Manrope-Light'],
        'manrope': ['Manrope'],
        'manrope-medium': ['Manrope-Medium'],
        'manrope-semibold': ['Manrope-SemiBold'],
      },
      borderRadius: {
        custom: '19px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
