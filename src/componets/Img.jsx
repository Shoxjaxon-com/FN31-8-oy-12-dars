import React from "react";
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
// import { useGlobalContext } from "../hook/useGlobalContext.jsx";

function Img({ image }) {
  const { links, urls, alt_desciption, user } = image;

  return (
    <div className="relative group">
      {true && (
        <span className="absolute h-7 w-7 border rounded-full flex justify-center items-center cursor-pointer right-3 top-3 invisible opacity-0 group-hover: opacity-100 group-hover:visible transition-all duration-300" >
          <FaRegHeart className="text-white" />
        </span>
      )}
      {false && (
        <span className="absolute h-7 w-7 border rounded-full flex justify-center items-center cursor-pointer right-3 top-3 invisible opacity-0 group-hover: opacity-100 group-hover:visible transition-all duration-300">
          <FaHeart className="text-red-600" />
        </span>
      )}
      <img
        src={urls.regular}
        alt={alt_desciption}
        className="w-full rounded-md"
      />
      <span className="absolute flex gap-3 justify-center items-center cursor-pointer left-3 bottom-3 invisible opacity-0 group-hover: opacity-100 group-hover:visible transition-all duration-300">
        <img src={user.profile_image.large} alt={user.name + " avatar"} className="w-5 h-5 md: w-8 md: h-8 rounded-full"/>
        <p className="text-white text-xs md:text-sm">{user.name}</p>
      </span>
      <span className="absolute h-7 w-7 border rounded-full flex justify-center items-center cursor-pointer right-2 bottom-2 invisible opacity-0 group-hover: opacity-100 group-hover:visible transition-all duration-300">
          <a download href={links.download + "&force=true"}>
            <FaDownload className="text-white text-sm"/>
            </a>      
      </span>
    </div>
  );
}

export default Img;
