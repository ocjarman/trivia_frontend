import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Question1 = () => {
  return (
    <>
      question here
      {/* <p>Category:{question1.category}</p>
      <p>Difficulty: {question1.difficulty}</p>
      <p>Question: {question1.question}</p>
      {question1.incorrect_answers.map((answer) => (
        <>
          <Button variant="contained">{answer}</Button>
          <br></br>
        </>
      ))}

      <Button variant="contained">{question1.correct_answer}</Button> */}
    </>
  );
};

export default Question1;
