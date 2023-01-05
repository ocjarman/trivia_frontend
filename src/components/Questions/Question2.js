import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AnswerChoices from "./AnswerChoices";
import { setSelectedAnswer } from "../../store/triviaSlice";
import styles from "./Questions.styles";

const Question2 = () => {
  const question = useSelector((state) => state.trivia.questions[1]);
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
        {question.answerChoices.map((answer) => (
          <AnswerChoices
            answer={answer}
            handleInput={handleInput}
            key={answer}
          />
        ))}
      </div>
    </>
  );
};

export default Question2;