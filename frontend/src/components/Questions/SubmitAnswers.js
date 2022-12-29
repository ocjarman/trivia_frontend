import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const SubmitAnswers = () => {
  const score = useSelector((state) => state.trivia.score);
  return (
      <Button variant="contained">submit your answers!</Button> */
  );
};

export default SubmitAnswers;
