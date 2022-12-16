import React from "react";
import { Link } from "react-router-dom";

import Blob from "./Blob";

import classes from "./Hero.module.css";

const blobs = require("../featured_topics.json");

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>Learn Finnish words</h1>
      <div className={classes.calls_to_action}>
        <Link to="/allwords">
          <button>
            Where should I start? <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
        <Link to="/about">
          <button>
            What is Sanasauna? <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
      <div className={classes.blobs}>
        {blobs.map((topic) => (
          <Blob topic={topic} key={topic} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
