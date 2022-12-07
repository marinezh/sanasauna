import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={classes.header}>
<<<<<<< HEAD
      <Link to="/">
        <h1>SANASAUNA</h1>
      </Link>
=======
      <img src="logo.svg" alt="" />
      <Link to="/"></Link>
>>>>>>> e02fe2a91decc261a564384a2e4e01ac57ded12f
      <Nav />
    </header>
  );
};

export default Header;
