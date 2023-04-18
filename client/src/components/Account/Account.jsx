import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";

import Dashboard from "./Dashboard";

import classes from "./Account.module.css";

const Account = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Account;
