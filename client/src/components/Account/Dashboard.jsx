import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import classes from "./Dashboard.module.css";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../auth/firebase";

import WordListItem from "../cardsNavigation/WordListItem";

const Dashboard = (data) => {
  const [words, setWords] = useState(null);
  const [favourites, setFavourites] = useState(null);
  const [user] = useAuthState(auth);

  /* const updateMap = (k, v) => {
    setFavourites(favourites.set(k, v));
  }; */

  const getCollection = async () => {
    const docRef = doc(db, "savedWords", user.uid);
    const docSnap = await getDoc(docRef);
    const savedWords = await docSnap.data().words;
    setFavourites(savedWords);
    return savedWords;
  };

  useEffect(() => {
    getCollection().then((savedWords) => {
      axios
        .all(
          savedWords
            .map((word) => `/API/word/${word.word}`)
            .map((url) => axios.get(url))
        )
        .then((data) => {
          console.log("data from API", data);
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
    });
  }, []);

  useEffect(() => {
    console.log("saved words changed", words);
  }, [words]);

  if (!words) return "loading";
  else
    return (
      <div className={classes.dashboard}>
        <div>
          <h2>My words</h2>
          <div>
            <button>All words</button>
            <span>{favourites.length}</span>
          </div>
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
        <div>
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Tag</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word) => (
                <WordListItem key={word.name} word={word} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Dashboard;
