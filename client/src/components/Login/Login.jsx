import React from "react";
import BreadcrumbsGeneric from "../breadCrumbs/BreadcrumbsGeneric";
import { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../auth/firebase";

import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  return (
    <div className={classes.login_container}>
      <div className={classes.bread}></div>
      <form onSubmit={loginHandler} className={classes.login}>
        <h1>Welcome back</h1>
        <div className={classes.field_container}>
          <label>Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </div>
        <div className={classes.field_container}>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className={classes.button_container}>
          <button type="submit" className={classes.button}>
            Login
          </button>
          <div className={classes.credentials}>
            <p>Feel free to use the following credentials for testing:</p>
            <ul>
              <li>
                <span>Email:</span> test@test.com
              </li>
              <li>
                <span>Password:</span> 123456
              </li>
            </ul>
          </div>
          <div className={classes.forwarding_to_signup}>
            Do not have an account?
            <Link to="/signup">Sign Up</Link> here.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
