const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content:[
    './src/**/*{js,jsx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
        "logo-uneg": "url('/src/assets/logo.png')",
      }
    },
  },
  // ...
}