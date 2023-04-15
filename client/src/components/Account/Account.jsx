import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";

import Dashboard from "./Dashboard";

import classes from "./Account.module.css";

const Account = () => {
  return (
    <div>
      <h2>My Account</h2>
      {/* <nav className={classes.topic_nav}>
        <ul className={classes.view_tabs}>
          <li>
            <Link to="flipcards">Flip cards</Link>
          </li>
          <li>
            <Link to="wordlist">Word list</Link>
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
      </nav> */}
      <Dashboard />
    </div>
  );
};

export default Account;
