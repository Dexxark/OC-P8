import React from 'react';
import Navigation from "../components/Navigation.js";
import CardList from '../components/CardList.js';
import BannerHome from '../components/BannerHome.js';
import Footer from '../components/Footer.js';

const Home = () => {        
    return (
        <div>
            <Navigation />
            <BannerHome/>
            <CardList/>
            <Footer/>
        </div>
    );
};

export default Home;