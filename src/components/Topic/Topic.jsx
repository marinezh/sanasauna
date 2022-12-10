import React from "react";
import capitaliseFirstLetter from "../../helperFunctions";

import Category from "../categories/Category";

import classes from "./Topic.module.css";

const Topic = ({ sectionInfo }) => {
  console.log(sectionInfo.categories);
  return (
    <div className={classes.topic}>
      <h2 className={classes.header}>
        {capitaliseFirstLetter("by " + sectionInfo.groupName)}
      </h2>
      <div className={classes.topics_container}>
        <div className={classes.topics}>
          {sectionInfo.categories.map((category) => (
            <Category key={category.categoryName} categoryInfo={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
