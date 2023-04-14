import React, { useEffect, useState } from "react";
//import classes from "../TopicPage.module.css";
import classes from "./Dashboard.module.css";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../auth/firebase";

import WordListItem from "../cardsNavigation/WordListItem";

const Dashboard = (data) => {
  const [words, setWords] = useState([]);
  const [user] = useAuthState(auth);

  const getCollection = async () => {
    const docRef = doc(db, "savedWords", user.uid);
    const docSnap = await getDoc(docRef);
    const savedWords = await docSnap.data().words;
    setWords(savedWords);
  };

  useEffect(() => {
    getCollection();
  }, []);

  useEffect(() => {
    console.log("saved words changed", words);
  }, [words]);

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
