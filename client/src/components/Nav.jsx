import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="allwords">All words</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li className={classes.user_action}>
          <NavLink to="login">
            <span>Login</span>
          </NavLink>
        </li>
        <li className={classes.user_action}>
          <NavLink to="signup">
            <span>Sign Up</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
