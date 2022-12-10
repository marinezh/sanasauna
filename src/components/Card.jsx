import React from "react";

import classes from "./Card.module.css";
import capitaliseFirstLetter from "../helperFunctions";

const Card = (props) => {
  return (
    <div className={classes.flip_card}>
      <div className={classes.flip_card_inner}>
        <div className={classes.flip_card_front}>
          <h2>{capitaliseFirstLetter(props.name)}</h2>
        </div>
        <div className={classes.flip_card_back}>
          <h2>{capitaliseFirstLetter(props.translation)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
