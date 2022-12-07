import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
