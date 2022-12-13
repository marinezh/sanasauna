import React from "react";

import classes from "./PartOfSpeech.module.css";

const PartOfSpeech = () => {
  return (
    <div className={classes.part_of_speech}>
      <div className={classes.header}>
        <h2>By part of speech</h2>
      </div>
    </div>
  );
};

export default PartOfSpeech;
