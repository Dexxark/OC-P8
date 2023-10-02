import React from 'react';

const BannerHome = () => {
    return (
        <div className="banner">
            <img src="./img/banner-home.png" alt="Photographie de la côte" />
            <p>Chez vous, partout et ailleurs</p>
            <div className="overlay"></div>
        </div>
    );
};

export default BannerHome;