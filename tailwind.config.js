/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBlue: colors.sky,
        warmGray: colors.stone,
        trueGray: colors.gray,
        coolGray: colors.coolGray,
        blueGray: colors.slate,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
