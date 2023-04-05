import React from "react";
import BreadcrumbsGeneric from "../breadCrumbs/BreadcrumbsGeneric";
import { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../auth/firebase";

import classes from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_repeat, setPasswordRepeat] = useState("");
  //const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!email) {
      alert("please enter email");
      return;
    }
    if (password_repeat !== password) {
      alert("password do not match");
      return;
    }
    registerWithEmailAndPassword(email, password);
  };

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
        <h1>Join us</h1>
        <div className={classes.field_container}>
          <label>Username </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className={classes.field_container}>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className={classes.field_container}>
          <label>Repeat password </label>
          <input
            type="password"
            value={password_repeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
            placeholder="Password repeat"
          />
        </div>
        <div className={classes.button_container}>
          <button className={classes.button} onClick={register}>
            Sign Up
          </button>
          <div>
            Already have an acoount?
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
