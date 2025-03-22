import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ImgInfo() {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        
        setImageData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API error:", error);
        setError("Rasm yuklab bo‘lmadi!");
        setLoading(false);
      });
  }, [id]);

  const handleClick = () => {
    console.log("Rasm ID si:", id);
  };

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xato: {error}</p>;

  return (
    <div>
      <h2>ImgInfo - {id}</h2>
    </div>
  );
}

export default ImgInfo;
