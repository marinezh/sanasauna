import { configureStore } from "@reduxjs/toolkit";
import wordsSlice from "../features/words/wordsSlice";
import favouritesSlice from "../features/words/favouritesSlice";

export default configureStore({
  reducer: {
    words: wordsSlice,
    favourites: favouritesSlice,
  },
});
