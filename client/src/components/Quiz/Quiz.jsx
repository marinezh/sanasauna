import React from "react";
import { useState } from "react";

import Question from "../Question/Question";
import QuizProgressBar from "../QuizProgressBar/QuizProgressBar";

import classes from "./Quiz.module.css";

const getCountOfAvailableOptions = (dataLength) => Math.min(4, dataLength);

const getPossibleWrongOptions = (data, currentIndex) => {
  const options = data.map((item) => item.translation);
  options.splice(currentIndex, 1);
  return options;
};

const getCorrectAnswer = (data, correctAnswerIndex) =>
  data[correctAnswerIndex].translation;

const getCorrectAnswerIndex = (options, correctAnswer) => {
  return options.indexOf(correctAnswer);
};

const preparePossibleOptions = (data, currentQuestion) => {
  const wrongOptions = getPossibleWrongOptions(data, currentQuestion - 1);

  // shuffle wrong answers
  const shuffledWrongOptions = wrongOptions.sort(() => 0.5 - Math.random());
  const countOfAvailableOptions = getCountOfAvailableOptions(data.length);

  //  Select one less option so that we can add correct options to the array later
  let selectedOptions = shuffledWrongOptions.slice(
    0,
    countOfAvailableOptions - 1
  );
  const correctAnswer = getCorrectAnswer(data, currentQuestion - 1);
  selectedOptions.push(correctAnswer);

  // shuffle final selectedOptions
  const optionsToPresent = selectedOptions.sort(() => 0.5 - Math.random());

  return optionsToPresent;
};

const getTotalRightAnswers = (result) => {
  return Object.values(result).filter((r) => r === true).length;
};

const getCurrentQuestionDetails = (currentQuestionNumber, data) => {
  const questionOptions = preparePossibleOptions(data, currentQuestionNumber);
  const correctOptionIndex = getCorrectAnswerIndex(
    questionOptions,
    getCorrectAnswer(data, currentQuestionNumber - 1)
  );
  return {
    currentQuestionNumber: currentQuestionNumber,
    questionOptions: questionOptions,
    correctOptionIndex: correctOptionIndex,
  };
};

const Quiz = ({ data }) => {
  const [currentQuestionDetails, setCurrentQuestionDetails] = useState(
    getCurrentQuestionDetails(1, data)
  );
  const [result, setResult] = useState({});
  const [showResult, setShowResult] = useState(false);

  const updateCurrentQuestionDetails = (currentQuestionNumber, data) => {
    setCurrentQuestionDetails(
      getCurrentQuestionDetails(currentQuestionNumber, data)
    );
  };

  const resetQuiz = () => {
    setCurrentQuestionDetails(getCurrentQuestionDetails(1, data));
    setShowResult(false);
    setResult({});
  };

  return (
    <div className={classes.quiz_container}>
      <QuizProgressBar
        currentStep={currentQuestionDetails.currentQuestionNumber - 1}
        totalSteps={data.length}
      />
      {showResult ? (
        <div>
          <h3>
            {`You got ${getTotalRightAnswers(result)} / ${data.length} correct`}
          </h3>
          <button onClick={() => resetQuiz()}>Try again</button>
        </div>
      ) : (
        <div className={classes.questionContainer}>
          <button
            className={classes.arrowButton}
            onClick={() =>
              updateCurrentQuestionDetails(
                currentQuestionDetails.currentQuestionNumber - 1,
                data
              )
            }
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div>
            <Question
              questionTitle={
                data[currentQuestionDetails.currentQuestionNumber - 1]["name"]
              }
              options={currentQuestionDetails.questionOptions}
              correctOptionIndex={currentQuestionDetails.correctOptionIndex}
              onUpdateResult={(isAnswerCorrect) =>
                setResult({
                  ...result,
                  [currentQuestionDetails.currentQuestionNumber]:
                    isAnswerCorrect,
                })
              }
            />
          </div>
          <button
            onClick={() => {
              if (
                currentQuestionDetails.currentQuestionNumber === data.length
              ) {
                setShowResult(true);
              } else {
                updateCurrentQuestionDetails(
                  currentQuestionDetails.currentQuestionNumber + 1,
                  data
                );
              }
            }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
