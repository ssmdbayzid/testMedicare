

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  daisyui : {
    themes: [
      {
      light: {
        "primaryColor": '#0067FF',
        "secondaryColor": '#FFB60D',
        "purpleColor": '#9771FF',
        "irisBlueColor": '#01B5D8',
        "headingColor": '#181A1E',
        "textColor": '#4E545F',
      },
      
      dark: {

        "primaryColor": "#D9F99D",      
          "secondaryColor": "#FDE68A",        
          "purpleColor": "#4B5563",        
          "irisBlueColor": "#F3F4F6",        
          "headingColor": "#1F2937",        
          "textColor": "#98A8DD",        
          "success": "#1BBB70",        
          "warning": "#F59E0B",        
          "error": "#FB7185",
      }
    }
    ],
  },
  plugins: [require("daisyui")],
  // plugins: [],
}