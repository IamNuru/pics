import React , { useReducer }from 'react';
import axios from "axios";
import PictureReducer from './PictureReducer'
import PictureContext from './PictureContext'

import { GET_PICTURES, PICTURE_ERROR, CLEAR_PICTURES } from '../../types'


const PictureState = (props) => {

    const initialState = {
        pictures:null,
        loading:false,
        picError:''
    }

    const [state, dispatch] = useReducer(PictureReducer, initialState)


    //ACTIONS

    //get pictures
	const getPictures = async (text) => {
		try {
			const res = await axios.get(`https://pixabay.com/api/?key=21564709-d1c838ec0d2802b5a893d39b6&q=${text}&image_type=photo`);
			
            // dispatch the response to the reducer
            // for the state to be updated
            dispatch({
				type: GET_PICTURES,
				payload: res.data,
			});
		} catch (err) {
            dispatch({
				type: PICTURE_ERROR,
				payload: err,
			});
        }
	};

    //Clear Pictures
    const clearPictures = () =>{
        dispatch({
            type: CLEAR_PICTURES,

        })
    }

    return (
        <PictureContext.Provider value={{
            pictures: state.pictures,
            loading: state.loading,
            getPictures,
            clearPictures,
        }}>
            {props.children}
        </PictureContext.Provider>
    )
}

export default PictureState;
