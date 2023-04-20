import React from "react";
import { useOutletContext } from "react-router-dom";

import WordList from "../cardsNavigation/WordList";

const TagDetailsWordList = () => {
  const [words] = useOutletContext();

  return (
    <div>{words.length ? <WordList data={words} /> : <p>Loading...</p>}</div>
  );
};

export default TagDetailsWordList;
