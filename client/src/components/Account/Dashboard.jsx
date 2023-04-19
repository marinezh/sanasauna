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
          <div className={classes.buttons}>
            <Link
              to="/tag/flipcards"
              state={{
                words: words,
                collectionName: "All words from my collection",
              }}
            >
              <button>Train all words</button>
            </Link>
            <Link
              to="/tag/flipcards"
              state={{
                words: words.filter((word) => word.wordStatus === "toLearn"),
                collectionName: "Words to learn from my collection",
              }}
            >
              <button>Train new words</button>
            </Link>
            <Link
              to="/tag/flipcards"
              state={{
                words: words.filter((word) => word.wordStatus === "learning"),
                collectionName: "Words that I'm learning",
              }}
            >
              <button>Repeat words that I'm learning</button>
            </Link>
            <Link
              to="/tag/flipcards"
              state={{
                words: words.filter((word) => word.wordStatus === "learned"),
                collectionName: "Words that I already learned",
              }}
            >
              <button>Repeat words that I've learned</button>
            </Link>
          </div>
          <div>
            <input type="checkbox" name="status" id="all" />
            <label htmlFor="all"> All words</label>{" "}
            <span>{favourites.length}</span>
          </div>
          <div>
            <input type="checkbox" name="status" id="toLearn" />
            <label htmlFor="toLearn"></label> Words to learn{" "}
            <span>
              {favourites.filter((word) => word.status === "toLearn").length}
            </span>
          </div>
          <div>
            <input type="checkbox" name="status" id="learning" /> Words to
            repeat{" "}
            <span>
              {favourites.filter((word) => word.status === "learning").length}
            </span>
          </div>

          <div>
            <input type="checkbox" name="status" id="learned" /> Learned words{" "}
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
