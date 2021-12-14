import React, { useContext } from 'react'
import ThemeContext from "../context/theme/ThemeContext";

const Footer = () => {
    const { isLightTheme } = useContext(ThemeContext);


    return (
        <footer className={`bottom-0 mb-1 text-xs mt-4 text-center ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
            Made with <span className="text-pink-800 text-2xl">&#9829;</span> using reactjs.
        </footer>
    )
}

export default Footer
