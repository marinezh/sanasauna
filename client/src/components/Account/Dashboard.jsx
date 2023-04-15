import React, { useEffect, useState } from "react";
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
  const [user] = useAuthState(auth);

  const getCollection = async () => {
    const docRef = doc(db, "savedWords", user.uid);
    const docSnap = await getDoc(docRef);
    console.log("snap", docSnap);
    const savedWords = await docSnap.data().words;
    console.log("fetched words", savedWords);
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
          console.log("data", data);
          const newWords = [];
          data.forEach((res) => {
            console.log("adding", res.data);
            if (res.data) newWords.push(res.data);
          });
          setWords(newWords);
          console.log("new words", newWords);
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
          {/* <div>
          <button>All words</button>
          <span>522</span>
        </div>
        <div>
          <button>Words to learn</button>
          <span>400</span>
        </div>
        <div>
          <button>Words to repeat</button>
          <span>100</span>
        </div>

        <div>
          <button>Learned Words</button>
          <span>22</span>
        </div> */}
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
