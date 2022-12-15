import React from "react";

import BlobName from "./Blob_name";
import BreadcrumbsGeneric from "./breadCrumbs/BreadcrumbsGeneric";

import classes from "./About.module.css";

const About = () => {
  const people = [
    { name: "Marina Zhivotova", link: "https://github.com/marinezh" },
    { name: "Preeti Agrawal", link: "https://github.com/preetiag18" },
    { name: "Valeria Vagapova", link: "https://github.com/pixelsnow" },
  ];
  return (
    <div className={classes.about_container}>
      <div className={classes.bread}>
        <BreadcrumbsGeneric />
      </div>

      <div className={classes.about}>
        <h1>About the project</h1>
        <p>
          Sanasauna was created in December 2022 as a part of Full Stack Web
          Development course at{" "}
          <a href="http://bc.fi">Business College Helsinki</a> by three
          struggling non-Finns.
        </p>
        <h2>Our team</h2>
        <div className={classes.name_blobs}>
          {people.map((person) => (
            <BlobName person={person} key={person.name} />
          ))}
        </div>
        <p>{`(Hire us!)`}</p>
      </div>
    </div>
  );
};

export default About;
