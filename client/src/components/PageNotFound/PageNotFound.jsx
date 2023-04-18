import React from "react";

import BlobPlain from "../BlobPlain";

import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.about_container}>
      <div className={classes.about}>
        <h1>Sorry, this page doesn't exist!</h1>
        <div className={classes.name_blobs}>
          <BlobPlain text={404} />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
