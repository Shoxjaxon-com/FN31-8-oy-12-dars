import React, { useEffect, useState } from "react";
import Search from "../componets/Search";
import { useActionData } from "react-router-dom";
import axios from "axios";
import ImgConteiner from "../componets/ImgConteiner";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return { search }; 
};

function Home() {
  const data = useActionData();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false);
  const searchQuery = data?.search || "all";
  

  const fetchImages = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${searchQuery}&page=${pageNumber}`
      );
      if (response.status === 200) {
        setImages((prevImages) => [...prevImages, ...response.data.results]); 
      }
    } catch (error) {
      console.log("API xatosi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setImages([]); 
    setPage(1);  
    fetchImages(1);
  }, [searchQuery]);

  const loadMoreImages = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      fetchImages(nextPage);
      return nextPage;
    });
  };

  return (
    <div className="align-elements">
      <div className="my-15">
        <Search />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {images.length > 0 && <ImgConteiner images={images} />}
      </div>
      <div className="flex justify-center my-5">
        <button 
          onClick={loadMoreImages} 
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default Home;
