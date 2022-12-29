import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  gameStatus: "not in progress",
  openStartGamePopup: false,
  playerNotAlone: false,
  loadingQuestions: true,
  selectedAnswer: "",
  pleaseWait: false,
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
    setPlayerNotAlone: (state, action) => {
      state.playerNotAlone = action.payload;
    },
    setLoadingQuestions: (state, action) => {
      state.loadingQuestions = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    setPleaseWait: (state, action) => {
      state.pleaseWait = action.payload;
    },
    setShowQuestions: (state, action) => {
      state.pleaseWait = action.payload;
    },
  },
});

export const {
  setQuestions,
  setGameStatus,
  setOpenStartGamePopup,
  setPlayerNotAlone,
  setLoadingQuestions,
  setSelectedAnswer,
  setPleaseWait,
  setShowQuestions,
} = triviaSlice.actions;
export default triviaSlice.reducer;
