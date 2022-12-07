import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.flip_card}>
      <div className={classes.flip_card_inner}>
        <div className={classes.flip_card_front}>
          <h2>Tammikuu</h2>
        </div>
        <div className={classes.flip_card_back}>
          <h2>January</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
