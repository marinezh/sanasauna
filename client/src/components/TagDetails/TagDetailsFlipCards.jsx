import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";

import FlipCards from "../cardsNavigation/FlipCards";

const TagDetailsFlipCards = () => {
  const [words] = useOutletContext();

  console.log("useOutletContext", words);

  return (
    <div>{words.length ? <FlipCards data={words} /> : <p>Loading...</p>}</div>
  );
};

export default TagDetailsFlipCards;
