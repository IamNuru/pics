import React from 'react';
import ToggleTheme from './ToggleTheme'
import "../../styles/header.css"
import Search from './Search'


const Header = () => {
    return (
        <div className="container p-header pl-4 bg-black opacity-80"
        >
        <div className="header-search">
            <div className="w-full bg-gray-50 opacity-90 p-4">
                <h2 className='header-title text-xl md:text-4xl font-800'>Best Photos Anywhere</h2>
                <Search />
            </div>
        </div>

        <ToggleTheme />
        </div>

    )
}

export default Header
