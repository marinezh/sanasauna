import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import capitaliseFirstLetter from "../helperFunctions";

import classes from "./TopicPage.module.css";

const TopicPage = () => {
  const { categoryName } = useParams();

  return (
    <div className={classes.topic_container}>
      <h1>{capitaliseFirstLetter(categoryName)}</h1>
      <nav className={classes.topic_nav}>
        <ul className={classes.view_tabs}>
          <li>
            <Link to="flipcards">Flip cards</Link>
          </li>
          <li>
            <Link to="wordslist">Word list</Link>
          </li>
        </ul>
        <ul className={classes.features}>
          <li>
            <Link to="test">Test</Link>
          </li>
          <li>
            <Link to="game">Games</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
};

export default TopicPage;
