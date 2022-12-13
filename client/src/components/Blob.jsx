import React from "react";

import capitaliseFirstLetter from "../helperFunctions";

import classes from "./Blob.module.css";

const Blob = ({ topic }) => {
  return (
    <div className={classes.blob}>
      <h3>{capitaliseFirstLetter(topic)}</h3>
    </div>
  );
};

export default Blob;
