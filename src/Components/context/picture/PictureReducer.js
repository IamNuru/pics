import { GET_PICTURES,SEARCH_PICTURES, PICTURE_ERROR, 
    SET_LOADING, GET_PICTURE, NEXT_PAGE, PREVIOUS_PAGE } from '../../types'

const PictureReducer = (state, action) => {
    switch (action.type) {
        case GET_PICTURES:
            return {
                ...state,
                pictures: action.payload,
                loading: false,
                initialLoad:true,
            }
        case SEARCH_PICTURES:
            return {
                ...state,
                pictures: action.payload,
                loading: false,
                initialLoad:false,
            }
        case PICTURE_ERROR:
            return {
                ...state,
                picError: action.payload,
                loading: false
            }
        case GET_PICTURE:
            return {
                ...state,
                picture: state.pictures.hits.find(pic => pic.id === action.payload),
                
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        case NEXT_PAGE:
            return{
                ...state,
                page: state.page+1
            }
        case PREVIOUS_PAGE:
            return{
                ...state,
                page: state.page-1
            }
        default:
            return state;
    }
}

export default PictureReducer;
