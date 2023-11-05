import React from "react";
import { useNavigate } from "react-router-dom";
import fadpage1 from "../images/bg.png";

const BeOneScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="Be-One-screen">
      <div className="Be-One-container">
        <img src={fadpage1} alt="Image 1" />
    </div>
    </div>
  );
};

export default BeOneScreen;
