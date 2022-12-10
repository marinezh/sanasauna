import React from "react";
import capitaliseFirstLetter from "../../helperFunctions";

import ProgressBar from "../progressBar/ProgressBar";

import classes from "./Category.module.css";

console.log(classes);

const Category = ({ categoryInfo }) => {
  return (
    <div className={classes.category}>
      <div className={classes.category_name}>
        <h3>{capitaliseFirstLetter(categoryInfo.categoryName)}</h3>
      </div>
      <div className={classes.difficulty}>
        <ProgressBar difficulty="easy" />
      </div>
      <div className={classes.number_of_words}>
        <p>12 words</p>
      </div>
      <i className="fa-regular fa-bookmark"></i>
    </div>
  );
};

export default Category;
