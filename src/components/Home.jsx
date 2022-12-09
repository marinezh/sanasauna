import React from "react";

import ByPartOfSpeech from "./ByPartOfSpeech";
import Bytopic from "./Bytopic";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Bytopic />
      <ByPartOfSpeech />
    </div>
  );
};

export default Home;
