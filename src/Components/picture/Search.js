import React, { useRef, useContext, useEffect } from 'react'
import PictureContext  from '../context/picture/PictureContext'


const Search = () => {
    const pictureContext = useContext(PictureContext);
    const { searchPictures, setLoading, page } = pictureContext;

	const text = useRef('')

	const onSubmit = (e) =>{
		e.preventDefault();
		setLoading(true)
		searchPictures(text.current.value);
	}

	useEffect(() => {
		searchPictures(text.current.value, page);
		// eslint-disable-next-line
	}, [page])


    return (
        <div className="block shadow-md w-full d-flex">
			<form onSubmit={onSubmit} className="block">
				<div className="mt-1">
					<div className="flex">
						<input
							type="text"
							name="storeName"
							placeholder="What image are you looking for?"
							id="name"
							className="search-input ml-auto h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full
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
