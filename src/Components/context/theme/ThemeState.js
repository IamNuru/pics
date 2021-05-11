import { useReducer } from 'react'
import { TOGGLE_THEME } from '../../types'
import ThemeContext from "./ThemeContext"
import ThemeReducer from './ThemeReducer'


const ThemeState = (props) => {

    const initialState = {
        isLightTheme : true,
        light: { textColor: 'black', bg:'white', ui:'white' },
        dumsor: { textColor: 'white', bg:'#ddd', ui:'#242424' },
    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    const toggleTheme = () =>{
        dispatch({
            type: TOGGLE_THEME,
        })
    }
    return (
        <ThemeContext.Provider value={{
            isLightTheme: state.isLightTheme,
            light: state.light,
            dumsor: state.dumsor,
            toggleTheme,
        }}>
            {props.children}
            
        </ThemeContext.Provider>
    )
}

export default ThemeState
