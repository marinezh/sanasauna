import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="./logo.png" alt="logo" />
      <Link to="/"></Link>
      <Nav />
    </header>
  );
};

export default Header;
