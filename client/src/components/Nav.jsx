import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../auth/firebase";
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
        <li className={classes.user_action}>
          <button
            className={classes.logout_button}
            to="signout"
            onClick={() => logout()}
          >
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
