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

const getCorrectAnswer = (data, currentIndex) => data[currentIndex].translation;

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

const Quiz = ({ data }) => {
  const [currentQuestion, SetCurrentQuestion] = useState(1);

  return (
    <>
      <QuizProgressBar
        currentStep={currentQuestion - 1}
        totalSteps={data.length}
      />
      <div className={classes.questionContainer}>
        <button
          className={classes.arrowButton}
          onClick={() => SetCurrentQuestion(currentQuestion - 1)}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div>
          <Question
            questionTitle={data[currentQuestion - 1]["name"]}
            options={preparePossibleOptions(data, currentQuestion)}
          />
        </div>
        <button onClick={() => SetCurrentQuestion(currentQuestion + 1)}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Quiz;
