import React from "react";
import Card from "./Card";
import classes from "./Allwords.module.css";

const Allwords = () => {
  return (
    <div className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Allwords;
