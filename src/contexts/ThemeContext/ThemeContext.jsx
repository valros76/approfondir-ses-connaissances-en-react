import {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchDarkMode = () => {
    setDarkMode(() => !darkMode);
  }

  return(
    <ThemeContext.Provider value={ {darkMode, switchDarkMode} }>
      {children}
    </ThemeContext.Provider>
  );
}