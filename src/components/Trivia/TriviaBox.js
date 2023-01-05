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
  const gameStatus = useSelector((state) => state.trivia.gameStatus);
  const questions = useSelector((state) => state.trivia.questions);
  const open = useSelector((state) => state.trivia.openStartGamePopup);
  const playerIsAlone = useSelector((state) => state.trivia.playerIsAlone);
  const showQuestions = useSelector((state) => state.trivia.showQuestions);

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
      {gameStatus === "ready" && !playerIsAlone && !showQuestions ? (
        <div>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              backgroundColor: "#5A4AE3",
              color: "#EFEFEF",
              width: "200px",
            }}
          >
            Play Trivia!
          </Button>
        </div>
      ) : null}

      {playerIsAlone && "invite a friend to play trivia with!"}

      {open && <StartGamePopup />}

      {showQuestions && !loadingQuestions ? (
        <AllQuestions socket={socket} />
      ) : null}
    </>
  );
};

export default TriviaBox;
