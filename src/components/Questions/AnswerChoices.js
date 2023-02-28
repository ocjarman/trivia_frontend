import React from "react";
// import { button } from "@mui/material";
import { useSelector } from "react-redux";
import "./questions.css";

const AnswerChoices = ({ answer, handleInput }) => {
  const selected = useSelector((state) => state.trivia.selectedAnswer);

  return (
    <>
      {selected === answer ? (
        <button
          variant="contained"
          className="selectedAnswer"
          onClick={handleInput}
          value={answer}
        >
          {answer}
        </button>
      ) : (
        <button
          variant="contained"
          className="nonselectedAnswer"
          value={answer}
          onClick={handleInput}
        >
          {answer}
        </button>
      )}
    </>
  );
};

export default AnswerChoices;
