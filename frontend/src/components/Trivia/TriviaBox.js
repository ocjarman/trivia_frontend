import React from "react";
import { setGameStatus } from "../../store/triviaSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import AllQuestions from "../Questions/AllQuestions";
import { setLoadingQuestions } from "../../store/triviaSlice";
import {
  setOpenStartGamePopup,
  setPlayerIsAlone,
} from "../../store/triviaSlice";
import StartGamePopup from "./StartGamePopup";
import { useEffect } from "react";

const TriviaBox = ({ socket }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const gameStatus = useSelector((state) => state.trivia.gameStatus);
  const questions = useSelector((state) => state.trivia.questions);
  const open = useSelector((state) => state.trivia.openStartGamePopup);
  const playerIsAlone = useSelector((state) => state.trivia.playerIsAlone);
  const loadingQuestions = useSelector(
    (state) => state.trivia.loadingQuestions
  );
  if (questions.length > 1) {
    dispatch(setLoadingQuestions(false));
  }

  const handleClickOpen = () => {
    dispatch(setOpenStartGamePopup(true));
    dispatch(setGameStatus("in progress"));
    socket.emit("startGame");
  };

  useEffect(() => {
    // whenever roomData emits on backend, frontend  users state will be updated
    socket.on("roomData", ({ users }) => {
      if (users.length > 1) {
        dispatch(setPlayerIsAlone(false));
      } else {
        dispatch(setPlayerIsAlone(true));
      }
    });
  });

  return (
    <>
      {gameStatus === "ready" && !playerIsAlone ? (
        <>
          <h3>Welcome to Trivia! </h3>
          <Button variant="outlined" onClick={handleClickOpen}>
            Play Trivia!
          </Button>
        </>
      ) : null}

      {playerIsAlone && "invite a friend to play trivia with!"}
      {open && <StartGamePopup />}
      {!loadingQuestions && !open && gameStatus === "in progress" ? (
        <AllQuestions socket={socket} />
      ) : null}
    </>
  );
};

export default TriviaBox;
