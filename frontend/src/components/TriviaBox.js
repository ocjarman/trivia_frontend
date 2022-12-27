import React from "react";
import {
  setQuestions,
  setQuestion1,
  setQuestion2,
  setQuestion3,
  setQuestion4,
  setQuestion5,
} from "../store/triviaSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Question1 from "./Questions/Question1";
import { useState } from "react";

const TriviaBox = () => {
  const dispatch = useDispatch();
  const [nextQuestion, setNextQuestion] = useState(false);
  const getQuestions = async () => {
    const questions = await axios.get(`https://opentdb.com/api.php?amount=10`);
    console.log(questions.data.results[0]);
    dispatch(setQuestions(questions.data.results[0]));
    dispatch(setQuestion1(questions.data.results[1]));
    dispatch(setQuestion2(questions.data.results[2]));
    dispatch(setQuestion3(questions.data.results[3]));
    dispatch(setQuestion4(questions.data.results[4]));
    dispatch(setQuestion5(questions.data.results[5]));
  };

  //when app first loads, we want it to reach out and grab our campuses and students
  useEffect(() => {
    getQuestions();
  }, []);

  const showNextQuestion = () => {
    setNextQuestion(true);
  };

  return (
    <>
      <h3>Welcome to Trivia! </h3>
      <Button onClick={showNextQuestion}>Start Game!</Button>
      {nextQuestion && <Question1 />}
    </>
  );
};

export default TriviaBox;
