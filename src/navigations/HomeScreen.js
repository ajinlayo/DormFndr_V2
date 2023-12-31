import React from "react";
import "./HomeScreen.css";
import NavigationButtons from './NavigationButtons.js';
import hompage1 from "../images/bg.png";
import hompage2 from "../images/bg2.png";
import hompage3 from "../images/information.png";
import box from "../images/Rectangle10.png";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="homepage-container">
        <div className="image-container">
        <NavigationButtons/>
          <img src={hompage1} alt="Image 1" />
          <img src={box} alt="Image 4" className="overlay-image" />
        </div>
        <img src={hompage2} alt="Image 2" />
        <img src={hompage3} alt="Image 3" />
      </div>
    </div>
  );
};

export default HomeScreen;
