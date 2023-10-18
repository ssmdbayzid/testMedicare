import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(false);

    const themeToggle = () =>{
        setDarkMode(!darkMode)
        console.log("Clicked on toggle Theme", darkMode)
    }

    return ( <ThemeContext.Provider value={{darkMode, themeToggle}}>
        {children}
    </ThemeContext.Provider>

    )}