import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

import Quiz from "../Quiz/Quiz";

const TagDetailsQuiz = () => {
  const [words] = useOutletContext();

  console.log("useOutletContext", words);

  return <div>{words.length ? <Quiz data={words} /> : <p>Loading...</p>}</div>;
};

export default TagDetailsQuiz;
