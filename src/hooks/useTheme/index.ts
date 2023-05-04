import {useContext} from "react";
import {Theme, ThemeContext} from "@/providers/Theme";

export function useTheme(){
   const {theme,setTheme} = useContext(ThemeContext)
    function switchTheme(){
       let newTheme;
       switch (theme)
       {
           case Theme.LIGHT:
               newTheme = Theme.DARK;
               break;
           case Theme.DARK:
               newTheme = Theme.LIGHT
               break;
           default:
               return
       }
       setTheme?.(newTheme);
       localStorage.setItem('theme',newTheme);
    }
    return {theme,switchTheme}
}