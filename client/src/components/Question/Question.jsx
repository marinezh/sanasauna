import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./Question.module.css";

const checkAnswer = (correctAnswerIndex, chosenAnswerIndex) => {
  return correctAnswerIndex === chosenAnswerIndex;
};

const Question = ({
  questionTitle,
  options,
  correctOptionIndex,
  onUpdateResult,
}) => {
  const [answerDetails, setAnswerDetails] = useState({});

  useEffect(() => {
    setAnswerDetails({});
  }, [questionTitle]);

  const onOptionClick = (correctAnswerIndex, chosenAnswerIndex) => {
    const isAnswerCorrect = checkAnswer(correctAnswerIndex, chosenAnswerIndex);
    const answerDetails = {
      correctAnswerIndex: correctAnswerIndex,
    };
    if (!isAnswerCorrect) {
      answerDetails["chosenWrongAnswer"] = chosenAnswerIndex;
    }
    setAnswerDetails(answerDetails);
    onUpdateResult(isAnswerCorrect);
  };

  return (
    <div>
      <h3>{questionTitle}</h3>
      <div className="options">
        {options.map((value, index) => (
          <div
            className={`${classes.option} ${
              answerDetails.correctAnswerIndex === index
                ? classes.correctAnswer
                : ""
            } ${
              answerDetails.chosenWrongAnswer === index
                ? classes.wrongAnswer
                : ""
            }`}
          >
            <input
              type="radio"
              id={`option${index}`}
              name="option"
              className={classes.optionRadio}
              onClick={() => onOptionClick(correctOptionIndex, index)}
            />
            <label className="btn btn-default" for={`option${index}`}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
