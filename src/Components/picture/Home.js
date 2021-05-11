import React, { Fragment , useContext} from 'react';
import Header from '../../Components/picture/Header'
import Pictures from '../../Components/picture/Pictures'
import Search from '../../Components/picture/Search'
import Footer from '../../Components/picture/Footer'
import ThemeContext  from '../context/theme/ThemeContext'

const Home = () => {
    const themeContext = useContext(ThemeContext)
    const { isLightTheme, toggleTheme, light, dumsor } = themeContext;
    
    return (
        <Fragment>
            <div className="max-w-screen-sm m-auto h-screen flex flex-col px-4 pt-1"
            style={{background: isLightTheme ? '#aabbcc' : light.ui}}>
                <Header />
                <Search />
                <Pictures />
                <div className="flex-grow"></div>
                <Footer />
          </div>
        </Fragment>
    )
}

export default Home;
