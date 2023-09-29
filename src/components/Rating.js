import React from 'react';
import "../style/components/_rating.scss";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    let srcStar = "../img/star-empty.png"
    let altStar = "Etoile vide";

    if (i < rating) {
        srcStar = "../img/star-full.png"
        altStar = "Etoile pleine";
    }

    const star = <img key={i} src={srcStar} alt={altStar} className="star"/>;
    stars.push(star);
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;