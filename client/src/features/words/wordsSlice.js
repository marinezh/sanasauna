import { createSlice } from "@reduxjs/toolkit";
import wordService from "../../services/words";

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
    wordsLoading: true,
  },
  reducers: {
    getWords(state, action) {
      state.words = action.payload;
    },
    isLoading(state) {
      state.wordsLoading = !state.words.length;
    },
  },
});

export const initializeWords = () => {
  return async (dispatch) => {
    const words = await wordService.getAll();
    dispatch(getWords(words));
    dispatch(wordsLoading());
  };
};

export const { getWords, wordsLoading } = wordsSlice.actions;

export default wordsSlice.reducer;
