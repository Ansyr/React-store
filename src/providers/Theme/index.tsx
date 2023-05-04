import React, {createContext, useState} from 'react';

export enum Theme{
    LIGHT = "light",
    DARK = "dark"
}
interface ThemeProviderProps{
    children?:React.ReactNode;
    initTheme?:Theme;
}

interface ThemeContextProps{
    theme?: Theme;
    setTheme?:(theme: Theme)=>void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT;
const ThemeProvider = ({children,initTheme}: ThemeProviderProps) => {
    const [theme,setTheme] = useState<Theme>(defaultTheme)
    return (
        <ThemeContext.Provider value={{setTheme,theme}}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;