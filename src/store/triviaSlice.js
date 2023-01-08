import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  openStartGamePopup: false,
  loadingQuestions: true,
  selectedAnswer: "",
  showQuestions: false,
  currentResults: [],
  showPlayButton: true,
  activeStep: 0,
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
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    setCurrentResults: (state, action) => {
      state.currentResults = action.payload;
    },
    resetResults: (state, action) => {
      state.currentResults = [];
    },
    resetQuestions: (state, action) => {
      state.questions = [];
    },
    resetActiveStep: (state, action) => {
      state.activeStep = 0;
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
  resetQuestions,
  resetActiveStep,
  setActiveStep,
} = triviaSlice.actions;
export default triviaSlice.reducer;
