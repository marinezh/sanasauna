import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <ul>
        <li>
          <a href="/flipcards"></a>
        </li>
        <li>
          <a href="/wordlist"></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/test"></a>
        </li>
        <li>
          <a href="/game"></a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
