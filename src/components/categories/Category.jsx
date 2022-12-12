import React from "react";

import capitaliseFirstLetter from "../../helperFunctions";

import ProgressBar from "../progressBar/ProgressBar";

import classes from "./Category.module.css";

const words = require("../../sanat");

const Category = ({ categoryInfo }) => {
  const wordsFromCategory = words.filter(
    (word) =>
      word.keywords.includes(categoryInfo.name) ||
      word.keywords.includes(categoryInfo.name + "s")
  );

  const ending =
    categoryInfo.name[categoryInfo.name.length - 1] <= 9 &&
    categoryInfo.name[categoryInfo.name.length - 1] >= 0
      ? ""
      : "s";

  return (
    <div
      className={`${classes.category_container} ${
        categoryInfo.sub ? classes.sub : ""
      }`}
    >
      {categoryInfo.sub && <div className={classes.empty}></div>}
      <div className={classes.category}>
        <div className={classes.category_name}>
          <h3>{capitaliseFirstLetter(categoryInfo.name) + ending}</h3>
        </div>
        <div className={classes.difficulty}>
          <ProgressBar difficulty="easy" />
        </div>
        <div className={classes.number_of_words}>
          <p>{wordsFromCategory.length} words</p>
        </div>
        <i className="fa-regular fa-bookmark"></i>
      </div>
    </div>
  );
};

export default Category;
