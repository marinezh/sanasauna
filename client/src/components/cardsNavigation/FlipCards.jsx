import React, { useState } from "react";

import Card from "../Card";

import classes from "./FlipCards.module.css";

const FlipCards = ({ data }) => {
  const [englishFirst, setEnglishFirst] = useState(false);

  return (
    <div className={classes.cards_container}>
      <div className={classes.cards}>
        {data.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            translation={card.translation}
            reversed={englishFirst}
          />
        ))}
      </div>
      <div className={classes.buttons}>
        <button onClick={() => setEnglishFirst(true)}>
          Flip all to English
        </button>
        <button onClick={() => setEnglishFirst(false)}>
          Flip all to Finnish
        </button>
      </div>
    </div>
  );
};

export default FlipCards;
