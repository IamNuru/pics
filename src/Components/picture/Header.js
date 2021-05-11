import React from 'react';
import ToggleTheme from './ToggleTheme'

const Header = () => {
    return (
        <h2 className='text-indigo-800 h-16 bg-pink-300 text-center pt-4'>
            PICTURES APP
            <ToggleTheme />
        </h2>
    )
}

export default Header
