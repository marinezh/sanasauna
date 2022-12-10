// import React, { useState, UseEffect } from "react";
import Card from "./Card";

import classes from "./Allwords.module.css";

const sanat = require("./sanat.json");
console.log(sanat);

const Allwords = () => {
  // const [sanat, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.cards}>
      {sanat.map((card) => (
        <Card key={card.name} name={card.name} translation={card.translation} />
      ))}
    </div>
  );
};

export default Allwords;
