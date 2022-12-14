import React from "react";
import Card from "../Card";

import classes from "./FlipCards.module.css";

const sanat = require("../../sanat.json");

const FlipCards = () => {
  return (
    <div className={classes.cards}>
      {sanat.map((card) => (
        <Card key={card.name} name={card.name} translation={card.translation} />
      ))}
    </div>
  );
};

export default FlipCards;
