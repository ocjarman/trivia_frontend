import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  question1: {},
  question2: {},
  question3: {},
  question4: {},
  question5: {},
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setQuestion1: (state, action) => {
      state.question1 = action.payload;
    },
    setQuestion2: (state, action) => {
      state.question2 = action.payload;
    },
    setQuestion3: (state, action) => {
      state.question3 = action.payload;
    },
    setQuestion4: (state, action) => {
      state.question4 = action.payload;
    },
    setQuestion5: (state, action) => {
      state.question5 = action.payload;
    },
  },
});

export const {
  setQuestions,
  setQuestion1,
  setQuestion2,
  setQuestion3,
  setQuestion4,
  setQuestion5,
} = triviaSlice.actions;
export default triviaSlice.reducer;
