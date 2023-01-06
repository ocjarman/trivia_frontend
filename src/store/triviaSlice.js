import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  openStartGamePopup: false,
  loadingQuestions: true,
  selectedAnswer: "",
  showQuestions: false,
  results: [],
  showPlayButton: true,
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    showPlayButton: (state, action) => {
      state.showPlayButton = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setOpenStartGamePopup: (state, action) => {
      state.openStartGamePopup = action.payload;
    },

    setLoadingQuestions: (state, action) => {
      state.loadingQuestions = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    setShowQuestions: (state, action) => {
      state.showQuestions = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    resetResults: (state, action) => {
      state.results = [];
    },
  },
});

export const {
  setQuestions,
  setOpenStartGamePopup,
  setLoadingQuestions,
  setSelectedAnswer,
  setShowQuestions,
  setResults,
  showPlayButton,
  resetResults,
} = triviaSlice.actions;
export default triviaSlice.reducer;
