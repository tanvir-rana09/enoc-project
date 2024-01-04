const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        extendfont1: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        extendfont2: ['"Cinzel"', ...defaultTheme.fontFamily.sans],
        extendfont3: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.sans],
        extendfont4: ['"Oswald"', ...defaultTheme.fontFamily.sans],
        extendfont5: ['"Rethink Sans"', ...defaultTheme.fontFamily.sans],
        extendfont6: ['"Righteous"', ...defaultTheme.fontFamily.sans],
        extendfont7: ['"Sen"', ...defaultTheme.fontFamily.sans],
        extendfont8: ['"Sevillana"', ...defaultTheme.fontFamily.sans],
        extendfont9: ['"Whisper"', ...defaultTheme.fontFamily.sans],
        extendfont10: ['"forum"', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary:'#0148FF',

      }
    },
  },
  plugins: [],
}

