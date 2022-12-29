import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AnswerChoices from "./AnswerChoices";
import { setSelectedAnswer } from "../../store/triviaSlice";

const Question1 = () => {
  const question = useSelector((state) => state.trivia.questions[0]);
  const selected = useSelector((state) => state.trivia.selectedAnswer);
  const score = useSelector((state) => state.newUser.score);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setSelectedAnswer(e.target.value));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          width: "300px",
        }}
      >
        <p>
          <b>Category:</b> {question.category}
        </p>
        {/* <p>Difficulty: {question.difficulty}</p> */}
        <p style={{ width: "200px" }}>
          <b>{question.question}</b>
        </p>
      </div>
      <div style={{ margin: "1%", display: "flex" }}>
        {question.incorrect_answers.map((answer) => (
          <>
            <AnswerChoices answer={answer} handleInput={handleInput} />
          </>
        ))}

        {selected === question.correct_answer ? (
          <Button
            variant="contained"
            style={{
              width: "20%",
              fontSize: "10px",
              backgroundColor: "cadetBlue",
              margin: "2%",
              border: "2px solid black",
            }}
            value={question.correct_answer}
            onClick={handleInput}
          >
            {question.correct_answer}
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

export default Question1;
