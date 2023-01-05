import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  gameStatus: "ready",
  openStartGamePopup: false,
  playerIsAlone: true,
  loadingQuestions: true,
  selectedAnswer: "",
  showQuestions: false,
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
    setOpenStartGamePopup: (state, action) => {
      state.openStartGamePopup = action.payload;
    },
    setPlayerIsAlone: (state, action) => {
      state.playerIsAlone = action.payload;
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
  },
});

export const {
  setQuestions,
  setGameStatus,
  setOpenStartGamePopup,
  setPlayerIsAlone,
  setLoadingQuestions,
  setSelectedAnswer,
  setShowQuestions,
} = triviaSlice.actions;
export default triviaSlice.reducer;
