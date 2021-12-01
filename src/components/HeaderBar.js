import React, { useContext } from 'react'
import '../styles/HeaderBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import useDarkMode from '../hooks/useDarkMode'
import { DarkThemeContext } from '../../DarkThemeProvider'

function HeaderBar({ children }) {
    const [darkMode, setDarkMode] = useDarkMode(true)

    const { darkThemeDispatch } = useContext(DarkThemeContext)

    const changeMode = () => {
        if (!darkMode) {
            darkThemeDispatch({ type: 'DARK_MODE' })
            setDarkMode(!darkMode)
        } else {
            darkThemeDispatch({ type: 'LIGHT_MODE' })
            setDarkMode(!darkMode)
        }
    }

    return (
        <React.Fragment>
            <header>
                <button id='logo'>
                    <Link to='/'>javaScriptCrash</Link>
                </button>
                <nav>
                    <button onClick={changeMode}>
                        {darkMode ? (
                            <FontAwesomeIcon icon={faSun} className='icons' />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} className='icons' />
                        )}
                    </button>
                </nav>
            </header>
            <React.Fragment>{children}</React.Fragment>
        </React.Fragment>
    )
}

export default HeaderBar
