import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setFavourites,
  fetchFavourites,
} from "../../features/words/favouritesSlice";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase";

import WordListItem from "../cardsNavigation/WordListItem";

import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [words, setWords] = useState(null);
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log("useeffect1");
    dispatch(fetchFavourites());
  }, [dispatch]);

  useEffect(() => {
    if (!favourites) return;
    const savedWords = favourites;
    axios
      .all(
        savedWords
          .map((word) => `/API/word/${word.word}`)
          .map((url) => axios.get(url))
      )
      .then((data) => {
        // fetch all words info from API and form a structured array
        const newWords = [];
        data.forEach((res) => {
          if (res.data) newWords.push(res.data);
        });
        for (let i = 0; i < newWords.length; i++) {
          newWords[i].wordStatus = favourites[i].status;
        }
        setWords(newWords);
        console.log("new words set", newWords);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [favourites]);

  if (!words || !favourites) return "loading";
  else
    return (
      <div className={classes.dashboard}>
        <div>
          <h1>My word collection</h1>
          <div>
            <button>All words</button>
            <span>{favourites.length}</span>
          </div>
          <Link
            to="/tag/flipcards"
            state={{
              words: words,
              collectionName: "All words from my collection",
            }}
          >
            Flipcards with all words
          </Link>
          <div>
            <button>Words to learn</button>
            <span>
              {favourites.filter((word) => word.status === "toLearn").length}
            </span>
          </div>
          <div>
            <button>Words to repeat</button>
            <span>
              {favourites.filter((word) => word.status === "learning").length}
            </span>
          </div>

          <div>
            <button>Learned Words</button>
            <span>
              {favourites.filter((word) => word.status === "learned").length}
            </span>
          </div>
        </div>
        {words.length ? (
          <div className={classes.word_list}>
            <table>
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Translation</th>
                  <th>To learn</th>
                  <th>Learning</th>
                  <th>Learned</th>
                  <th>Related words</th>
                </tr>
              </thead>
              <tbody>
                {words.map((word) => (
                  <WordListItem key={word.name} word={word} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>You don't have any words in your collection yet</h2>
        )}
      </div>
    );
};

export default Dashboard;
