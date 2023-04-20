import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";

import Breadcrumbs from "./breadCrumbs/Breadcrumbs";

import classes from "./TagPage.module.css";

const TagPage = () => {
  console.log("tagPage");
  const location = useLocation();
  const { words, collectionName } = location.state;
  console.log("location.state", location.state);
  console.log("words, collectionName", words, collectionName);
  return (
    <div className={classes.topic_page_container}>
      <div className={classes.topic_page}>
        <Breadcrumbs />
        <h1>{collectionName}</h1>
        <nav className={classes.topic_nav}>
          <ul className={classes.view_tabs}>
            <li>
              <Link
                state={{
                  words: words,
                  collectionName: "All words from my collection",
                }}
                to="flipcards"
              >
                Flip cards
              </Link>
            </li>
            <li>
              <Link
                state={{
                  words: words,
                  collectionName: "All words from my collection",
                }}
                to="wordlist"
              >
                Word list
              </Link>
            </li>
          </ul>
          <ul className={classes.features}>
            <li>
              <Link
                state={{
                  words: words,
                  collectionName: "All words from my collection",
                }}
                to="test"
              >
                Test
              </Link>
            </li>
            <li>
              <Link
                state={{
                  words: words,
                  collectionName: "All words from my collection",
                }}
                to="game"
              >
                Games
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.outlet_container}>
          <Outlet context={[words]} />
        </div>
      </div>
    </div>
  );
};

export default TagPage;
