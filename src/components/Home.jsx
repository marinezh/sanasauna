import React from "react";

import Topic from "./Topic/Topic";
import Hero from "./Hero";

const featuredSections = require("../featured_categories.json");

const Home = () => {
  return (
    <div>
      <Hero />
      {featuredSections.map((section) => (
        <Topic key={section.groupName} sectionInfo={section} />
      ))}
    </div>
  );
};

export default Home;
