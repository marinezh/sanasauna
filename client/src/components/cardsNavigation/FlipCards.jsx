import React from "react";

import Card from "../Card";

import classes from "./FlipCards.module.css";

const FlipCards = ({ data }) => {
  return (
    <div className={classes.cards}>
      {data.map((card) => (
        <Card key={card.name} name={card.name} translation={card.translation} />
      ))}
    </div>
  );
};

export default FlipCards;
