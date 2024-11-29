import React, { useState, useEffect } from "react";
import { ads } from "../data";

interface Props {
  adType: "default" | "rain" | "sun";
}
const ImageCycler: React.FC<Props> = ({ adType = "default" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads[adType].length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [ads[adType].length]);

  return (
    <a href={ads[adType][currentIndex].link}>
      <img
        className="rounded-lg h-60"
        src={ads[adType][currentIndex].img}
        alt={`Imagem ${currentIndex + 1}`}
        style={{ width: "100%" }}
      />
    </a>
  );
};

export default ImageCycler;
