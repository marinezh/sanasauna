import React from "react";

import Category from "../categories/Category";

import classes from "./Topic.module.css";

const Topic = () => {
  return (
    <div>
      <h2 className={classes.header}>By Topic</h2>
      <div className={classes.topic}>
        <Category name="Colors" words={12} />
        <Category name="Workplace" words={5} />
        <Category name="Shopping" words={""} />
      </div>
    </div>
  );
};

export default Topic;
