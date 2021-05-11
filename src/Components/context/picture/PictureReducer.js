import { GET_PICTURES, PICTURE_ERROR, CLEAR_PICTURES } from '../../types'

const PictureReducer = (state, action) => {
    switch (action.type) {
        case GET_PICTURES:
            return {
                ...state,
                pictures: action.payload.hits,
                loading: false
            }
        case PICTURE_ERROR:
            return {
                ...state,
                picError: action.payload
            }
        case CLEAR_PICTURES:
            return {
                ...state,
                pictures: null
            }
            
        default:
            return state;
    }
}

export default PictureReducer;
