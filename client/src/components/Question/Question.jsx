import React from "react";
import classes from "./Question.module.css";
const Question = ({ questionTitle, options, correctOptionIndex }) => {
  return (
    <div>
      <h3>{questionTitle}</h3>
      <div className="options">
        {options.map((value, index) => (
          <div className={classes.option}>
            <input
              type="radio"
              id={`option${index}`}
              name="option"
              className={classes.optionRadio}
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
