import React from "react";
import fadpage1 from "../images/terms1.png";
import fadpage2 from "../images/terms2.png";
import fadpage3 from "../images/terms3-withoutbutton.png";

const TermsScreen = () => {
  return (
    <div className="terms-screen">
      <div className="terms-container">
        <img src={fadpage1} alt="Image 1" />
        <img src={fadpage2} alt="Image 2" />
        <img src={fadpage3} alt="Image 3" /> 
      </div>
    </div>
  );
};

export default TermsScreen;
