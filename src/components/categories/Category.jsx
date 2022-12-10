import React from "react";

import ProgressBar from "../progressBar/ProgressBar";

import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.category}>
      <div className={classes.category_name}>
        <h3>{props.name}</h3>
      </div>
      <ProgressBar percentage={40} />
      <span className={classes.category_words}>{props.words}</span>
      <span>tick</span>
    </div>
  );
};

export default Category;
