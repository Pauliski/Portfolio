import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [isLight, setIsLight] = useState(true)
    const layoutColor = isLight ? {
        fontColorOne: '#000000',
        fontColorTwo: '#77777a',
        cardColor: '#FFFFFF',
        background: '#F4F5F7',
        buttonColor: '#AFB42B',
        overlay: '#ffffffcc'
        
    }:{
        fontColorOne: '#FFFFFF',
        fontColorTwo: '#77777a',
        cardColor: '#2c2c38',
        background: '#1e1e28',
        buttonColor: '#ffc107',
        overlay: '#000000cc'
    }


  return (
    <div><ThemeContext.Provider value={{...layoutColor, isLight, setIsLight}}>
        {children}
        </ThemeContext.Provider></div>
  )
}

export default ThemeContextProvider