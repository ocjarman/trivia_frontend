import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  gameStatus: "",
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions, setGameStatus } = triviaSlice.actions;
export default triviaSlice.reducer;
