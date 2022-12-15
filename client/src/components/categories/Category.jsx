import React, { useEffect, useState } from "react";
import axios from "axios";

import { capitaliseFirstLetter } from "../../helperFunctions";

import ProgressBar from "../progressBar/ProgressBar";

import classes from "./Category.module.css";
import { Link } from "react-router-dom";

const Category = ({ categoryInfo }) => {
  const [wordData, setWordData] = useState([]);

  const endpoint = categoryInfo.name;

  useEffect(() => {
    axios.get(`http://localhost:3001/API/keyword/${endpoint}`).then((data) => {
      setWordData(data.data);
      console.log(data);
    });
  }, [endpoint]);

  return (
    <div
      className={`${classes.category_container} ${
        categoryInfo.sub ? classes.sub : ""
      }`}
    >
      {categoryInfo.sub && <div className={classes.empty}></div>}
      <div className={classes.category}>
        <div className={classes.category_name}>
          <Link to={`/${categoryInfo.name}/flipcards`}>
            <h3>{capitaliseFirstLetter(categoryInfo.name)}</h3>
          </Link>
        </div>
        <div className={classes.difficulty}>
          <ProgressBar difficulty="easy" />
        </div>
        <div className={classes.number_of_words}>
          <p>{wordData.length} words</p>
        </div>
        <i className="fa-regular fa-bookmark"></i>
      </div>
    </div>
  );
};

export default Category;
