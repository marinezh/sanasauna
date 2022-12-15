import React from "react";

import { capitaliseFirstLetter } from "../../helperFunctions";

import Category from "../categories/Category";

import classes from "./Topic.module.css";

const Topic = ({ sectionInfo }) => {
  const categories = [];
  sectionInfo.categories.forEach((category) => {
    categories.push({ name: category.categoryName, sub: false });
    category.subcategories.forEach((subcategory) =>
      categories.push({ name: subcategory, sub: true })
    );
  });

  return (
    <div className={classes.topic}>
      <h2 className={classes.header}>
        {capitaliseFirstLetter("by " + sectionInfo.groupName)}
      </h2>
      <div className={classes.topics_container}>
        <div className={classes.topics}>
          {categories.map((category) => (
            <Category key={category.name} categoryInfo={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
