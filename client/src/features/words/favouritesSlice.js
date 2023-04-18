import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../auth/firebase";

let userId;
// Observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = user.uid;
  }
});

export const fetchFavourites = createAsyncThunk(
  "favourites/fetch",
  async () => {
    console.log("fetchFavourites thunk");
    const docRef = doc(db, "savedWords", userId);
    const docSnap = await getDoc(docRef);
    const words = await docSnap.data().words;
    console.log("words returning", words);
    return words;
  }
);

export const setFavourites = createAsyncThunk(
  "favourites/set",
  async (data) => {
    const docRef = doc(db, "savedWords", userId);
    await setDoc(docRef, {
      words: data,
      uid: userId,
    });
    return data;
  }
);

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.favourites = action.payload;
        console.log("state.favourites", state.favourites);
      })
      .addCase(setFavourites.fulfilled, (state, action) => {
        state.favourites = action.payload;
        console.log("state.setFavourites", state.favourites);
      });
  },
});

export default favouritesSlice.reducer;
