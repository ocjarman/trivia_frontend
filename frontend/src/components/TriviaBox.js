import React from "react";
import { setQuestions, setGameStatus } from "../store/triviaSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Question1 from "./Questions/Question1";
import { useState } from "react";

const TriviaBox = () => {
  const dispatch = useDispatch();
  const [nextQuestion, setNextQuestion] = useState(false);
  const users = useSelector((state) => state.users.users);
  const startGame = () => {
    if (users.length > 1) {
      alert(
        "The game will begin in 1 minute. You will have 10 seconds to complete each question."
      );
      dispatch(setGameStatus("playing"));
    } else {
      alert("sorry! you need competitors to play. invite a friend!");
    }
    // setNextQuestion(true);
  };

  return (
    <>
      <h3>Welcome to Trivia! </h3>
      <Button onClick={startGame}>Start Game!</Button>
      {nextQuestion && <Question1 />}
    </>
  );
};

export default TriviaBox;
