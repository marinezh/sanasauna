import React from "react";
import capitaliseFirstLetter from "../../helperFunctions";

import classes from "./Filler.module.css";

const Filler = (props) => {
  console.log(props.difficulty);
  let percentageFiller;
  switch (props.difficulty) {
    case "easy": {
      percentageFiller = 35;
      break;
    }
    case "medium": {
      percentageFiller = 65;
      break;
    }
    case "hard": {
      percentageFiller = 95;
      break;
    }
    default: {
      percentageFiller = 0;
    }
  }
  console.log(percentageFiller);

  return (
    <div className={classes.filler} style={{ width: `${percentageFiller}%` }}>
      {capitaliseFirstLetter(props.difficulty)}
    </div>
  );
};

export default Filler;
