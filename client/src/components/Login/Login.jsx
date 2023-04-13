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
    if (user) navigate("/allwords");
  }, [user, loading, navigate]);

  return (
    <div className={classes.login_container}>
      <div className={classes.bread}>
        <BreadcrumbsGeneric />
      </div>
      <div className={classes.login}>
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
          <button
            className={classes.button}
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            {" "}
            Login
          </button>
          <div>
            Do not have an account?
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
