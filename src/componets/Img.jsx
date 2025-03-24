import React from "react";
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
import { useGlobalContext } from "../hook/useGlobalContext";
import { useNavigate } from "react-router-dom";

function Img({ image }) {
  const { dispatch, likedImages } = useGlobalContext();
  const navigate = useNavigate();

  const { urls, alt_description, user, links } = image;
  const isLiked = likedImages.some((img) => img.id === image.id);

  const addLikedImage = (image, event) => {
    event.preventDefault();
    if (!isLiked) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };

  const downloadImg = async (e) => {
    e.preventDefault();

    dispatch({ type: "DOWNLOAD", payload: image });

    try {
      // 1. API orqali yuklab olish tugmachasi bosilganini xabar qilish
      await fetch(links.download_location, { method: "GET" });

      // 2. Rasmni yuklab olish
      const link = document.createElement("a");
      link.href = links.download + "&force=true";
      link.target = "_blank";
      link.download = `unsplash-${image.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Rasm yuklab olinmadi:", error);
    }
  };

  return (
    <div className="relative group">
      <span
        onClick={(event) => addLikedImage(image, event)}
        className="absolute h-7 w-7 border rounded-full flex justify-center items-center cursor-pointer right-3 top-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
      >
        {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-white" />}
      </span>

      <img src={urls.regular} alt={alt_description} className="w-full rounded-md" />

      <span className="absolute flex gap-3 justify-center items-center cursor-pointer left-3 bottom-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <img src={user.profile_image.large} alt={user.name + " avatar"} className="w-5 h-5 md:w-8 md:h-8 rounded-full" />
        <p className="text-white text-xs md:text-sm">{user.name}</p>
      </span>

      <span className="absolute h-7 w-7 border rounded-full flex justify-center items-center cursor-pointer right-2 bottom-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <span onClick={(e) => downloadImg(e)}>
          <FaDownload className="text-white text-sm" />
        </span>
      </span>
    </div>
  );
}

export default Img;
