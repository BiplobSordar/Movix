import React from "react";

import "./style.scss";
import Populer from './populer/Populer'

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import TopRated from "./topRated/TopRated";




const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Populer />
            <TopRated/>

            
        </div>
    );
};

export default Home;
