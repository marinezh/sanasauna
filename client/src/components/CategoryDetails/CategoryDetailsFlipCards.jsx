import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import FlipCards from "../cardsNavigation/FlipCards";

const CategoryDetailsFlipCards = () => {
  const [wordData, setWordData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`/API/keyword/${categoryName}`)
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
