import React from "react";
import classes from "./Bytopic.module.css";
import Category from "./categories/Category";

const Bytopic = () => {
  return (
    <div className={classes.bytopic}>
      <div className={classes.header}>
        <h2>By Topic</h2>
      </div>
      < Category />
      < Category />
      < Category />
      
    </div>
  );
};

export default Bytopic;
