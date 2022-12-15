import React from "react";

import Card from "../Card";

import classes from "./FlipCards.module.css";

const FlipCards = ({ data }) => {
  return (
    <div className={classes.cards_container}>
      <div className={classes.cards}>
        {data.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            translation={card.translation}
          />
        ))}
      </div>
      <div className={classes.buttons}>
        <button>Flip all to English</button>
        <button>Flip all to Finnish</button>
      </div>
    </div>
  );
};

export default FlipCards;
