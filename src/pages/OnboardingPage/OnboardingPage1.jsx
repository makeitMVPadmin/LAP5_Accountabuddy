import React, { useState } from "react";
import "./OnboardingPage.scss";
import Button from "../../components/Button/Button";
import loadingInactiveIcon from "../../assets/images/loadingInactiveIcon.svg";
import loadingActiveIcon from "../../assets/images/loadingActiveIcon.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

const OnboardingPage1 = ({ onNext, onBack, progressBarIndex }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button);
    onNext();
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-page__container">
        <>
          <div className="left-arrow-container" onClick={onBack}>
            <img src={arrowLeft} alt="arrowLeft" className="arrow-left" />
          </div>
          <div className="onboarding-page__text-container">
            <div className="welcome-message">
              What field are you looking to work on?{" "}
            </div>
          </div>
          <div className="onboarding-button-container">
            <Button
              text="Design"
              color="white"
              eventListener={() => handleClick("design")}
            />
            <Button
              text="Development"
              color="white"
              eventListener={() => handleClick("development")}
            />
          </div>
          <div className="loading-icon-container">
            <img
              src={
                progressBarIndex === 0 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingIcon"
            />
            <img
              src={
                progressBarIndex === 1 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingIcon"
            />
            <img
              src={
                progressBarIndex === 2 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingIcon"
            />
            <img
              src={
                progressBarIndex === 3 ? loadingActiveIcon : loadingInactiveIcon
              }
              alt="loadingIcon"
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default OnboardingPage1;