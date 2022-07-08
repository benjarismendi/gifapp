import { getTrending } from "../helpers/getTrending";
import { GifItem } from "./GifItem";
import { useState, useEffect } from "react";

export const TrendingTab = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const trendings = await getTrending();
    setImages(trendings);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="tab-panel">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
