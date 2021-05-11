import React, { useContext , useEffect} from 'react'
import Picture from './Picture'
import PictureContext  from '../context/picture/PictureContext'

const Pictures = () => {

    const pictureContext = useContext(PictureContext);
    const { pictures, getPictures, loading, clearPictures } = pictureContext;


    useEffect(() => {
        //getPictures();

        // eslint-disable-next-line 

    }, [])

    return (
        <div className="wrap-pictures block p-4">
            {
            loading === true && 
                <div class="flex justify-around bg-gray-400 mb-2">
                    <span class="inline-flex rounded-md shadow-sm">
                        <div class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white transition ease-in-out duration-150">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            loading
                        </div>
                    </span>
                </div>
  
                }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center'>
                {
                    pictures !== null ?
                        pictures.length > 0 ? 
                            pictures.map(picture => {
                                return <Picture key={picture.id} picture={picture}/>
                            })
                            : 
                            (
                                <div className="col-span-full font-bold text-center font-serif text-xl">Bros, na Rubbish you type so abeg no crush my app :(</div>
                            )
                        :
                        ('Search for a picture')
                }
            </div>
            {
                pictures !== null &&
                <button type="button" className="w-full mt-4 px-4 py-2 h-12 rounded-md text-center bg-green-600 text-white" 
                    onClick={() => clearPictures()}>
                        CLEAR
                </button>
            }
            
        </div>
    )
}

export default Pictures
