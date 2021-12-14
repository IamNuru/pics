import React, { useContext } from 'react'
import PictureContext from '../context/picture/PictureContext';
import ThemeContext from '../context/theme/ThemeContext';


const Picture = (props) => {
    const { webformatURL, userImageURL, id, user, downloads, likes } = props.picture;
    const { getPicture } = useContext(PictureContext);
    const { isLightTheme } = useContext(ThemeContext);

    const getPic =  () =>{
        getPicture(id)
    }

    const userImage = {
        width: '24px',
        height: '24px',
        borderRadius: '50%'
    }
    return (
        <div onClick={getPic} 
        className={`picture-wrapper cursor-zoom-in shadow-md text-center rounded-lg h-56 
        transition delay-200 duration-300 ease-in-out hover:bg-gray-500 max-height-24 
        w-full p-2 d-block ${isLightTheme ? 'border-0' : 'bg-white'}`}>
            {
                !webformatURL ?
                    <div class="flex justify-around bg-gray-400 mb-2 h-full w-full">
                        <span class="inline-flex rounded-md shadow-sm">
                            <div class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white transition ease-in-out duration-150">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                        </span>
                    </div>
                :
                (<img src={webformatURL} alt="" srcSet="" 
                className="main-image object-cover w-full rounded-md"/>) 
            }
            <div className={`picture-desc transition delay-300 ease-in-out z-10 flex 
            place-content-between ${isLightTheme ? 'text-gray-600' : 'text-gray-900'}`}>
                <div>
                    <div className="flex justify-center align-center flex-start">
                        {
                            userImageURL ? 
                            <img src={userImageURL} alt="owner" srcSet="" style={userImage}/>
                            :
                            <div className="bg-gray-400" style={userImage}>
                                <i className="fa fa-user"></i>
                            </div>
                        } 
                        <div className='pl-1'>{user}</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex justify-center align-center mr-4">
                        <i className="fa fa-download text-md flex align-center"></i>
                        <div className="pl-1 text-sm font-700">{downloads}</div>
                    </div>
                    <div className="flex justify-center align-center">
                        <i className="fa fa-heart text-md flex align-center"></i>
                        <div className="pl-1 text-sm font-700">{likes}</div>
                    </div>
                </div>
            </div>
            {/* <div className="-mt-12 ml-4 z-10 text-white flex">Image By : {<img src={userImageURL} alt="owner" srcSet="" className="-mt-2" style={userImage}/>} </div> */}
        </div>
    )
}

export default Picture
