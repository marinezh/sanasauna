import React, { useState } from "react";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../../auth/firebase";

import classes from "./WordList.module.css";
import WordListItem from "./WordListItem";

const WordList = ({ data }) => {
  const [user] = useAuthState(auth);

  const addCollection = async () => {
    const docRef = doc(db, "savedWords", user.uid);
    const wordsToAdd = data.map((word) => {
      const item = {};
      item.word = word.name;
      item.status = "toLearn";
      return item;
    });
    await updateDoc(docRef, {
      words: arrayUnion(...wordsToAdd),
    });
  };

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
      <div className={classes.buttons}>
        {user && (
          <button onClick={addCollection}>
            Add all words to my collection
          </button>
        )}
      </div>
    </div>
  );
};

export default WordList;
