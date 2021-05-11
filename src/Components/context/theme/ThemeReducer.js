import { TOGGLE_THEME } from '../../types';

const ThemeReducer = (state, action ) =>{
    switch (action.type) {
        case TOGGLE_THEME:
            return{
                ...state,
                isLightTheme: !state.isLightTheme
            }
    
        default:
            return{
                ...state
            }
    }
}
export default ThemeReducer;