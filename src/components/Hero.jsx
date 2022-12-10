import React from "react";

import Blob from "./Blob";

import classes from "./Hero.module.css";

const blobs = require("../featured_topics.json");

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>Learn Finnish words</h1>
      <div className={classes.calls_to_action}>
        <button>
          Where should I start? <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button>
          Why Sanasauna? <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className={classes.blobs}>
        {blobs.map((topic) => (
          <Blob topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
