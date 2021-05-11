import React, { useContext, useEffect } from 'react'
import ThemeContext  from '../context/theme/ThemeContext'

const ToggleTheme = () => {

    const themeContext = useContext(ThemeContext)
    const { isLightTheme, toggleTheme, light, dumsor } = themeContext;
    document.getElementById('root').style.backgroundColor = isLightTheme ? light.ui : dumsor.ui
    
        const styleToggle ={
            position:'fixed',
            minHeight:'70px',
            background:'#00D1E0',
            borderRadius:'3px',
            right:'1px',
            display:'grid',
            gridTemplateRows:'1fr',
            gridGap:'1.5px',
            padding:'2px',
            textAlign:'center',
            zIndex:10000,
        }
        const toggle = {
            height:'35px',
            width:'35px',
            borderRadius:'1px',
            padding:'3px 2px 2px',
            fontSize:'30px',
        }

    return(
        <div style={styleToggle} className="top-1 md:top-8">
            
            <div style={{background: isLightTheme ? light.ui : dumsor.ui}}>

            </div>
            <div onClick={() => toggleTheme()} style={toggle} className="switchBtn">&#127762;</div>
        </div>
    );
}

export default ToggleTheme;