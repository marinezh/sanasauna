import React from "react";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.login_box}>
        <label>Username: </label>
        <input type="text" />
      </div>
      <div className={classes.login_box}>
        <label>password: </label>
        <input type="password" />
      </div>
      <div className={classes.login_box}>
        <button className={classes.button}>Login</button>
      </div>
    </div>
  );
};

export default Login;
