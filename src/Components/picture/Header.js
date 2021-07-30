import React from 'react';
import ToggleTheme from './ToggleTheme'

const Header = () => {
    return (
        <h2 className='text-indigo-800 capitalize h-16 bg-pink-600 text-2xl text-center pt-4'>
           Mini Photo Gallery
            <ToggleTheme />
        </h2>
    )
}

export default Header
