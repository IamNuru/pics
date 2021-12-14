import React , { useReducer } from 'react';
import axios from "axios";
import PictureReducer from './PictureReducer'
import PictureContext from './PictureContext'

import { GET_PICTURES,SEARCH_PICTURES, 
    PICTURE_ERROR, SET_LOADING, GET_PICTURE, NEXT_PAGE, PREVIOUS_PAGE } from '../../types'


const PictureState = (props) => {

    const initialState = {
        pictures:null,
        loading:false,
        picture:null,
        picError:'',
        hits:0,
        initialLoad:true,
        page:1,
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
    //search pictures
	const searchPictures = async (text, pageNum) => {
		try {
			const res = await axios.get(`https://pixabay.com/api/?key=21564709-d1c838ec0d2802b5a893d39b6&q=${text}&image_type=photo&per_page=10&page=${pageNum ? pageNum : 1}`);
			
            // dispatch the response to the reducer
            // for the state to be updated
            dispatch({
				type: SEARCH_PICTURES,
				payload: res.data,
			});
		} catch (err) {
            dispatch({
				type: PICTURE_ERROR,
				payload: err,
			});
        }
	};


    //get a single picture
    const getPicture = id =>{
        dispatch({
            type: GET_PICTURE,
            payload: id
        })
    }

    

    //set loading to tru
    const setLoading = val =>{
        dispatch({
            type: SET_LOADING,
            payload: val
        })
    }

    //paginations
    const nextPage = () =>{
        setLoading(true)
        dispatch({
            type: NEXT_PAGE
        })
    }
    const previousPage = () =>{
        setLoading(true)
        dispatch({
            type: PREVIOUS_PAGE
        })
    }

    

    return (
        <PictureContext.Provider value={{
            pictures: state.pictures,
            picture: state.picture,
            loading: state.loading,
            initialLoad: state.initialLoad,
            page: state.page,
            getPictures,
            searchPictures,
            setLoading,
            getPicture,
            nextPage,
            previousPage,
        }}>
            {props.children}
        </PictureContext.Provider>
    )
}

export default PictureState;
