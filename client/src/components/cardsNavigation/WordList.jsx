import React, { useState } from "react";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../auth/firebase";

import classes from "./WordList.module.css";
import WordListItem from "./WordListItem";

const WordList = ({ data }) => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const addCollection = async () => {
    const docRef = doc(db, "savedWords", user.uid);
    const docSnap = await getDoc(docRef);
    const savedWords = await docSnap.data().words;
    console.log("data", data);
    console.log("savedWords", savedWords);
    const wordsToAdd = data.map((word) => {
      const item = {};
      item.word = word.name;
      item.status = "toLearn";
      return item;
    });
    const newWords = [...savedWords, ...wordsToAdd];
    console.log("newWords", newWords);
    await setDoc(docRef, {
      words: newWords,
      uid: user.uid,
    });
    const docSnap2 = await getDoc(docRef);
    console.log("docSnap2", docSnap2);
  };

  return (
    <div className={classes.word_list}>
      <div className={classes.buttons}>
        {user && (
          <button onClick={addCollection}>
            Add all words to my collection
          </button>
        )}
      </div>

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
