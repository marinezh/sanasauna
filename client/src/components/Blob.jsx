import React from "react";
import { Link } from "react-router-dom";

import capitaliseFirstLetter from "../helperFunctions";

import classes from "./Blob.module.css";

const Blob = ({ topic }) => {
  return (
    <div className={classes.blob}>
      <Link to={`/${topic}/flipcards`}>
        <h3>{capitaliseFirstLetter(topic)}</h3>
      </Link>
    </div>
  );
};

export default Blob;
