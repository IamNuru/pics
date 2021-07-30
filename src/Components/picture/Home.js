import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../Components/picture/Header";
import Pictures from "../../Components/picture/Pictures";
import Search from "../../Components/picture/Search";
import Footer from "../../Components/picture/Footer";
import ThemeContext from "../context/theme/ThemeContext";
import bg from "../../bg.png";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import PictureContext from "../context/picture/PictureContext";

const Home = () => {
  const { isLightTheme } = useContext(ThemeContext);
  const { picture } = useContext(PictureContext)
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (picture !== null) {
        setModal(true)
    }
    // eslint-disable-next-line
  }, [picture]);

  return (
    <Fragment>
      <div
        className={`${
          isLightTheme ? "bg-gray-100" : "bg-white"
        } max-w-screen-sm m-auto min-h-screen flex flex-col px-4 pt-1`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {picture !== null && (
          <PureModal
            header={
                <div className="flex justify-between flex-wrap">
                    <div>By: {picture.user}</div>
                    <img src={picture.userImageURL} alt="owner" srcSet="" className="h-8 w-8 rounded-full" />
                </div>
              }

            footer={
              <p className="text-pink-600 italic text-center text-xs">
                powered by pixabay, designed by Abdulai Nuru-deen
              </p>
            }
            isOpen={modal}
            closeButton="close"
            closeButtonPosition="bottom"
            onClose={() => {
              setModal(false);
              return true;
            }}
            draggable={true}
            className="bg-red-600"
            style={{minWidth:'450px', maxWidth:'640px'}}
          >
            <div className="w-full block">
            {
                !picture.webformatURL ?
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
                (<img src={picture.webformatURL} alt={picture.user} className="object-cover w-full h-full"/>) 
            }
            <div className="text-center my-4">
                <a 
                href={`${picture.pageURL}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800">Click Here for the full url</a>
            </div>
            <div className="flex">
                <label className="text-gray-700">tags:&nbsp;</label> {picture.tags}
            </div>
            <div className="block mt-4">
                <div className="flex">
                    <label className="text-gray-700">downloads: &nbsp;</label>
                    <label>{picture.downloads} </label>
                </div>
                <div className="flex">
                    <label className="text-gray-700">comments: &nbsp;</label>
                    <label>{picture.comments} </label>
                </div>
                <div className="flex">
                    <label className="text-gray-700">likes: &nbsp;</label>
                    <label>{picture.likes} </label>
                </div>
            </div>
            </div>
          </PureModal>
        )}
        <Header />
        <Search />
        <Pictures />
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
