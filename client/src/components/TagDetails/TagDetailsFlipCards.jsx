import React from "react";
import { useOutletContext } from "react-router-dom";

import FlipCards from "../cardsNavigation/FlipCards";

const TagDetailsFlipCards = () => {
  const [words] = useOutletContext();

  console.log("useOutletContext", words);

  return (
    <div>{words.length ? <FlipCards data={words} /> : <p>Loading...</p>}</div>
  );
};

export default TagDetailsFlipCards;
