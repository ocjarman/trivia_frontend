import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  gameStatus: "",
  openStartGamePopup: false,
  playerNotAlone: false,
  loadingQuestions: true,
  selectedAnswer: "",
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
  },
});

export const {
  setQuestions,
  setGameStatus,
  setOpenStartGamePopup,
  setPlayerNotAlone,
  setLoadingQuestions,
  setSelectedAnswer,
} = triviaSlice.actions;
export default triviaSlice.reducer;
