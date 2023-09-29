import React, { useState } from 'react';
import "../style/components/_carousel.scss";

const Carousel = ({ housingData }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const previous = () => {
    setImageIndex((index) => (index === 0 ? housingData.pictures.length - 1 : index - 1));
  };

  const next = () => {
    setImageIndex((index) => (index === housingData.pictures.length - 1 ? 0 : index + 1));
  };

  const currentImage = housingData.pictures[imageIndex];

  if (housingData.pictures.length === 1) {
    return (
        <img src={currentImage} alt={housingData.title} className="carousel" />
    );
  }

  const count = imageIndex+1 + "/" + housingData.pictures.length;

  return (
    <div className="carousel">
      <img src={currentImage} alt={housingData.title} className="carousel-image" />
      <div className="count">{count}</div>
      <div className="arrows">
        <img className="arrow-left" src="./img/arrow-left.png" alt="Défilement vers la gauche" onClick={previous} />
        <img className="arrow-right" src="./img/arrow-right.png" alt="Défilement vers la droite" onClick={next} />
      </div>
    </div>
  );
};

export default Carousel;