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
  const [filteredWords, setFilteredWords] = useState(null);
  const [allChecked, setAllChecked] = useState(true);
  const [toLearnChecked, setToLearnChecked] = useState(true);
  const [learningChecked, setLearningChecked] = useState(true);
  const [learnedChecked, setLearnedChecked] = useState(true);
  const [checked, setChecked] = useState(
    { all: false },
    { toLearn: false },
    { learning: false },
    { learned: false }
  );
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  console.log("filteredWords", filteredWords);
  console.log("checks", toLearnChecked, learningChecked, learnedChecked);

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

  useEffect(() => {
    if (!words) return;
    const filtered = words.filter((fave) => {
      console.log("fave.wordStatus", fave.wordStatus);
      console.log("checks", toLearnChecked, learningChecked, learnedChecked);
      if (toLearnChecked && fave.wordStatus === "toLearn") return true;
      if (learningChecked && fave.wordStatus === "learning") return true;
      if (learnedChecked && fave.wordStatus === "learned") return true;
      return false;
    });
    console.log("filtered", filtered);
    setFilteredWords(filtered);
  }, [words, toLearnChecked, learningChecked, learnedChecked]);

  const allCheckboxHandler = (e) => {
    if (e.target.checked) {
      setAllChecked(true);
      setToLearnChecked(true);
      setLearningChecked(true);
      setLearnedChecked(true);
    } else {
      setAllChecked(false);
      setToLearnChecked(false);
      setLearningChecked(false);
      setLearnedChecked(false);
    }
  };

  const toLearnCheckboxHandler = (e) => {
    if (e.target.checked) {
      setToLearnChecked(true);
      if (learningChecked && learnedChecked && !allChecked) setAllChecked(true);
    } else {
      if (allChecked) setAllChecked(false);
      setToLearnChecked(false);
    }
  };

  const learningCheckboxHandler = (e) => {
    if (e.target.checked) {
      setLearningChecked(true);
      if (toLearnChecked && learnedChecked && !allChecked) setAllChecked(true);
    } else {
      if (allChecked) setAllChecked(false);
      setLearningChecked(false);
    }
  };

  const learnedCheckboxHandler = (e) => {
    if (e.target.checked) {
      setLearnedChecked(true);
      if (toLearnChecked && learningChecked && !allChecked) setAllChecked(true);
    } else {
      if (allChecked) setAllChecked(false);
      setLearnedChecked(false);
    }
  };

  if (!words || !filteredWords || !favourites) return "loading";
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
                words: filteredWords,
                collectionName: "Selected words from my collection",
              }}
            >
              <button>Train filtered selection</button>
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
          <div className={classes.filters}>
            <div>
              <input
                type="checkbox"
                name="status"
                id="all"
                checked={allChecked}
                onChange={allCheckboxHandler}
              />
              <label htmlFor="all"> All words</label>
              {" ("}
              <span>{favourites.length}</span>
              {") "}
            </div>
            <div>
              <input
                type="checkbox"
                name="status"
                id="toLearn"
                checked={toLearnChecked}
                onChange={toLearnCheckboxHandler}
              />
              <label htmlFor="toLearn"></label> Words to learn {" ("}
              <span>
                {favourites.filter((word) => word.status === "toLearn").length}
              </span>
              {") "}
            </div>
            <div>
              <input
                type="checkbox"
                name="status"
                id="learning"
                checked={learningChecked}
                onChange={learningCheckboxHandler}
              />{" "}
              Words to repeat {" ("}
              <span>
                {favourites.filter((word) => word.status === "learning").length}
              </span>
              {") "}
            </div>

            <div>
              <input
                type="checkbox"
                name="status"
                id="learned"
                checked={learnedChecked}
                onChange={learnedCheckboxHandler}
              />{" "}
              Learned words {" ("}
              <span>
                {favourites.filter((word) => word.status === "learned").length}
              </span>
              {") "}
            </div>
          </div>
        </div>
        {filteredWords.length ? (
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
                {filteredWords.map((word) => (
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
