import React, { useEffect, useState } from "react";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../../features/words/favouritesSlice";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../../auth/firebase";

import classes from "./WordListItem.module.css";

const WordListItem = ({ word }) => {
  const [relatedWords, setRelatedWords] = useState([]);
  /*   const [taggedWords, setTaggedWords] = useState([]); */
  const [wordStatus, setWordStatus] = useState(word.wordStatus);
  const [user] = useAuthState(auth);
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .all(
        word.links
          .map((word) => `/API/word/${word}`)
          .map((url) => axios.get(url))
      )
      .then((data) => {
        console.log("data", data);
        const newWords = [];
        data.forEach((res) => {
          console.log("adding", res.data);
          if (res.data) newWords.push(res.data);
        });
        setRelatedWords(newWords);
        console.log("new words", newWords);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [word]);

  /* const editStatus = async (word, newStatus) => {
    console.log(newStatus);
    const docRef = doc(db, "savedWords", user.uid);
    const docSnap = await getDoc(docRef);
    const savedWords = await docSnap.data().words;
    savedWords.forEach((savedWord) => {
      if (savedWord.word === word) savedWord.status = newStatus;
    });
    console.log("updated Words", savedWords);
    await setDoc(docRef, {
      words: savedWords,
      uid: user.uid,
    });
  }; */

  const toggleWordStatus = (newStatus) => {
    setWordStatus(newStatus);
    console.log(newStatus);
    const newFavourites = cloneDeep(favourites);
    newFavourites.forEach((favourite) => {
      if (favourite.word === word.name) favourite.status = newStatus;
    });
    console.log("updated faves", newFavourites);
    dispatch(setFavourites(newFavourites));
  };

  return (
    <tr className={classes.word_row}>
      <td>{word.name}</td>
      <td>{word.translation}</td>
      <td>
        {relatedWords.map((link) => (
          <p key={link.name}>
            <span className={classes.link_name}>{link.name}</span> -{" "}
            <span className={classes.link_translation}>{link.translation}</span>
          </p>
        ))}
      </td>
      <td>
        <div className={classes.all_tags}>
          {/* <div>
            <label
              htmlFor="one"
              className="material-symbols-outlined radio-style"
            >
              star
            </label>
            <input
              type="radio"
              id="one"
              value="one"
              name="tag"
              ckecked="true"
            />
          </div>
          <div>
            <label
              htmlFor="two"
              className="material-symbols-outlined radio-style"
            >
              star
            </label>
            <input type="radio" id="one" value="one" name="tag" />
          </div>
          <div>
            <label
              htmlFor="three"
              className="material-symbols-outlined radio-style"
            >
              star
            </label>
            <input type="radio" id="three" value="three" name="tag" />
          </div> */}
          <div
            onClick={() => toggleWordStatus("toLearn")}
            className={`${wordStatus === "toLearn" ? classes["toLearn"] : ""} ${
              classes.checkbox
            }`}
          >
            {wordStatus === "toLearn" && <i className="fa-solid fa-check"></i>}
          </div>
          <div
            onClick={() => toggleWordStatus("learning")}
            className={`${
              wordStatus === "learning" ? classes["learning"] : ""
            } ${classes.checkbox}`}
          >
            {wordStatus === "learning" && <i className="fa-solid fa-check"></i>}
          </div>
          <div
            onClick={() => toggleWordStatus("learned")}
            className={`${wordStatus === "learned" ? classes["learned"] : ""} ${
              classes.checkbox
            }`}
          >
            {wordStatus === "learned" && <i className="fa-solid fa-check"></i>}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default WordListItem;
