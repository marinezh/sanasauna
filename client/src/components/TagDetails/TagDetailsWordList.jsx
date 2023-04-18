import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

import WordList from "../cardsNavigation/WordList";

const TagDetailsWordList = () => {
  const [words] = useOutletContext();

  return (
    <div>{words.length ? <WordList data={words} /> : <p>Loading...</p>}</div>
  );
};

export default TagDetailsWordList;
