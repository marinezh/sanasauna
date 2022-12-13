import React from "react";
import Card from "./Card";

import classes from "./Allwords.module.css";

const sanat = require("../sanat.json");

const Allwords = () => {
  return (
    <div className={classes.cards}>
      {sanat.map((card) => (
        <Card key={card.name} name={card.name} translation={card.translation} />
      ))}
    </div>
  );
};

export default Allwords;
