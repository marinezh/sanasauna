import React from "react";
import { useOutletContext } from "react-router-dom";

import Quiz from "../Quiz/Quiz";

const TagDetailsQuiz = () => {
  const [words] = useOutletContext();

  console.log("useOutletContext", words);

  return <div>{words.length ? <Quiz data={words} /> : <p>Loading...</p>}</div>;
};

export default TagDetailsQuiz;
