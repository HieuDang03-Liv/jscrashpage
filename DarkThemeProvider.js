import React, { useEffect, useReducer } from 'react'

export const DarkThemeContext = React.createContext()

let initialDarkThemeState

// useEffect(() => {
initialDarkThemeState = JSON.parse(window.localStorage.getItem('dark-theme'))
// }, [])

const darkThemeReducer = (state, action) => {
    switch (action.type) {
        case 'DARK_MODE':
            return true
        case 'LIGHT_MODE':
            return false
        default:
            return state
    }
}

const DarkThemeProvider = ({ children }) => {
    const [darkTheme, dispatch] = useReducer(
        darkThemeReducer,
        initialDarkThemeState
    )

    return (
        <DarkThemeContext.Provider
            value={{
                darkThemeState: darkTheme,
                darkThemeDispatch: dispatch,
            }}
        >
            {children}
        </DarkThemeContext.Provider>
    )
}

export default ({ element }) => <DarkThemeProvider>{element}</DarkThemeProvider>
