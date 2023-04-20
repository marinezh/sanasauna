import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setFavourites,
  fetchFavourites,
} from "../../features/words/favouritesSlice";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase";

import cloneDeep from "lodash/cloneDeep";

import WordListItem from "./WordListItem";

import classes from "./WordList.module.css";

const WordList = ({ data }) => {
  const [words, setWords] = useState(null);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const favourites = useSelector((state) => state.favourites.favourites);

  console.log("favourites", favourites);

  useEffect(() => {
    console.log("useeffect1");
    dispatch(fetchFavourites());
  }, [dispatch]);

  useEffect(() => {
    console.log("useeffect2");
    if (!favourites) return;
    // fetch all words info from API and form a structured array
    let newWords = cloneDeep(data);
    newWords.forEach((word) => {
      const faveFound = favourites.find((fave) => fave.word === word.name);
      if (faveFound) {
        word.wordStatus = faveFound.status;
      }
    });
    setWords(newWords);
    console.log("new words set", newWords);
  }, [favourites, data]);

  useEffect(() => {
    console.log("favourites changed", favourites);
  }, [favourites]);

  useEffect(() => {
    console.log("words changed", words);
  }, [words]);

  const addCollection = async () => {
    const filteredData = data.filter((word) => {
      return favourites.find((fave) => fave.word === word.name) === undefined;
    });
    const wordsToAdd = filteredData.map((word) => {
      const item = {};
      item.word = word.name;
      item.status = "toLearn";
      return item;
    });
    dispatch(setFavourites([...favourites, ...wordsToAdd]));
  };

  const removeCollection = async () => {
    const newFavourites = favourites.filter((fave) => {
      return (
        data.find((topicWord) => topicWord.name === fave.word) === undefined
      );
    });
    dispatch(setFavourites(newFavourites));
  };

  if (!words || !favourites) return "loading";
  return (
    <div className={classes.word_list}>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            {user && (
              <>
                <th>To learn</th>
                <th>Learning</th>
                <th>Learned</th>
              </>
            )}
            <th>Related words</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordListItem key={word.name} word={word} />
          ))}
        </tbody>
      </table>
      {user && (
        <div className={classes.buttons}>
          <button onClick={addCollection}>
            Add all words from this topic to my collection
          </button>
          <button onClick={removeCollection}>
            Remove all words on this topic from my collection
          </button>
        </div>
      )}
    </div>
  );
};

export default WordList;
