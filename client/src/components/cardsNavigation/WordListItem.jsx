import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./WordListItem.module.css";

const WordListItem = ({ word }) => {
  const [relatedWords, setRelatedWords] = useState([]);

  useEffect(() => {
    axios
      .all(
        word.links
          .map((word) => `http://localhost:3001/API/word/${word}`)
          .map((url) => axios.get(url))
      )
      .then((data) => {
        console.log("data", data);
        const newWords = [];
        data.forEach((res) => {
          console.log("adding", res.data);
          if (res.data) newWords.push(res.data);
        });
        setRelatedWords(newWords);
        console.log("new words", newWords);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [word.links]);

  return (
    <tr className={classes.word_row}>
      <td>{word.name}</td>

      <td>{word.translation}</td>
      <td>
        {relatedWords.map((link) => (
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
