import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import classes from "./WordListItem.module.css";

const WordListItem = ({ word }) => {
  const [relatedWords, setRelatedWords] = useState([]);

  /* const [urls, setUrls] = useMemo([]);
  const [promises, setPromises] = useMemo([]);

  useEffect(() => {
    setUrls(word.links.map((word) => `http://localhost:3001/API/word/${word}`));
    setPromises(
      urls.map((endpoint) => {
        return axios.get(endpoint);
      })
    );
  }, []); */

  const urls = word.links.map(
    (word) => `http://localhost:3001/API/word/${word}`
  );
  const promises = urls.map((endpoint) => {
    return axios.get(endpoint);
  });

  useEffect(() => {
    axios
      .all(promises)
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
  }, []);

  useEffect(() => {
    console.log("promises changed!!!", promises);
  }, [promises]);

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
