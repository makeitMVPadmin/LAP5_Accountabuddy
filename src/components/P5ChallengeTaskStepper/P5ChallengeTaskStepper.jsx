import React, { useState } from "react";
import "./P5ChallengeTaskStepper.scss";
import { useNavigate } from "react-router-dom";
import { Preview } from "@mui/icons-material";

const P5ChallengeTaskStepper = () => {
  const navigate = useNavigate();
  const taskDetails = {
    steps: [
      {
        stepTitle: "Connect with Partner",
        stepContent: [
          {
            sectionTitle: "LinkedIn",
            description:
              '• Connect with your partner by using the LinkedIn button located in the right tab next to "Connect." Alternatively, you can look them up by their username.',
          },
          {
            sectionTitle: "Google Meet",
            description:
              '• Use the Google Meet button in the right tab next to "Connect." This will direct you to Google Meet, where a meeting template will be prefilled, making it easier to schedule a session with your partner.',
          },
        ],
      },
      {
        stepTitle: "Review Partner's Code",
        stepContent: [
          {
            sectionTitle: "Send Your Code To Your Partner",
            description:
              "• After finishing you solution, send it to your partner.",
          },
          {
            sectionTitle: "Review Your Partners Code",
            description:
              "• Review Your partners code to make sure that it works as expected.\n• Make sure to note and potential improvements that could be made to your partners solution\n• Send any feedback you have back to your partner along with any relevant code snippets or comments",
          },
        ],
      },
      {
        stepTitle: "Finalize Solution Together",
        stepContent: [
          {
            sectionTitle: "Apply feedback",
            description:
              "• Collaborate with your partner to apply any feedback or improvements based on your reviews.",
          },
          {
            sectionTitle: "Test the Final Version",
            description:
              "• Work together to test the final solution and ensure everything functions correctly.",
          },
        ],
      },
    ],
  };

  const handleDashboard = () => {
    navigate("/ChallengePage");
  };
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < 3) {
      // Assuming you have 3 steps (you can adjust this value based on your step count)
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="task-stepper-container">
      {taskDetails.steps.map((step, index) => (
        <>
          <div key={index} className="step-section">
            {/* Dynamic Button for each step */}
            <div
              className={`step-button ${currentStep > index ? "completed" : currentStep === index ? "active" : ""}`}
              style={{ backgroundColor: step.buttonColor }}
            >
              <div className="button-text">{step.stepTitle}</div>
            </div>

            {/* Task Details */}
            <div className="task-details">
              {step.stepContent.map((content, subIndex) => (
                <div key={subIndex} className="task-section">
                  <div className="section-title">{content.sectionTitle}</div>
                  <div
                    className="section-description"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {content.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
      <div className="navigation-bottom-buttons">
        <button className="dashboard-button" onClick={handleDashboard}>
          <span className="dashboard-text">Dashboard</span>
        </button>

        {currentStep >= 3 ?
          <span className="next-text--completed">Completed!</span>
          :
          <button className={`next-button`} onClick={handleNextStep}>
            <span className="next-text">Next Step</span>
          </button>
        }
      </div>
    </div>
  );
};

export default P5ChallengeTaskStepper;
