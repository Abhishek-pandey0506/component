import React from 'react';
import { MD3LightTheme, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { Colors, darkColors, FONTS } from '../utils';

export const ThemeContext = React.createContext({
    theme: MD3DarkTheme,
    isDarkMode: true,
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = React.useState(colorScheme === 'dark');

    // Create custom themes if you want to override default colors
    const customLightTheme = {
        ...MD3LightTheme,
        myOwnProperty: true,
        // Add your custom colors here
        colors: {
            ...MD3LightTheme.colors,
            ...Colors
        },
    };

    const customDarkTheme = {
        ...MD3DarkTheme,
        myOwnProperty: true,
        colors: {
            ...MD3DarkTheme.colors,
            ...darkColors
        },
        fonts: {
            ...MD3DarkTheme.fonts,
            regular: {
                fontFamily: FONTS.regular
            },
            medium: {
                fontFamily: FONTS.medium
            },
            semiBold: {
                fontFamily: FONTS.semiBold
            },
            bold: {
                fontFamily: FONTS.bold
            }
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Get the active theme based on isDarkMode
    const theme = isDarkMode ? customDarkTheme : customLightTheme;

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => React.useContext(ThemeContext);