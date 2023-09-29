import React from 'react';
import "../style/components/_banner.scss";

const BannerAbout = () => {
    return (
        <div className="banner about">
            <img src="./img/banner-about.png" alt="Photographie de nature" />
            <div className="overlay"></div>
        </div>
    );
};

export default BannerAbout;