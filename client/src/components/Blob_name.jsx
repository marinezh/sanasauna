import React from "react";

import { capitaliseFirstLetter } from "../helperFunctions";

import classes from "./Blob.module.css";

const BlobName = ({ person }) => {
  return (
    <div className={`${classes.blob} ${classes.blob_name}`}>
      <a href={person.link}>
        <h3>{capitaliseFirstLetter(person.name)}</h3>
      </a>
    </div>
  );
};

export default BlobName;
