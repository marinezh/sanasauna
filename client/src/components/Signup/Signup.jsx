import React from "react";
import BreadcrumbsGeneric from "../breadCrumbs/BreadcrumbsGeneric";

import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={classes.login_container}>
      <div className={classes.bread}>
        <BreadcrumbsGeneric />
      </div>
      <div className={classes.login}>
        <h1>Join us</h1>
        <div className={classes.field_container}>
          <label>Username </label>
          <input type="text" />
        </div>
        <div className={classes.field_container}>
          <label>Password </label>
          <input type="password" />
        </div>
        <div className={classes.field_container}>
          <label>Repeat password </label>
          <input type="password" />
        </div>
        <div className={classes.button_container}>
          <button className={classes.button}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
