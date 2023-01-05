import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "../Questions/Questions.styles";

const AnswerChoices = ({ answer, handleInput }) => {
  const selected = useSelector((state) => state.trivia.selectedAnswer);

  return (
    <>
      {selected === answer ? (
        <Button
          variant="contained"
          style={styles.sx.SelectedAnswer}
          onClick={handleInput}
          value={answer}
        >
          {answer}
        </Button>
      ) : (
        <Button
          variant="contained"
          style={styles.sx.NonselectedAnswer}
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
