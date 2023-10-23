

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  daisyui : {
    themes: [
      {
      light: {
        primaryColor: '#0067FF',
        secondaryColor: '#FFB60D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5D8',
        headingColor: '#181A1E',
        textColor: '#4E545F',
      },
      
      dark: {
        "primary": "#D9F99D",      
          "secondary": "#FDE68A",        
          "accent": "#4B5563",        
          "neutral": "#F3F4F6",        
          "base-100": "#1F2937",        
          "info": "#98A8DD",        
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