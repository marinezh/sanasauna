import React, { useState } from "react";

import { shuffle } from "../../helperFunctions";

import Card from "../Card";

import classes from "./FlipCards.module.css";

const FlipCards = ({ data }) => {
  const [englishFirst, setEnglishFirst] = useState(false);
  const [words, setWords] = useState(data);
  console.log("words in flipcards", words);

  return (
    <div className={classes.cards_container}>
      <div className={classes.cards}>
        {words.map((card) => (
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
        <button onClick={() => setWords(shuffle(words))}>
          Shuffle cards <i className="fa-solid fa-shuffle"></i>
        </button>
      </div>
    </div>
  );
};

export default FlipCards;
