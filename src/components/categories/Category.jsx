import React from "react";

import ProgressBar from "../progressBar/ProgressBar";

import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.category}>
      <div className={classes.categoryName}>
        <span>&#9679;</span>
        <h3>{props.name}</h3>
      </div>
      <ProgressBar percentage={50} />
      <span className={classes.categoryWords}>{props.words}</span>
      <span>tick</span>
    </div>
  );
};

export default Category;
