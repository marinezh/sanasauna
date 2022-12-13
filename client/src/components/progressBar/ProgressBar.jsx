import React from "react";

import Filler from "./Filler";

import classes from "./ProgressBar.module.css";

const ProgressBar = ({ difficulty }) => {
  return (
    <div className={classes.progress_bar}>
      <Filler difficulty={difficulty} />
    </div>
  );
};

export default ProgressBar;
