import React, { useContext, useEffect } from "react";
import Picture from "./Picture";
import PictureContext from "../context/picture/PictureContext";
import ThemeContext from "../context/theme/ThemeContext";
import Loading from "./Loading";

import "../../styles/pictures.css"

const Pictures = () => {
  const {isLightTheme} = useContext(ThemeContext)
  const pictureContext = useContext(PictureContext);
  const { setLoading, getPictures, pictures, 
    loading, initialLoad, nextPage, previousPage, page} = pictureContext;

  
  useEffect(() => {
		setLoading(true)
		getPictures('usa')
    // eslint-disable-next-line
	}, [])

  const goNext = () =>{
    if (page >= Math.round(pictures?.total / 10)) {
      
    }else{
      nextPage()
    }
  }
  const goPrevious = () =>{
    if (page <= 1) {
      
    }else{
      previousPage()
    }
  }
 
 

  return (
    <div className="wrap-pictures block p-4">
      {
        initialLoad ? '' :
        !loading && pictures?.hits?.length > 0 &&
        <h2 className={`w-full text-center pt-4 pb-2 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
          Your search returns <span className="font-bold">{pictures.total}</span> photos
        </h2>
      }
      <div className={`explore rounded-md p-2 mb-2 shadow-lg ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
        <div className="block">
          <h2 className="text-2xl md:text-4xl font-semibold">Explore</h2>
          <small>Find the best photos around the globe</small>
        </div>
        <div className="pageCount">
            {
              initialLoad ? '' :
              <>page <div className="oldstyle-nums px-2 font-semibold">{page ? page : '...'}</div> of  <div className="oldstyle-nums px-2 font-semibold">{pictures?.total ? Math.round(pictures.total/10) : 1}</div></>
            }
        </div>
      </div>
      {!loading ? 
        pictures !== null ? (
          pictures.hits?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                {
                    pictures.hits.map((picture) => {
                      return <Picture key={picture.id} picture={picture} />;
                    })
                }
              </div>
            </>
            )
            : (
              <div className="col-span-full mb-8 font-bold text-center font-serif text-xl">
                Bros, na Rubbish you type so abeg no crush my app :(
              </div>
            )     
        ) : (
        <div className="col-span-full text-center py-4 text-gray-700 w-full">Search for picture</div>
      ): (
        <div className="mt-8">
          <Loading />
        </div>
      )}

        {
          initialLoad ? '' :
          <div className="pagination">
            <div 
              className={`previous ${page === 1 ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-black'}`} 
              title="Previous Page" 
              onClick={goPrevious}>

              <i className="fa fa-long-arrow-left pr-4"></i> 
              <span>Previous</span>
            </div>
            <div 
              className={`next ${page >= parseInt(Math.round(pictures?.total/10)) ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-black'}`} 
              title="Next Page" 
              onClick={goNext}>

              <span>Next</span>
              <i className="fa fa-long-arrow-right pl-4"></i>
            </div>
          </div>
      }
    </div>
  );
};

export default Pictures;
