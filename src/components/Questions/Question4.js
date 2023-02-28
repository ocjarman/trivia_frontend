import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AnswerChoices from "./AnswerChoices";
import { setSelectedAnswer } from "../../store/triviaSlice";
import "./questions.css";

const Question4 = ({ socket }) => {
  const question = useSelector((state) => state.trivia.questions[3]);
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
      <div className="questionContainer">
        <p className="questionWidth">
          <b>{question.question}</b>
        </p>
      </div>
      <div className="answerContainer">
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

export default Question4;
