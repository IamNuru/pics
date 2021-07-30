import React, { useContext, useEffect } from "react";
import Picture from "./Picture";
import PictureContext from "../context/picture/PictureContext";
import Loading from "./Loading";

const Pictures = () => {
  const pictureContext = useContext(PictureContext);
  const { pictures, loading, clearPictures } = pictureContext;

  useEffect(() => {
    //getPictures();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wrap-pictures block p-4">
      
      {!loading ? 
        pictures !== null ? (
          pictures.hits?.length > 0 ? (
            <>
              <h2 className="w-full text-center py-4">
                Your search returns <span className="font-bold">{pictures.total}</span> photos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
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
        <div className="col-span-full text-center py-4 text-gray-700 w-full">Search for an picture</div>
      ): (
        <div className="mt-8">
          <Loading />
        </div>
      )}

      {pictures !== null && (
        <button
          type="button"
          className="w-full mt-4 py-1 shadow-2xl text-xl shadow-inner text-center bg-pink-600 border text-white"
          onClick={() => clearPictures()}
        >
          CLEAR
        </button>
      )}
    </div>
  );
};

export default Pictures;
