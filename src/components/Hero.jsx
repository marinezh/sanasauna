import React from "react";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>Learn Finnish words</h1>
      <div className={classes.calls_to_action}>
        <button>
          Where should I start? <i class="fa-solid fa-arrow-right"></i>
        </button>
        <button>
          Why Sanasauna? <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className={classes.blobs}>
        <div className={classes.blob}>
          <h3>Family</h3>
        </div>
        <div className={classes.blob}>
          <h3>Animals</h3>
        </div>
        <div className={classes.blob}>
          <h3>Food</h3>
        </div>
        <div className={classes.blob}>
          <h3>Colours</h3>
        </div>
        <div className={classes.blob}>
          <h3>Months</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
