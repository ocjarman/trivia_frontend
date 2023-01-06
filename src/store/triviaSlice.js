import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  openStartGamePopup: false,
  loadingQuestions: true,
  selectedAnswer: "",
  showQuestions: false,
  previousResults: [],
  currentResults: [],
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
    setPreviousResults: (state, action) => {
      state.previousResults = action.payload;
    },
    setCurrentResults: (state, action) => {
      state.currentResults = action.payload;
    },
    resetResults: (state, action) => {
      state.currentResults = [];
    },
  },
});

export const {
  setQuestions,
  setOpenStartGamePopup,
  setLoadingQuestions,
  setSelectedAnswer,
  setShowQuestions,
  setPreviousResults,
  setCurrentResults,
  showPlayButton,
  resetResults,
} = triviaSlice.actions;
export default triviaSlice.reducer;
