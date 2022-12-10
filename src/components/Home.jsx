import React from "react";

import PartOfSpeech from "./PartOfSpeech/PartOfSpeech";
import Topic from "./Topic/Topic";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Topic />
      <PartOfSpeech />
    </div>
  );
};

export default Home;
