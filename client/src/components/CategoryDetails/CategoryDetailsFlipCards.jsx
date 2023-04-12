import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import FlipCards from "../cardsNavigation/FlipCards";

const CategoryDetailsFlipCards = () => {
  const [wordData, setWordData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/API/keyword/${categoryName}`)
      .then((data) => {
        setWordData(data.data);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {wordData.length ? <FlipCards data={wordData} /> : <p>Loading...</p>}
    </div>
  );
};

export default CategoryDetailsFlipCards;
