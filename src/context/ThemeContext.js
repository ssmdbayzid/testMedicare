import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{    
    const [theme, setTheme] = useState(false);

useEffect(()=>{
    let storedTheme = localStorage.getItem("theme");

    if(!storedTheme || !(storedTheme === "dark" || storedTheme === "light")){
        // get device  theme
        storedTheme = window.matchMedia("(prefers-color-schema: dark)").matches ? "dark"
        : "light";
    }
    setTheme(storedTheme)
},[])

useEffect(()=>{
    // document.querySelector("html").setAttribute("data-theme", theme)
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle(theme);
},[theme])


useEffect(()=>{

    // change site theme when device theme changing

    const onChange = (e) =>{
        const colorScheme = e.matches ? "dark" : "light";
        setTheme(colorScheme)
    }
    
    // get device theme & add even listener
    window
    .matchMedia("(prefers-color-scheme : dark)")
    .addEventListener("change", onChange)

    return () =>{
        // remove even listener when changed
        window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChange)
    }
},[])
    const themeToggle = () =>{
        setTheme((preTheme)=>{
            const currentTheme = preTheme  === "dark" ? "light" : "dark";
            localStorage.setItem("theme", currentTheme)
            return currentTheme;
        })        
    }

    return ( <ThemeContext.Provider value={{theme, themeToggle}}>
        {children}
    </ThemeContext.Provider>
    )}