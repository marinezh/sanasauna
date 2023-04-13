import React, { useState } from "react";

import classes from "./WordList.module.css";
import WordListItem from "./WordListItem";

const WordList = ({ data }) => {
  return (
    <div className={classes.word_list}>
      <h2>Word list</h2>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Related words</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((word) => (
            <WordListItem key={word.name} word={word} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;
