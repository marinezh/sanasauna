import React from "react";

import { ProgressBar, Step } from "react-step-progress-bar";

import "./QuizProgressBar.css";

// TODO: Percentage/accomplished needs to be fixed.
const QuizProgressBar = ({ currentStep, totalSteps }) => {
  const stepPercentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <ProgressBar percent={stepPercentage}>
      {[...Array(totalSteps)].map((_, i) => {
        return (
          <Step key={i}>
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
