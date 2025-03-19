import React from "react";
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
import { useGlobalContext } from "../hook/useGlobalContext.jsx";

function Img({ image }) {
  const { links, urls, alt_description, user } = image;
  
  const context = useGlobalContext();
  if (!context) {
    console.error("Error: useGlobalContext() is returning undefined.");
    return null;
  }
  
  const { likedImages, dispatch } = context;

  const addLikedImages = (image) => {
    console.log(image);
    
    if (!likedImages) return; 

    const alreadyAdded = likedImages.some((img) => img.id === image.id);

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };

  return (
    <div className="relative group">
      <span onClick={() => addLikedImages(image)} className="absolute h-7 w-7 border rounded-full flex items-center justify-center cursor-pointer right-3 top-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <FaRegHeart className="text-white" />
      </span>
      <img
        src={urls.regular}
        alt={alt_description}
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
      <span className="absolute h-7 w-7 border rounded-full flex items-center cursor-pointer left-2 bottom-2 bg-white invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <img src={user.profile_image.large} alt={`${user.name} avatar`} className="w-5 h-5 md:w-8 md:h-8 rounded-full" />
        <p className="text-white text-sm">{user.name}</p>
      </span>
      <span className="absolute h-7 w-7 border rounded-full flex items-center justify-center cursor-pointer right-3 bottom-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <a download href={`${links.download}&force=true`}>
          <FaDownload className="text-white" />
        </a>
      </span>
    </div>
  );
}

export default Img;
