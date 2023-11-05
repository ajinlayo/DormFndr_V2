import React from "react";
import fadpage1 from "../images/accveriwobutton.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AccountVerificationScreen = () => {
  const navigate = useNavigate(); // Don't forget to define navigate

  const navigateToLogIn = () => {
    navigate("/login"); // Now navigate is defined
  };

  return (
    <div className="Account-screen">
      <div className="Account-container">
        <img src={fadpage1} alt="Image 1" />
      </div>
    </div>
  );
};

export default AccountVerificationScreen;
