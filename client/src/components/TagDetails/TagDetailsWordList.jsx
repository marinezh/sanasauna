import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import WordList from "../cardsNavigation/WordList";

const TagDetailsWordList = () => {
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
      {wordData.length ? <WordList data={wordData} /> : <p>Loading...</p>}
    </div>
  );
};

export default TagDetailsWordList;
