import React from 'react'

const Picture = (props) => {
    const { webformatURL, userImageURL } = props.picture;

    const userImage = {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    }
    return (
        <div className='shadow-md text-center rounded-lg h-48 transition delay-300 duration-300 ease-in-out hover:bg-gray-400 max-height-12 w-full'>
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
                (<img src={webformatURL} alt="" srcSet="" className="w-full h-full"/>) 
            }
            <div className="-mt-12 ml-4 z-10 text-white flex">Image By : {<img src={userImageURL} alt="owner" srcSet="" className="-mt-2" style={userImage}/>} </div>
        </div>
    )
}

export default Picture
