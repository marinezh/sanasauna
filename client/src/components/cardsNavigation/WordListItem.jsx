import React, { useEffect, useState } from "react";
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../../features/words/favouritesSlice";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase";

import classes from "./WordListItem.module.css";

const WordListItem = ({ word }) => {
  const [relatedWords, setRelatedWords] = useState([]);
  /*   const [taggedWords, setTaggedWords] = useState([]); */
  const [wordStatus, setWordStatus] = useState(undefined);
  const [user] = useAuthState(auth);
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    setWordStatus(word.wordStatus);
  }, [word]);

  useEffect(() => {
    axios
      .all(
        word.links
          .map((word) => `/API/word/${word}`)
          .map((url) => axios.get(url))
      )
      .then((data) => {
        const newWords = [];
        data.forEach((res) => {
          if (res.data) newWords.push(res.data);
        });
        setRelatedWords(newWords);
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
  const deleteFromFavourites = () => {
    setWordStatus(undefined);
    const newFavourites = favourites.filter((fave) => fave.word !== word.name);
    dispatch(setFavourites(newFavourites));
  };

  const addToFavourites = (newStatus) => {
    const newFavourites = cloneDeep(favourites);
    const newWord = { word: word.name, status: newStatus };
    newFavourites.push(newWord);
    console.log("newFavourites", newFavourites);
    dispatch(setFavourites(newFavourites));
  };

  const editFavourites = (newStatus) => {
    const newFavourites = cloneDeep(favourites);
    newFavourites.forEach((favourite) => {
      if (favourite.word === word.name) favourite.status = newStatus;
    });
    dispatch(setFavourites(newFavourites));
  };

  const toggleWordStatus = (newStatus) => {
    if (wordStatus === newStatus) {
      deleteFromFavourites();
    } else {
      setWordStatus(newStatus);
      if (!favourites.find((fave) => fave.word === word.name)) {
        console.log("adding to faves");
        addToFavourites(newStatus);
      } else {
        console.log("editing faves");
        editFavourites(newStatus);
      }
    }
  };

  return (
    <tr className={classes.word_row}>
      <td>{word.name}</td>
      <td>{word.translation}</td>
      {user && (
        <>
          <td>
            {/*  <div className={classes.all_tags}> */}
            <div
              onClick={() => toggleWordStatus("toLearn")}
              className={`${
                wordStatus === "toLearn" ? classes["toLearn"] : ""
              } ${classes.checkbox}`}
            >
              {wordStatus === "toLearn" && (
                <i className="fa-solid fa-check"></i>
              )}
            </div>
          </td>
          <td>
            <div
              onClick={() => toggleWordStatus("learning")}
              className={`${
                wordStatus === "learning" ? classes["learning"] : ""
              } ${classes.checkbox}`}
            >
              {wordStatus === "learning" && (
                <i className="fa-solid fa-check"></i>
              )}
            </div>
          </td>
          <td>
            <div
              onClick={() => toggleWordStatus("learned")}
              className={`${
                wordStatus === "learned" ? classes["learned"] : ""
              } ${classes.checkbox}`}
            >
              {wordStatus === "learned" && (
                <i className="fa-solid fa-check"></i>
              )}
            </div>

            {/* </div> */}
          </td>
        </>
      )}
      <td>
        {relatedWords.map((link) => (
          <p key={link.name}>
            <span className={classes.link_name}>{link.name}</span> -{" "}
            <span className={classes.link_translation}>{link.translation}</span>
          </p>
        ))}
      </td>
    </tr>
  );
};

export default WordListItem;
