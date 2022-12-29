import React from "react";
import { setQuestions, setGameStatus } from "../store/triviaSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Question1 from "./Questions/Question1";
import { useState } from "react";
import StartGamePopup from "./StartGamePopup";
import AllQuestions from "./Questions/AllQuestions";
import { setLoadingQuestions } from "../store/triviaSlice";
import StartGameTimer from "./StartGameTimer";

const TriviaBox = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const gameStatus = useSelector((state) => state.trivia.gameStatus);
  const questions = useSelector((state) => state.trivia.questions);
  const loadingQuestions = useSelector(
    (state) => state.trivia.loadingQuestions
  );
  if (questions.length > 1) {
    dispatch(setLoadingQuestions(false));
  }

  return (
    <>
      {gameStatus === "" && (
        <>
          <h3>Welcome to Trivia! </h3>
          <StartGamePopup />
        </>
      )}
      {/* {loadingQuestions && <p>questions loading!</p>} */}
      {!loadingQuestions && gameStatus === "playing" ? <AllQuestions /> : null}
    </>
  );
};

export default TriviaBox;
