import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const CategoryDetails = () => {
  const [wordData, setWordData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/API/keyword/${categoryName}`)
      .then((data) => {
        setWordData(data.data);
        console.log(data);
      });
  }, [categoryName]);

  return (
    <div>{wordData.length ? <Quiz data={wordData} /> : <p>Loading...</p>}</div>
  );
};

export default CategoryDetails;
