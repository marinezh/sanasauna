import React, { useEffect, useState } from "react";

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
    <div className={classes.question_container}>
      <h3 className={classes.question_title}>{questionTitle}</h3>
      <div className="options">
        {options.map((value, index) => (
          <div className={classes.option_container}>
            <input
              type="radio"
              id={`option${index}`}
              name="option"
              className={classes.optionRadio}
              onClick={() => onOptionClick(correctOptionIndex, index)}
            />
            <label
              className={`${classes.option_label} ${
                answerDetails.correctAnswerIndex === index
                  ? classes.correctAnswer
                  : ""
              } ${
                answerDetails.chosenWrongAnswer === index
                  ? classes.wrongAnswer
                  : ""
              } btn btn-default`}
              htmlFor={`option${index}`}
            >
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
