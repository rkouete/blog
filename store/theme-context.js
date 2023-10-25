import { createContext, useState } from "react";

const ThemeContext = createContext({
    theme: 'DARK',
    darkTheme: function () { },
    lightTheme: function () { }
});

export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('DARK')

    const darkThemeHandler = () => {
        setTheme('DARK');
    }

    const lightThemeHandler = () => {
        setTheme('LIGHT');
    }

    const context = {
        theme: theme,
        darkTheme: darkThemeHandler,
        lightTheme: lightThemeHandler,
    }

    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;