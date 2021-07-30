import { GET_PICTURES, PICTURE_ERROR, CLEAR_PICTURES, SET_LOADING, GET_PICTURE } from '../../types'

const PictureReducer = (state, action) => {
    switch (action.type) {
        case GET_PICTURES:
            return {
                ...state,
                pictures: action.payload,
                loading: false
            }
        case PICTURE_ERROR:
            return {
                ...state,
                picError: action.payload,
                loading: false
            }
        case CLEAR_PICTURES:
            return {
                ...state,
                pictures: null
            }
        case GET_PICTURE:
            return {
                ...state,
                picture: state.pictures.hits.find(pic => pic.id === action.payload)
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default PictureReducer;
