import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "./logo.svg";

import Nav from "./Nav";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo_container}>
          <ReactLogo className={classes.logo} />
        </div>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
