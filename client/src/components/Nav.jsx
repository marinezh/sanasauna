import React from "react";
import { NavLink } from "react-router-dom";

// Firebase imports
import { logout } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import classes from "./Nav.module.css";

const Nav = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="allwords">All words</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>

        {!user && (
          <>
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
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="account">
                <span>Account</span>
              </NavLink>
            </li>
            <li className={classes.user_action}>
              <NavLink onClick={logout}>
                <span>Sign Out</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
