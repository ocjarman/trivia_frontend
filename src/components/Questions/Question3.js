import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AnswerChoices from "./AnswerChoices";
import { setSelectedAnswer } from "../../store/triviaSlice";
import styles from "./Questions.styles";

const Question3 = ({ socket }) => {
  const question = useSelector((state) => state.trivia.questions[2]);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setSelectedAnswer(e.target.value));
    socket.emit("sendAnswer", {
      selectedAnswer: e.target.value,
      questionId: question.id,
    });
  };

  return (
    <>
      <div style={styles.sx.QuestionContainer}>
        <p style={{ width: "200px" }}>
          <b>{question.question}</b>
        </p>
      </div>
      <div style={styles.sx.AnswerContainer}>
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

export default Question3;
