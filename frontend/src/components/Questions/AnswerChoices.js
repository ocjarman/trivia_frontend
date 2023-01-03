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
            backgroundColor: "white",
            margin: "2%",
            color: "#5A4AE3",
            border: "2px solid #5A4AE3",
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
            backgroundColor: "#5A4AE3",
            margin: "2%",
            color: "white",
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
