/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0067FF',
        secondaryColor: '#FFB60D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5D8',
        headingColor: '#181A1E',
        textColor: '#4E545F',

      },
      
    },
  },
  plugins: [],
}

