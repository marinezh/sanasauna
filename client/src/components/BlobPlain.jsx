import React from "react";

import classes from "./Blob.module.css";

const BlobPlain = ({ text }) => {
  return (
    <div className={classes.blob}>
      <h3>{text}</h3>
    </div>
  );
};

export default BlobPlain;
