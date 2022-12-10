import React from "react";
import { useState } from "react";
import Filler from "./Filler";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className={classes.progress_bar}>
      <Filler percentageFiller={percentage} />
    </div>
  );
};

export default ProgressBar;
