import React, { useState, useEffect } from "react";
import { ads } from "../data";

const ImageCycler: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual da imagem

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [ads.length]);

  return (
    <a href={ads[currentIndex].link}>
      <img
        className="rounded-lg"
        src={ads[currentIndex].img}
        alt={`Imagem ${currentIndex + 1}`}
        style={{ width: "100%", height: "auto" }}
      />
    </a>
  );
};

export default ImageCycler;
