import React from "react";

import classes from "./Card.module.css";
import capitaliseFirstLetter from "../helperFunctions";

const Card = (props) => {
  const extraClass = props.reversed ? classes.rev : "";

  return (
    <div className={classes.flip_card}>
      <div className={classes.flip_card_inner}>
        <div className={`${extraClass} ${classes.flip_card_front}`}>
          {!props.reversed && <h2>{capitaliseFirstLetter(props.name)}</h2>}
          {props.reversed && (
            <h2>{capitaliseFirstLetter(props.translation)}</h2>
          )}
        </div>
        <div className={`${extraClass} ${classes.flip_card_back}`}>
          {!props.reversed && (
            <h2>{capitaliseFirstLetter(props.translation)}</h2>
          )}
          {props.reversed && <h2>{capitaliseFirstLetter(props.name)}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Card;
