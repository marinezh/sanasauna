import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { fetchFavourites } from "../features/words/favouritesSlice";

import classes from "./Main.module.css";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  return (
    <main className={classes.main}>
      <Outlet />
    </main>
  );
};

export default Main;
