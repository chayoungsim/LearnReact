import React from "react";
import Slide from "./main/slide";
import SlideGsap from "./main/SlideGsap";
import SlideAlly from "./main/SlideAlly";
import SlideResponsive from "./main/SlideResponsive";

const Home = () => {
    return <div className="main">
        <h2>메인</h2>
        <Slide />
        <SlideGsap />
        <SlideAlly />
        <SlideResponsive />
    </div>;
};

export default Home;
