import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AnswerChoices from "./AnswerChoices";
import { setSelectedAnswer } from "../../store/triviaSlice";
import styles from "./Questions.styles";

const Question3 = () => {
  const question = useSelector((state) => state.trivia.questions[2]);
  const selected = useSelector((state) => state.trivia.selectedAnswer);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setSelectedAnswer(e.target.value));
  };

  return (
    <>
      <div style={styles.sx.QuestionContainer}>
        <p>
          <b>Category:</b> {question.category}
        </p>
        <p style={{ width: "200px" }}>
          <b>{question.question}</b>
        </p>
      </div>
      <div style={{ margin: "1%", display: "flex" }}>
        {question.incorrect_answers.map((answer) => (
          <AnswerChoices
            answer={answer}
            handleInput={handleInput}
            key={answer}
          />
        ))}

        {selected === question.correct_answer ? (
          <Button
            variant="contained"
            style={styles.sx.SelectedAnswer}
            value={question.correct_answer}
            onClick={handleInput}
          >
            {question.correct_answer}
          </Button>
        ) : (
          <Button
            variant="contained"
            style={styles.sx.NonselectedAnswer}
            value={question.correct_answer}
            onClick={handleInput}
          >
            {question.correct_answer}
          </Button>
        )}
      </div>
    </>
  );
};

export default Question3;
