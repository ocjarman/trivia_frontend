import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const AnswerChoices = ({ answer, handleInput }) => {
  const selected = useSelector((state) => state.trivia.selectedAnswer);
  return (
    <>
      {selected === answer ? (
        <Button
          variant="contained"
          style={{
            width: "20%",
            fontSize: "10px",
            backgroundColor: "cadetBlue",
            margin: "2%",
            border: "2px solid black",
          }}
          onClick={handleInput}
          value={answer}
        >
          {answer}
        </Button>
      ) : (
        <Button
          variant="contained"
          style={{
            width: "20%",
            fontSize: "10px",
            backgroundColor: "cadetBlue",
            margin: "2%",
          }}
          value={answer}
          onClick={handleInput}
        >
          {answer}
        </Button>
      )}
    </>
  );
};

export default AnswerChoices;
