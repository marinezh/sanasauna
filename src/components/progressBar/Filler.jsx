import React from "react";

import classes from "./Filler.module.css";

const Filler = (props) => {
  console.log(props.difficulty);
  let percentageFiller;
  switch (props.difficulty) {
    case "easy": {
      percentageFiller = 30;
      break;
    }
    case "medium": {
      percentageFiller = 60;
      break;
    }
    case "hard": {
      percentageFiller = 90;
      break;
    }
    default: {
      percentageFiller = 0;
    }
  }
  if (props.percentageFiller < 30)
    return (
      <div className={classes.filler} style={{ width: `${percentageFiller}%` }}>
        {props.difficulty}
      </div>
    );
};

export default Filler;
