import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Built by <a href="https://github.com/marinezh"> Marina Zhivotova</a>
        {", "}
        <a href="https://github.com/preetiag18">Preeti Agrawal</a> {" and "}
        <a href="https://github.com/pixelsnow">Valeria Vagapova</a> in 2022
      </p>
    </footer>
  );
};

export default Footer;
