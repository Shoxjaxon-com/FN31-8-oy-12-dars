import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Img from './Img';

function ImgConteiner({ images }) {
  return (
    <div className="flex justify-center items-center min-h-1/2 w-screen container">
      <div className="max-w-screen-2xl w-full mx-auto px-5">
        <ResponsiveMasonry columnsCountBreakPoints={{
          350: 2,
          768: 3,
          1024: 4,
          1280: 5,
        }}>
          <Masonry gutter="15px">
            {images.map((img, key) => (
              <Img
                key={key}
                src={img.urls.regular}
                image={img}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default ImgConteiner;
