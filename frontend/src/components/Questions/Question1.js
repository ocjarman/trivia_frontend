import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Question1 = () => {
  const question = useSelector((state) => state.trivia.questions[0]);
  console.log(question);
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
            <Button
              variant="contained"
              style={{
                width: "20%",
                fontSize: "10px",
                backgroundColor: "cadetBlue",
                margin: "2%",
              }}
            >
              {answer}
            </Button>
            <br></br>
          </>
        ))}
        <Button
          variant="contained"
          style={{
            width: "20%",
            fontSize: "10px",
            backgroundColor: "cadetBlue",
            margin: "2%",
          }}
        >
          {question.correct_answer}
        </Button>
      </div>
    </>
  );
};

export default Question1;
