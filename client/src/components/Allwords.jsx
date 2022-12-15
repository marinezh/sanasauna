import React from "react";

import Topic from "./Topic/Topic";

const featuredSections = require("../featured_categories.json");

const Allwords = () => {
  return (
    <div>
      {featuredSections.map((section) => (
        <Topic key={section.groupName} sectionInfo={section} />
      ))}
    </div>
  );
};

export default Allwords;
