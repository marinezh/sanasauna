import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./WordListItem.module.css";

const WordListItem = ({ word }) => {
  const [links, setLinks] = useState([]);

  const urls = word.links.map(
    (word) => `http://localhost:3001/API/word/${word}`
  );

  useEffect(() => {
    axios.all(urls.map((endpoint) => axios.get(endpoint))).then((data) => {
      data.forEach((data) => {
        setLinks((links) => links.concat(data.data));
      });
    });
  }, []);

  return (
    <tr className={classes.word_row}>
      <td>{word.name}</td>

      <td>{word.translation}</td>
      <td>
        {links.map((link) => (
          <p key={link.name}>
            <span className={classes.link_name}>{link.name}</span> -{" "}
            <span className={classes.link_translation}>{link.translation}</span>
          </p>
        ))}
      </td>
    </tr>
  );
};

export default WordListItem;
