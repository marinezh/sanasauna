import React from "react";

import ProgressBar from "../progressBar/ProgressBar";

import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.category}>
      <div className={classes.category_name}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.difficulty}>
        <ProgressBar difficulty={props.difficulty} />
        <p>Easy</p>
      </div>
      <div className={classes.number_of_words}>
        <p>{props.numberOfWords} words</p>
      </div>
      <span>tick</span>
    </div>
  );
};

export default Category;
