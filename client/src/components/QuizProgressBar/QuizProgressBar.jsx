import React from "react";
import "./QuizProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

// TODO: Percentage/accomplished needs to be fixed.
const QuizProgressBar = ({ currentStep, totalSteps }) => {
  var stepPercentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <ProgressBar percent={stepPercentage}>
      {[...Array(totalSteps)].map(() => {
        return (
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
        );
      })}
    </ProgressBar>
  );
};

export default QuizProgressBar;
