module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'brand-blue': '#1992d4'
      },
      spacing: {
        '72': '18rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover'],
  },
  plugins: [],
};
