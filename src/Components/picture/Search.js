import React, { useRef, useContext } from 'react'
import PictureContext  from '../context/picture/PictureContext'


const Search = () => {
    const pictureContext = useContext(PictureContext);
    const { clearPictures, getPictures } = pictureContext;

	const text = useRef('')

	const onSubmit = (e) =>{
		e.preventDefault();
		clearPictures()
		getPictures(text.current.value);
	}

    return (
        <div className="block shadow-md bg-pink-100 p-4">
			<form onSubmit={onSubmit} className="block">
				<div className="mt-1">
					<div className="flex">
						<input
							type="text"
							name="storeName"
							placeholder="Search for Image"
							id="name"
							className=" ml-auto h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                            shadow-md sm:text-sm px-1 border-gray-300 mr-1"
							required
							ref={text}
							// value={storeName}
							// onChange={onChange}
						/>
                        <button
							className="w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold 
                        py-2 px-4 rounded"
						>
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
    )
}

export default Search
